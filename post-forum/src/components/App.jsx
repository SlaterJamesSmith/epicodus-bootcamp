import React from 'react';
import Error404 from './Error404';
import Nav from './Nav';
import PostList from './PostList';
import PostForm from './PostForm';
import { Switch, Route } from 'react-router-dom';

function App() {
  return(
    <div>
      <style jsx global>
        {`
          body {
            margin: 0;
            padding: 0 25px;
            font-family: sans-serif;
          }

          h1, h3 {
            color: #08f;
          }

          h2 {
            color: magenta;
          }
        `}
      </style>
      <Nav/>
      <Switch>
        <Route exact path='/' component={PostList}/>
        <Route exact path='/postform' component={PostForm}/>
        <Route component={Error404}/>
      </Switch>
    </div>
  );
}

export default App;
