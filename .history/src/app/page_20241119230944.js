import Image from "next/image";

export default function Home() {
  return (
   <>
   </>
  );
}

import React from 'react';
import UserManagement from '../components/UserManagement';
import RoleManagement from '../components/RoleManagement';

export default function Home() {
  return (
    <div>
      <h1>RBAC System Dashboard</h1>
      <UserManagement />
      <RoleManagement />
    </div>
  );
}

