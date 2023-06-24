import { BsThreeDotsVertical } from "react-icons/bs";
import PropTypes from "prop-types";
const CourseListCard = ({
  cardImage,
  courseName,
  coursePrice,
  courseCategory,
  courseInstructor,
  courseDate,
}) => {
  return (
    <div className="w-1/3 shadow pb-4">
      <img className="rounded-t-lg" src={cardImage} />
      <div className="p-4 h-auto flex justify-between relative ">
        <div className="avatar placeholder absolute -top-8">
          <div className="bg-primary text-neutral-content rounded-full w-12">
            <span>MX</span>
          </div>
        </div>
        <div className="w-full cursor-pointer">
          <BsThreeDotsVertical className="float-right" />
        </div>
      </div>
      <div className="flex w-full justify-between mt-2 px-2">
        <p className="font-thin underline">{courseName}</p>
        <p className=" font-bold text-2xl  text-[#3B64DC]">{coursePrice}</p>
      </div>
      <div className="flex w-full justify-between mt-2 px-2">
        <div className="flex flex-col mt-4">
          <span className="font-thin">Category:</span>
          <p className="font-medium">{courseCategory}</p>
        </div>
        <div className="flex flex-col mt-4">
          <span className="font-thin">Instructor:</span>
          <p className="font-medium">{courseInstructor}</p>
        </div>
      </div>

      <div className="flex w-full gap-4 mt-8 px-2 justify-between">
        {/* not required for now  */}
        {/* <div className="flex gap-5">
          <div className="flex  justify-between items-center gap-4">
            <BsEye />
            <span>{courseTotalViews}</span>
          </div>
          <div className="flex gap-4 justify-between items-center">
            <BsChatLeftDots />
            <span>3</span>
          </div>
        </div> */}
        <div>
          <span>{courseDate}</span>
        </div>
      </div>
    </div>
  );
};
CourseListCard.propTypes = {
  cardImage: PropTypes.string.isRequired,
  courseName: PropTypes.string.isRequired,
  coursePrice: PropTypes.string.isRequired,
  courseCategory: PropTypes.string.isRequired,
  courseInstructor: PropTypes.string.isRequired,
  courseTotalViews: PropTypes.number.isRequired,
  courseDate: PropTypes.string.isRequired,
};
export default CourseListCard;
