
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserManagement() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('/api/users');
      setUsers(result.data.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>User Management</h2>
      {users.map(user => (
        <div key={user._id}>
          {user.username} - {user.status}
          {/* Add buttons for editing and deleting users */}
        </div>
      ))}
    </div>
  );
}

export default UserManagement;
