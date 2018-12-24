import React from 'react';
const marked = require('marked');

const Previewer = (props) => (
      <div 
        id="previewer"
        dangerouslySetInnerHTML={{__html: marked(props.text)}}
      >
      </div>
    );


export default Previewer;