import React from 'react';
import VideoCard from './VideoCard';
import PropTypes from 'prop-types';

function VideoCarousel(props) {
  return (
    <section className='carousel'>
      <style jsx>
        {`
          .carousel {
            width: 1280px;
            display: grid;
            grid-template-columns: repeat(6, 210px);
            grid-gap: 4px;
            overflow: hidden;
          }

          @media screen and (max-width: 1380px) {
            .carousel {
              width: 1066px;
            }
          }

          @media screen and (max-width: 1166px) {
            .carousel {
              width: 852px;
            }
          }

          @media screen and (max-width: 952px) {
            .carousel {
              width: 638px;
            }
          }

          @media screen and (max-width: 738px) {
            .carousel {
              width: 424px;
            }
          }

          @media screen and (max-width: 524px) {
            .carousel {
              width: 210px;
            }
          }
        `}
      </style>
      {Object.keys(props.uploads).map(videoId => {
        let video = props.uploads[videoId];
        return (
          <VideoCard
            channelId={props.channelId}
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

VideoCarousel.propTypes = {
  channelId: PropTypes.string.isRequired,
  uploads: PropTypes.object.isRequired,
  onVideoSelection: PropTypes.func.isRequired,
  currentRoute: PropTypes.string.isRequired
};

export default VideoCarousel;
