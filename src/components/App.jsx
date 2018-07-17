import React from 'react';
import Error404 from './Error404';
import Navbar from './Navbar';
import ChannelList from './ChannelList';
import SignIn from './SignIn';
import VideoPlayer from './VideoPlayer';
import Search from './Search';
import Footer from './Footer';
import { fetchYouTubeVideo, fetchYouTubeVideoIds } from './../actions';
import { Switch, Route } from 'react-router-dom';
import masterChannelList from '../masterChannelList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      masterChannelList: {},
      videoSearchResults: {},
      selectedVideoId: null,
      selectedChannelId: null,
      selectorOrigin: null
    };
    this.handleVideoSearch = this.handleVideoSearch.bind(this);
    this.handleVideoSelection = this.handleVideoSelection.bind(this);
  }

  componentDidMount() {
    this.setState({masterChannelList: masterChannelList});
  }

  async handleVideoSearch(query) {
    let newVideoSearchResults = {};
    let videoIds = await fetchYouTubeVideoIds(query);
    videoIds.forEach(async video => {
      let newVideoEntry = await fetchYouTubeVideo(video.id.videoId);
      newVideoSearchResults = Object.assign(newVideoSearchResults, newVideoEntry);
    });
    setTimeout(() => this.setState({videoSearchResults: newVideoSearchResults}), 100);
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
        <Navbar onVideoSearch={this.handleVideoSearch} />
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
              videoSearchResults={this.state.videoSearchResults}
              onVideoSelection={this.handleVideoSelection}
              currentRoute={props.location.pathname}
            />
          } />
          <Route path="/video" render={(props) =>
            <VideoPlayer
              channelList={this.state.masterChannelList}
              videoSearchResults={this.state.videoSearchResults}
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
