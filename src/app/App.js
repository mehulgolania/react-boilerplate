import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Layout  from '../component/layout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Route component={Layout} />
      </BrowserRouter>
    </>
  );
}

export default App;
