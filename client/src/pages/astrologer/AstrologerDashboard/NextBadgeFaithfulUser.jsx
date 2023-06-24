import { InfoCard } from "../../../components";
import { FaithfullUserChart } from "../../../icons";

const NextBadgeFaithfulUser = () => {
  return (
    <div className="w-full md:w-1/2 p-4 rounded-lg shadow-lg">
      <h4 className="text-[18px] font-semibold">Next Badge: Faithful User</h4>
      <p className="text-[14px]">Your upcoming events</p>
      <div className="p-4 w-full flex justify-center">
        <div className="py-8">
          <FaithfullUserChart />
        </div>
      </div>
      <div>
        <InfoCard
          heading="Top Course"
          subHeading="Astrology"
          time="11:10 AM"
          icon="VB"
          color="bg-primary"
        />
        <InfoCard
          heading="Best Astrologer"
          subHeading="Vanya Ojha"
          time="10:00 AM"
          icon="HR"
          color="bg-secondary"
        />
        <InfoCard
          heading="Most Commented"
          subHeading="Astrology"
          time="1:30 PM"
          icon="AB"
          color="bg-success"
        />
        <InfoCard
          heading="Top Course"
          subHeading="Astrology"
          time="11:10 AM"
          icon="VB"
          color="bg-warning"
        />
      </div>
    </div>
  );
};

export default NextBadgeFaithfulUser;
