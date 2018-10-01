import React , { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e){
    e.preventDefault();
  }

  render(){
    return(
      <form noValidate onSubmit={(e) => this.onSubmit(e)}>
        {this.props.children}
      </form>
    );
  }
}

export default Form;
