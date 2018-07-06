import React from 'react';
import VideoCard from './VideoCard';
import PropTypes from 'prop-types';

function VideoCarousel(props) {
  return (
    <section>
      <style jsx>
        {`
          section {
            width: 852px;
            display: grid;
            grid-template-columns: repeat(6, 210px);
            grid-gap: 4px;
            overflow: hidden;
          }
        `}
      </style>
      {Object.keys(props.uploads).map(videoId => {
        let video = props.uploads[videoId];
        return (
          <VideoCard
            video={video}
            key={videoId}
          />
        );
      })}
    </section>
  );
}

VideoCarousel.propTypes = {
  uploads: PropTypes.object.isRequired
};

export default VideoCarousel;
