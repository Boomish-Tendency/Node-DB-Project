import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import CreateRecipe from './components/CreateRecipe'
import RecipePage from './components/RecipePage'
import './index.css';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/create" component={CreateRecipe} />
      <Route path="/recipes/:id" component={RecipePage}/>
    </Switch>
  </Router>,
  document.getElementById('root')
);