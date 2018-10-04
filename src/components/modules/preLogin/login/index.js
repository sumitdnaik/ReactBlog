import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router , Route , Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Session from 'services/session';

import Form from 'components/elements/formWrapper';
import Input from 'components/elements/input';
import Button from 'components/elements/button';
import Loader from 'components/elements/loader';
import './style.scss';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email : '',
            password:'',
            emailValidationMessage:'Please enter valid email',
            emailValidator:/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
        }
    }

    submit(){
        let postObj = {
          email: this.state.email,
          password: this.state.password
        };
        Session.login(JSON.stringify(postObj));
    }

    getValue(e){
      this.setState({
        [e.target.name]: e.target.value
      });
    }

    render(){
        return(
          <Form>
            <div className="login-container">
                <div className="input-field">
                    <Input
                        type="text"
                        validate={this.state.emailValidator}
                        validationMessage={this.state.emailValidationMessage}
                        placeholder='Email'
                        getValue={this.getValue.bind(this)}
                        name='email'
                        required={true}
                    />
                    <Input
                        type="password"
                        placeholder='Password'
                        getValue={this.getValue.bind(this)}
                        name='password'
                        required = {true}
                    />
                </div>
                {
                  this.props.errorMessage &&
                  <div className="loginError">
                        <span>{this.props.errorMessage}</span>
                    </div>
                }
                { this.props.isFetching && <Loader/> }
                <div className="submit">
                  <div className="submit-btn">
                    <Button onClick={this.submit.bind(this)} type="submit">Login</Button>
                  </div>
                  <span>No account? </span><Link to="/SignUp">Create one</Link><span>.</span>
                </div>
            </div>
          </Form>
        )
    }
}

function mapStateToComponent(state) {
   return {
      isFetching: state.user.isFetching,
      errorMessage : state.user.errorMessage
   }
}

export default connect(mapStateToComponent)(Login);
