import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import history from 'services/utilities/historyUtil';
import Months from "constants/months";
import "./style.scss";

class StoryCard extends Component {
    constructor(props){
        super(props);
        //this.onLinkClick = this.onLinkClick.bind(this);
    }

    // onLinkClick(e){
    //   e.preventDefault();
    //   let storyLink = "/story/"+this.props.storyObj._id;
    //   history.push(storyLink);
    // }

    render(){
      let { story, createdBy, createdAt } = this.props.storyObj;
      createdAt = new Date(createdAt);
      let storyLink = "/story/"+this.props.storyObj._id;
      return(
        <div className="story-card-wrap">
          <div className="inner-card">
            <div className="story-img-wrap">
              {/* <a href="#" onClick={(e) => this.onLinkClick(e)}> */}
                {/* <Link to={storyLink}><img src="images/story.jpg" /></Link> */}
              {/* </a> */}
            </div>
            <div className="story-card">
              {/* <a href="#" className="story-link" onClick={(e) => this.onLinkClick(e)}> */}
              <Link className="story-link" to={storyLink}>
                <span className="story-heading">{story.title}</span>
                <p className="story-summary">{story.summary}</p>
              </Link>
              {/* </a> */}
              <div className="story-footer">
                <p className="created-by">by {createdBy.name}</p>
                <p className="created-at">{createdAt.getDate() + " " + Months[createdAt.getMonth().toString()].substr(0,3) + ". " + createdAt.getFullYear()}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
}

export default StoryCard;
