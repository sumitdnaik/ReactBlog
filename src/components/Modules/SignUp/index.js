import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router , Route , Link } from 'react-router-dom';

import Input from '../../elements/input';
import Button from '../../elements/button';

import './style.scss';

class SignUp extends Component {
    constructor(props){
        super(props);
        this.signUp = this.signUp.bind(this);
    }

    signUp(){
      var postObj = {
        fullname: "Sumit Naik",
        email: "sumitnaik@test.com",
        password: "testing"
      };
      fetch("http://127.0.0.1:8000/signup", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postObj)
      }).then(function(response){
        response.json().then(function(data){
          console.log(data);
        });
      });
    }

    render(){

        return(
          <form noValidate>
            <div className="loginContainer">

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
                    <Button type="button" onClick={this.signUp}>Sign Up</Button>
                  </div>
                  <span>Already have an account? </span><Link to="/">Log In</Link><span>.</span>
                </div>
            </div>

          </form>
        );
    }
}

export default SignUp;
