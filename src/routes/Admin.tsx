import { Navigate, useRoutes } from 'react-router-dom';
import { MainLayout } from './elements';
import CoursePageTesting from '@/pages/course/Course';
import Dashboard from '@/pages/Dashboard/Dashboard';
import CourseDetailPage from '@/pages/course/CourseDetailPage';

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
        {
          path : 'coursedetails',
          element : <CourseDetailPage/>
        }
      ],
    },
    {
      path: '*',
      element: <Navigate to="/" replace />,
    },
  ]);
}
