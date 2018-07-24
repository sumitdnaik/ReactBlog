import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import "./style.scss";

class Tooltip extends Component {

  getPosition(opener){
    let rect = opener.getBoundingClientRect();
    return ({
      left: rect.left + "px",
      top: rect.top + rect.height + 11  + "px"
    });
  }

  render(){
    return(
        <div className={"arrow-box " + (this.props.isOpen ? "show" : "hide")} style={ this.props.isOpen ? this.getPosition(this.props.opener) : null } >
            <div className="arrow-up"></div>
            <div className="tooltip-content-wrapper">{this.props.content}</div>
        </div>
    );
  }
}

export default Tooltip;
