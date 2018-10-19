import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter as Router , Route , Link, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { library } from '@fortawesome/fontawesome-svg-core';
import RootComponent from './rootComponent';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'
library.add(faCaretDown, faCaretUp);

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
        isAuthenticated:false
    }

  }
    render() {
        return (
          <div>
              <RootComponent />
          </div>
        );
    }
}



ReactDOM.render(
<Provider store = {store}>
<App />
</Provider>
, document.getElementById('myapp') );
