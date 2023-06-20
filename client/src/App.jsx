import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import { UserDashboard, UserProfile, LoginPage } from "./pages";
import { PATHS } from "./router/paths";
import { useSelector } from "react-redux";
import { ProtectedRoute } from "./router/ProtectedRoute";
import ReverseAuthRoute from "./router/ReverseAuthRoute";

const App = () => {
  const loginResponse = useSelector((state) => state.loginResponse.value);




  const darkMode = useSelector((x) => x.appConfig.darkMode);

  return (
    <div
      data-theme={`${darkMode ? "dark" : "light"}`}
      className="font-plus-jakarta-sans"
    >
      <Routes>
        <Route path={PATHS.root} element={<Navigate to={PATHS.login} />} />

        <Route path={PATHS.login} element=
        {
          <ReverseAuthRoute>
            <LoginPage />
          </ReverseAuthRoute>
        } />

        <Route
          path={PATHS.userDashboard}
          element={
            <AppLayout>
              <ProtectedRoute roleRequired={loginResponse?.role}>
                <UserDashboard />
              </ProtectedRoute>
            </AppLayout>
          }
        />
        <Route
          path={PATHS.userProfile}
          element={
            <AppLayout>
              <ProtectedRoute roleRequired={loginResponse?.role}>
                <UserProfile />
              </ProtectedRoute>
            </AppLayout>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
