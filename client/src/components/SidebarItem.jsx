import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

// specific to sidebar only
const SidebarItem = ({ Icon, text, link, itemExpanded }) => {
  const NavlinkClasses = (active, expanded) => {
    if (active && expanded) {
      return "flex px-6 py-2 rounded-lg items-center w-full bg-blue-400 ";
    }
    if (!active && expanded)
      return "flex px-6 py-2 rounded-lg items-center w-full text-white hover:text-white hover:bg-blue-100 bg-blue-50";
    if (active && !expanded) {
      return "flex rounded-lg items-center bg-blue-200  hover:bg-blue-200 ";
    }
  };

  return (
    <div className="w-full">
      <NavLink
        className={({ isActive }) => NavlinkClasses(isActive, itemExpanded)}
        exact
        to={link}
      >
        {Icon && (
          <button className="btn btn-ghost  text-black">
            <Icon className="w-8 h-8 " />
          </button>
        )}

        {itemExpanded && Icon && <span className="text-black">{text}</span>}
      </NavLink>
    </div>
  );
};

// Sidebar specific props
SidebarItem.propTypes = {
  Icon: PropTypes.elementType,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  itemExpanded: PropTypes.bool.isRequired,
};

export default SidebarItem;
