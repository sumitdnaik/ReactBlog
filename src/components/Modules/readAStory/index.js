import React , { Component } from 'react';
import { connect } from 'react-redux';
import { ReadStory, UpvoteStory } from './actionCreators';
import Loader from 'components/elements/loader';
import StoryActionPanel from 'components/elements/storyActionPanel';
import _ from 'lodash';
import Months from 'constants/months';
import Modal from 'components/elements/modal';
import { Link } from 'react-router-dom';
import './style.scss';
import 'react-quill/dist/quill.snow.css';
import '../writeAStory/style.scss';

class ReadAStory extends Component {

    constructor(props){
        super(props);
        this.state = {
          modalOpen: false
        }
        this.onUpvoteClick = this.onUpvoteClick.bind(this);
    }

    componentDidMount(){
      this.props.getStory({storyId: this.props.match.params.storyId});
    }

    createMarkup(htmlString) {
      return {__html: htmlString};
    }

    onUpvoteClick(){
      if(JSON.parse(localStorage.getItem("session"))){
        var userId = JSON.parse(localStorage.getItem("session")).email;
        this.props.upvoteStory(this.props.match.params.storyId, userId);
      } else {
        this.setState({
          modalOpen: true
        });
      }
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
      let storyData = _.isEmpty(this.props.readStoryData.story.data) ? storyObj : this.props.readStoryData.story.data.storyData;
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
            <StoryActionPanel
              onUpvoteClick={this.onUpvoteClick}
              count={storyData.upvotes}
            />

            <Modal
              isOpen={this.state.modalOpen}
              header="Logged Out!"
              body={
                <div>
                  <p className="logout-msg">Please <Link to="/login" onClick={this.closeModal}>Log In</Link> to continue.</p>
                </div>
              }
              handleClose={this.closeModal}
              footer={true}
             />

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
    getStory: (storyObj) => dispatch(ReadStory(storyObj)),
    upvoteStory: (storyId, userId) => dispatch(UpvoteStory(storyId, userId))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(ReadAStory);
