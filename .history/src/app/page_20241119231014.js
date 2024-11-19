import UserManagement from "@/components/UserManagement";
import 
export default function Home() {
  return (
    <div>
      <h1>RBAC System Dashboard</h1>
      <UserManagement />
      <RoleManagement />
    </div>
  );
}

