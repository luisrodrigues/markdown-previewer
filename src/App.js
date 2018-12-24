import React from 'react';
import './App.css';
import Editor from './editor';
import Previewer from './previewer';
import Header from './header';

const App  = () => (
      <div id="mp">
        <Header />
        <div class="board">
          <Editor />
        </div>
      </div>
    );


export default App;
