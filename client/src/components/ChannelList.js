import React from 'react';

import ChannelListItem from './ChannelListItem';

/*
TODOS:
  add onClick event for changing channel
  hover-over styling
  styling for current room
*/

const ChannelList = ({ user, channels, changeChannel }) => {
  return (
    <div className="channel-list">
      <h4 className="title">Channels</h4>
      {channels.map(channel => <ChannelListItem user={user} channel={channel} changeChannel={changeChannel} />)}
    </div>
  );
};

export default ChannelList;
