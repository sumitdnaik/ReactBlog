import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Tooltip from './components/elements/tooltip';
import Button from './components/elements/button';

class App extends Component {
    render() {
        return (
            <div>
                <h2>Hello World!</h2>
                <Tooltip/>
                <Button type="link" href="http://google.com"/>
            </div>
        )
    }
}

ReactDOM.render( <App />, document.getElementById('myapp') );
