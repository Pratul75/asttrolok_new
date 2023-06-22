import { InfoCard } from "../../../components";
import { LearningStatistics as LearningStatisticsIcon } from "../../../icons";
const LearningStatistics = () => {
  return (
    <div className="w-1/3 h-[40-vh] flex flex-col gap-4 shadow-md p-4 rounded-lg">
      <div>
        <h4 className="text-lg font-semibold">Learning Statistics</h4>
        <p className="text-sm"> Average Learning</p>
      </div>
      <LearningStatisticsIcon />

      <div>
        <InfoCard
          heading="Top Course"
          subHeading="Astrology"
          time="11:10 AM"
          icon="VB"
          color="bg-secondary"
        />
        <InfoCard
          heading="Best Astrologer"
          subHeading="Astrology"
          time="11:10 AM"
          icon="VB"
          color="bg-primary"
        />
        <InfoCard
          heading="Most Commented"
          subHeading="Astrology"
          time="11:10 AM"
          icon="VB"
          color="bg-info"
        />
      </div>
    </div>
  );
};

export default LearningStatistics;
