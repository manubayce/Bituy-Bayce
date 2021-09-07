import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Slider from './components/Slider';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
        <Slider />
      </header>
    </div>
  );
}

export default App;
