import { useEffect, useState } from "react";
import DashboardBanner from "../../../assets/dashboardBanner.png";
import axios from "axios";
import {
  CalendarPicker,
  InfoCard,
  RecentTransactionItem,
  Table,
} from "../../../components";
import {
  FundsChartIcon,
  SalesBarChart,
  LearningStatistics,
  FaithfullUserChart,
  TodayConsultationChart,
  YearlyLearningChart,
  TotalFundBox,
} from "../../../icons";

const UserDashboard = () => {
  const [consultations, setConsultations] = useState(false);

  const getUserConsultations = async () => {
    try {
      const res = await axios.get(
        `http://localhost:4000/api/users/allConsultationsOfUser`,
        {
          headers: {
            "Content-Type": "application/json", // Set the default Content-Type header
            // Add any additional headers you need
            role: JSON.parse(localStorage.getItem("user"))?.role,
            Authorization: JSON.parse(localStorage.getItem("token"))?.token,
          },
        }
      );

      console.log("allConsultationsOfUser", res);
      if (res?.data?.errorCode === 200) {
        setConsultations(res?.data?.data.length);
      }
    } catch (error) {
      console.log(error?.response?.data);
      if (error?.response?.data?.errorCode === 404) {
        setConsultations(error?.response?.data?.message);
      }
    }
  };

  useEffect(() => {
    getUserConsultations();
  }, []);

  return (
    <div className="mx-auto">
      {/* first row */}
      <div className="flex flex-col md:flex-row gap-4 w-full py-8">
        <div className="flex flex-col md:flex-row justify-between h-auto bg-[#EBF3FE] rounded-lg p-6 md:p-[30px] md:w-3/4">
          <div className="flex flex-col gap-3 items-center md:items-start justify-around">
            <div className="flex gap-4 items-center">
              <div className="avatar placeholder">
                <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                  <span className="text-sm">VB</span>
                </div>
              </div>
              <h2 className="font-semibold">Welcome back Vishesh Bajpayee</h2>
            </div>
            <div className="flex gap-4">
              <div>
                <span className="text-3xl font-semibold">35+</span>
                <p>Number of Courses</p>
              </div>
              <div>
                <span className="text-3xl font-semibold">
                  {consultations ? consultations : 0}
                </span>
                <p>Number of Consultation</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/4 mt-4 md:mt-0">
            <img
              src={DashboardBanner}
              alt="dashboard banner"
              className="w-full"
            />
          </div>
        </div>
        <div className="flex gap-2 md:gap-4 flex-wrap md:flex-nowrap h-auto rounded-lg">
          <div className="flex flex-col gap-2 shadow-[0px -2px 0px #919EAB  ] rounded-lg border-[.5px] p-6">
            <div className="flex flex-col">
              <span className="text-2xl font-semibold">$1204</span>
              <span className="font-extralight">Expenses</span>
            </div>
            <FundsChartIcon />
          </div>
          <div className="flex flex-col gap-2shadow-[0px -2px 0px #919EAB  ] rounded-lg border-[.5px] p-6">
            <div className="flex flex-col">
              <span className="text-2xl font-semibold">$1204</span>
              <span className="font-extralight">Sales</span>
            </div>
            <SalesBarChart />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap  w-full gap-4">
        {/* second row */}
        <div className="md:w-full flex flex-wrap md:flex-nowrap justify-between gap-4">
          {/* total consultation */}
          <div className="w-full  md:w-1/2 p-4  shadow-[0px -2px 0px #919EAB  ] rounded-lg border-[.5px] ">
            <div>
              <h4 className="text-[18px] font-semibold">Today Consultation</h4>
              <p className="text-[14px]">Know about your day</p>
            </div>
            <div className="w-full flex justify-center relative">
              <span className="absolute text-3xl md:text-5xl top-[34%] font-bold">
                30
              </span>
              <p className="absolute bottom-28">consultations</p>
              <div className="py-10">
                <TodayConsultationChart />
              </div>
            </div>
            <div className="flex justify-around w-full">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span>Completed</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span>Remaining</span>
              </div>
            </div>
            <div className="overflow-y-auto h-[45vh]">
              <InfoCard
                heading="Top Course"
                subHeading="Astrology"
                time="11:10 AM"
                icon="VB"
                color="bg-accent"
              />
              <InfoCard
                heading="Best Astrologer"
                subHeading="Vanya Ojha"
                time="10:00 AM"
                icon="HR"
                color="bg-primary"
              />
              <InfoCard
                heading="Most Commented"
                subHeading="Astrology"
                time="1:30 PM"
                icon="AB"
                color="bg-info"
              />
              <InfoCard
                heading="Top Course"
                subHeading="Astrology"
                time="11:10 AM"
                icon="VB"
                color="bg-accent"
              />
              <InfoCard
                heading="Best Astrologer"
                subHeading="Vanya Ojha"
                time="10:00 AM"
                icon="HR"
                color="bg-primary"
              />
              <InfoCard
                heading="Most Commented"
                subHeading="Astrology"
                time="1:30 PM"
                icon="AB"
                color="bg-info"
              />
              <InfoCard
                heading="Best Astrologer"
                subHeading="Vanya Ojha"
                time="10:00 AM"
                icon="HR"
                color="bg-success"
              />

              <InfoCard
                heading="Most Commented"
                subHeading="Astrology"
                time="1:30 PM"
                icon="AB"
                color="bg-warning"
              />
              <InfoCard
                heading="Most Commented"
                subHeading="Astrology"
                time="4:30 PM"
                icon="AB"
                color="bg-secondary"
              />
            </div>
          </div>
          {/* upcoming consultation */}
          <div className="w-full h-auto md:w-1/2 p-4 rounded-lg shadow-[0px -2px 0px #919EAB  ] rounded-lg border-[.5px]  ">
            <h4 className="text-[18px] font-semibold">Upcoming Consultation</h4>
            <p className="text-[14px]">Your upcoming events</p>
            <div className="p-4">
              <CalendarPicker />
            </div>
            <div className="overflow-y-auto h-[20vh]">
              <InfoCard
                heading="Top Course"
                subHeading="Astrology"
                time="11:10 AM"
                icon="VB"
                color="bg-secondary"
              />
              <InfoCard
                heading="Best Astrologer"
                subHeading="Vanya Ojha"
                time="10:00 AM"
                icon="HR"
                color="bg-info"
              />
              <InfoCard
                heading="Most Commented"
                subHeading="Astrology"
                time="1:30 PM"
                icon="AB"
                color="bg-success"
              />
              <InfoCard
                heading="Best Astrologer"
                subHeading="Vanya Ojha"
                time="10:00 AM"
                icon="HR"
                color="bg-info"
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
                color="bg-secondary"
              />
              <InfoCard
                heading="Best Astrologer"
                subHeading="Vanya Ojha"
                time="10:00 AM"
                icon="HR"
                color="bg-info"
              />
              <InfoCard
                heading="Most Commented"
                subHeading="Astrology"
                time="1:30 PM"
                icon="AB"
                color="bg-success"
              />
              <InfoCard
                heading="Best Astrologer"
                subHeading="Vanya Ojha"
                time="10:00 AM"
                icon="HR"
                color="bg-info"
              />
              <InfoCard
                heading="Most Commented"
                subHeading="Astrology"
                time="1:30 PM"
                icon="AB"
                color="bg-success"
              />
            </div>
          </div>
          {/* Next badge faithful user */}
          <div className="w-full md:w-1/2 p-4 rounded-lg shadow-lg">
            <h4 className="text-[18px] font-semibold">
              Next Badge: Faithful User
            </h4>
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
        </div>

        {/* third row */}
        <div className="w-full flex gap-4 ">
          {/* learning statistics */}
          <div className="w-1/3 h-[40-vh] flex flex-col gap-4 shadow-md p-4 rounded-lg">
            <div>
              <h4 className="text-lg font-semibold">Learning Statistics</h4>
              <p className="text-sm"> Average Learning</p>
            </div>
            <div>
              <LearningStatistics />
            </div>
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
          {/* yearly learning */}
          <div className="w-1/3 h-[40-vh] shadow-lg p-4 rounded-lg">
            <div>
              <h4 className=" font-semibold">Yearly Learning Yearly</h4>
              <p className="text-sm">Every Month</p>
            </div>
            <YearlyLearningChart />
            <div className="flex gap-5 mt-2">
              <span className="font-extralight">Apr</span>
              <span className="font-extralight">May</span>
              <span className="font-extralight">June</span>
              <span className="font-extralight">July</span>
              <span className="font-extralight">Aug</span>
              <span className="font-extralight">Sept</span>
            </div>
            <div className="flex justify-between w-full mt-20">
              <div className="flex gap-4">
                <div>
                  <TotalFundBox />
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-extralight">Total Fund</span>
                  <p className="font-semibold text-2xl">$3635</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div>
                  <TotalFundBox />
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-extralight">Expenses</span>
                  <p className="font-semibold text-2xl">$3635</p>
                </div>
              </div>
            </div>
          </div>
          {/* rescent transaction */}
          <div className="w-1/3 h-[40-vh] shadow-lg p-14 rounded-lg">
            <div>
              <h4 className="font-semibold">Rescent Transactions</h4>
              <p className="font-extralight"> How to secure our Transactions</p>
            </div>
            <div className="flex flex-col">
              <RecentTransactionItem
                time="9:00"
                flagColor="border-warning"
                transactionText="Payment Received from John Doe of $380 "
              />
              <RecentTransactionItem
                time="9:00"
                flagColor="border-info"
                transactionText="Payment Received from John Doe of $380 "
              />
              <RecentTransactionItem
                time="9:00"
                flagColor="border-secondary"
                transactionText="Payment Received from John Doe of $380 "
              />
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <Table />
    </div>
  );
};

export default UserDashboard;
