import React from 'react';

const UserCard = ({ user }) => (
  <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
    <h3>{user.login}</h3>
    <a href={user.html_url} target="_blank" rel="noopener noreferrer">
      Visit GitHub Profile
    </a>
  </div>
);

export default UserCard;
