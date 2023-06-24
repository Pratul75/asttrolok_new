import UserProfileBanner from "../../../assets/userProfileBanner.png";
import ImageOne from "../../../assets/courseList/ImageOne.png";
import ImageTwo from "../../../assets/courseList/ImageTwo.png";
import ImageThree from "../../../assets/courseList/ImageThree.png";
import ImageFour from "../../../assets/courseList/ImageFour.png";
import ImageFive from "../../../assets/courseList/ImageFive.png";
import ImageSix from "../../../assets/courseList/ImageSix.png";
import ImageSeven from "../../../assets/courseList/ImageSeven.png";
import ImageEight from "../../../assets/courseList/ImageEight.png";
import ImageNine from "../../../assets/courseList/ImageNine.png";
import { Header, CourseListCard } from "../../../components";
const UserCourseList = () => {
  return (
    <div>
      <Header
        bannerImage={UserProfileBanner}
        primaryText="Courses List"
        secondaryText="List of Courses"
      />
      <div className="mt-8">
        <h4 className="font-semibold">My Purchases</h4>
        <div className="mt-4">
          <div className="w-full flex  flex-wrap ">
            <CourseListCard
              cardImage={ImageOne}
              courseName="Astro Shiromani"
              coursePrice="$59,000"
              courseCategory="Numerology Course"
              courseInstructor="Mr. Alok Khandelwal"
              courseDate="27 May 2023"
              courseTotalViews="1231"
            />
            <CourseListCard
              cardImage={ImageTwo}
              courseName="Astro Shiromani"
              coursePrice="$59,000"
              courseCategory="Astrology Basic"
              courseInstructor="Mr. Alok Khandelwal"
              courseDate="27 May 2023"
              courseTotalViews="3211"
            />
            <CourseListCard
              cardImage={ImageThree}
              courseName="Astro Shiromani"
              coursePrice="$59,000"
              courseCategory="Astrology Basic"
              courseInstructor="Mr. Alok Khandelwal"
              courseDate="27 May 2023"
              courseTotalViews="3211"
            />
            <CourseListCard
              cardImage={ImageFour}
              courseName="Astro Shiromani"
              coursePrice="$59,000"
              courseCategory="Astrology Basic"
              courseInstructor="Mr. Alok Khandelwal"
              courseDate="27 May 2023"
              courseTotalViews="3211"
            />
            <CourseListCard
              cardImage={ImageFive}
              courseName="Astro Shiromani"
              coursePrice="$59,000"
              courseCategory="Astrology Basic"
              courseInstructor="Mr. Alok Khandelwal"
              courseDate="27 May 2023"
              courseTotalViews="3211"
            />
            <CourseListCard
              cardImage={ImageSix}
              courseName="Astro Shiromani"
              coursePrice="$59,000"
              courseCategory="Astrology Basic"
              courseInstructor="Mr. Alok Khandelwal"
              courseDate="27 May 2023"
              courseTotalViews="3211"
            />
            <CourseListCard
              cardImage={ImageSeven}
              courseName="Astro Shiromani"
              coursePrice="$59,000"
              courseCategory="Astrology Basic"
              courseInstructor="Mr. Alok Khandelwal"
              courseDate="27 May 2023"
              courseTotalViews="3211"
            />
            <CourseListCard
              cardImage={ImageEight}
              courseName="Astro Shiromani"
              coursePrice="$59,000"
              courseCategory="Astrology Basic"
              courseInstructor="Mr. Alok Khandelwal"
              courseDate="27 May 2023"
              courseTotalViews="3211"
            />
            <CourseListCard
              cardImage={ImageNine}
              courseName="Astro Shiromani"
              coursePrice="$59,000"
              courseCategory="Astrology Basic"
              courseInstructor="Mr. Alok Khandelwal"
              courseDate="27 May 2023"
              courseTotalViews="3211"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCourseList;
