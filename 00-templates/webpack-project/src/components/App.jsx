import React from 'react';
import Error404 from './Error404';
import Header from './Header';
import Component from './Component';
import { Switch, Route } from 'react-router-dom';

function App() {
  return(
    <div>
      <style jsx global>
        {`
          body {
            margin: 0;
            padding: 0;
            font-family: sans-serif;
          }

          h1 {
            color: #08f;
          }
        `}
      </style>
      <Header/>
      <Switch>
        <Route exact path='/' component={Component}/>
        <Route component={Error404}/>
      </Switch>
    </div>
  );
}

export default App;
