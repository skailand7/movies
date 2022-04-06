import React from "react";
import Cover from "../components/Cover";
import Item from "../components/Item";
import MyApp from "./_app.js";
import NavList from "../components/NavList";
import ItemList from "../components/ItemList";
import SearchBar from "../components/SearchBar";
import SkeletonCover from "../components/SkeletonCover/SkeletonCover";
import SkeletonSearch from "../components/SkeletonSearch/SkeletonSearch";

const mostPopular = [
  {
    id: "tt1877830",
    rank: "1",
    rankUpDown: "0",
    title: "The Batman",
    fullTitle: "The Batman (2022)",
    year: "2022",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_UX128_CR0,3,128,176_AL_.jpg",
    crew: "Matt Reeves (dir.), Robert Pattinson, Zoë Kravitz",
    imDbRating: "8.4",
    imDbRatingCount: "278245",
  },
  {
    id: "tt2463208",
    rank: "2",
    rankUpDown: "0",
    title: "The Adam Project",
    fullTitle: "The Adam Project (2022)",
    year: "2022",
    image:
      "https://m.media-amazon.com/images/M/MV5BOWM0YWMwMDQtMjE5NS00ZTIwLWE1NWEtODViMWZjMWI2OTU3XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX128_CR0,3,128,176_AL_.jpg",
    crew: "Shawn Levy (dir.), Ryan Reynolds, Walker Scobell",
    imDbRating: "6.8",
    imDbRatingCount: "95250",
  },
];

const Index = () => {
  const [movie, setMovie] = React.useState([]);
  const [search, setSearch] = React.useState("red");
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
