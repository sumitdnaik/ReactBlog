import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router , Route , Link , Switch} from 'react-router-dom';
import history from 'services/utilities/historyUtil';
import 'styles/global.scss';
import Session from 'services/session';

import Header from '../header';
import Home from './home';
import WriteAStory from './writeAStory';
import ReadAStory from './readAStory';

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
            <Router history={history}>
            <div>
              <Header signOut={this.signOut.bind(this)}/>
              <h1 className="sr-only">ReactBlog: Awesome reads, great articles</h1>
              <div className="width-container" style={{minHeight: (window.innerHeight - headerHeight)+"px"}}>
                <Switch>
                  <Route exact path="/" component={Home}></Route>
                  <Route exact path="/writeAStory" component={WriteAStory}></Route>
                  <Route exact path="/story/:storyId" component={ReadAStory}/>
                </Switch>
              </div>
            </div>
          </Router>
        )

    }
}

export default PostLogin;
