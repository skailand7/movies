import Image from "next/image";
const Cover = ({ array }) => {
  const newImage = array.image.replace(
    "UX128_CR0,3,128,176_AL_.jpg",
    "Ratio0.6751_AL_.jpg"
  );
  newImage = newImage.replace(
    "UX128_CR0,4,128,176_AL_.jpg",
    "Ratio0.6751_AL_.jpg"
  );
  function kFormatter(num) {
    return Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(0) + "K"
      : Math.sign(num) * Math.abs(num);
  }
  return (
    <section>
      <div className="w-full h-[450px] lg:h-[550px] relative">
        <div className="hidden md:block absolute right-16 bottom-0 z-30">
          <Image
            width="200px"
            height="300px"
            alt="img"
            src={newImage}
            className="rounded-xl"
          />
        </div>
        <div className="bg-[#2496DD] rounded-xl origin-bottom -rotate-12 px-4 py-2 hidden md:block absolute right-[180px] bottom-[280px] z-30">
          <p className="text-center font-bold text-white">Featured</p>
        </div>
        <div className="w-full h-full object-cover">
          <Image
            src={`${newImage}`}
            alt="img"
            layout="fill"
            objectFit="cover"
            className="w-full h-full object-fit md:object-cover brightness-[.35]"
          ></Image>
        </div>
        <div className="absolute p-4 w-full bottom-0 bg-black/50 space-y-8">
          <div className="w-full md:w-1/2">
            <p className="text-white font-bold text-3xl">
              {array.title}
              <span className="text-gray-300 font-normal text-lg">
                ({array.year})
              </span>
            </p>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <p className="text-white">
                {array.imDbRating}{" "}
                <span className="text-gray-500">
                  ({kFormatter(array.imDbRatingCount)})
                </span>
              </p>
            </div>
          </div>
          <div className="w-full md:w-2/5">
            <p className="text-white text-xl font-bold">Cast:</p>
            <p className="text-white">{array.crew}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cover;
