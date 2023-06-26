import PropTypes from "prop-types";
import { getRandomColor } from "../../utilities";
// default size is w-8, can be added as prop
const Avatar = ({ initials, size = "w-8" }) => {
  return (
    <div className="avatar placeholder">
      <div
        className={`${getRandomColor()}  text-neutral-content rounded-full ${size}`}
      >
        <span className="text-xs">{initials}</span>
      </div>
    </div>
  );
};

Avatar.propTypes = {
  initials: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

export default Avatar;
