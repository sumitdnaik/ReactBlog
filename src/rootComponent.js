import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router , Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux';
import './styles/global.scss';

import Session from 'services/session';
import history from 'services/utilities/historyUtil';
import Header from 'components/modules/header';
import PrivateRoute from 'components/elements/privateRoute';
import Login from 'components/modules/login';
import SignUp from 'components/modules/signUp';

import Home from 'components/modules/home';
import WriteAStory from 'components/modules/writeAStory';
import ReadAStory from 'components/modules/readAStory';
import UserProfile from 'components/modules/userProfile';

class RootComponent extends Component {
  constructor(props){
    super(props);
    this.signOut = this.signOut.bind(this);
  }

  signOut(){
    Session.logout();
  }

  render() {
    const headerHeight = 68;
      return (
        <div>
            <Router history={history}>
              <div>
                <Header signOut={this.signOut}/>
                <h1 className="sr-only">WorthReads: A place to read and write awesome stories</h1>
                  <Switch>
                      <Route exact path="/" component={Home}/>
                      <Route exact path="/login" component={Login}/>
                      <Route exact path="/signUp" component={SignUp}/>
                      <Route exact path="/story/:storyId" component={ReadAStory}/>
                      <PrivateRoute exact path="/writeAStory" component={WriteAStory}/>
                      <PrivateRoute exact path="/userProfile" component={UserProfile}/>
                      <Route component={Home}/>
                  </Switch>
              </div>
            </Router>
        </div>
      );
  }
}

function select(state) {
   return {
      userObj: state.user.userObj
   }
}
export default connect(select)(RootComponent);
