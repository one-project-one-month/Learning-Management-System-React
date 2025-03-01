import { Navigate, useRoutes } from 'react-router-dom';
import {
  Login,
  MainLayout,
  Register,
  AllCourses,
  CourseDetails,
} from './elements';

import Dashboard from '@/pages/Dashboard/Dashboard';
import CourseDetailPage from '@/pages/course/CourseDetailPage';

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
          element: <AllCourses />,
        },
        {
          path: 'courses/:courseId',
          element: <CourseDetails />,
        },
        {
          path: 'coursedetails',
          element: <CourseDetailPage />,
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
