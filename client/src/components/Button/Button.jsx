import PropTypes from "prop-types";

const Button = ({ label, onClick, variant, disabled }) => {
  return (
    <button
      className={`btn ${variant} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  variant: "btn-primary",
  disabled: false,
};

export default Button;
