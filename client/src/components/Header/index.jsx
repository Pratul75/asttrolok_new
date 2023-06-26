import PropTypes from "prop-types";
import { useSelector } from "react-redux";
const Header = ({ bannerImage, primaryText, secondaryText }) => {
  const darkMode = useSelector((x) => x.appConfig.darkMode);
  console.log("DARK MODE: ", darkMode);
  return (
    <header
      className={`${
        !darkMode ? "bg-[#EBF3FE]" : "bg-[#24272a]"
      } w-full h-auto rounded-lg flex justify-between relative`}
    >
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
