import React from 'react';
import Nav from './Nav';
import Home from './Home';
import TamaHome from './TamaHome';
import Error404 from './Error404';
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
      <Nav/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/tamagotchi' component={TamaHome}/>
        <Route component={Error404}/>
      </Switch>
    </div>
  );
}

export default App;
