import { FiSearch } from "react-icons/fi";
import { InfoCard } from "../../../components";
const BirthDetailsSidebar = () => {
  return (
    <div className="w-1/3 shadow rounded-lg border-r-[2px] mt-4 p-4 relative">
      <div className="form-control">
        <input type="text" className="input w-full" placeholder="Search" />
        <FiSearch className="w-5 h-5 text-gray-400 absolute right-8 top-7" />
      </div>
      <div className="h-[70vh] overflow-y-auto px-3 py-2">
        <InfoCard
          color="bg-primary"
          heading="Vishesh Bajpayee"
          subHeading="vishesh@test.com"
          icon="VB"
        />
        <InfoCard
          color="bg-info"
          heading="Test Subject"
          subHeading="def@test.com"
          icon="VB"
        />
        <InfoCard
          color="bg-accent"
          heading="Newer Name"
          subHeading="abc@test.com"
          icon="VB"
        />
        <InfoCard
          color="bg-primary"
          heading="Vishesh Bajpayee"
          subHeading="vishesh@test.com"
          icon="VB"
        />
        <InfoCard
          color="bg-info"
          heading="Test Subject"
          subHeading="def@test.com"
          icon="VB"
        />
        <InfoCard
          color="bg-accent"
          heading="Newer Name"
          subHeading="abc@test.com"
          icon="VB"
        />
        <InfoCard
          color="bg-warning"
          heading="Awesome Bro"
          subHeading="vishesh@test.com"
          icon="VB"
        />
        <InfoCard
          color="bg-secondary"
          heading="Cool Dude"
          subHeading="red@test.com"
          icon="VB"
        />
        <InfoCard
          color="bg-primary"
          heading="Vishesh Bajpayee"
          subHeading="vishesh@test.com"
          icon="VB"
        />
        <InfoCard
          color="bg-info"
          heading="Test Subject"
          subHeading="def@test.com"
          icon="VB"
        />
        <InfoCard
          color="bg-accent"
          heading="Newer Name"
          subHeading="abc@test.com"
          icon="VB"
        />
        <InfoCard
          color="bg-warning"
          heading="Awesome Bro"
          subHeading="vishesh@test.com"
          icon="VB"
        />
        <InfoCard
          color="bg-secondary"
          heading="Cool Dude"
          subHeading="red@test.com"
          icon="VB"
        />
      </div>
    </div>
  );
};

export default BirthDetailsSidebar;
