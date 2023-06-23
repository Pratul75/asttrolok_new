import PropTypes from "prop-types";

const Header = ({ bannerImage, primaryText, secondaryText }) => {
  return (
    <header className="w-full h-auto bg-[#EBF3FE] rounded-lg flex justify-between relative">
      <div className="px-8 py-16">
        <h4 className="font-semibold text-2xl">{primaryText}</h4>
        <p className="text-gray-500 font-light">{secondaryText}</p>
      </div>
      <div>
        <img className="absolute -top-7 right-14" src={bannerImage} alt="" />
      </div>
    </header>
  );
};

Header.propTypes = {
  bannerImage: PropTypes.string.isRequired, // Specify that bannerImage should be a string
  primaryText: PropTypes.string.isRequired,
  secondaryText: PropTypes.string.isRequired,
};

export default Header;
