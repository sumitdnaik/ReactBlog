import React , { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router , Route , Link } from 'react-router-dom';
import APIUrls from 'constants/APIUrls';

import Form from 'components/elements/formWrapper';
import Input from 'components/elements/input';
import Button from 'components/elements/button';
import Loader from 'components/elements/loader';
import signUp from './actionCreators';
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
      this.props.signUp(postObj);
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
                <div>
                    <Input
                        type="text"
                        placeholder='Your Full Name'
                        validate={/^[A-Za-z\s]+$/}
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
                {this.props.signUpData.inProgress && <Loader/>}
            </div>
          </Form>
        );
    }
}

const mapStateToProps = (state) => {
  return({
    signUpData: state.signUp
  });
}

const mapDispatchToProps = (dispatch) => {
  return({
    signUp: (payload) => dispatch(signUp(payload))
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
