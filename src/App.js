import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import TodoContainer from './TodoContainer';

function App() {
  return (
    <div className="App">
      <Counter />
      <TodoContainer />
    </div>
  );
}

export default App;
