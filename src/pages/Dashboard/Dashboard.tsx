import React from 'react';
import StudentDashboard from '../StudentDashboard/StudentDashboard';
import InstructorDashboard from '../InstructorDashboard/InstructorDashboard';
import AdminDashboard from '../AdminDashboard/AdminDashboard';
import { useAuthStore } from '@/store/authStore';

type UserRole = 'student' | 'admin' | 'instructor';
interface DashboardProps {
  userRole?: UserRole;
}

const Dashboard: React.FC<DashboardProps> = () => {
  const { userRole } = useAuthStore();
  if (!userRole) {
    return <h1 className="text-center mt-10 text-red-500">Please log in</h1>;
  }

  const dashboardComponents: Record<UserRole, React.ReactNode> = {
    student: <StudentDashboard />,
    instructor: <InstructorDashboard />,
    admin: <AdminDashboard />,
  };

  return (
    dashboardComponents[userRole] ?? (
      <h1 className="text-center mt-10 text-red-500">Invalid Role</h1>
    )
  );
};

export default Dashboard;
