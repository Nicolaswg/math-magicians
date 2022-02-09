import './App.css';
import React from 'react';
import Wrapper from './components/Calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Wrapper />
      </div>
    );
  }
}

export default App;
