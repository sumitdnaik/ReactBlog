import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Tooltip from './components/elements/tooltip';

class App extends Component {
    render() {
        return (
            <div>
                <h2>Hello World!</h2>
                <Tooltip/>
            </div>
        )
    }
}

ReactDOM.render( <App />, document.getElementById('myapp') );
