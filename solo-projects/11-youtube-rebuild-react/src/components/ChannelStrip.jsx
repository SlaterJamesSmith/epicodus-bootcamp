import React from 'react';
import VideoCarousel from './VideoCarousel';
import PropTypes from 'prop-types';

function ChannelStrip(props) {
  return (
    <article className='strip'>
      <style jsx>
        {`
          .strip {
            margin-bottom: 20px;
            border-bottom: 1px solid #eee;
          }

          .strip-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 20px;
          }

          .logo-title {
            display: flex;
            align-items: center;
          }

          .logo-title img {
            width: 32px;
            margin-right: 10px;
            border-radius: 100%;
          }

          h2 {
            margin: 0;
            font-size: 1rem;
            font-weight: 500;
          }

          .subscribe-btn {
            padding: 8px 15px;
            border: none;
            border-radius: 2px;
            color: #fff;
            background-color: #f00;
            font-family: 'Roboto', sans-serif;
            font-size: 0.9rem;
            font-weight: 500;
            text-transform: uppercase;
          }

          @media screen and (max-width: 524px) {
            .strip-header {
              flex-direction: column;
            }

            .logo-title {
              margin-bottom: 20px;
            }
          }
        `}
      </style>
      <div className='strip-header'>
        <div className='logo-title'>
          <img src={props.channel.thumbnail} alt='channel logo'/>
          <h2>{props.channel.title}</h2>
        </div>
        <button className='subscribe-btn'>Subscribe {props.channel.subscriberCount}</button>
      </div>
      <VideoCarousel
        channelId={props.channelId}
        uploads={props.channel.uploads}
        onVideoSelection={props.onVideoSelection}
        currentRoute={props.currentRoute}
      />
    </article>
  );
}

ChannelStrip.propTypes = {
  channelId: PropTypes.string.isRequired,
  channel: PropTypes.object.isRequired,
  onVideoSelection: PropTypes.func.isRequired,
  currentRoute: PropTypes.string.isRequired
};

export default ChannelStrip;
