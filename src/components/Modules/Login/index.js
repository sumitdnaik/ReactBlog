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
            pwdPlaceholder:'Password',
            emailPlaceholder:'Email',
            emailValidationMessage:'Please enter valid email',
            emailValidator:/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
        }
    }

    Login() {
        console.log('clicked');
    this.props.history.push('/login');
   }

    render(){
        return(
            <div className="loginContainer">
                <div className="inputField">
                    <Input
                        type="text"
                        validate={this.state.emailValidator}
                        validationMessage={this.state.emailValidationMessage}
                        placeholder={this.state.emailPlaceholder}
                    />
                    <Input
                        type="text"
                        placeholder={this.state.pwdPlaceholder}
                    />

                </div>
                <div className="submit">
                  <div className="submitBtn">
                    <Button onClick={this.Login.bind(this)} type="submit" children="Login" />
                  </div>
                  <Link to="/signUp">Create Account</Link>
                </div>
            </div>
        )
    }
}

export default Login;
