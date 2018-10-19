import React, { Component } from 'react';
import Button from '../button';

import "./style.scss";

function Modal(props) {

      if(!props.isOpen){
        return null;
      }

      return(
        <div className="modal">
            <div className="modal-content">

                <Button type="link" className="close" onClick={props.handleClose}>&times;</Button>

                { props.header ?
                  <div className="modal-content__header">
                      {
                        typeof props.header === "string" ? <h2>{props.header}</h2> :
                        props.header
                      }
                  </div>
                  : null
                }

                <div className="modal-content__body">
                    {props.body}
                </div>

                { props.footer ?
                  <div className="modal-content__footer">
                      <Button type="button" onClick={props.handleClose}>Close</Button>
                  </div>
                : null
                }

            </div>
        </div>
        );
}

export default Modal;
