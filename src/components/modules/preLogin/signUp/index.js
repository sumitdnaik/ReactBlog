import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router , Route , Link } from 'react-router-dom';
import API from 'constants/APIs';

import Form from 'components/elements/formWrapper';
import Input from 'components/elements/input';
import Button from 'components/elements/button';

import './style.scss';

class SignUp extends Component {
    constructor(props){
        super(props);
        this.signUp = this.signUp.bind(this);
        this.getValue = this.getValue.bind(this);
        this.state = {
          name: "",
          email: "",
          password: "",
          serverMsg: ""
        };
    }

    signUp(){
      let postObj = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      };
      let that = this;
      fetch(API.preLogin.signUp, {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postObj)
      }).then(function(response){
        response.json().then(function(data){
          console.log(data);
          that.setState({
            serverMsg: data.message
          })
        });
      });
    }

    getValue(e){
      this.setState({
        [e.target.name]: e.target.value
      });
    }

    render(){

        return(
          <Form>
            <div className="loginContainer">
                <h3>{this.state.serverMsg}</h3>
                <div>
                    <Input
                        type="text"
                        placeholder='Your Full Name'
                        validate={/^[A-Za-z]+$/}
                        validationMessage='Only alphabets are allowed'
                        name='name'
                        getValue={this.getValue}
                        required={true}
                    />
                    <Input
                        type="text"
                        placeholder='Your Email'
                        validate={/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/}
                        validationMessage='Please enter a valid email'
                        name='email'
                        getValue={this.getValue}
                        required={true}
                    />
                    <Input
                        type="password"
                        placeholder='Password'
                        required='true'
                    />
                    <Input
                        type="password"
                        placeholder='Confirm Password'
                        name='password'
                        getValue={this.getValue}
                        required={true}
                    />

                </div>

                <div className="submit">
                  <div className="submitBtn">
                    <Button type="submit" onClick={this.signUp}>Sign Up</Button>
                  </div>
                  <span>Already have an account? </span><Link to="/">Log In</Link><span>.</span>
                </div>
            </div>

          </Form>
        );
    }
}

export default SignUp;
