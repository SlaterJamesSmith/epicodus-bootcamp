import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function VideoStrip(props) {
  const navLink = {
    color: 'inherit',
    textDecoration: 'none'
  };

  return (
    <article onClick={() => {props.onVideoSelection(props.videoId);}}>
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
        <Link to='/video' style={navLink}>
          <img src={props.video.thumbnail}/>
        </Link>
      </figure>
      <div>
        <Link to='/video' style={navLink}>
          <h1>{props.video.videoTitle}</h1>
          <p>{props.video.channelTitle} &bull; {props.video.viewCount} views</p>
          <p>{props.video.description}</p>
        </Link>
      </div>
    </article>
  );
}

VideoStrip.propTypes = {
  videoId: PropTypes.string.isRequired,
  video: PropTypes.object.isRequired,
  onVideoSelection: PropTypes.func.isRequired
};

export default VideoStrip;
