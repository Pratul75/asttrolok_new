import PropTypes from "prop-types";
import { Avatar, Ratings } from "../../components";
const ReviewCard = ({ name, rating, review }) => {
  return (
    <div className="p-4 border-[1px] border-gray-300 rounded-lg mx-3">
      <div className="w-full flex justify-between">
        <div className="flex items-center gap-2">
          <Avatar initials="VB" />
          <span>{name}</span>
        </div>

        <div>
          <Ratings rating={rating} />
        </div>
      </div>
      <div className="w-full mt-4">
        <p>{review}</p>
      </div>
    </div>
  );
};

ReviewCard.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  review: PropTypes.string.isRequired,
};
export default ReviewCard;
