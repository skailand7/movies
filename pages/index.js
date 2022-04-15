import React from "react";
import Cover from "../components/Cover";
import Item from "../components/Item";
import MyApp from "./_app.js";
import NavList from "../components/NavList";
import ItemList from "../components/ItemList";
import SearchBar from "../components/SearchBar";
import SkeletonCover from "../components/SkeletonCover/SkeletonCover";
import SkeletonSearch from "../components/SkeletonSearch/SkeletonSearch";

const Index = () => {
  const [movie, setMovie] = React.useState([]);
  const [selection, setSelection] = React.useState("MostPopularMovies");

  const arrMovie = [...movie];
  arrMovie.length = 10;
  const rnd = Math.floor(Math.random() * 5);

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        //`https://imdb-api.com/en/API/${selection}/k_8ervbnor`
        `https://imdb-api.com/en/API/${selection}/k_duhu3l50`
        //`https://imdb-api.com/en/API/SearchMovie/k_duhu3l50/${search}`
        //"www.google.com"
      );
      const data = await response.json();
      const item = data.items;

      setMovie(item);
    }
    fetchData();
  }, [selection]);

  return (
    <div className="flex flex-col bg-gray-900 justify-center items-center">
      <div className="w-full md:w-3/4">
        <SearchBar />
        {movie.length > 0 ? <Cover array={arrMovie[rnd]} /> : <SkeletonCover />}

        <NavList selection={selection} setSelection={setSelection} />

        <ItemList>
          {movie.length > 0 ? (
            arrMovie.map((item) => {
              return <Item item={item} key={item.id} />;
            })
          ) : (
            <SkeletonSearch />
          )}
        </ItemList>
        <div className="w-full p-2 text-gray-500 font-semibold text-center">
          <p>Made with tons of 💙 by Mikcode | 2022</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
