import React from 'react';
import PropTypes from 'prop-types';

function ChannelStrip(props) {
  return (
    <article>
      <style jsx>
        {`
          .strip-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
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
        `}
      </style>
      <div className='strip-header'>
        <div className='logo-title'>
          <img src={props.channel.thumbnail} alt='channel logo'/>
          <h2>{props.channel.title}</h2>
        </div>
        <button className='subscribe-btn'>Subscribe {props.channel.subscriberCount}</button>
      </div>
    </article>
  );
}

ChannelStrip.propTypes = {
  channel: PropTypes.object.isRequired
};

export default ChannelStrip;
