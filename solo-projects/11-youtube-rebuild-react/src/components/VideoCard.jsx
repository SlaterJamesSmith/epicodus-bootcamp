import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function VideoCard(props) {
  const navLink = {
    color: 'inherit',
    textDecoration: 'none'
  };

  return (
    <article onClick={() => {props.onVideoSelection(props.videoId, props.channelId, props.currentRoute);}}>
      <style jsx>
        {`
          article {
            width: 210px;
            margin-bottom: 25px;
            overflow: hidden;
          }

          img {
            width: 100%;
            display: block;
          }

          h2 {
            margin: 10px 0;
            font-size: 0.9rem;
            font-weight: 500;
          }

          p {
            margin: 4px 0;
            color: #808080;
            font-size: 0.8rem;
          }

          p:last-child {
            margin-bottom: 0;
          }
        `}
      </style>
      <Link to="/video" style={navLink}>
        <img src={props.video.thumbnail} alt='video thumbnail'/>
        <h2>{props.video.videoTitle}</h2>
        <p>{props.video.channelTitle}</p>
        <p>{props.video.viewCount} views</p>
      </Link>
    </article>
  );
}

VideoCard.propTypes = {
  channelId: PropTypes.string.isRequired,
  videoId: PropTypes.string.isRequired,
  video: PropTypes.object.isRequired,
  onVideoSelection: PropTypes.func.isRequired,
  currentRoute: PropTypes.string.isRequired
};

export default VideoCard;
