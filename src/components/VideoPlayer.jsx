import React from 'react';
import Error404 from './Error404';
import PropTypes from 'prop-types';

function VideoPlayer(props) {
  let noContent = <Error404 currentRoute="/video"/>;
  let videoContent = null;

  if (props.selectedVideoId != null) {
    if (props.selectorOrigin === '/search') {
      videoContent = props.videoList[props.selectedVideoId];
      let embedUrl = 'https://www.youtube.com/embed/' + props.selectedVideoId;
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

              iframe {
                height: 42.25vw;
                width: 75vw;
                border: none;
              }
            `}
          </style>
          <iframe src={embedUrl}></iframe>
          <h2>{videoContent.videoTitle}</h2>
        </section>
      );
    }
  } else {
    return (
      <section>
        {noContent}
      </section>
    );
  }
}

VideoPlayer.propTypes = {
  channelList: PropTypes.object.isRequired,
  videoList: PropTypes.object.isRequired,
  selectedVideoId: PropTypes.string,
  selectorOrigin: PropTypes.string
};

export default VideoPlayer;
