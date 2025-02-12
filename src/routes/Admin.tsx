import { Navigate, useRoutes } from 'react-router-dom';
import { DashboardLayout } from './elements';

export default function Admin() {
  return useRoutes([
    {
      path: '/',
      element: <Navigate to="/dashboard" replace />,
    },
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        {
          element: <Navigate to="/dashboard" replace />,
          index: true,
        },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/dashboard" replace />,
    },
  ]);
}
