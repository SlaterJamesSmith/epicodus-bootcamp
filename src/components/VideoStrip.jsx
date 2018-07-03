import React from 'react';
import PropTypes from 'prop-types';

function VideoStrip(props) {
  return (
    <article>
      <style jsx>
        {`
          article {
            height: 180px;
            min-width: 320px;
            width: 90%;
            max-width: 1200px;
            display: flex;
            margin-bottom: 25px;
            overflow: hidden;
          }

          figure {
            height: 180px;
            min-width: 320px;
            width: 320px;
            margin: 0 20px 0 0;
          }

          img {
            width: 100%;
          }

          h1 {
            margin: 0 0 10px;
            font-weight: normal;
          }

          p {
            margin: 0 0 20px;
            font-size: 0.8rem;
          }
        `}
      </style>
      <figure>
        <img src={props.thumbnail}/>
      </figure>
      <div>
        <h1>{props.videoTitle}</h1>
        <p>{props.channelTitle} &bull; {props.viewCount} views</p>
        <p>{props.description}</p>
      </div>
    </article>
  );
}

VideoStrip.propTypes = {
  key: PropTypes.string.isRequired,
  videoTitle: PropTypes.string.isRequired,
  channelTitle: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  viewCount: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default VideoStrip;
