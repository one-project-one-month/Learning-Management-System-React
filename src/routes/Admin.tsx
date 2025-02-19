import { Navigate, useRoutes } from 'react-router-dom';
import {
  CoursePageTesting,
  Dashboard,
  Login,
  MainLayout,
  Register,
} from './elements';
import Loader from '@/components/Loading';

export default function Admin() {
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
          path: 'loading',
          element: (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Loader />
            </div>
          ),
        },
        {
          path: 'login',
          element: <Login />,
        },
        {
          path: 'register',
          element: <Register />,
        },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/" replace />,
    },
  ]);
}
