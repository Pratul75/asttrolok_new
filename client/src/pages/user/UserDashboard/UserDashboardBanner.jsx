import { useEffect, useState } from "react";
import { FundsChartIcon, SalesBarChart } from "../../../icons";
import axios from "axios";
import DashboardBanner from "../../../assets/dashboardBanner.png";
const UserDashboardBanner = () => {
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
      if (error?.response?.data?.errorCode === 404) {
        setConsultations(error?.response?.data?.message);
      }
    }
  };

  useEffect(() => {
    getUserConsultations();
  }, []);
  return (
    <>
      {" "}
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
    </>
  );
};

export default UserDashboardBanner;
