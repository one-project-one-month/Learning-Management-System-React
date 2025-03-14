import { createContext, useContext, useState } from 'react';

const SearchContext = createContext<{
  searchText: string;
  setSearchText: (search: string) => void;
}>({
  searchText: '',
  setSearchText: () => {},
});

export default function SearchProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [searchText, setSearchText] = useState('');

  return (
    <SearchContext.Provider
      value={{
        searchText,
        setSearchText,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useSearchContext() {
  return useContext(SearchContext);
}
