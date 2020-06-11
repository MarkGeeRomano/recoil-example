import React from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { selectedUserState, userState } from './store';
import { emojiList } from './constants';

const UserDetails = () => {
  const selectedUserId = useRecoilValue(selectedUserState)
  const [selectedUser, setSelectedUser] = useRecoilState(userState(selectedUserId))

  const updateUser = (field) => ({ target: { value } }) => setSelectedUser({ field, value })
  return (
    <div className="user-details-container">
      <div>
        {selectedUser.name}
        {selectedUser.emoji}
      </div>
      <div>
        <div>
          <input value={selectedUser.name} onChange={updateUser('name')} />
        </div>
        <div>
          <select value={selectedUser.emoji} onChange={updateUser('emoji')}>
            {emojiList.map(emoji => <option value={emoji}>{emoji}</option>)}
          </select>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;