const NavList = ({ setSelection }) => {
  return (
    <div className="bg-gray-900 text-white flex w-full space-x-4 overflow-x-auto overflow-y-hidden font-semibold p-4 items-center">
      <div
        className="rounded-full border border-white w-auto p-4 flex justify-center"
        onClick={() => setSelection("MostPopularMovies")}
      >
        <p className="inline-block w-[160px] text-center">
          Most Popular Movies
        </p>
      </div>
      <div
        className="rounded-full border border-white w-auto p-4 flex justify-center"
        onClick={() => setSelection("ComingSoon")}
      >
        <p className="inline-block w-[160px] text-center">Coming Soon</p>
      </div>
      <div
        className="rounded-full border border-white w-auto p-4 flex justify-center"
        onClick={() => setSelection("InTheaters")}
      >
        <p className="inline-block w-[160px] text-center">In Theaters</p>
      </div>
    </div>
  );
};

export default NavList;
