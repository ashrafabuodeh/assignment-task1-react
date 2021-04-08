import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {HomePage,AboutUs} from '../src/components/pages';
import {Header} from './components';
import './App.css';

function App() {
  return (
    <Router>
    <div className="wrapper">
    <Header/>
    <Switch>
    <Route exact path="/">
     <HomePage/>
     </Route>
      <Route exact path="/Home">
     <HomePage/>
     </Route>
     <Route exact path="/AboutUs">
     <AboutUs/>
     </Route>
     </Switch>
   </div>
    </Router>
  );
}

export default App;

