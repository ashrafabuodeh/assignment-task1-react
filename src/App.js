import React from 'react';
import HomePage from '../src/components/pages/HomePage/HomePage';
import Header from '../src/components/shared/Header/Header';
import './App.css';
function App() {
  return (
    <div className="wrapper">
      <Header/>
     <HomePage/>
    </div>
  );
}

export default App;
