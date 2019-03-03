import React, { Component } from 'react';
import Todos from './components/Todos'

const container_width = {
  width: '600px'
}

class App extends Component {
  render() {
    return (
      <div className="container my-5 shadow-none p-3 mb-5 bg-light rounded" style={container_width}>
        <h1 className="text-primary text-center">Todos</h1>
        <Todos />
      </div>
    );
  }
}

export default App;
