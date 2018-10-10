import React , { Component } from 'react';
import { connect } from 'react-redux';
import ReadStory from './actionCreators';
import Loader from 'components/elements/loader';
import _ from 'lodash';
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
      console.log(this.props.readStoryData);
      let obj = {
        story: {
          content: ""
        }
      }
      let storyData = _.isEmpty(this.props.readStoryData.data) ? obj : this.props.readStoryData.data.storyData;
      let storyHTML = this.createMarkup(storyData.story.content);
      console.log(storyData);
        return(
          <div className="read-story-wrapper">
            <div className="editor-wrapper">
              {this.props.readStoryData.inProgress && <Loader/>}
              <div className="ql-snow">
                <div className="ql-editor">
                  <h2 className="editor-text editor-title">{storyData.story.title}</h2>
                  <div key={storyData._id} dangerouslySetInnerHTML={storyHTML} />
                </div>
              </div>
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