import React from 'react';
import {Link} from 'react-router-dom';

function Navigation(){
  return(
    <>
      <h1>This is Navigation</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </>
  );
}

export default Navigation;