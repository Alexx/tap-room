import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import KegList from './KegList/KegList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <KegList/>
      </header>
    </div>
  );
}

export default App;
