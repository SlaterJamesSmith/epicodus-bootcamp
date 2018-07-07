import React from 'react';
import Error404 from './Error404';
import Navbar from './Navbar';
import ChannelList from './ChannelList';
import SignIn from './SignIn';
import VideoPlayer from './VideoPlayer';
import Search from './Search';
import Footer from './Footer';
import { Switch, Route } from 'react-router-dom';
import masterChannelList from '../masterChannelList';
import masterVideoList from '../masterVideoList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      masterChannelList: {},
      masterVideoList: {},
      selectedVideoId: null,
      selectedChannelId: null,
      selectorOrigin: null
    };
    this.handleVideoSelection = this.handleVideoSelection.bind(this);
  }

  componentDidMount() {
    let newMasterChannelList = Object.assign({}, masterChannelList);
    let newMasterVideoList = Object.assign({}, masterVideoList);
    this.setState({
      masterChannelList: newMasterChannelList,
      masterVideoList: newMasterVideoList
    });
  }

  handleVideoSelection(videoId, channelId, currentRoute) {
    let newSelectedVideoId = videoId;
    let newSelectedChannelId = channelId;
    let newSelectorOrigin = currentRoute;
    this.setState({
      selectedVideoId: newSelectedVideoId,
      selectedChannelId: newSelectedChannelId,
      selectorOrigin: newSelectorOrigin
    });
  }

  render() {
    return (
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

            footer {
              position: absolute;
              bottom: 0;
            }

            @media screen and (max-width: 524px) {
              #app-container {
                padding-bottom: 55px;
              }
            }
          `}
        </style>
        <Navbar/>
        <Switch>
          <Route exact path="/" render={(props) =>
            <ChannelList
              channelList={this.state.masterChannelList}
              onVideoSelection={this.handleVideoSelection}
              currentRoute={props.location.pathname}
            />
          } />
          <Route path="/search" render={(props) =>
            <Search
              videoList={this.state.masterVideoList}
              onVideoSelection={this.handleVideoSelection}
              currentRoute={props.location.pathname}
            />
          } />
          <Route path="/video" render={(props) =>
            <VideoPlayer
              channelList={this.state.masterChannelList}
              videoList={this.state.masterVideoList}
              selectedVideoId={this.state.selectedVideoId}
              selectedChannelId={this.state.selectedChannelId}
              selectorOrigin={this.state.selectorOrigin}
              currentRoute={props.location.pathname}
            />
          } />
          <Route path="/signin" component={SignIn} />
          <Route render={(props) =>
            <Error404
              currentRoute={props.location.pathname}
            />
          } />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
