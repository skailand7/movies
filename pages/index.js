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
  const [search, setSearch] = React.useState("red");
  const [selection, setSelection] = React.useState("MostPopularMovies");
  let title = "";

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
      //const item = data.results;

      setMovie(item);
    }
    fetchData();
  }, [selection]);

  return (
    <div className="bg-gray-900">
      <SearchBar setSearch={setSearch} search={search} />
      {movie.length > 0 ? <Cover array={arrMovie[rnd]} /> : <SkeletonCover />}

      <NavList setSelection={setSelection} />

      <ItemList>
        {movie.length > 0 ? (
          arrMovie.map((item) => {
            return <Item item={item} key={item.id} />;
          })
        ) : (
          <SkeletonSearch />
        )}
      </ItemList>
    </div>
  );
};

export default Index;
