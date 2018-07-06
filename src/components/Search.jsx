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
            padding: 40px 0;
          }
        `}
      </style>
      {Object.keys(props.videoList).map(videoId => {
        let video = props.videoList[videoId];
        return (
          <VideoStrip
            video={video}
            key={videoId}
          />
        );
      })}
    </section>
  );
}

Search.propTypes = {
  videoList: PropTypes.object.isRequired
};

export default Search;
