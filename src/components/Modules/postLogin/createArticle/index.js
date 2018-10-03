import React , { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import './style.scss';
import API from 'constants/APIs';
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
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const editorFormats = [
  'header',
  'bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block',
  'list', 'bullet',
  'link', 'image', 'video'
]

class CreateArticle extends Component {
    constructor(props) {
      super(props);
      this.state = { text: '', title: '' };
      this.reactQuillRef = null;
      this.handleChange = this.handleChange.bind(this);
      this.titleChange = this.titleChange.bind(this);
      this.titleKeyDown = this.titleKeyDown.bind(this);
    }

    handleChange(value) {
      this.setState({ text: value });
    }

    buttonClick(){
      let content = this.state.text.replace(/\"/g, "&quot;").replace(/\'/g, "&apos;");
      console.log(this.props.userData);
      let user = this.props.userData.email;
      axios({
          method: 'POST',
          url: API.postLogin.createStory,
          data: { content, user }
        })
        .then(function (response) {
          console.log(response);
        });
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
            <Button type="button" onClick={this.buttonClick.bind(this)}>Publish</Button>
          </div>
        </div>
      );
    }
}

function mapStateToComponent(state){
  return {
      userData: state.user.userObj
   }
}
export default connect(mapStateToComponent)(CreateArticle);
