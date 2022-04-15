import NavItem from "./NavItem";

const arrSelection = [
  {
    title: "Trending",
    option: "MostPopularMovies",
  },
  {
    title: "Coming Soon",
    option: "ComingSoon",
  },
  {
    title: "In Theaters",
    option: "InTheaters",
  },
];

const NavList = ({ setSelection }) => {
  return (
    <div className="bg-gray-900 text-white flex w-full space-x-4 overflow-x-auto overflow-y-hidden font-semibold p-4 items-center">
      {arrSelection.map((item) => {
        return (
          <NavItem
            title={item.title}
            option={item.option}
            setSelection={setSelection}
            key={item.title}
          />
        );
      })}
    </div>
  );
};

export default NavList;
