import SkeletonSearch from "./SkeletonSearch/SkeletonSearch";

const ItemList = ({ children }) => {
  return (
    <section className=" h-auto w-full space-y-4 p-4 bg-gray-800">
      {children}
    </section>
  );
};

export default ItemList;
