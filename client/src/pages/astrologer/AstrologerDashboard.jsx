import TotalConsultation from "../user/UserDashboard/TotalConsultation";
import UpcomingConsultation from "../user/UserCourseList/UserCourseList";
import NextBadgeFaithfulUser from "../user/UserDashboard/NextBadgeFaithfulUser";
import UserLearningStatistics from "../user/UserDashboard/UserLearningStatistics";
import YearlyLearning from "../user/UserDashboard/YearlyLearning";
import RecentTransactions from "../user/UserDashboard/RecentTransactions";
import UserDashboardBanner from "../user/UserDashboard/UserDashboardBanner";

const AstrologerDashboard = () => {
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
    </div>
  );
};

export default AstrologerDashboard;
