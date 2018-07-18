import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import "./style.scss";

class Tooltip extends Component {
  render(){
    return(
      <div>
      <a href="javascript:void">Open</a>
      <div className="tooltip-wrapper">

      </div>
    </div>
    );
  }
}

export default Tooltip;
