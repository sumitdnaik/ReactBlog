import React , { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Select from 'react-select';
import './style.scss';
import publish from './actionCreators';
import API from 'constants/APIs';
import StoryCategories from "constants/storyCategories";
import Button from 'components/elements/button';
//import './quill.bubble.css'; //Bubble Theme

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const editorModules = {
  toolbar: [
    [{'header': '2'}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
    [
      {'list': 'ordered'}, {'list': 'bullet'}//,
      //{'indent': '-1'}, {'indent': '+1'}
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
    options: item.topics.map((topic) => ({label: topic, value: topic}))
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
      let story = {
        title: this.state.title,
        content: this.state.text.replace(/\"/g, "&quot;").replace(/\'/g, "&apos;")
      };
      let user = this.props.userData.email;
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
          <div className="publish-wrapper">
            <Select
              options={categories}
              onChange={this.categoryChange}
              value={this.state.category}
              className="category-dropdown"
              />
            <Button type="button" onClick={this.publish}>Publish</Button>
          </div>
        </div>
      );
    }
};

const mapStateToComponent = (state) => {
  console.log(state);
  return({
    userData: state.user.userObj.userData,
    createStory: state.createStory
  });
}

const mapDispatchToProps = (dispatch) => ({
  publishStory: (payload) => dispatch(publish(payload))
})

export default connect(mapStateToComponent, mapDispatchToProps)(CreateArticle);
