import React from 'react';
import './App.scss';

import { Quote } from "./features/quotes/Quote"

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Quote />
      </React.Fragment>
    </div>
  );
}

export default App;
