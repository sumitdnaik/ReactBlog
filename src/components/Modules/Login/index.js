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
            loginStatus:true,
            email : '',
            Password:'',
            emailValidationMessage:'Please enter valid email',
            emailValidator:/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
        }
    }

    submit(){
        let apiUrl = 'http://127.0.0.1:8000/login/'+this.state.email
        fetch(apiUrl).then((result) => {
            console.log('data received');
            console.log(result);
            this.setState({
                loginStatus : result.status === 200 ? true : false
            })
        })
    }

    getValue(e){
        if(e.target.placeholder == 'Password'){
            this.setState({
                Password : e.target.value
            });
        }else{
            this.setState({
                email : e.target.value
            });
        }
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
                        required='true'
                    />
                    <Input
                        type="password"
                        placeholder='Password'
                        getValue={this.getValue.bind(this)}
                        required='true'
                    />
                </div>
                { !this.state.loginStatus &&
                    <div className="loginError">
                        <span>Invalid Credentials</span>
                    </div>
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
