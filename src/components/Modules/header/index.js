import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import constants from 'constants/global';
import Button from 'components/elements/button';
import Modal from 'components/elements/modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.scss';

class Header extends Component{
  constructor(props){
    super(props);

    this.state = {
      isUserSettingOpen : false,
      modalOpen: false
    }
    this.closeModal = this.closeModal.bind(this);
    this.logoutUser = this.logoutUser.bind(this);
  }

  toggleUserSettings(){
    this.setState({
      isUserSettingOpen : !this.state.isUserSettingOpen
    })
  }

  closeModal(){
    this.setState({
      modalOpen : false
    });
  }

  logoutUser(){
    this.setState({
      modalOpen: true
    });
    this.props.signOut();
  }

  // removeUserSettings(){
  //   this.setState({
  //     isUserSettingOpen : false
  //   })
  // }

  render(){
    const headerHeight = 68;
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
                  <Link to="/login">Login</Link>
                  <Link to="/signUp">Sign Up</Link>
                </div> :
                <div className="right-wrapper">
                  <Link to="/writeAStory">Write a story</Link>
                  {this.props.signOut &&
                  <a href="javascript:void(0)" onClick={this.toggleUserSettings.bind(this)}>
                    {this.props.currentUser.name}
                    <FontAwesomeIcon icon={this.state.isUserSettingOpen ? "caret-up" : "caret-down"}  />
                  </a>
                  }
                </div>
            }
            {this.state.isUserSettingOpen &&
              <div onClick={this.toggleUserSettings.bind(this)} className="user-settings">
                <ul >
                  <li><Link to="/settings">Settings</Link></li>
                  <li><Link to="/userProfile">User Profile</Link></li>
                  <li onClick={this.logoutUser}>
                    <a href="javascript:void(0)" >
                    Log Out
                    </a>
                  </li>
                </ul>
              </div>
            }
            <div className="clearfix"></div>
            <Modal
              isOpen={this.state.modalOpen}
              header="Logged Out!"
              body={
                <div>
                  <p className="logout-msg">You have been logged out of WorthReads.</p>
                  <p><Link to="/login" onClick={this.closeModal}>Login Again?</Link></p>
                </div>
              }
              handleClose={this.closeModal}
              footer={true}
             />
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
