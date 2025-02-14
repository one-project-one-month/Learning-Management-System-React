import { Outlet } from 'react-router-dom';
// import Footer from './Footer';
import StudentNav from './Navigation/StudentNav';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      {/* app sidebar */}
      <AppSidebar />
      <SidebarInset>
        <div className=" p-4 bg-black ">
          <div className="flex flex-col min-h-screen rounded-xl px-6 bg-white">
            {/* Header */}
            <StudentNav />
            <main className="flex-1 ">
              {children}
              <Outlet />
            </main>

            {/* Main Content */}
            {/* Footer */}
            {/* <Footer /> */}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default MainLayout;
