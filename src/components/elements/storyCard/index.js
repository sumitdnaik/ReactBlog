import React, { Component } from 'react';
import "./style.scss";

class StoryCard extends Component {
    constructor(props){
        super(props);
    }

    render(){
      let { story, createdBy, createdAt } = this.props.storyObj;
      createdAt = new Date(createdAt);
      return(
        <div className="story-card-wrap">
          <div className="story-img-wrap">
            <img src="images/story.jpg" />
          </div>
          <div className="story-card">
            <span className="story-heading">{story.title}</span>
            <p className="story-summary">{story.summary}</p>
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
