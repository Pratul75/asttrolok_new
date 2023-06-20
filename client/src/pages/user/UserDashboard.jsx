import { useEffect, useState } from "react";
import DashboardBanner from "../../assets/dashboardBanner.png";
import axios from "axios";
import { API_WRAPPER } from "../../api";
import { CalendarPicker, InfoCard } from "../../components";
import { PieChartIcon } from "../../icons";

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
          <div className="flex flex-col justify-center items-center shadow-lg p-6">
            <span className="loading loading-ring loading-lg text-info"></span>
            <span className="text-2xl font-semibold">$1204</span>
            <span>Fund Remaining</span>
          </div>
          <div className="flex flex-col justify-center items-center shadow-lg p-6">
            <span className="loading loading-ring loading-lg text-info"></span>
            <span className="text-2xl font-semibold">$580</span>
            <span>Fund Spend</span>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap md:flex-nowrap w-full gap-4">
        <div className="md:w-full flex flex-wrap md:flex-nowrap justify-between gap-4">
          <div className="w-full md:w-1/2 p-4 shadow-lg rounded-lg">
            <div>
              <h4 className="text-[18px] font-semibold">Today Consultation</h4>
              <p className="text-[14px]">Know about your day</p>
            </div>
            <div className="w-full flex justify-center relative">
              <span className="absolute text-3xl md:text-5xl top-[34%] font-bold">
                30
              </span>
              <PieChartIcon />
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
            <InfoCard
              heading="Top Course"
              subHeading="Astrology"
              time="11:10 AM"
              icon="VB"
            />
            <InfoCard
              heading="Best Astrologer"
              subHeading="Vanya Ojha"
              time="10:00 AM"
              icon="HR"
            />
            <InfoCard
              heading="Most Commented"
              subHeading="Astrology"
              time="1:30 PM"
              icon="AB"
            />
          </div>

          {/* right side div */}
          <div className="w-full md:w-1/2 p-4 rounded-lg shadow-lg">
            <h4 className="text-[18px] font-semibold">Upcoming Consultation</h4>
            <p className="text-[14px]">Your upcoming events</p>
            <div className="p-4">
              <CalendarPicker />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
