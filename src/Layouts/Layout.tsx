import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import StudentNav from './Navigation/StudentNav';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <StudentNav />

      <main className="flex-1 p-6">
        {children}
        <Outlet />
      </main>

      {/* Main Content */}
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
