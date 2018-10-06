import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router , Route , Link , Switch} from 'react-router-dom';

import '../../../styles/global.scss';
import Session from '../../../services/session';

import Home from './home';
import Article from './Article';
import CreateArticle from './createArticle';
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
                  <Route exact path="/article" component={Article}></Route>
                  <Route exact path="/createArticle" component={CreateArticle}></Route>
                </Switch>
              </div>
            </div>
          </Router>
        )

    }
}

export default PostLogin;
