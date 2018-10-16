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
            emailValidationMessage:'Please enter a valid email',
            emailValidator:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            error: null
        };
        this.onChange = this.onChange.bind(this);
        this.submit = this.submit.bind(this)
    }

    submit(){
      if(this.state.email.length > 0 && this.state.password.length > 0){
        let postObj = {
          email: this.state.email,
          password: this.state.password
        };
        this.setState({
          error: null
        });
        Session.login(postObj);
      }
      else {
        this.setState({
          error: "Email and/or password can't be empty"
        });
      }
    }

    onChange(e){
      this.setState({
        [e.target.name]: e.target.value
      });
    }

    render(){
      let errorMsg = this.props.errorMessage || this.state.error;
        return(
          <Form>
            <div className="login-container">
                <div className="input-field">
                    <Input
                        type="text"
                        validate={this.state.emailValidator}
                        validationMessage={this.state.emailValidationMessage}
                        placeholder='Email'
                        onChange={this.onChange}
                        name='email'
                        required={true}
                    />
                    <Input
                        type="password"
                        placeholder='Password'
                        onChange={this.onChange}
                        name='password'
                        required = {true}
                    />
                </div>
                {
                  errorMsg &&
                  <div className="loginError">
                        <span>{errorMsg}</span>
                    </div>
                }
                { this.props.isFetching && <Loader/> }
                <div className="submit">
                  <div className="submit-btn">
                    <Button onClick={this.submit} type="submit">Login</Button>
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
