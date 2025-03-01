import React from 'react';
import StudentDashboard from '../StudentDashboard/StudentDashboard';
import InstructorDashboard from '../InstructorDashboard/InstructorDashboard';
import AdminDashboard from '../AdminDashboard/AdminDashboard';
import { useAuthStore } from '@/store/authStore';

type UserRole = 'STUDENT' | 'ADMIN' | 'INSTRUCTOR';
interface DashboardProps {
  userRole?: UserRole;
}

const Dashboard: React.FC<DashboardProps> = () => {
  const { authUser } = useAuthStore();

  console.log(authUser?.status === 'SUCCESS');

  if (authUser == null) {
    return;
  }

  if (authUser.status !== 'SUCCESS') {
    return <h1 className="text-center mt-10 text-red-500">Please log in</h1>;
  }

  const dashboardComponents: Record<UserRole, React.ReactNode> = {
    STUDENT: <StudentDashboard />,
    INSTRUCTOR: <InstructorDashboard />,
    ADMIN: <AdminDashboard />,
  };

  return (
    dashboardComponents[authUser.data.roleName as UserRole] ?? (
      <h1 className="text-center mt-10 text-red-500">Invalid Role</h1>
    )
  );
};

export default Dashboard;
