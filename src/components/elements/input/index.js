import React , { Component } from 'react';
import Tooltip from '../tooltip';
import './style.scss';

class Input extends Component {

  constructor(props) {
    super(props);

    this.node = null;

    this.state = {
       inputValue:'',
       isValid : true,
       errorMessage:'',
       showError: false,
       focused: false
    }
    this.onChangeInput = this.onChangeInput.bind(this);
    this.checkValidity = this.checkValidity.bind(this);
    this.showError = this.showError.bind(this);
   }

    /* on blur or submit, check input validity */
  checkValidity(e){
    let stateObj = { ...this.state };
    if(e.target.value == undefined || e.target.value == "" || e.target.value.length == 0){
      stateObj.errorMessage = 'This is a required field.';
      stateObj.isValid = false;
    } else if(this.props.validate) {
      stateObj.isValid = this.props.validate.test(e.target.value);
      stateObj.errorMessage = this.props.validationMessage;
    } else {
      stateObj.isValid = true;
    }
    stateObj.showError = false;
    if(e.target.value.length == 0) {
      stateObj.focused = false;
    }
    else {
      stateObj.focused = true;
    }
    this.props.getValue ? this.props.getValue(e) : "";
    this.setState(stateObj);
  };

  onChangeInput(e){
    this.props.onChange(e);
    this.checkValidity(e);
  }

  showError(){
    this.setState({
        showError: !this.state.isValid,
        focused: true
    });
  }

    render(){
        let classList = ['input'], wrapperClassList = ['input-wrapper'];
        if(this.props.disabled) classList.push('disabled');
        if(this.state.focused) wrapperClassList.push('focused');
        if(!this.state.isValid) classList.push('input-error');

        let { validate, validationMessage, label, value, id, ...otherProps } = this.props;

        return(
            <div>
              <div className={wrapperClassList.join(" ")}>
              {label ? <label for={id}>{label}</label> : null}
                  <input
                      {...otherProps}
                      className={classList.join(' ')}
                      onBlur={(e) => this.checkValidity(e)}
                      ref={(value) => this.node = value}
                      onFocus={this.showError}
                      onChange={(e) => this.onChangeInput(e)}
                      value={value}
                      id={id}
                  />
              </div>
              <Tooltip
                isOpen={this.state.showError}
                content={this.state.errorMessage}
                opener={this.node}
                error={!this.state.isValid}
              />
            </div>
        )
    }
}

export default Input;
