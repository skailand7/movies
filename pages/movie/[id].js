import React from "react";
import Head from "next/dist/shared/lib/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import SkeletonIndex from "../../components/SkeletonItem/SkeletonIndex";
import Genres from "../../components/movie/Genres";
import Cast from "../../components/movie/Cast";
import Similars from "../../components/movie/Similars";

const Movie = () => {
  const [arr, setArr] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const router = useRouter();
  const { id } = router.query;
  const [see, setSee] = React.useState();
  const [trailer, setTrailer] = React.useState();
  React.useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await fetch(
        `https://imdb-api.com/en/API/Title/k_8ervbnor/${id}/Trailer`
      );
      const data = await response.json();

      const item = [];
      item.push(data);
      setArr(item);
      setLoading(false);
    }
    fetchData();
  }, [id]);

  React.useEffect(() => {
    async function fetchTrailer() {
      const response = await fetch(
        `https://imdb-api.com/en/API/YouTubeTrailer/k_8ervbnor/${id}`
      );
      const data = await response.json();
      const valueData = data.videoId;
      setTrailer(valueData);
    }
    fetchTrailer();
  }, []);

  if (!loading && arr) {
    const genresArr = arr[0].genres.split(",");
    const actorList = arr[0].actorList;
    const similars = arr[0].similars;
    actorList.length = 10;

    return (
      <div className="flex flex-col bg-gray-900 justify-center items-center">
        <Head>
          <title>{arr[0].title}</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;600;700&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <div className="w-full md:w-3/4">
          <div>
            <div className="relative">
              <div className="h-[620px] bg-gray-900">
                <Image
                  layout="fill"
                  objectFit="cover"
                  alt="img"
                  src={arr[0].image}
                />
                <div className="relative w-full">
                  <div className="w-8 h-8 flex items-center justify-center fixed top-4 left-4 md:left-32 lg:left-56 bg-gray-500/50 rounded-full z-30">
                    <Link href="/" passHref>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-400 "
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </Link>
                    <div className="w-8 h-8 flex items-center justify-center fixed top-4 right-4 md:right-32 lg:right-56 bg-gray-500/50 rounded-full z-30">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="hidden md:block absolute right-16 bottom-0 z-30">
                  <Image
                    width="200px"
                    height="300px"
                    alt="img"
                    src={arr[0].image}
                    className="rounded-xl"
                  />
                </div>
              </div>
              <div className="p-8 w-full h-screen absolute bottom-0 bg-gradient-to-t from-gray-900">
                <p className="absolute bottom-32 font-bold text-white text-2xl">
                  {arr[0].title}
                </p>
                <div className="flex space-x-4 absolute bottom-24 z-30 font-bold text-white">
                  {genresArr.map((item) => {
                    return <Genres item={item} key={item} />;
                  })}
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-0 mb-6 font-semibold text-white space-x-4">
              <div className="flex items-center space-x-1">
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="">{arr[0].runtimeStr}</p>
              </div>
              <p>|</p>
              <div className="flex items-center space-x-1">
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
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                <p>{arr[0].contentRating}</p>
              </div>
              <p>|</p>
              <div className="flex items-center space-x-1">
                <p>{arr[0].imDbRating}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </div>
            </div>
            <div className="px-4 bg-gray-900 space-x-4 w-auto flex overflow-x-auto overscroll-none text-gray-300">
              {actorList.map((item) => {
                return <Cast item={item} key={item.id} />;
              })}
            </div>
            <div className="mt-8 w-full h-auto px-8 -mt-[1px] text-white space-y-4">
              <p className="mt-8 font-bold  text-xl">Synopsis</p>
              <article>{arr[0].plot}</article>

              <p
                className="mt-4 font-semibold text-lg text-cyan-500"
                onClick={() => setSee(true)}
              >
                See Trailer
              </p>
              {see ? (
                <div className="w-full h-auto" id="see-trailer">
                  <iframe
                    src={`https://www.youtube.com/embed/${trailer}`}
                    className="w-full h-64"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : null}
            </div>
            <div className="px-8 space-y-4 mb-16 mt-8">
              <p className="text-white font-bold text-2xl">Recommend</p>
              <section className=" space-x-8 flex w-auto overflow-x-auto ">
                {similars.map((item) => {
                  return <Similars item={item} key={item.id} />;
                })}
              </section>
            </div>
            <div className="">
              <p className="text-center text-white">{arr[0].companies}</p>
            </div>
          </div>
        </div>
        <style>
          @import url(
          {`https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;600;700&display=swap`}
          );
        </style>
      </div>
    );
  } else {
    return <SkeletonIndex />;
  }
};

export default Movie;
