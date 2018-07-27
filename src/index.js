import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Tooltip from './components/elements/tooltip';
import Button from './components/elements/button';
import Input from './components/elements/input';
import HeaderPreLogin from './components/modules/headerPreLogin';
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

        <div>
            <HeaderPreLogin/>

            <div className="width-container">
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

                <Button type="link" href="http://google.com">Google</Button>
                <Input
                    type="text"
                    validate={this.state.emailValidator}
                    validationMessage = {this.state.emailValidationMessage}
                    placeholder = {this.state.placeholder}
                />
            </div>

          </div>
        )
    }
}

ReactDOM.render( <App />, document.getElementById('myapp') );
