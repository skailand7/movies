const Cast = ({ item }) => {
  return (
    <div className="w-[250px] bg-gray-800 rounded-full ">
      <div className="flex items-center">
        <div className="w-[80px]">
          <img
            src={item.image}
            className="w-16 h-16 rounded-full object-contain"
          />
        </div>
        <p className="font-semibold inline-block w-[200px]">{item.name}</p>
      </div>
    </div>
  );
};

export default Cast;
