import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import { UserDashboard, UserProfile, LoginPage } from "./pages";
import { PATHS } from "./router/paths";
import { useSelector } from "react-redux";

const App = () => {
  const darkMode = useSelector((x) => x.appConfig.darkMode);
  return (
    <div
      data-theme={`${darkMode ? "dark" : "light"}`}
      className="font-plus-jakarta-sans"
    >
      <Routes>
        <Route path={PATHS.root} element={<Navigate to={PATHS.login} />} />
        <Route path={PATHS.login} element={<LoginPage />} />
        <Route
          path={PATHS.userDashboard}
          element={
            <AppLayout>
              <UserDashboard />
            </AppLayout>
          }
        />
        <Route
          path={PATHS.userProfile}
          element={
            <AppLayout>
              <UserProfile />
            </AppLayout>
          }
        />
      </Routes>
    </div>
  );
};

export default App;


  {
    /* Second Row */
  }
  // <div className="flex flex-col md:flex-row gap-4">
  //   {/* left side */}
  //   <div className="flex gap-2 md:gap-4 flex-wrap md:flex-nowrap">
  //     <div className="flex justify-between items-center p-4 shadow-lg rounded-lg">
  //       <div>
  //         <h2 className="text-xl">Fund Update</h2>
  //         <p className="text-gray-300 text-sm">Overview Fund</p>
  //       </div>
  //       <span className="loading loading-ring loading-lg text-info"></span>
  //     </div>
  //     <div className="flex justify-between items-center p-4 shadow-lg rounded-lg">
  //       <div>
  //         <h2 className="text-xl">Fund Overview</h2>
  //         <p className="text-gray-300 text-sm">Every Month</p>
  //       </div>
  //       <span className="loading loading-ring loading-lg text-info"></span>
  //     </div>
  //   </div>
  //   {/* right side */}
  //   <div className="flex gap-4 md:gap-2 flex-wrap md:flex-nowrap">
  //     <div className="flex flex-col justify-center items-center shadow-lg p-6 cursor-pointer">
  //       <span className="loading loading-ring loading-lg text-info"></span>
  //       <h2>Growth</h2>
  //     </div>
  //     <div className="flex flex-col justify-center items-center shadow-lg p-6 cursor-pointer">
  //       <span className="loading loading-ring loading-lg text-info"></span>
  //       <h2>Expenses</h2>
  //     </div>
  //   </div>
  // </div>;

  // {
  //   /* third row */
  // }
  // <div className="flex flex-col gap-4 w-full bg-base-100 py-4 mt-4 rounded-lg">
  //   {/* all consultation code */}
  //   <div className="p-4 flex bg-teal-100 rounded-lg justify-between">
  //     <h2 className="text-xl">Latest Courses</h2>
  //     <span className="loading loading-ring loading-lg text-info"></span>
  //   </div>
  // </div>;

  // {
  //   /* fourth row */
  // }
  // <div className="flex flex-col gap-4 mt-4">
  //   <div className="flex gap-4 md:gap-2 flex-wrap md:flex-nowrap">
  //     <div className="flex justify-between p-4 h-auto bg-teal-50">
  //       <div>
  //         <h4>Yearly Funds</h4>
  //         <p className="text-sm text-gray-300 mt-4">Your yearly funds</p>
  //       </div>
  //       <span className="loading loading-ring loading-lg text-info"></span>
  //     </div>
  //     <div className="flex justify-between p-4 h-auto bg-teal-50">
  //       <div>
  //         <h4>Payment Gateways</h4>
  //         <p className="text-sm text-gray-300">Your payment gateways</p>
  //       </div>
  //       <span className="loading loading-ring loading-lg text-info"></span>
  //     </div>
  //   </div>
  // </div>;