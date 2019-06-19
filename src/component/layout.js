import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './navigation';
import Home from './home';
import About from './about';
import Contact from './contact';
import NoMatch from './nomatch';

function Layout() {
  return(
    <>
      <Navigation />
      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="" component={NoMatch} />
      </Switch>
    </>
  );
}

export default Layout;