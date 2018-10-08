import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import history from 'services/utilities/historyUtil';

import "./style.scss";

class StoryCard extends Component {
    constructor(props){
        super(props);
        this.onLinkClick = this.onLinkClick.bind(this);
    }

    onLinkClick(e){
      e.preventDefault();
      let storyLink = "/story/"+this.props.storyObj._id;
      history.push(storyLink, { useremail: this.props.storyObj.createdBy });
    }

    render(){
      let { story, createdBy, createdAt } = this.props.storyObj;
      createdAt = new Date(createdAt);
      return(
        <div className="story-card-wrap">
          <div className="story-img-wrap">
            <a href="#" onClick={(e) => this.onLinkClick(e)}>
              <img src="images/story.jpg" />
            </a>
          </div>
          <div className="story-card">
            <a href="#" className="story-link" onClick={(e) => this.onLinkClick(e)}>
              <span className="story-heading">{story.title}</span>
              <p className="story-summary">{story.summary}</p>
            </a>
            <div className="story-footer">
              <p>by {createdBy.name}</p>
              <p>{createdAt.getDate() + "-" +  (createdAt.getMonth() + 1) + "-" + createdAt.getFullYear()}</p>
            </div>
          </div>
        </div>
      );
    }
}

export default StoryCard;
