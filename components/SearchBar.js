import Link from "next/link";
import React from "react";
const SearchBar = () => {
  const [state, setState] = React.useState("");

  return (
    <div className="flex w-full justify-between bg-gray-900 px-2 py-4 space-x-4">
      <div className="flex items-center space-x-1 text-[#2496DD] text-2xl mr-4">
        <p className=" font-bold hidden md:block">MikMovies</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
          />
        </svg>
      </div>

      <div className="flex p-2 w-full md:w-1/3 rounded-full border bg-gray-900 border-gray-700 space-x-2">
        <input
          onChange={(e) => setState(e.target.value)}
          id="search-bar"
          placeholder="Search e.g movies or TV shows"
          className="outline-none w-full px-4 text-gray-400 bg-gray-900 "
        />
        <Link
          href={state ? `/SearchMovie/${state}` : `/error/NoSearch`}
          passHref
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-300 bg-gray-900"
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
        </Link>
      </div>
      <div className="flex items-center md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default SearchBar;
