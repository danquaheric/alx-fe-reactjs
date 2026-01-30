import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import UserList from './components/UserList';
import Search from  './components/Search';

function App() {
  const [users, setUsers] = useState([]);

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>GitHub User Search</h1>
      <SearchBar setUsers={setUsers} />
      <UserList users={users} />
      <Search />
    </div>
  );
}

export default App;
