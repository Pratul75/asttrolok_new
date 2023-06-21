import { Outlet, Navigate, useLocation } from "react-router-dom";
import { PATHS } from "../router/paths";

const ReverseAuthRoute = ({children}) => {
  const location = useLocation();
  const token = localStorage.getItem("token");
  if (location.pathname === "/login" && token) {
    return <Navigate to={PATHS.userDashboard} />;
  }
  
  return children;
};

export default ReverseAuthRoute;