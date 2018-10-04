import React , { Component } from 'react';
import './style.scss';

function Loader(props){
  return(
    <div className="loader-wrapper">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loader;
