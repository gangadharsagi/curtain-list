import React, { Component } from 'react';
import { CurtainList } from './components/CurtainList/CurtainList';

class App extends Component {

  render() {
    return (
      <div className="app container">
          <CurtainList />
      </div>
    );
  }
}

export default App;
