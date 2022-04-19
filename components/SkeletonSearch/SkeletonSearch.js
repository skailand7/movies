const SkeletonSearch = () => {
  return (
    <div className="flex flex-col bg-gray-900 justify-center items-center">
      <section className="w-full md:w-3/4 bg-gray-900 h-screen p-8 space-y-8">
        <div className="flex space-x-4 mt-24 animate-pulse">
          <div className="w-64 h-32 md:h-44 bg-gray-800"></div>
          <div className="flex flex-col justify-between w-3/5">
            <div className="space-y-4">
              <div className="w-full h-4 bg-gray-800 animate-pulse"></div>
              <div className="w-full h-4 bg-gray-800 animate-pulse"></div>
            </div>
            <div className="w-full h-8 bg-gray-800 animate-pulse"></div>
          </div>
        </div>
        <div className="flex space-x-4 mt-24 animate-pulse">
          <div className="w-64 h-32 md:h-44 bg-gray-800"></div>
          <div className="flex flex-col justify-between w-3/5">
            <div className="space-y-4">
              <div className="w-full h-4 bg-gray-800 animate-pulse"></div>
              <div className="w-full h-4 bg-gray-800 animate-pulse"></div>
            </div>
            <div className="w-full h-8 bg-gray-800 animate-pulse"></div>
          </div>
        </div>
        <div className="flex space-x-4 mt-24 animate-pulse">
          <div className="w-64 h-32 md:h-44 bg-gray-800"></div>
          <div className="flex flex-col justify-between w-3/5">
            <div className="space-y-4">
              <div className="w-full h-4 bg-gray-800 animate-pulse"></div>
              <div className="w-full h-4 bg-gray-800 animate-pulse"></div>
            </div>
            <div className="w-full h-8 bg-gray-800 animate-pulse"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkeletonSearch;
