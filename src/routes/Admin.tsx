import { Navigate, useRoutes } from 'react-router-dom';
import { CoursePageTesting, Login, MainLayout, Register } from './elements';

import Dashboard from '@/pages/Dashboard/Dashboard';
import CourseDetailPage from '@/pages/course/CourseDetailPage';
import { useAuthStore } from '@/store/authStore';

export default function Admin() {
  const { authUser } = useAuthStore();

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
          element: <Dashboard />,
          index: true,
        },
        {
          path: 'courses',
          element: <CoursePageTesting />,
        },
        {
          path: 'coursedetails',
          element: <CourseDetailPage />,
        },

        {
          path: 'login',
          element: authUser ? <Navigate to="/" /> : <Login />,
        },
        {
          path: 'register',
          element: authUser ? <Navigate to="/" /> : <Register />,
        },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/" replace />,
    },
  ]);
}
