import React from 'react';
import Nav from './Nav';
import Home from './Home';
import TamaHome from './TamaHome';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';

function App() {
  return(
    <div className="wrapper">
      <style jsx>
        {`
          .wrapper {
            min-height: 100%;
            padding-top: 40px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
      <Nav/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/tamagotchi' component={TamaHome}/>
        <Route component={Error404}/>
      </Switch>
    </div>
  );
}

export default App;
