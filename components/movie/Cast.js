import Image from "next/image";
const Cast = ({ item }) => {
  return (
    <div className="w-[250px] bg-gray-800 rounded-full">
      <div className="flex items-center">
        <div className="w-[80px] bg-white rounded-full flex items-center">
          <Image
            width="80"
            height="80"
            src={item.image}
            alt="img"
            className="w-16 h-16 rounded-full object-contain"
          />
        </div>
        <p className="font-semibold inline-block w-[200px] ml-4">{item.name}</p>
      </div>
    </div>
  );
};

export default Cast;
