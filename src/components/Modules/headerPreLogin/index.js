import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router , Route , Link } from 'react-router-dom';

import constants from '../../../constants/global';
import Button from '../../elements/button';
import './style.scss';

class HeaderPreLogin extends Component{
    constructor(props){
        super(props);
    }

    render(){
      return(
        <header role='banner'>
          <div className="header-wrapper">
            <div className="width-container">
              <p className="logo"><a href="javascript: void(0)">{constants.logo}</a></p>
              <div>
                <Button type="link" href="javascript: void(0)">Sign Up</Button>
              </div>
            </div>
            <ul>
                <li><Link to="/">Login</Link></li>
                <li><Link to="/Register">Register</Link></li>
            </ul>
          </div>
        </header>
      );
    }
}

export default HeaderPreLogin;
