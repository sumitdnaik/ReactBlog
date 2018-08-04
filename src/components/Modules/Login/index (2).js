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
            emailValidationMessage:'Please enter valid email',
            emailValidator:/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
        }
    }

    render(){
        return(
          <form noValidate>
            <div className="loginContainer">

                <div className="inputField">
                    <Input
                        type="text"
                        validate={this.state.emailValidator}
                        validationMessage={this.state.emailValidationMessage}
                        placeholder='Email'
                    />
                    <Input
                        type="text"
                        placeholder='Password'
                    />

                </div>
                <div className="submit">
                  <div className="submitBtn">
                    <Button type="button">Login</Button>
                  </div>
                  <span>No account? </span><Link to="/SignUp">Create one</Link><span>.</span>
                </div>
            </div>
          </form>
        )
    }
}

export default Login;
