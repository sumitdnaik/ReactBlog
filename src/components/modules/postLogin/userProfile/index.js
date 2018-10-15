import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Input from '../../../elements/input';
import Button from '../../../elements/button';
//import Dropdown from '../../../elements/dropDown';
import {
    Countries,
    States
} from './CountryStateData';
import './style.scss'
class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countryList: Countries,
            CountryFocus: false,
            StateFocus: false,
            userInfo: {
                firstName: '',
                lastName: '',
                country: 'India',
                state: '',
                mobile: ''
            }
        }
        this.onChange = this.onChange.bind(this);
        this.submit = this.submit.bind(this);
    }
    onChange(e){
        this.setState({
          [e.target.name]: e.target.value
        });
    }

    submit(){
        //   let postObj = {
        //     firstName: this.state.firstName,
        //     lastName: this.state.lastName,
        //     country: this.state.country,
        //     state: this.state.state,
        //     mobile: this.state.mobile
        //   };
        //   this.setState({
        //     error: null
        //   });
        //   Session.login(postObj);
        // }
        // else {
        //   this.setState({
        //     error: "Email and/or password can't be empty"
        //   });
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
                    <ul >
                    <li>
                        <Input type = "text"
                        placeholder = 'First Name'
                        //getValue={this.getValue.bind(this)}
                        name = 'firstName'
                        required = {true} />
                    </li >
                    <li>
                        <Input type = "text"
                        placeholder = 'Last Name'
                        //getValue={this.getValue.bind(this)}
                        name = 'lastName'
                        required = {
                            true
                        }/>
                    </li >
                    <li >
                        <Input type = "text"
                        // placeholder='Country'
                        //getValue={this.getValue.bind(this)}
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
                        //getValue={this.getValue.bind(this)}
                        name = 'state'
                        required = {true}
                    />
                    { this.state.userInfo.country &&
                        <div className = "countryList" >

                            {/* <Dropdown
                            setSelectedName = {this.setSelectedState.bind(this)}
                            items = {this.state.countryList}
                            />  */}
                        </div>

                    }
                </li>
                <li>
                    <Input type = "tel"
                        placeholder = 'Mobile No'
                        //getValue={this.getValue.bind(this)}
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
      saveProfileData: state.data
    });
  }

  const mapDispatchToProps = (dispatch) => {
    return({
      signUp: (payload) => dispatch(signUp(payload))
    });
  }

  export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
