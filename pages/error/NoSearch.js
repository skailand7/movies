import Image from "next/image";
import Link from "next/link";
const NoSearch = () => {
  return (
    <div className="bg-gray-800 w-full h-screen flex flex-col items-center justify-center">
      <p className="text-gray-200 font-semibold text-2xl">Not matches found</p>
      <Image
        width="350px"
        height="350px"
        src="https://cdn3.iconfinder.com/data/icons/robot-mascot-character-1/100/Blue_robot_v3_01_4-512.png"
      ></Image>
      <Link href="/">
        <a className="w-[150px] bg-[#2496DD] text-center text-lg outline-none text-white font-semibold px-4 py-3 rounded-full">
          Return
        </a>
      </Link>
    </div>
  );
};

export default NoSearch;
