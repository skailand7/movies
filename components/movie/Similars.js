import Image from "next/image";
import Link from "next/link";
const Similars = ({ item }) => {
  return (
    <Link href={`/movie/${item.id}`} passHref>
      <div className="flex flex-col items-center bg-gray-800 rounded-xl text-white w-48">
        <div className="">
          <Image
            width="192"
            height="256"
            src={item.image}
            alt="img"
            className="h-64 w-48 rounded-t-xl"
          />
        </div>
        <div className="flex flex-col items-center justify-center pb-1">
          <p className="inline-block w-[200px] text-center px-4 py-2 font-bold">
            {item.title}
          </p>
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-yellow-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <p>{item.imDbRating}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Similars;
