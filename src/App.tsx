import React from 'react';
import './App.css';
import UserList from './features/UserList/UserList';

function App(): React.ReactElement {
  return (
    <div>
      <UserList title="Users List App" />
    </div>
  );
}

export default App;
