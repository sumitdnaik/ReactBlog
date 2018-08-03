import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router , Route , Link } from 'react-router-dom';

import Input from '../../elements/input';
import Button from '../../elements/button';

import './style.scss';

class SignUp extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="loginContainer">

              <h2>Sign up to access millions of awesome articles and start exploring instantly.</h2>

                <div>
                    <Input
                        type="text"
                        placeholder='Your Full Name'
                        validate={/^[A-Za-z]+$/}
                        validationMessage='Only alphabets are allowed'
                    />
                    <Input
                        type="text"
                        placeholder='Your Email'
                        validate={/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/}
                        validationMessage='Please enter a valid email'
                    />
                    <Input
                        type="password"
                        placeholder='Password'
                    />
                    <Input
                        type="password"
                        placeholder='Confirm Password'
                    />

                </div>

                <div className="submit">
                  <div className="submitBtn">
                    <Button type="submit" children="Login" />
                  </div>
                  <Link to="/signUp">Create Account</Link>
                </div>
            </div>
        );
    }
}

export default SignUp;
