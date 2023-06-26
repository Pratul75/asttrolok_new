import AstrologerProfileBanner from "../../../assets/astrologerProfileBanner.png";
import { Header } from "../../../components";
import AstrologerChangeProfile from "./AstrologerChangeProfile";
import AstrologerChangePassword from "./AstrologerChangePassword";
import AstrologerServicesAnsSpecialization from "./AstrologerServicesAndSpecialization.jsx";
import AstrologerEducation from "./AstrologerEducation";
import AstrologerExperience from "./AstrologerExperience";
import AsrtologerAdditionalWork from "./AstrologerAdditionalWork";
const AstrologerProfile = () => {
  return (
    <div>
      <Header
        primaryText="AstrologerProfile"
        secondaryText="Account Settings"
        bannerImage={AstrologerProfileBanner}
      />
      <section className="mt-12 w-full flex justify-center mx-auto ">
        <div className="w-3/4 flex flex-wrap gap-4 bg-base-100 p-8  rounded-lg">
          {/* first row */}
          <div className="flex gap-4 w-full">
            {/* change profile */}
            <AstrologerChangeProfile />

            {/* change password */}
            <AstrologerChangePassword />
          </div>
          {/* personal details */}
          <AstrologerServicesAnsSpecialization />
          {/* astrologer education */}
          <AstrologerEducation />
          {/* astrologer experience */}
          <AstrologerExperience />
          {/* astrologer additional work */}
          <AsrtologerAdditionalWork />
          <div className="flex justify-end  w-full gap-4 mt-4">
            <button className="btn btn-info text-white">Save</button>
            <button className="btn btn-error text-white btn-outline">
              Cancel
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AstrologerProfile;
