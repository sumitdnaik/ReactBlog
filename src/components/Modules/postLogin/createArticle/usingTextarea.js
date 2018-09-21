import React , { Component } from 'react';

import './style.scss';
import Button from '../../../elements/button';

class CreateArticle extends Component{
    constructor(props) {
      super(props);
      this.state = {
        title: "",
        paragraphs: [
          {
          "text": ""
          }
        ]
      };

      this.publishArticle = this.publishArticle.bind(this);
      this.onChangeTitle = this.onChangeTitle.bind(this);
      this.onChangePara = this.onChangePara.bind(this);
      this.onKeyPressPara = this.onKeyPressPara.bind(this);
      this.autoResize = this.autoResize.bind(this);
    }

    publishArticle(){

    }

    onChangeTitle(event){
      this.setState({
        title: event.target.value
      });
    }

    onKeyPressPara(event, index){
      let key = event.which || event.keyCode;
      if(key == 13){
        //If there is no next para, add one on enter
        if(index == this.state.paragraphs.length - 1) {
          let paras = this.state.paragraphs.slice();
          paras.push({
            text: ""
          });
          this.setState({
            paragraphs: paras
          }, function(){
            document.getElementById("story-para-"+(index+1).toString()).focus();
          });
        }
        else {
          //focus on next para if already present
          document.getElementById("story-para-"+(index+1).toString()).focus();
        }
      }
    }

    onChangePara(event, index){
      var paras = this.state.paragraphs.slice();
      paras[index].text = event.target.value;
      this.setState({
        paragraphs: paras
      });
    }

    autoResize(){
      
    }

    render() {
      return(
        <div className="editor-wrapper">
          <h2 className="page-heading">Write a story</h2>
          <input type="text" className="editor-text editor-title" placeholder="Title" onChange={this.onChangeTitle} />
          <div className="editor-wrapper">
            {this.state.paragraphs.map( (para, index) => {
                return(
                  <textarea
                    key={"para"+ index}
                    name={"para"+ index}
                    className="editor-text"
                    rows="1"
                    id={"story-para-" + index}
                    placeholder={index == 0 ? "Write your story here..." : "Continue..."}
                    onChange={(event) => { this.onChangePara(event, index)} }
                    onKeyPress={(event) => { this.onKeyPressPara(event, index)} } value={para.text}>
                  </textarea>
                );
            })}
          </div>
          <Button type="button" onClick={this.publishArticle}>Publish</Button>
        </div>
      );
    }
}

export default CreateArticle;
