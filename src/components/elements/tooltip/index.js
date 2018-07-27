import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import "./style.scss";

class Tooltip extends Component {

  constructor(props){
    super(props);
    this.onBodyClick = this.onBodyClick.bind(this);
    this.state = {
      opened: this.props.isOpen
    }
  }

  getPosition(opener){
    let rect = opener.getBoundingClientRect();
    return ({
      left: rect.left + "px",
      top: rect.top + rect.height + 11  + "px"
    });
  }

  componentDidMount() {
    document.body.addEventListener('click', this.onBodyClick);
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.onBodyClick);
  }

  componentWillReceiveProps(props){
    this.setState({
      opened: props.isOpen
    });
  }

  onBodyClick(e) {
      if(e.target == this.props.opener) {
        return;
      }
      else {
        this.setState({
          opened: false
        });
      }
  }

  render(){

    const ClassList : Array<string> = ['arrow-box'];
    this.state.opened ? ClassList.push('show') : ClassList.push('hide');
    if(this.props.error)  ClassList.push('error');
    return(
        <div className={ClassList.join(' ')} style={ this.props.isOpen ? this.getPosition(this.props.opener) : null } >
            <div className="arrow-up"></div>
            <div className="tooltip-content-wrapper">{this.props.content}</div>
        </div>
    );
  }
}

export default Tooltip;
