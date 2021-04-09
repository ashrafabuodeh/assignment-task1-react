import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Form from '../src/components/form/Form.jsx';
import HeaderForm from '../src/components/headerform/HeaderForm.jsx'
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <HeaderForm/>
      <Form/>
    </div>

  );
}



export default App;

