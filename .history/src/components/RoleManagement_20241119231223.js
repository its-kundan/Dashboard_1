
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function RoleManagement() {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('/api/roles');
      setRoles(result.data.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Role Management</h2>
      {roles.map(role => (
        <div key={role._id}>
          {role.name}
          {/* Add buttons for editing and deleting roles */}
        </div>
      ))}
    </div>
  );
}

export default RoleManagement;
