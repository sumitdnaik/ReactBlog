import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router , Route , Link, Switch } from 'react-router-dom';

import '../../../styles/global.scss';

import Login from './login';
import Header from '../header';
import SignUp from './signUp';

class ProLogin extends Component {

  constructor(props){
    super(props);
    this.state = {
    }
  }


    render() {
      const headerHeight = 68;
        return (
          <Router>
            <div>
              <Header/>
              <h1 className="sr-only">ReactBlog: Awesome reads, great articles</h1>
              <div className="pre-login" style={{minHeight: (window.innerHeight - headerHeight)+"px"}}>
                <Switch>
                  <Route exact path="/" component={Login} ></Route>
                  <Route exact path="/SignUp" component={SignUp}></Route>
                </Switch>
              </div>
            </div>
          </Router>
        );
    }
}

export default ProLogin;