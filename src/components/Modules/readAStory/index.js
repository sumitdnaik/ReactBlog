import React , { Component } from 'react';
import { connect } from 'react-redux';
import ReadStory from './actionCreators';
import Loader from 'components/elements/loader';
import _ from 'lodash';
import Months from 'constants/months';

import './style.scss';
import 'react-quill/dist/quill.snow.css';
import '../writeAStory/style.scss';

class ReadAStory extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
      this.props.getStory({storyId: this.props.match.params.storyId});
    }

    createMarkup(htmlString) {
      return {__html: htmlString};
    }

    render(){
      let storyObj = {
        createdAt: new Date().toUTCString(),
        story: {
          content: ""
        },
        createdBy: {
          name: ""
        }
      }
      let storyData = _.isEmpty(this.props.readStoryData.data) ? storyObj : this.props.readStoryData.data.storyData;
      //let userData = _.isEmpty(this.props.readStoryData.data) ? userObj : this.props.readStoryData.data.userData;
      let storyHTML = this.createMarkup(storyData.story.content);
      let createdAtDate = new Date(storyData.createdAt);
        return(
          <div className="width-container">
            <div className="read-story-wrapper">
              {this.props.readStoryData.inProgress && <Loader/>}
              {!this.props.readStoryData.inProgress &&
                <div className="editor-wrapper">
                  <div className="story-user-info">
                    <p>{storyData.createdBy.name}</p>
                    <p className="story-date">{createdAtDate.getDate() + " " + Months[createdAtDate.getMonth().toString()].substr(0,3) + ". " + createdAtDate.getFullYear()}</p>
                  </div>
                  <div className="ql-snow">
                    <div className="ql-editor">
                      <h2 className="editor-text editor-title">{storyData.story.title}</h2>
                      <div key={storyData._id} dangerouslySetInnerHTML={storyHTML} />
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>
        )
    }
}

const mapStateToProps = (state) => {
  return ({
    readStoryData: state.readStory
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    getStory: (storyObj) => dispatch(ReadStory(storyObj))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(ReadAStory);
