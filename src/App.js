import React from 'react';
import NavBar from './components/navbar';
import Main from './components/main' ;
import GridItems from './components/griditems';
import './style.css';
function App() {
  return (
    <div className="wrapper">
    <NavBar/>
    <Main/>
    <GridItems/>
    </div>
  );
}

export default App;
