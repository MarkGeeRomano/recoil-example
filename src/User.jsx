import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { userState, selectedUserState } from './store';

const User = ({ id }) => {
  const setSelectedUser = useSetRecoilState(selectedUserState)
  return (
    <div className="user-container" onClick={() => setSelectedUser(id)}>
      name: {useRecoilValue(userState(id)).name}
    </div>
  );
};

export default User;