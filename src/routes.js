import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import Home from './screens/home/home';


const AppRoutes = () => {
  return (
    <Router history = {history}>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default AppRoutes;
