const NavItem = ({ title, option, setSelection }) => {
  {
    console.log(option);
  }
  return (
    <div
      className="rounded-full border border-white w-auto p-4 flex justify-center hover:text-[#2496DD] hover:border-[#2496DD]"
      onClick={() => setSelection({ option })}
    >
      <p className="inline-block w-[160px] text-center">{title}</p>
    </div>
  );
};

export default NavItem;
