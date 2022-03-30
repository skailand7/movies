import React from "react";
import { useRouter } from "next/router";
import Item from "../../components/Item";
import SkeletonSearch from "../../components/SkeletonSearch/SkeletonSearch";

const Results = () => {
  const [searchedArr, setSearchedArr] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const router = useRouter();
  const { id } = router.query;
  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://imdb-api.com/en/API/SearchMovie/k_8ervbnor/${id}`
      );
      const data = await response.json();
      const items = data.results;
      setSearchedArr(items);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (!loading) {
    return (
      <section className="w-full h-screen overflow-y-auto bg-black text-white">
        <div>
          <p className="font-semibold text-xl">
            Search Results ({searchedArr.length})
          </p>
        </div>
        <div className="space-y-8 p-4">
          {searchedArr.map((item) => {
            return <Item item={item} key={item.id} />;
          })}
        </div>
      </section>
    );
  } else {
    return <SkeletonSearch />;
  }
};

export default Results;
