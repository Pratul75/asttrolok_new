import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const SidebarItem = ({ Icon, text, link, itemExpanded }) => {
  return (
    <NavLink
      className={({ isActive }) => isActive && "bg-blue-500 rounded-lg px-4"}
      exact
      to={link}
    >
      {Icon && (
        <button className="btn btn-ghost">
          <Icon />
        </button>
      )}

      {itemExpanded && Icon && <span>{text}</span>}
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



