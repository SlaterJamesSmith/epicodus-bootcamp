import React from 'react';
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
      </Switch>
    </div>
  );
}

export default App;
