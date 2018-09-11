import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import "./style.scss";

function Button(props) {
        let element;
        let {type, ...otherProps} = props;  

        if(type == 'link') {
            element = <a className="btn" {...otherProps}>{props.children}</a>;

        }
        else if(type == 'button') {
            element = <button type="button" className="btn" {...otherProps}>{props.children}</button>;
        }
        else if(type == 'submit') {
           element = <button type="submit" className="btn" {...otherProps}>{props.children}</button>;
        }
        return(
            element
        );
}
export default Button;
