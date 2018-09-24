import React , { Component } from 'react';

import './style.scss';
import Button from '../../../elements/button';
import './quill.bubble.css';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const editorModules = {
  toolbar: [
    [{ 'header': '1'}, {'header': '2'}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
    [{'list': 'ordered'}, {'list': 'bullet'},
     {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image', 'video'],
    ['clean']
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  }
}
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const editorFormats = [
  'header',
  'bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
]

class CreateArticle extends Component {
    constructor(props) {
      super(props);
      this.state = { text: '' } // You can also pass a Quill Delta here
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value) {
      this.setState({ text: value })
    }

    buttonClick(){
      console.log(this.state.text);
    }

    render() {
      return(
        <div className="editor-wrapper">
          <h2 className="page-heading">Write a story</h2>
          <ReactQuill
            value={this.state.text}
            onChange={this.handleChange}
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

export default CreateArticle;
