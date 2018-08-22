import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router , Route , Link } from 'react-router-dom';
import { connect } from 'react-redux'

import constants from '../../../constants/global';
import Button from '../../elements/button';
import './style.scss';

function Header(props) {
    return(
      <header role='banner'>
        <div className="header-wrapper">
          <div className="width-container">
            <div className="logo">
              <a href="javascript: void(0)">{constants.logo}</a>
            </div>
            {
              (!props.isAuthenticated) ? 
                <div className="right-wrapper">
                  <Link to="/" className="btn">Login</Link>
                  <Link to="/signUp" className="btn">Sign Up</Link>
                </div> :
                <div className="right-wrapper">
                  <Link to="/" className="btn">Home</Link>
                  <Link to="/Article" className="btn">Read Article</Link>
                  {props.signOut && 
                  <span onClick={props.signOut}>
                    <i className="btn fa fa-user">Sign Out</i>
                  </span>   
                  }
                </div>

            }
            
            <div className="clearfix"></div>
          </div>
        </div>
      </header>
    );
}

function mapStateToComponent(state){
  return {
      isAuthenticated: state.Session.userObj
   }
}
export default connect(mapStateToComponent)(Header);
