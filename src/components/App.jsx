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
      selectorOrigin: null,
      videoSearchResults: {}
    };
    this.handleVideoSearch = this.handleVideoSearch.bind(this);
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

  handleVideoSearch(query) {
    let newVideoSearchResults = Object.assign({}, this.state.videoSearchResults); fetch(`https://www.googleapis.com/youtube/v3/search?key=${process.env.exports.apiKey}&type=video&q=${query}&relevanceLanguage=en_US&maxResults=10&part=id`)
      .then(response => response.json())
      .then(response => {
        response.items.forEach(video => {
          fetch(`https://www.googleapis.com/youtube/v3/videos?key=${process.env.exports.apiKey}&id=${video.id.videoId}&part=contentDetails,snippet,statistics`)
            .then(response => response.json())
            .then(response => {
              let videoData = response.items[0];
              let newVideoEntry = {
                [videoData.id]: {
                  videoId: videoData.id,
                  videoTitle: videoData.snippet.localized.title,
                  videoDescription: videoData.snippet.localized.description.slice(0, 125) + ' ...',
                  channelId: videoData.snippet.channelId,
                  channelTitle: videoData.snippet.channelTitle,
                  videoThumbnail: videoData.snippet.thumbnails.medium.url,
                  duration: videoData.contentDetails.duration,
                  publishTime: videoData.snippet.publishedAt,
                  viewCount: videoData.statistics.viewCount,
                  likeCount: videoData.statistics.likeCount,
                  dislikeCount: videoData.statistics.dislikeCount
                }
              };
              newVideoSearchResults = Object.assign(newVideoSearchResults, newVideoEntry);
            });
        });
      })
      .then(this.setState({videoSearchResults: newVideoSearchResults}))
      .then(console.log(this.state.videoSearchResults));
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
