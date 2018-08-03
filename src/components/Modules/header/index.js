import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router , Route , Link } from 'react-router-dom';

import constants from '../../../constants/global';
import Button from '../../elements/button';
import './style.scss';

function Header() {
    return(
      <header role='banner'>
        <div className="header-wrapper">
          <div className="width-container">
            <div className="logo">
              <a href="javascript: void(0)">{constants.logo}</a>
            </div>
            <div className="right-wrapper">
              <Link to="/" className="btn">Login</Link>
              <Link to="/signUp" className="btn">Sign Up</Link>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </header>
    );
}

export default Header;
