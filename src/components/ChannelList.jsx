import React from 'react';
import ChannelStrip from './ChannelStrip';
import PropTypes from 'prop-types';

function ChannelList(props) {
  return (
    <section>
      {Object.keys(props.channelList).map(channelId => {
        let channel = props.channelList[channelId];
        return (
          <ChannelStrip
            channel={channel}
            key={channelId}
          />
        );
      })}
    </section>
  );
}

ChannelList.propTypes = {
  channelList: PropTypes.object.isRequired
};

export default ChannelList;
