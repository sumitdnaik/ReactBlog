import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router , Route , Link, Switch } from 'react-router-dom';

import './styles/global.scss';

import Tooltip from './components/elements/tooltip';
import Button from './components/elements/button';
import Input from './components/elements/input';
import Login from './components/modules/login';
import Header from './components/modules/header';
import SignUp from './components/modules/signUp';
class App extends Component {

  constructor(props){
    super(props);
    this.clickOpen = this.clickOpen.bind(this);
    this.focusInput = this.focusInput.bind(this);
    this.blurInput = this.blurInput.bind(this);
    this.tooltipOpener = null;
    this.state = {
      isTooltipOpen: false,
      tooltipContent: <div></div>,
      tooltipOpener: {},
      errorTooltip: true,
      emailValidator : /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/,
      emailValidationMessage : 'Please enter a valid email',
      placeholder:'Email'
    }
  }

  clickOpen(){
    const tooltipContent = (
      <div>
        <h2>Hello There</h2>
        <p>I am tooltip LINK.</p>
      </div>
    );
    this.setState({
      isTooltipOpen: true,
      tooltipContent,
      tooltipOpener: this.link
    });
  }

  focusInput(){
    const tooltipContent = (
      <div>
        <h2>Hello There</h2>
        <p>I am tooltip INPUT.</p>
      </div>
    );
    this.setState({
      isTooltipOpen: true,
      tooltipContent,
      tooltipOpener: this.input
    });
  }

  blurInput(){
    this.setState({
      isTooltipOpen: false
    });
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

ReactDOM.render( <App />, document.getElementById('myapp') );
