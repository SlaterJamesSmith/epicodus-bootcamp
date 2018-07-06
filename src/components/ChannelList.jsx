import React from 'react';
import ChannelStrip from './ChannelStrip';
import PropTypes from 'prop-types';

function ChannelList(props) {
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
        `}
      </style>
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
