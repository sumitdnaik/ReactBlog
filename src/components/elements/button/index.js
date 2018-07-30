import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import "./style.scss";

function Button(props) {
        let element;
        if(props.type == 'link') {
            element = <a className="btn" href={props.href}>{props.children}</a>

        }
        else if(props.type == 'button') {
            element = <button type="button" className="btn" onClick={props.onClick}>{props.children}</button>

        }
        else if(props.type == 'submit') {
           element = <button type="submit" className="btn" onClick={props.onClick}>{props.children}</button>

        }
        return(
            element
        );
}
export default Button;
