import React , { Component } from 'react';
import { connect } from 'react-redux';
import { ReadStory, UpvoteStory, ResetUpvote } from './actionCreators';
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
          modalOpen: false,
          upvoteCount: ""
        }
        this.onUpvoteClick = this.onUpvoteClick.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    componentDidMount(){
      this.props.resetUpvote();
      this.props.getStory({storyId: this.props.match.params.storyId});

    }

    componentDidUpdate(prevProps, prevState) {
      if(prevProps.readStoryData.story.inProgress !== this.props.readStoryData.story.inProgress && !this.props.readStoryData.story.inProgress) {
        this.setState({
          upvoteCount: this.props.readStoryData.story.data.storyData.upvotes
        });
      }
      if(prevProps.readStoryData.upvote.success != this.props.readStoryData.upvote.success) {
        this.setState({
          upvoteCount: this.state.upvoteCount + 1
        });
      }
    }

    createMarkup(htmlString) {
      return {__html: htmlString};
    }

    onUpvoteClick(){
      if(JSON.parse(localStorage.getItem("session"))) {
        if(!this.props.readStoryData.story.data.storyData.hasUserUpvoted) this.props.upvoteStory(this.props.match.params.storyId); //, userId);
      } else {
        this.setState({
          modalOpen: true
        });
      }
    }

    closeModal(){
      this.setState({
        modalOpen: false
      });
    }

    render(){
      let storyObj = {
        createdAt: new Date().toUTCString(),
        story: {
          content: ""
        },
        createdBy: {
          name: ""
        },
        hasUserUpvoted: false
      }
      let storyData = _.isEmpty(this.props.readStoryData.story.data) ? storyObj : this.props.readStoryData.story.data.storyData;
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
              count={this.state.upvoteCount}
              upvoted={storyData.hasUserUpvoted || this.props.readStoryData.upvote.success }
            />

            <Modal
              isOpen={this.state.modalOpen}
              header="Log In to WorthReads."
              body={
                <div>
                  <p className="logout-msg">Please <Link to="/login" onClick={this.closeModal}>Log In</Link> to continue.</p>
                  <p>Don't have an account on WorthReads? <Link to="/signUp" onClick={this.closeModal}>Sign up</Link> here..</p>
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
    upvoteStory: (storyId, userId) => dispatch(UpvoteStory(storyId, userId)),
    resetUpvote: () => dispatch(ResetUpvote())

  })
}

export default connect(mapStateToProps, mapDispatchToProps)(ReadAStory);
