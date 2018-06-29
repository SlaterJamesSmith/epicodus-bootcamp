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
    <div className="app-container">
      <style jsx global>
        {`
          @import url('https://fonts.googleapis.com/css?family=Roboto:400,400i,500,700');

          * {
            box-sizing: border-box;
          }

          html, body {
            height: 100%;
            margin: 0;
          }

          body {
            position: relative;
            padding: 55px 0 75px;
            font-family: 'Roboto', sans-serif;
            font-size: 100%;
          }

          nav {
            position: fixed;
            top: 0;
          }

          footer {
            position: fixed;
            bottom: 0;
          }

          .app-container {
            height: 100%;
          }

          .routes-container {
            height: 100%;
            padding: 25px;
          }
        `}
      </style>
      <Navbar/>
      <div className="routes-container">
        <Switch>
          <Route exact path='/' component={ChannelList}/>
          <Route exact path='/signin' component={SignIn}/>
          <Route exact path='/video' component={VideoPlayer}/>
          <Route exact path='/search' component={Search}/>
          <Route component={Error404}/>
        </Switch>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
