import AstrologerProfileBanner from "../../../assets/astrologerDetailsBanner.png";
import ChangeProfile from "./ChangeProfile";
import ChangePassword from "./ChangePassword";
import PersonalDetails from "./PersonalDetails";
import { Header } from "../../../components";
const AstrologerDetails = () => {
  return (
    <>
      {/* header */}
      <Header className="mt-5"
        bannerImage={AstrologerProfileBanner}
        primaryText="Astrologer Details"
        secondaryText="Details Settings"
      />
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

export default AstrologerDetails;
