import React from 'react';

import ChannelListItem from './ChannelListItem';

/*
TODOS:
  add onClick event for changing channel
  hover-over styling
  styling for current room
*/

const ChannelList = ({ channels }) => {
  return (
    <div className="channel-list">
      <h4 className="title">Channels</h4>
      {channels.map(channel => <ChannelListItem key={channel.id} channel={channel} />)}
    </div>
  );
};

export default ChannelList;
