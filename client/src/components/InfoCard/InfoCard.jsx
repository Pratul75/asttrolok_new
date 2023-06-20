import PropTypes from "prop-types";

const InfoCard = ({ heading, subHeading, time, icon }) => {
  return (
    <div className="flex justify-between items-center my-4">
      <div className="flex gap-4">
        {/* avatar */}
        <div className="avatar placeholder">
          <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
            <span>{icon}</span>
          </div>
        </div>
        {/* info  */}
        <div>
          <h4 className="text-[16px] font-semibold">{heading}</h4>
          <p>{subHeading}</p>
        </div>
      </div>
      <div>
        <p className="font-extralight">{time}</p>
      </div>
    </div>
  );
};

InfoCard.propTypes = {
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};

export default InfoCard;