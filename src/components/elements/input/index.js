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
            inputValue:e.target.value,
            showError:false
        });
    }

    /** on blur or submit, check input validity */
    checkValidity(e){
        if(e.target.value == undefined || e.target.value == ""){
            this.setState(
                {
                    errorMessage:'This is required field',
                    isValid : false
                }
            )
        }else if(this.props.validate){
            let isInputValid = this.props.validate.test(e.target.value);
            this.setState(
                {
                    isValid : isInputValid,
                    errorMessage:this.props.validationMessage
                }
            );
        }

        this.setState({showError:false})

    };

    showError(){
        this.setState({
            showError: !this.state.isValid
        })
        
    }

    render(){
        const classList : Array<string> = [];

        /** if no label, add correct styles */
        if (this.props.placeholder) classList.push('input_no_padding');

        /* add appropriate status for input value */
        if (this.state.isEmpty && !this.props.value) classList.push('input_empty');

        /* if invalid, add appropriate status */
         !this.state.isValid ? classList.push('input_error') : classList.push('input');
        return(
            <div>
              <div className="input_wrapper">
                  <input className={classList.join(' ')} required={this.props.required}
                      type= {this.props.type}
                      onBlur={this.checkValidity.bind(this)}
                      disabled={this.props.disabled}
                      placeholder = {this.props.placeholder}
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
