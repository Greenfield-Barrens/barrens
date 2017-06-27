import React from 'react';

const UserListItem = ({ user }) => {
  return (
    <div className="user-list-item">
      { user.name }
    </div>
  );
};

export default UserListItem;
