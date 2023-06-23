import PropTypes from "prop-types";

const InfoCard = ({ heading, subHeading, time, icon, color,handleItemClick }) => {
  return (
    <div onClick={handleItemClick} className="flex justify-between cursor-pointer items-center my-4 hover:bg-gray-100 px-4 py-2 rounded-lg ">
      <div className="flex gap-4">
        {/* avatar */}
        <div className="avatar placeholder">
          <div className={`${color} text-neutral-content rounded-full w-12`}>
            <span>{icon}</span>
          </div>
        </div>
        {/* info  */}
        <div>
          <h4 className="text-[16px]   font-semibold">{heading}</h4>
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
  color: PropTypes.string.isRequired,
};

export default InfoCard;
