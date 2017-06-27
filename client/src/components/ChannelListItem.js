import React from 'react';

const ChannelListItem = ({channel}) => {
  return (
    <div className="channel-list-item">
      Channel: {channel.name}
    </div>
  );
};

export default ChannelListItem;
