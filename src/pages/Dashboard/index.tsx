import React from 'react';
import StudentDashboard from '../StudentDashboard/page';
import InstructorDashboard from '../InstructorDashboard/page';
import AdminDashboard from '../AdminDashboard/page';

type UserRole = 'student' | 'admin' | 'instructor';

const Dashboard = ({ userRole }: { userRole?: UserRole }) => {
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
