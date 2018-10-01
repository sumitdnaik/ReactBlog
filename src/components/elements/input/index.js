import React , { Component } from 'react';
import Tooltip from '../tooltip';
import './style.scss';

class Input extends Component{
constructor(props) {
      super(props);

      this.node = null;

      this.state = {
         inputValue:'',
         isValid : true,
         errorMessage:'',
         showError: false
      }
   }
    setValue(e){
        this.setState({
            inputValue: e.target.value,
            showError: false
        });
    }

    /* on blur or submit, check input validity */
    checkValidity(e){
      let stateObj = {};
        if(e.target.value == undefined || e.target.value == "" || e.target.value.length == 0){
            stateObj.errorMessage = 'This is required field';
            stateObj.isValid = false;
        } else if(this.props.validate) {
            stateObj.isValid = this.props.validate.test(e.target.value);
            stateObj.errorMessage = this.props.validationMessage;
        } else {
          stateObj.isValid = true;
        }
        stateObj.showError = false;
        this.props.getValue ? this.props.getValue(e) : "";
        this.setState(stateObj);
    };

    showError(){
        this.setState({
            showError: !this.state.isValid
        });
    }

    render(){
        const classList : Array<string> = [];

        //Default class
        classList.push('input');

        /* if invalid, add appropriate status */
        if(!this.state.isValid) classList.push('input-error');

        let { validate, validationMessage, getValue, ...otherProps } = this.props;

        return(
            <div>
              <div className="input-wrapper">
                  <input
                      {...otherProps}
                      className={classList.join(' ')}
                      onBlur={this.checkValidity.bind(this)}
                      ref={(value) => this.node = value}
                      onFocus={this.showError.bind(this)}
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
