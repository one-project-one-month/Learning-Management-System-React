import { ModeToggle } from '@/components/mode-toggle';
const StudentNav = () => {
  return (
    <header className="h-20 w-full  flex justify-between items-center px-2  border-slate-600">
      <div className="text-xl font-bold">Logo</div>

      <div className="flex flex-row gap-2 justify-between items-center ">
        <input
          type="text"
          placeholder="Search..."
          className="w-full max-w-xs p-2  text-sm outline-none rounded-lg border border-gray-300"
        />
        <div className="flex flex-row  gap-2 justify-between items-center">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default StudentNav;
