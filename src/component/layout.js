import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './navigation';
import Home from './home';
import About from './about';

function Layout() {
  return(
    <>
      <Navigation />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </>
  );
}

export default Layout;