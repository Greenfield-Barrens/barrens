import React from 'react';

import UserListItem from './UserListItem';

const UserList = ({users}) => {
  return (
    <div className="user-list">
      <h4 className="title">Users In This Channel</h4>
      { users.map(user => <UserListItem key={user.id} user={user} />) }
    </div>
  );
};

export default UserList;
