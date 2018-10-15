import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import constants from 'constants/global';
import Button from 'components/elements/button';
import './style.scss';
import { debug } from 'util';

class Header extends Component{
  constructor(props){
    super(props);
    
    this.state = {
      isUserSettingOpen : false
    }
  }

  toggleUserSettings(){
    this.setState({
      isUserSettingOpen : !this.state.isUserSettingOpen
    })
  }

  removeUserSettings(){
    this.setState({
      isUserSettingOpen : false
    })
  }

  render(){
    const headerHeight = 60;
    return(
      <header role='banner'>
        <div className="header-wrapper">
          <div className="width-container">
            <div className="logo">
              <Link to="/">{constants.logo}</Link>
            </div>
            {
              (!this.props.currentUser) ?    
                <div className="right-wrapper">
                  <Link to="/">Login</Link>
                  <Link to="/signUp">Sign Up</Link>
                </div> :
                <div className="right-wrapper">
                  <Link to="/writeAStory">Write a story</Link>
                  {this.props.signOut &&
                  <a href="javascript:void(0)" onClick={this.toggleUserSettings.bind(this)}>
                    {this.props.currentUser.name}
                    <i className="down"></i>
                  </a>
                  }
                </div>
            }
            {this.state.isUserSettingOpen &&
              <div onClick={this.toggleUserSettings.bind(this)} className="userSettings">
                <ul >
                  <li><Link to="/changePassword">Change Password</Link></li>
                  <li><Link to="/userProfile">User Profile</Link></li>
                  <li onClick={this.props.signOut}>
                    <a href="javascript:void(0)" >
                    Log Out
                    </a>
                  </li>
                </ul>
              </div>
            }
            <div className="clearfix"></div>
          </div>
        </div>
      </header>
    );
  }
}

function mapStateToComponent(state){
  return {
      currentUser: state.user.userObj
   }
}
export default connect(mapStateToComponent)(Header);
