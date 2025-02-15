import { Suspense, lazy, ElementType } from 'react';

const Loadable =
  <Props extends Record<string, unknown>>(Component: ElementType) =>
  (props: Props) => (
    <Suspense fallback={<p>loading...</p>}>
      <Component {...props} />
    </Suspense>
  );

// Auth routes

export const Login = Loadable(
  lazy(() => import('../pages/auth/login/Login.tsx'))
);

export const MainLayout = Loadable(lazy(() => import('../Layouts/Layout.tsx')));
export const Dashboard = Loadable(
  lazy(() => import('../pages/Dashboard/Dashboard.tsx'))
);
export const CoursePageTesting = Loadable(
  lazy(() => import('../pages/StuentCourse/StudentCourses.tsx'))
);