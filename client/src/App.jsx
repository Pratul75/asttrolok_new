import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import {
  UserDashboard,
  UserProfile,
  LoginPage,
  UserBirthDetails,
  UserConsultationList,
  UserWallet,
  UserCourseList,
  AstrologerAccount,
} from "./pages";
import { PATHS } from "./router/paths";
import { useSelector } from "react-redux";
import { ProtectedRoute } from "./router/ProtectedRoute";
import ReverseAuthRoute from "./router/ReverseAuthRoute";
import { useState } from "react";

const App = () => {
  const [role, setRole] = useState(
    JSON.parse(localStorage.getItem("role"))?.role
  );

  const loginResponse = useSelector((state) => state.loginResponse.value);

  const darkMode = useSelector((x) => x.appConfig.darkMode);
  console.log("ASasdasddd", loginResponse);
  return (
    <div
      data-theme={`${darkMode ? "dark" : "light"}`}
      className="font-plus-jakarta-sans"
    >
      <Routes>
        <Route
          path={PATHS.userBirthDetails}
          element={
            <AppLayout>
              <UserBirthDetails />
            </AppLayout>
          }
        />
        <Route path={PATHS.root} element={<Navigate to={PATHS.login} />} />

        <Route
          path={PATHS.login}
          element={
            <ReverseAuthRoute>
              <LoginPage />
            </ReverseAuthRoute>
          }
        />
        <Route
          path={PATHS.userDashboard}
          element={
            <AppLayout>
              <ProtectedRoute roleRequired={role} paths={PATHS.userDashboard}>
                <UserDashboard />
              </ProtectedRoute>
            </AppLayout>
          }
        />
        <Route
          path={PATHS.astrologerDashboard}
          element={
            <AppLayout>
              <ProtectedRoute
                roleRequired={role}
                paths={PATHS.astrologerDashboard}
              >
                <astrologerDashboard />
              </ProtectedRoute>
            </AppLayout>
          }
        />
        <Route
          path={PATHS.astrologerProfile}
          element={
            <AppLayout>
             
                <AstrologerAccount />
           
            </AppLayout>
          }
        />
        <Route
          path={PATHS.userProfile}
          element={
            <AppLayout>
              <ProtectedRoute roleRequired={role} paths={PATHS.userProfile}>
                <UserProfile />
              </ProtectedRoute>
            </AppLayout>
          }
        />

        <Route
          path={PATHS.userBirthDetails}
          element={
            <AppLayout>
              <ProtectedRoute roleRequired={role}>
                <UserBirthDetails />
              </ProtectedRoute>
            </AppLayout>
          }
        />
        <Route
          path={PATHS.userConsultationList}
          element={
            <AppLayout>
              <ProtectedRoute
                paths={PATHS.userConsultationList}
                roleRequired={role}
              >
                <UserConsultationList />
              </ProtectedRoute>
            </AppLayout>
          }
        />
        <Route
          path={PATHS.userWallet}
          element={
            <AppLayout>
              <ProtectedRoute paths={PATHS.userWallet} role={role}>
                <UserWallet />
              </ProtectedRoute>
            </AppLayout>
          }
        />
        <Route
          path={PATHS.userCourseList}
          element={
            <AppLayout>
              <ProtectedRoute paths={PATHS.userCourseList} role={role}>
                <UserCourseList />
              </ProtectedRoute>
            </AppLayout>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
