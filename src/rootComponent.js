import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';
import './styles/global.scss';
import PreLogin from './components/modules/preLogin';
import Header from './components/modules/header';
import PostLogin from './components/modules/postLogin';
class RootComponent extends Component {

  constructor(props){
    super(props);
    
  }
    render() {
      const Session = this.props.userObj;
      const loggedIn = Session ? true : false;
        return (
          <div>
              {loggedIn ? <PostLogin /> : <PreLogin />}
          </div>
        );
    }
}

function select(state) {
   return {
      userObj: state.Session.userObj
   }
}
export default connect(select)(RootComponent);