import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Schedule from './Schedule';
import Produce from './Produce';

function App() {
  return (
    <div>
      <style jsx global>
        {`
          body {
            font-family: sans-serif;
          }

          article {
            margin: 10px 5px;
            padding: 10px 20px;
            border: 1px solid #ccc;
          }
        `}
      </style>
      <h1>Produce Market</h1>
      <Nav/>
      <Switch>
        <Route exact path='/' component={Schedule}/>
        <Route path='/produce' component={Produce}/>
      </Switch>
    </div>
  );
}

export default App;
