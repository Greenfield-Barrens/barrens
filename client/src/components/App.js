import React from 'react';
import '../styles/app.scss';

import Navbar from './Navbar';
import ChannelList from './ChannelList';
import UserList from './UserList';
import MessageList from './MessageList';

import { dummyChannels, dummyUsers, dummyMessages } from '../dummyData';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <h1 className="title">Barrens</h1>
      <div className="channels-messages-sidebar inline-block">
        <ChannelList channels={dummyChannels} />
        <UserList users={dummyUsers} />
      </div>
      <MessageList messages={dummyMessages} />
    </div>
  );
};

export default App;
