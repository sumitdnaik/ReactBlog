import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router , Route , Link } from 'react-router-dom';

import './styles/global.scss';

import Tooltip from './components/elements/tooltip';
import Button from './components/elements/button';
import Input from './components/elements/input';
import Login from './components/modules/login';
import HeaderPreLogin from './components/modules/headerPreLogin';

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
        return (

            <Router>
              <div>
              <div>
             <HeaderPreLogin /> 

            <div className="preLogin">
              <Route path="/" component={Login} ></Route>
              {/* <Route path="/Register" component={Register}></Route> */}
            </div>

           
            {/* Footer here - 100% width */}
            </div>

          </div>
            </Router>
        )
    }
}

ReactDOM.render( <App />, document.getElementById('myapp') );
