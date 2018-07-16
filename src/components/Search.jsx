import React from 'react';
import VideoStrip from './VideoStrip';
import PropTypes from 'prop-types';

function Search(props) {
  return (
    <section>
      <style jsx>
        {`
          section {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 25px 0 5px;
          }
        `}
      </style>
      {Object.keys(props.videoSearchResults).map(videoId => {
        let video = props.videoSearchResults[videoId];
        return (
          <VideoStrip
            videoId={videoId}
            video={video}
            key={videoId}
            onVideoSelection={props.onVideoSelection}
            currentRoute={props.currentRoute}
          />
        );
      })}
    </section>
  );
}

Search.propTypes = {
  videoSearchResults: PropTypes.object,
  onVideoSelection: PropTypes.func.isRequired,
  currentRoute: PropTypes.string.isRequired
};

export default Search;
