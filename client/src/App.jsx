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
  UserQuizes,
  PermissionDenied,
  AstrologerProfile,
  AstrologerRatings,
} from "./pages";
import AstrologerDashboard from "./pages/astrologer/AstrologerDashboard/index";
import { PATHS } from "./router/paths";
import { useSelector } from "react-redux";
import { ProtectedRoute } from "./router/ProtectedRoute";
import ReverseAuthRoute from "./router/ReverseAuthRoute";
import { useState } from "react";
import AstrologerDetails from "./pages/astrologer/AstrologerDetails";

const App = () => {
  const [role, setRole] = useState(
    JSON.parse(localStorage.getItem("role"))?.role
  );
  const loginResponse = useSelector((state) => state.loginResponse.value);
  const darkMode = useSelector((x) => x.appConfig.darkMode);
  return (
    <div
      data-theme={`${darkMode ? "dark" : "light"}`}
      className="font-plus-jakarta-sans"
    >
      {/* user */}
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
              <ProtectedRoute
                roleRequired={loginResponse?.role}
                paths={PATHS.userDashboard}
              >
                <UserDashboard />
              </ProtectedRoute>
            </AppLayout>
          }
        />

        <Route
          path={PATHS.userProfile}
          element={
            <AppLayout>
              <ProtectedRoute
                roleRequired={loginResponse?.role}
                paths={PATHS.userProfile}
              >
                <UserProfile />
              </ProtectedRoute>
            </AppLayout>
          }
        />

        <Route
          path={PATHS.userBirthDetails}
          element={
            <AppLayout>
              <ProtectedRoute
                roleRequired={loginResponse?.role}
                paths={PATHS.userBirthDetails}
              >
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
                roleRequired={loginResponse?.role}
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
              <ProtectedRoute
                paths={PATHS.userWallet}
                role={loginResponse?.role}
              >
                <UserWallet />
              </ProtectedRoute>
            </AppLayout>
          }
        />
        <Route
          path={PATHS.userCourseList}
          element={
            <AppLayout>
              <ProtectedRoute
                paths={PATHS.userCourseList}
                role={loginResponse?.role}
              >
                <UserCourseList />
              </ProtectedRoute>
            </AppLayout>
          }
        />
        <Route
          path={PATHS.userQuizes}
          element={
            <AppLayout>
              <ProtectedRoute
                paths={PATHS.userQuizes}
                rol={loginResponse?.role}
              >
                <UserQuizes />
              </ProtectedRoute>
            </AppLayout>
          }
        />

        {/* astrologer  */}
        <Route
          path={PATHS.astrologerDashboard}
          element={
            <AppLayout>
              <ProtectedRoute
                roleRequired={loginResponse?.role}
                paths={PATHS.astrologerDashboard}
              >
                <AstrologerDashboard />
              </ProtectedRoute>
            </AppLayout>
          }
        />
        <Route
          path={PATHS.astrologerProfile}
          element={
            <AppLayout>
              <ProtectedRoute
                roleRequired={loginResponse?.role}
                paths={PATHS.astrologerProfile}
              >
                <AstrologerProfile />
              </ProtectedRoute>
            </AppLayout>
          }
        />
        <Route
          path={PATHS.astrologerDetails}
          element={
            <AppLayout>
              <ProtectedRoute
                roleRequired={loginResponse?.role}
                paths={PATHS.astrologerDetails}
              >
                <AstrologerDetails />
              </ProtectedRoute>
            </AppLayout>
          }
        />
        <Route
          path={PATHS.astrologerRatingAndReviews}
          element={
            <AppLayout>
              <ProtectedRoute
                roleRequired={loginResponse?.role}
                path={PATHS.astrologerRatingAndReviews}
              >
                <AstrologerRatings />
              </ProtectedRoute>
            </AppLayout>
          }
        />

        <Route path="/*" element={<PermissionDenied />} />
      </Routes>
    </div>
  );
};

export default App;
