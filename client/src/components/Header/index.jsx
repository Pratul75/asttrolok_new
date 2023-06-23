const Header = ({ bannerImage, primaryText, secondaryText }) => {
  return (
    <header className="w-full h-auto bg-[#EBF3FE] rounded-lg flex justify-between relative">
      <div className="px-8 py-16">
        <h4 className="font-semibold text-2xl">Birth Details</h4>
        <p className="text-gray-500 font-light">Enter Birth Details</p>
      </div>
      <div>
        <img
          className="absolute -top-7 right-14"
          //   src={BirthDetailsImage}
          alt=""
        />
      </div>
    </header>
  );
};

export default Header;
