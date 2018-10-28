import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./style.scss";

function StoryActionPanel(props){
      return(
        <div className="floating-panel">
          <p className="likes-count">{props.count}</p>
          <a href="javascript:void(0)" className="like-link" onClick={props.onUpvoteClick} title={props.upvoted ? "Already upvoted" : "Upvote"}>
            <FontAwesomeIcon
              icon={'heart'}
              color={props.upvoted ? "#a01515" : "#fff"}
              size="3x"
              stroke="black"
              strokeWidth="8"
             />
          </a>
        </div>
      );

}

export default StoryActionPanel;
