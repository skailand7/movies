import Link from "next/link";
import Image from "next/image";
const Item = ({ item }) => {
  const title = item.title;
  return (
    <Link href={`/movie/${item.id}`} passHref>
      <div className="h-auto bg-gray-900 flex rounded-xl items-center">
        <div className="flex items-center h-auto w-auto bg-gray-800">
          <Image
            src={item.image}
            width="120"
            height="140"
            alt="img"
            className="h-32 w-32 object-cover rounded-l-xl"
          />
        </div>

        <div className="w-3/5 text-white flex flex-col md:space-y-8 pl-4">
          <div className="w-full">
            <p
              className={`font-bold ${
                title.length > 15 ? "text-md" : "text-lg"
              }`}
            >
              {item.title}
              {item.year ? (
                <span className="text-sm text-gray-500"> {item.year} </span>
              ) : null}
            </p>
            <div className="flex items-center space-x-2">
              {item.imDbRating > 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mt-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              )}

              {item.imDbRating > 0 ? (
                <p>{item.imDbRating}</p>
              ) : (
                <div className="mt-4 flex items-center space-x-4">
                  {item.contentRating ? (
                    <p className="border border-gray-500 rounded-xl px-1">
                      {item.contentRating}
                    </p>
                  ) : null}

                  <p>{item.runtimeStr ? item.runtimeStr : item.description}</p>
                </div>
              )}
            </div>
          </div>
          <p className="text-sm md:text-md">{item.crew}</p>
        </div>
      </div>
    </Link>
  );
};

export default Item;
