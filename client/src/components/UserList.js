import React from 'react';

import UserListItem from './UserListItem';

const UserList = ({users, user}) => {
  const usersInRegion = users.filter(otherUser => otherUser.channel === user.channel);
  return (
    <div className="user-list">
      <h4 className="title">Users Talking in this Region</h4>
      { users.map(username => <UserListItem username={username} />) }
    </div>
  );
};

export default UserList;
