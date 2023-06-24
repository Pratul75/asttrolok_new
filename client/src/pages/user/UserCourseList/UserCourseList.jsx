import UserProfileBanner from "../../../assets/userProfileBanner.png";
import { Header } from "../../../components";
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
          <div className="w-full flex flex-wrap bg-teal-400">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCourseList;
