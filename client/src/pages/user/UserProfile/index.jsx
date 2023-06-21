import UserProfileBanner from "../../../assets/userProfileBanner.png";
import ChangeProfile from "./ChangeProfile";
import ChangePassword from "./ChangePassword";
import PersonalDetails from "./PersonalDetails";

const UserProfile = () => {
  return (
    <>
      {/* header */}
      <header className="w-full h-auto py-8 px-8 bg-blue-100 rounded-lg mt-8">
        <div className="w-full flex justify-between relative">
          {/* left side */}
          <div className="flex flex-col gap-4">
            <h4 className="text-2xl">User Profile</h4>
            <p className="text-sm">Account Settings</p>
          </div>
          {/* right side */}
          <div className="absolute right-0 -top-28">
            {/* Image */}
            <img src={UserProfileBanner} alt="user profile banner" />
          </div>
        </div>
      </header>
      <section className="mt-12 w-full flex justify-center mx-auto ">
        <div className="w-3/4 flex flex-wrap gap-4 bg-base-100 p-8  rounded-lg">
          {/* first row */}
          <div className="flex gap-4 w-full">
            {/* change profile */}
            <ChangeProfile />

            {/* change password */}
            <ChangePassword />
          </div>
          {/* personal details */}
          <PersonalDetails />
        </div>
      </section>
    </>
  );
};

export default UserProfile;
