import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Tooltip from './components/elements/tooltip';
import Button from './components/elements/button';
import './styles/reset.css';

class App extends Component {

  constructor(props){
    super(props);
    this.clickOpen = this.clickOpen.bind(this);
    this.tooltipOpener = null;
    this.state = {
      isTooltipOpen: false
    }
  }

  clickOpen(){
    this.setState( (prevState) => ({
      isTooltipOpen: !prevState.isTooltipOpen
    }));
  }

    render() {

      const tooltipContent = (
        <div>
          <h2>Hello There</h2>
          <p>I am tooltip content.</p>
        </div>
      );
        return (
            <div>
                <h2>Hello World!</h2>
                <div>
                    <a href="javascript:void(0)" onClick={this.clickOpen} ref={(value) => this.tooltipOpener = value}>Open</a>
                    <Tooltip isOpen={this.state.isTooltipOpen} content={tooltipContent} opener={this.tooltipOpener}/>
                </div>
                <Button type="link" href="http://google.com"/>
            </div>
        )
    }
}

ReactDOM.render( <App />, document.getElementById('myapp') );
