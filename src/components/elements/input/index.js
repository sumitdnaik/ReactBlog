import React , { Component } from 'react';

import './style.scss';

class Input extends Component{
constructor(props) {
      super(props);
		
      this.state = {
         inputValue:'',
         isValid : true,
         errorMessage:''
      }
   }
    setValue(e){
        this.setState(inputValue:e.target.value);
    }

    /** on blur or submit, check input validity */
    checkValidity(e){
        if(e.target.value == undefined || e.target.value == ""){
            this.setState(
                {
                    errorMessage:'This is required field',
                    isValid : false,
                }
            )
        }else{
            let isInputValid = this.props.validate.test(e.target.value);
            this.setState(
                {
                    isValid : isInputValid,
                    errorMessage:this.props.validationMessage
                }
            );
        }
          
    };

    render(){
        const classList : Array<string> = [];

        /** if no label, add correct styles */
        if (this.props.placeholder) classList.push('input_no_padding');

        /* add appropriate status for input value */
        if (this.state.isEmpty && !this.props.value) classList.push('input_empty');

        /* if invalid, add appropriate status */
         !this.state.isValid ? classList.push('input_error') : classList.push('input');

        return(
            <div className="input_wrapper">
                <input className={classList.join(' ')} required={this.props.required} 
                    type= {this.props.type}
                    onBlur={this.checkValidity.bind(this)}
                    disabled={this.props.disabled}
                    placeholder = {this.props.placeholder}
                />
                 {!this.state.isValid &&
                    <div className="errorMessage">
                        {/* use tooltip component here */}
                        <div message={this.props.errorMessage} variant="danger">
                           {this.state.errorMessage}
                        </div>
                    </div>
                 }
            </div>
        )
    }
}

export default Input;