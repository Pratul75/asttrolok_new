import PropTypes from "prop-types";

const Avatar = ({ initials }) => {
  return (
    <div className="avatar placeholder">
      <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
        <span className="text-xs">{initials}</span>
      </div>
    </div>
  );
};

Avatar.propTypes = {
  initials: PropTypes.string.isRequired,
};

export default Avatar;
