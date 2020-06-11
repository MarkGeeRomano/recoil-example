import React from 'react';
import { RecoilRoot } from 'recoil'

import Users from './Users';
import UserDetails from './UserDetails';

import './App.css';
import Filter from './Filter';

function App() {
  return (
    <RecoilRoot>
      <div className="app-container">
        <div className="header">
          Social Media App
        </div>
        <Users />
        <Filter />
        <UserDetails />
      </div>
    </RecoilRoot>
  );
}


export default App;
