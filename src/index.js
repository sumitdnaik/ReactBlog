import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router , Route , Link } from 'react-router-dom';

import Tooltip from './components/elements/tooltip';
import Button from './components/elements/button';
import Input from './components/elements/input';
import Login from './components/modules/login';
import './styles/global.scss';

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
              //Header here - 100% width

            //Main Content Layout
            <div className="main-container">
                <h2>Hello World!</h2>
                <div>
                    <a href="javascript:void(0)" onClick={this.clickOpen} ref={(value) => this.link = value}>Open</a>

                    <Tooltip
                      isOpen={this.state.isTooltipOpen}
                      content={this.state.tooltipContent}
                      opener={this.state.tooltipOpener}
                      error={this.state.errorTooltip}
                    />
                </div>

                <Button type="link" href="http://google.com"/>
                
                <div>
                  <ul>
                    <li><Link to="/">Login</Link></li>
                    <li><Link to="/Register">Register</Link></li>
                  </ul>
                </div>
            </div>
            <div>
              <Route path="/" component={Login} ></Route>
              {/* <Route path="/Register" component={Register}></Route> */}
            </div>

            {/* Footer here - 100% width */}
            </div>
            </Router>
        )
    }
}

ReactDOM.render( <App />, document.getElementById('myapp') );
