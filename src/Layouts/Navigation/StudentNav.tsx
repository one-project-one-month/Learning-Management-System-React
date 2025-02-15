import { BellDot } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ModeToggle } from '@/components/mode-toggle';
const StudentNav = () => {
  return (
    <header className="h-20 w-full  flex justify-between items-center px-2 border-b-2 border-slate-600">
      <div className="text-xl font-bold">Logo</div>

      <div className="flex flex-row gap-2 justify-between items-center space-x-10">
        <input
          type="text"
          placeholder="Search..."
          className="w-full max-w-xs p-2 rounded-lg border border-gray-300"
        />
        <div className="flex flex-row  gap-2 justify-between items-center">
          <div className=" border-2 border-black rounded-full p-1 ">
            <BellDot />
            
          </div>
          <ModeToggle/>
          
            
          

          {/* <button className=" px-4 py-2 bg-white text-blue-500 rounded-lg hover:bg-gray-100">
            Login
          </button>
          <button className=" px-4 py-2 bg-white text-blue-500 rounded-lg hover:bg-gray-100">
            Register
          </button> */}
        </div>
      </div>
    </header>
  );
};

export default StudentNav;
