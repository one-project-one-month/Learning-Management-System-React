import Loader from '@/components/Loading.tsx';
import { Suspense, lazy, ElementType } from 'react';

const Loadable =
  <Props extends Record<string, unknown>>(Component: ElementType) =>
  (props: Props) => (
    <Suspense
      fallback={
        <div className="w-full h-full flex justify-center items-center">
          <Loader />
        </div>
      }
    >
      <Component {...props} />
    </Suspense>
  );

// Auth routes

export const Login = Loadable(
  lazy(() => import('../features/authentication/Login.tsx'))
);

export const Register = Loadable(
  lazy(() => import('../pages/auth/register/Register.tsx'))
);

export const MainLayout = Loadable(lazy(() => import('../Layouts/Layout.tsx')));

export const Dashboard = Loadable(
  lazy(() => import('../pages/Dashboard/Dashboard.tsx'))
);
export const CoursePageTesting = Loadable(
  lazy(() => import('../pages/studentCourse/StudentCourses.tsx'))
);

// All Courses
export const AllCourses = Loadable(
  lazy(() => import('../pages/Courses/AllCourses.tsx'))
);

// Course Details Page ( without enroll )
export const CourseDetails = Loadable(
  lazy(() => import('../pages/CourseDetails/CourseDetails.tsx'))
);
