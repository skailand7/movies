const SkeletonIndex = () => {
  return (
    <div className="flex flex-col bg-gray-900 justify-center items-center">
      <section className="w-full md:w-3/4 bg-gray-900 h-screen p-8 space-y-8">
        <div className="w-full h-[400px] bg-gray-800 animate-pulse"></div>
        <div className="w-full h-8 bg-gray-800 animate-pulse"></div>
        <div className="flex space-x-8">
          <div className="w-full h-8 bg-gray-800 animate-pulse"></div>
          <div className="w-full h-8 bg-gray-800 animate-pulse"></div>
        </div>
        <div className="flex space-x-4">
          <div className="w-full h-64 bg-gray-800 animate-pulse"></div>
          <div className="w-full h-64 bg-gray-800 animate-pulse"></div>
        </div>
      </section>
    </div>
  );
};

export default SkeletonIndex;
