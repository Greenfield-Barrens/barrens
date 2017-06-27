import React from 'react';

import MessageListItem from './MessageListItem';

const MessageList = ({messages}) => {
  return (
    <div className="message-list inline-block">
      <h2 className="title">Messages</h2>
      {messages.map(message => <MessageListItem key={message.id} message={message} />)}
    </div>
  );
};

export default MessageList;
