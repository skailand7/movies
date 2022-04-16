import React from "react";
import { useRouter } from "next/router";
import Item from "../../components/Item";
import SkeletonSearch from "../../components/SkeletonSearch/SkeletonSearch";
import SearchBar from "../../components/SearchBar";
import Link from "next/link";
import { stringify } from "postcss";

const Results = () => {
  const [searchedArr, setSearchedArr] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const router = useRouter();
  const { id } = router.query;
  React.useEffect(() => {
    async function fetchData() {
      if (id) {
        const response = await fetch(
          `https://imdb-api.com/en/API/SearchMovie/k_8ervbnor/${id}`
          //`https://imdb-api.com/en/API/SearchMovie/k_duhu3l50/${id}`
        );
        const data = await response.json();
        const items = data.results;
        localStorage.setItem("searched", JSON.stringify(items));
        setSearchedArr(items);
        setLoading(false);
      } else {
        const gotItems = localStorage.getItem("searched");
        setSearchedArr(JSON.parse(gotItems));
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (!loading) {
    return (
      <div className="flex flex-col bg-gray-900 justify-center items-center">
        <SearchBar />
        <section className="w-full md:w-3/4 h-screen overflow-y-auto bg-black text-white">
          <div className="px-4 py-2 flex space-x-4 items-center">
            <Link href="/" passHref>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
            </Link>
            <p className="font-semibold text-xl">
              Search results for{" "}
              <span className="italic text-sky-600">{id}</span> (
              {searchedArr.length})
            </p>
          </div>
          <div className="space-y-8 p-4">
            {searchedArr.map((item) => {
              return <Item item={item} key={item.id} />;
            })}
          </div>
        </section>
      </div>
    );
  } else {
    return <SkeletonSearch />;
  }
};

export default Results;
