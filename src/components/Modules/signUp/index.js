import React , { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
        this.onChange = this.onChange.bind(this);
        this.state = {
          inputs: {
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
          },
          error: null
        };
    }

    static getDerivedStateFromProps(props, state) {
      if(props.signUpData.data && props.signUpData.data.username) {
        // localStorage.setItem('session', JSON.stringify({
        //   name: state.inputs.name,
        //   email: state.inputs.email,
        //   isLoggedIn: true
        // }));
        props.history.push("/login");
      }
      return null;
    }

    signUp(){
      let allInps = { ...this.state.inputs };
      let isValid = true;
      for (const key of Object.keys(allInps)) {
          if(allInps[key].length == 0){
            isValid = false;
            break;
          }
      }
      if(this.state.inputs.password != this.state.inputs.confirmPassword){
        this.setState({
          error: "Password and Confirm Password do not match."
        });
      }
      else if(isValid){
        let postObj = {
          name: this.state.inputs.name,
          email: this.state.inputs.email,
          password: this.state.inputs.confirmPassword
        };
        this.props.signUp(postObj);
      }
      else {
        this.setState({
          error: "Field/s cannot be empty."
        });
      }
    }

    onChange(e){
      let inputs = { ...this.state.inputs };
      inputs[e.target.name] = e.target.value;
      this.setState({
        inputs: inputs
      });
    }

    render(){
      let headerHeight = 68;
      let errorMsg = this.props.signUpData.errorMessage || this.state.error;
        return(
          <div className="pre-login" style={{minHeight: (window.innerHeight - headerHeight)+"px"}}>
            <Form>
              <div className="loginContainer">
                  {this.props.signUpData.errorMessage && <p className="error-message">{this.props.signUpData.errorMessage}</p>}
                  <div>
                      <Input
                          type="text"
                          placeholder='Your Full Name'
                          validate={/^[A-Za-z\s]+$/}
                          validationMessage='Only alphabets are allowed.'
                          name='name'
                          onChange={this.onChange}
                          required={true}
                      />
                      <Input
                          type="text"
                          placeholder='Your Email'
                          validate={/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/}
                          validationMessage='Please enter a valid email.'
                          name='email'
                          onChange={this.onChange}
                          required={true}
                      />
                      <Input
                          type="password"
                          name='password'
                          placeholder='Password'
                          required={true}
                          onChange={this.onChange}
                      />
                      <Input
                          type="password"
                          name='confirmPassword'
                          placeholder='Confirm Password'
                          onChange={this.onChange}
                          required={true}
                      />
                  </div>
                  <div className="submit">
                    <div className="submitBtn">
                      <Button type="submit" onClick={this.signUp}>Sign Up</Button>
                    </div>
                    <span>Already have an account? </span><Link to="/login">Log In</Link><span>.</span>
                  </div>
                  {this.props.signUpData.inProgress && <Loader/>}
              </div>
            </Form>
          </div>
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
