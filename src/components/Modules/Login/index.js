import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router , Route , Link } from 'react-router-dom';

import Input from '../../elements/input';
import Button from '../../elements/button';
import './style.scss';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            loginStatus: "none",
            email : '',
            password:'',
            emailValidationMessage:'Please enter valid email',
            emailValidator:/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
        }
    }

    submit(){
        let apiUrl = 'http://127.0.0.1:8000/api/login/';

        let postObj = {
          email: this.state.email,
          password: this.state.password
        };

        let that = this;

        fetch("http://127.0.0.1:8000/api/login", {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(postObj)
        }).then(function(response) {
            console.log('data received');
            console.log(that);
            response.json().then(function(data){
              console.log(data);
              that.setState({
                  loginStatus : data.loggedIn ? "loggedin" : "invalid"
              });
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
          <form noValidate>
            <div className="login-container">
                <div className="input-field">
                    <Input
                        type="text"
                        validate={this.state.emailValidator}
                        validationMessage={this.state.emailValidationMessage}
                        placeholder='Email'
                        getValue={this.getValue.bind(this)}
                        name='email'
                        required='true'
                    />
                    <Input
                        type="password"
                        placeholder='Password'
                        getValue={this.getValue.bind(this)}
                        name='password'
                        required='true'
                    />
                </div>
                {
                  (this.state.loginStatus == "loggedin") ?
                  <h3>
                      LOGGED IN
                  </h3>
                  : (this.state.loginStatus == "invalid") ?
                    <div className="loginError">
                        <span>Invalid Credentials</span>
                    </div>
                  :
                  ""

                }
                <div className="submit">
                  <div className="submit-btn">
                    <Button onClick={this.submit.bind(this)} type="button">Login</Button>
                  </div>
                  <span>No account? </span><Link to="/SignUp">Create one</Link><span>.</span>
                </div>
            </div>
          </form>
        )
    }
}

export default Login;
