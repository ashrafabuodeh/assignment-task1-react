import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Items } from '../src/components/pages';
import { LoremCard } from '../src/components'
import React from 'react';
import './App.css';

function App() {

  return (
    <div className="wrapper">
      <Router>
        <Switch>
          <Route exact path="/">
            <Items />
          </Route>
          <Route exact path="/carditem/:id">
            <LoremCard />
          </Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;

