import React , { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import './style.scss';
import publish from './actionCreators';
import StoryCategories from "constants/storyCategories";
import Button from 'components/elements/button';
import Loader from 'components/elements/loader';
//import './quill.bubble.css'; //Bubble Theme

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const editorModules = {
  toolbar: [
    [{'header': '2'}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
    [
      {'list': 'ordered'}, {'list': 'bullet'}
    ],
    ['link', 'video'], //['link', 'image', 'video'],
    ['clean']
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: true,
  }
}

const editorFormats = [
  'header',
  'bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block',
  'list', 'bullet',
  'link', 'image', 'video'
];

const categories = StoryCategories.map((item) => {
  return({
    label:item.category,
    options: item.topics.map((topic) => ({label: topic, value: topic, group: item.category}))
  });
});

class CreateArticle extends Component {
    constructor(props) {
      super(props);
      this.state = {
        text: '',
        title: '',
        category: null
      };
      this.reactQuillRef = null;
      this.handleChange = this.handleChange.bind(this);
      this.titleChange = this.titleChange.bind(this);
      this.titleKeyDown = this.titleKeyDown.bind(this);
      this.categoryChange = this.categoryChange.bind(this);
      this.publish = this.publish.bind(this);
    }

    handleChange(value) {
      this.setState({ text: value });
    }

    publish(){
      let summary = this.reactQuillRef.getEditor().getText();
      summary = summary.substr(0,100) + '...';
      let story = {
        title: this.state.title,
        content: this.state.text.replace(/\"/g, "&quot;").replace(/\'/g, "&apos;"),
        summary,
        category: {
          group: this.state.category.group,
          topic: this.state.category.label
        }
      };
      let user = {
        name: this.props.userData.name,
        email: this.props.userData.email
      };
      this.props.publishStory({story, user});
    }

    titleChange(e){
      this.setState({
        title: e.target.value
      });
    }

    titleKeyDown(e){
      let key = e.keyCode || e.which;
      if(key == 13){
        e.preventDefault();
        this.reactQuillRef.getEditor().focus();
      }
    }

    categoryChange(category) {
      this.setState({ category });
    }

    render() {
      return(
        <div className="editor-wrapper">
          <h2 className="page-heading">Write a story</h2>
          <textarea
            className="editor-text editor-title"
            placeholder="Title here..."
            onChange={this.titleChange}
            value={this.state.title}
            onKeyDown={(e) => this.titleKeyDown(e)}>
          </textarea>

          <ReactQuill
            value={this.state.text}
            onChange={this.handleChange}
            ref={(el) => { this.reactQuillRef = el }}
            placeholder="Write your story here..."
            modules={editorModules}
            formats={editorFormats}
            theme={'snow'}
          />
          <div className="category-wrapper">
            <label htmlFor="category">Select a category for this story: </label>
            <Select
              name="category"
              options={categories}
              onChange={this.categoryChange}
              value={this.state.category}
              className="category-dropdown"
              />
          </div>
          <Button type="button" onClick={this.publish}>Publish</Button>
          {this.props.createStory.inProgress && <Loader/>}
        </div>
      );
    }
};

const mapStateToProps = (state) => {
  return({
    userData: state.user.userObj.userData,
    createStory: state.createStory
  });
}

const mapDispatchToProps = (dispatch) => ({
  publishStory: (payload) => dispatch(publish(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateArticle);
