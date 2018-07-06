import React from 'react';
import Error404 from './Error404';
import Navbar from './Navbar';
import ChannelList from './ChannelList';
import SignIn from './SignIn';
import VideoPlayer from './VideoPlayer';
import Search from './Search';
import Footer from './Footer';
import { Switch, Route } from 'react-router-dom';
import masterVideoList from '../masterVideoList';

function App() {
  return(
    <div id="app-container">
      <style jsx global>
        {`
          #app-container {
            min-height: 100%;
            position: relative;
            padding: 55px 0 75px;
          }

          nav {
            position: fixed;
            top: 0;
            z-index: 100;
          }

          #routes-container {
            padding: 0 25px;
          }

          footer {
            position: absolute;
            bottom: 0;
          }
        `}
      </style>
      <Navbar/>
      <div id="routes-container">
        <Switch>
          <Route exact path='/' component={ChannelList} />
          <Route path='/signin' component={SignIn} />
          <Route path='/video' component={VideoPlayer} />
          <Route path='/search' render={() =>
            <Search videoList={masterVideoList} />
          } />
          <Route component={Error404}/>
        </Switch>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
