import React from 'react';
import Error404 from './Error404';
import ActionBar from './ActionBar';
import StatusBar from './StatusBar';
import Tamagotchi from './Tamagotchi';
import { Switch, Route } from 'react-router-dom';

function App() {
  return(
    <div id='app-container'>
      <style jsx global>
        {`
          body {
            margin: 0;
            padding: 0;
            font-family: sans-serif;
          }

          #app-container {
            height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
          }

          h1 {
            color: #08f;
          }
        `}
      </style>
      <StatusBar/>
      <Switch>
        <Route exact path='/' component={Tamagotchi}/>
        <Route component={Error404}/>
      </Switch>
      <ActionBar/>
    </div>
  );
}

export default App;
