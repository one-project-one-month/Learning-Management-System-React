const StudentNav = () => {
  return (
    <header className="h-20 w-full bg-blue-500 flex justify-between items-center px-8 md:px-20 text-white">
      <div className="text-xl font-bold">Logo</div>
      <input
        type="text"
        placeholder="Search..."
        className="w-full max-w-xs p-2 rounded-lg border border-gray-300"
      />
      <div className="flex gap-2">
        <button className="px-4 py-2 bg-white text-blue-500 rounded-lg hover:bg-gray-100">
          Login
        </button>
        <button className="px-4 py-2 bg-white text-blue-500 rounded-lg hover:bg-gray-100">
          Sign up
        </button>
      </div>
    </header>
  );
};

export default StudentNav;
