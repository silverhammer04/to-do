import React from 'react';
import './App.css';
import Todos from './components/Todos';

function App() {
 
  return (
    <div className="App">
      <header className="App-Header">
        <p>Hello To-Do List</p>
        <Todos/>
      </header>
    </div>
  );
}

export default App;
