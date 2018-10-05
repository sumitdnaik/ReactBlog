import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import constants from 'constants/global';
import Button from 'components/elements/button';
import './style.scss';

function Header(props) {
    return(
      <header role='banner'>
        <div className="header-wrapper">
          <div className="width-container">
            <div className="logo">
              <Link to="/">{constants.logo}</Link>
            </div>
            {
              (!props.isAuthenticated) ?
                <div className="right-wrapper">
                  <Link to="/">Login</Link>
                  <Link to="/signUp">Sign Up</Link>
                </div> :
                <div className="right-wrapper">
                  <Link to="/createArticle">Write a story</Link>
                  {props.signOut &&
                  <a href="javascript:void(0)" onClick={props.signOut}>
                    Sign Out
                  </a>
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
      isAuthenticated: state.user.userObj
   }
}
export default connect(mapStateToComponent)(Header);
