const SkeletonIndex = () => {
  return (
    <section className="bg-gray-900 h-screen p-8 space-y-8">
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
  );
};

export default SkeletonIndex;
