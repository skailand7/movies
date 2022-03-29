const SearchBar = ({ title, setSearch, searchButton }) => {
  return (
    <div className="flex w-full justify-center bg-gray-900 px-4">
      <div className="flex p-2 w-full rounded-full border bg-gray-900 border-red-700 space-x-2">
        <svg
          onClick={() => setSearch(title)}
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white bg-gray-900"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          onChange={(e) => searchButton(e.target.value)}
          id="search"
          placeholder="Search"
          className="outline-none text-white bg-gray-900"
        />
      </div>
    </div>
  );
};

export default SearchBar;
