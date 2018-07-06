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
