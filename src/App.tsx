import React from 'react';
import './App.css';
import Connect2Phantom from './components/Connect2Phantom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Connect to phantom wallet</h1>
        <hr className="fullWidth" />
        <p>This is My wallet</p>
        <Connect2Phantom/>

      </header>
    </div>
  );
}

export default App;
