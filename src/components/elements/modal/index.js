import React, { Component } from 'react';
import Button from '../button';

import "./style.scss";

class Modal extends Component {
    constructor(props){
        super(props);
        this.state = {
            modal: false
        }
    //    this.toggle = this.toggle.bind(this);
    }

    // toggle() {
    //     this.setState({
    //         modal:!this.state.modal
    //     })
    // }
    render(){
        return(
            <div className="modal">
                <div className="modal-content">
                    <Button type="link" className="close">&times;</Button>
                    <div className="modal-content__header">
                        <label>React Blog Modal</label>
                    </div>
                    <div className="modal-content__body">
                        A modal. A small box that pops up to tell you something important. How hard can it be? Wellllll.
                        Medium hard, I'd say. There's quite a few considerations and a few tricky things to get just right.
                        Let us count the ways.
                    </div>
                    <div className="modal-content__footer">
                        <Button type="button">Close</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;
