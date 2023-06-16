import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const SidebarItem = ({ Icon, text, link, itemExpanded }) => {
  const buttonClasses = `
    flex items-center px-4 py-4 rounded-lg  ${
      itemExpanded
        ? "bg-blue-500 hover:bg-blue-700 text-white"
        : "bg-white text-black hover:bg-gray-200"
    }
  `;

  const iconClasses = "w-6 h-6";
  const textClasses = "ml-2 text-sm font-light";

  return (
    <NavLink
      className={buttonClasses}
      activeClassName={
        itemExpanded ? "bg-blue-500 hover:bg-blue-700 text-white" : ""
      }
      exact
      to={link}
    >
      {Icon && <Icon className={iconClasses} />}
      {itemExpanded && (
        <span className={`${textClasses} ${itemExpanded ? "pl-2" : ""}`}>
          {text}
        </span>
      )}
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
