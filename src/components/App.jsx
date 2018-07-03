import React from 'react';
import Error404 from './Error404';
import ActionBar from './ActionBar';
import StatusBar from './StatusBar';
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
      <StatusBar/>
      <Switch>
        <Route component={Error404}/>
      </Switch>
      <ActionBar/>
    </div>
  );
}

export default App;
