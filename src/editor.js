import React, { Component } from 'react';
import Previewer from './previewer';


const placeholderText = "# H1 \n## H2 \n### H3 \n#### H4 \n##### H5";

class Editor extends Component {
  state = {
    text: placeholderText
  }

  handleText = (e) => {
    this.setState({
      text: e.target.value
    });
  }

  render() {

    return (
      <div id="editor">
        <textarea onChange={this.handleText}>{placeholderText}</textarea>
        {this.state.text.length > 0 && <Previewer text={this.state.text}/>}
      </div>
    );
  }
}

export default Editor;