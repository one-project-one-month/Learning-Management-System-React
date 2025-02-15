import { Navigate, useRoutes } from 'react-router-dom';
import { CoursePageTesting, Dashboard, MainLayout } from './elements';

export default function Admin() {
  const userRole: 'student' | 'admin' | 'instructor' = 'student';

  return useRoutes([
    {
      path: '/',
      element: <Navigate to="/" replace />,
    },
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          element: <Dashboard userRole={userRole} />,
          index: true,
        },
        {
          path: 'courses',
          element: <CoursePageTesting />,
        },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/" replace />,
    },
  ]);
}
