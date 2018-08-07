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

        this.setState({showError:false});

        this.props.getValue ? this.props.getValue(e): "";
    };

    showError(){
        this.setState({
            showError: !this.state.isValid
        })

    }

    render(){
        const classList : Array<string> = [];

        //Default class
        classList.push('input');

        /** if no label, add correct styles */
        //if (this.props.placeholder) classList.push('input-no-padding');

        /* add appropriate status for input value */
        //if (this.state.isEmpty && !this.props.value) classList.push('input-empty');

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
