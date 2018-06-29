import React from 'react';
import Error404 from './Error404';
import Navbar from './Navbar';
import ChannelList from './ChannelList';
import SignIn from './SignIn';
import VideoPlayer from './VideoPlayer';
import Search from './Search';
import Footer from './Footer';
import { Switch, Route } from 'react-router-dom';

function App() {
  return(
    <div>
      <style jsx global>
        {`
          body {
            position: relative;
            margin: 0 0 125px;
            padding: 0;
            font-family: sans-serif;
          }

          footer {
            position: fixed;
            bottom: 0;
          }
        `}
      </style>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={ChannelList}/>
        <Route exact path='/signin' component={SignIn}/>
        <Route exact path='/video' component={VideoPlayer}/>
        <Route exact path='/search' component={Search}/>
        <Route component={Error404}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
