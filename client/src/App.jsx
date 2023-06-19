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
