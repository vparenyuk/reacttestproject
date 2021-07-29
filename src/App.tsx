import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import UserList from './features/UserList/UserList';
import { UserDetails } from './features/UserDetails/UserDetails';

function App(): React.ReactElement {
  return (
    <Switch>
      <Route path="/" exact><UserList title="Users List App" /></Route>
      <Route path="/user/:id" exact>
        <UserDetails />
      </Route>
    </Switch>
  );
}

export default App;
