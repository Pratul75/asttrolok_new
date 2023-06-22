import { Table } from "../../../components";
import TotalConsultation from "./TotalConsultation";
import UpcomingConsultation from "./UpcomingConsultation";
import NextBadgeFaithfulUser from "./NextBadgeFaithfulUser";
import UserLearningStatistics from "./UserLearningStatistics";
import YearlyLearning from "./YearlyLearning";
import RecentTransactions from "./RecentTransactions";
import UserDashboardBanner from "./UserDashboardBanner";

const UserDashboard = () => {
  return (
    <div className="mx-auto">
      {/* first row */}
      <div className="flex flex-col md:flex-row gap-4 w-full py-8">
        <UserDashboardBanner />
      </div>
      <div className="flex flex-wrap  w-full gap-4">
        {/* second row */}
        <div className="md:w-full flex flex-wrap md:flex-nowrap justify-between gap-4">
          {/* total consultation */}
          <TotalConsultation />
          {/* upcoming consultation */}
          <UpcomingConsultation />
          {/* Next badge faithful user */}
          <NextBadgeFaithfulUser />
        </div>

        {/* third row */}
        <div className="w-full flex gap-4 ">
          {/* learning statistics */}
          <UserLearningStatistics />
          {/* yearly learning */}
          <YearlyLearning />
          {/* rescent transaction */}
          <RecentTransactions />
        </div>
      </div>
      <Table />
    </div>
  );
};

export default UserDashboard;
