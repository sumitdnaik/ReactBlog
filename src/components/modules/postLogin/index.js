import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router , Route , Link , Switch} from 'react-router-dom';

import '../../../styles/global.scss';
import Session from '../../../Services/Session';

import Home from './Home';
import Article from './Article';
import Header from '../header';

class PostLogin extends Component{
      constructor(props){
    super(props);
    this.state = {
    }
  }

  signOut(){
    Session.logout();
  }
    render(){
        const headerHeight = 68;
        return(
            <Router>
            <div>
              <Header signOut={this.signOut.bind(this)}/>
              <h1 className="sr-only">ReactBlog: Awesome reads, great articles</h1>
              <div className="width-container" style={{minHeight: (window.innerHeight - headerHeight)+"px"}}>
                <Switch>
                  <Route exact path="/" component={Home} ></Route>
                  <Route exact path="/Article" component={Article}></Route>
                </Switch>
              </div>
            </div>
          </Router>
        )

    }
}

export default PostLogin;
