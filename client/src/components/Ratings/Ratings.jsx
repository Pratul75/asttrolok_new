import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import PropTypes from "prop-types";

const Ratings = ({ rating }) => {
  const renderRatingStars = () => {
    const MAX_STARS = 5;
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = MAX_STARS - fullStars - (hasHalfStar ? 1 : 0);

    const stars = [];

    // Render full stars with yellow background
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="text-yellow-400" />);
    }

    // Render half star if applicable
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half-star" className="text-yellow-400" />);
    }

    // Render empty stars with yellow outline
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <FaRegStar
          key={`empty-star-${i}`}
          className="border-[1px] border-yellow-400"
        />
      );
    }

    return stars;
  };

  return <div className="flex gap-1">{renderRatingStars()}</div>;
};

Ratings.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Ratings;
