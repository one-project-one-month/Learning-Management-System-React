import { Search } from 'lucide-react';

interface Props {
  search: string;
  onSearch: (search: string) => void;
}

export default function SearchInput({ search, onSearch }: Props) {
  return (
    <div className="flex justify-between items-center px-1 border border-gray-300 rounded-2xl">
      <input
        value={search}
        type="text"
        placeholder="Search..."
        className="w-full max-w-xs p-2  text-sm outline-none bg-transparent  "
        onChange={(e) => {
          onSearch(e.target.value);
        }}
      />
      <Search className="border text-white rounded-xl p-0.5 size-7 bg-[#ff5734] border-gray-500" />
    </div>
  );
}
