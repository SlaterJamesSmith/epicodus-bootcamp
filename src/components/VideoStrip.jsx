import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function VideoStrip(props) {
  const navLink = {
    color: 'inherit',
    textDecoration: 'none'
  };

  return (
    <article onClick={() => {props.onVideoSelection(props.videoId, null, props.currentRoute);}}>
      <style jsx>
        {`
          article {
            height: 180px;
            min-width: 320px;
            width: 90%;
            max-width: 1200px;
            margin-bottom: 25px;
            overflow: hidden;
          }

          .flex {
            display: flex;
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
      <Link to="/video" style={navLink}>
        <div className="flex">
          <figure>
            <img src={props.video.thumbnail}/>
          </figure>
          <div>
            <h1>{props.video.videoTitle}</h1>
            <p>{props.video.channelTitle} &bull; {props.video.viewCount} views</p>
            <p>{props.video.description}</p>
          </div>
        </div>
      </Link>
    </article>
  );
}

VideoStrip.propTypes = {
  videoId: PropTypes.string.isRequired,
  video: PropTypes.object.isRequired,
  onVideoSelection: PropTypes.func.isRequired,
  currentRoute: PropTypes.string.isRequired
};

export default VideoStrip;
