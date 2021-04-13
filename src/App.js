import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './components';
import { HomePage, AboutUs } from '../src/components/pages';
import React from 'react';
import './App.css';

function App() {

  return (
    <Router>
      <div className="wrapper">
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/Home">
            <HomePage />
          </Route>
          <Route exact path="/AboutUs/:id">
            <AboutUs />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

