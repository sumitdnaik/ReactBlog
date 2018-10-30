import React, { Component } from 'react';
import "./style.scss";

function StoryComment(props){
    return(
        <div className="comment-on-story">
            <textarea rows="4" cols="50" name="comment" onClick={props.onCommentClick}>
                <div>    
                    <div>{props.writeComment}</div>
                </div>
            </textarea>
        </div>
    );
}

export default StoryComment;