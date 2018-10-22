import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'; 
import saveProfile from './actionCreators';


import Input from 'components/elements/input';
import Button from 'components/elements/button';
//import Dropdown from '../../../elements/dropDown';
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
            CountryFocus: false,
            StateFocus: false,
            userInfo: {
                name: '',
                country: 'India',
                state: '',
                mobile: '',
                email : this.props.currentUser.email

            }
        }
        this.onChange = this.onChange.bind(this);
        this.submit = this.submit.bind(this);
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
          this.props.saveProfile(postObj);
        }
        

    getOnFocus() {
        this.setState({
            CountryFocus: true
        })
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
                ...prevState,
                country: selectedCountry
            },
            countryList: Countries,
            stateList: States,
            CountryFocus: false

        }))
    }

    setSelectedState(country) {
        let selectedCountry = country.target.textContent;
        this.setState(prevState => ({
            userInfo: {
                ...prevState,
                country: selectedCountry
            },
            countryList: Countries,
            CountryFocus: false

        }))
    }


    render() {
            return ( 
            <form className = "user-profile" >
                    <ul>
                    <li>
                        <Input type = "text"
                        value = {this.props.currentUser.email}
                        disabled = {true}
                        name = 'email'
                        required = {true} /> 
                    </li > 
                   
                    <li>
                        <Input type = "text"
                        placeholder = 'Full Name'
                        onChange={this.onChange}
                        name = 'name'
                        required = {true} /> 
                    </li > 

                    <li >
                        <Input type = "text"
                        onChange={this.onChange}
                        value = {this.state.userInfo.country}
                        name = 'country'
                        required = {true}
                        /> 
                    {
                    this.state.CountryFocus &&
                    <div class = "countryList" >

                        {/* <Dropdown 
                            setSelectedName = {this.setSelectedCountry.bind(this)}
                            items = {this.state.countryList}
                        />  */}
                    </div>

                } 
                </li> 
                <li>
                    <Input type = "text"
                        placeholder = 'State'
                        onChange={this.onChange}
                        name = 'state'
                        required = {true}
                    /> 
                    { this.state.userInfo.country &&
                        <div className = "countryList" >

                            {/* <Dropdown
                            setSelectedName = {this.setSelectedState.bind(this)}
                            items = {this.state.countryList}
                            />  */}
                        </div >

                    } 
                </li> 
                <li>
                    <Input type = "tel"
                        placeholder = 'Mobile No'
                        onChange={this.onChange}
                        name = 'mobile'
                        required = {
                            true
                        }
                    /> 
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
        currentUser: state.user.userObj
    });
  }
  
  const mapDispatchToProps = (dispatch) => {
    return({
      saveProfile: (payload) => dispatch(saveProfile(payload))
    });
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);