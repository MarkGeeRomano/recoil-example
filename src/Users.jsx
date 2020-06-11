import React from 'react';
import { useRecoilValue } from 'recoil';

import { filteredUserState } from './store';
import User from './User';

const Users = () => {
  const users = useRecoilValue(filteredUserState)
  return (
    <div className="users-container">
      {users.map(userId => <User id={userId} />)}
    </div>
  );
};

export default Users;