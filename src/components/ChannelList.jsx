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
            channelId={channelId}
            channel={channel}
            key={channelId}
            onVideoSelection={props.onVideoSelection}
            currentRoute={props.currentRoute}
          />
        );
      })}
    </section>
  );
}

ChannelList.propTypes = {
  channelList: PropTypes.object.isRequired,
  onVideoSelection: PropTypes.func.isRequired,
  currentRoute: PropTypes.string.isRequired
};

export default ChannelList;
