import { BellDot } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
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
          <div className="flex flex-row gap-2 justify-between items-center">
            <Avatar>
              <AvatarImage
                src="https://plus.unsplash.com/premium_photo-1683140888000-12c2c4f6eaa2?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="@shadcn"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col justify-center items-start">
              <h3>John Doe</h3>
              <span>user@email.com</span>
            </div>
          </div>

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
