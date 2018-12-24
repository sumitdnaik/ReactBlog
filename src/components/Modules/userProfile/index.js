import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'; 
import {saveProfile , getProfile}   from './actionCreators';


import Input from 'components/elements/input';
import Button from 'components/elements/button';
import Dropdown from 'components/elements/dropdown';
import {
    Countries,
    States
} from './CountryStateData';
import './style.scss'
import { debug } from 'util';
class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countryList: Countries,
            stateList: States,
            userInfo: {
                name: this.props.currentUser.name,
                country: '',
                state: '',
                mobile: '',
                profession : '',
                email : this.props.currentUser.email
            },
            editDisabledName : true,
            editDisabled : {
                name : true,
                profession : true,
                country : true,
                state : true,
                mobile : true
            }
        }
        this.onChange = this.onChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    componentDidMount(){
        this.props.getProfile({'email':this.props.currentUser.email});
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            userInfo : nextProps.currentUser
        })
    }

    onChange(e){
        var userInfo = {...this.state.userInfo}
        userInfo[e.target.name] = e.target.value;
        this.setState({userInfo});
    }

    submit(){
          let postObj = this.state.userInfo;
          this.setState({
            error: null
          });
          delete postObj._id;
          delete postObj.countryList;
          this.props.saveProfile(postObj);
        }

    getOnBlur() {
        this.setState({
            //CountryFocus : false
        })
        console.log('state changed');
    }

    setSelectedCountry(country) {
        let selectedCountry = country.target.textContent;
        this.setState(prevState => ({
            userInfo: {
                ...prevState.userInfo,
                country: selectedCountry
            }

        }))
    }

    setSelectedState(country) {
        let selectedState = country.target.textContent;
        this.setState(prevState => ({
            userInfo: {
                ...prevState.userInfo,
                state: selectedState
            }

        }))
    }


    render() {
            return ( 
            <form className = "user-profile" >
                    <ul>
                    <li>
                        <span>User Email</span>
                        <div className="input-value">
                            <Input type = "text"
                                value = {this.state.userInfo.email}
                                disabled = {true}
                                name = 'email'
                                required = {true} 
                            /> 
                        </div>
                    </li > 
                   
                    <li>
                        <span>User Name</span>
                        <div className="input-value">
                            <Input type = "text"
                            placeholder = 'Full Name'
                            onChange={this.onChange}
                            name = 'name'
                            disabled = {this.state.editDisabledName}
                            value = {this.state.userInfo.name}
                            required = {true} /> 
                        </div>
                        { this.state.editDisabledName &&
                        <i onClick = { () => { this.setState({editDisabledName : false})}} className="fa fa-edit icon"></i>
                        }
                    </li > 

                     <li>
                        <span>Profession</span>
                        <div className="input-value">
                            <Input type = "text"
                            placeholder = 'profession'
                            onChange={this.onChange}
                            name = 'profession'
                            value = {this.state.userInfo.profession}
                            required = {true} /> 
                        </div>
                    </li > 

                    <li>
                        <span>About Yourself</span>
                        <div className="input-value">
                            <textarea rows="4" cols="58">
                            </textarea>
                        </div>
                    </li > 

                    <li >
                        <span>Country</span>
                        <div className="input-value dropdown">
                        <Dropdown
                        setSelectedValue = {this.setSelectedCountry.bind(this)}
                        dropdownValues = {this.state.countryList}
                        selectedValue = {this.state.userInfo.country}
                        />
                        </div>
                </li> 
                <li>
                        <span>Country</span>
                        <div className="input-value dropdown">
                        <Dropdown
                        setSelectedValue = {this.setSelectedState.bind(this)}
                        dropdownValues = {this.state.stateList}
                        selectedValue = {this.state.userInfo.state}
                        />
                        </div>
                </li> 
                <li>
                <span>Mobile</span>
                    <div className="input-value">
                    <Input type = "tel"
                        placeholder = 'Mobile No'
                        onChange={this.onChange}
                        name = 'mobile'
                        value = {this.state.userInfo.mobile}
                        required = {true}
                    /> 
                    </div>
                </li>
                
            </ul> 
            <div className="clearfix"></div>
            <div className="submit">
                <div className="submit-btn">
                    <Link to="/">Cancel</Link>
                    <Button onClick={this.submit} type="submit">Save</Button>
                </div>
            </div>
           
        </form >
        )
    }
}


const mapStateToProps = (state) => {
    return({
        currentUser: (state.userProfile.profile && state.userProfile.profile.data.length) ? state.userProfile.profile.data[0] : state.user.userObj
    });
  }
  
  const mapDispatchToProps = (dispatch) => {
    return({
      saveProfile: (payload) => dispatch(saveProfile(payload)),
      getProfile : (payload) => dispatch(getProfile(payload))
    });
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);