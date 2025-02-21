import { ModeToggle } from '@/components/mode-toggle';
import { useAuthStore } from '@/store/authStore';
import { Separator } from '@/components/ui/separator';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
const StudentNav = () => {
  const { authUser } = useAuthStore();
  return (
    <header className="h-20 w-full  flex justify-between items-center px-2  border-slate-600">
      <div className="flex justify-between items-center">
        <SidebarTrigger variant={'outline'} />

        <Separator orientation="vertical" className="mr-2 h-4" />
        <Link to="/" className="text-xl font-bold">
          {authUser ? authUser.name : 'No User Yet'}
        </Link>
      </div>

      <div className="flex flex-row gap-2 justify-between items-center ">
        <div className="flex justify-between items-center px-3 border border-gray-300 rounded-full">
          <input
            type="text"
            placeholder="Search..."
            className="w-full max-w-xs p-2  text-sm outline-none bg-transparent  "
          />
          <Search className="w-5" />
        </div>
        <div className="flex flex-row  gap-2 justify-between items-center">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default StudentNav;
