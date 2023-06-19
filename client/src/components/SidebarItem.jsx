import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const SidebarItem = ({ Icon, text, link, itemExpanded }) => {
  const sidebarHandler = (active, expanded) => {
    if (active && expanded) {
      return "flex px-6 py-2 rounded-lg items-center w-full bg-teal-400";
    }
    if (!active)
      return "flex px-6 py-2 rounded-lg items-center  hover:bg-teal-200 ";
    if (expanded) {
      return "flex  rounded-lg items-center  hover:bg-teal-200 ";
    }
  };

  return (
    <NavLink
      className={({ isActive }) => sidebarHandler(isActive, itemExpanded)}
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
