import { Outlet } from 'react-router-dom';
// import Footer from './Footer';
import StudentNav from './Navigation/StudentNav';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';
import { useTheme } from '@/provider/theme-provide';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();

  return (
    <SidebarProvider>
      {/* app sidebar */}
      <AppSidebar />
      <SidebarInset>
        <div
          className={`p-4 ${theme == 'light' ? 'bg-black' : 'bg-custom-10'}`}
        >
          <div
            className={`flex flex-col min-h-screen rounded-xl px-6 pb-6 ${theme == 'light' ? 'bg-stone-100' : 'bg-black'
              }`}
          >
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
