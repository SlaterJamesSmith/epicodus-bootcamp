import React from 'react';
import PropTypes from 'prop-types';

function ChannelStrip(props) {
  return (
    <article>
      <style jsx>
        {`

        `}
      </style>
      <h2>{props.channel.title}</h2>
    </article>
  );
}

ChannelStrip.propTypes = {
  channel: PropTypes.object.isRequired
}

export default ChannelStrip;
