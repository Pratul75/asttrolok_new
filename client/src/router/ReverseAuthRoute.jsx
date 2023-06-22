import { Outlet, Navigate, useLocation } from "react-router-dom";
import { PATHS } from "../router/paths";
import { useSelector } from "react-redux";

const ReverseAuthRoute = ({children}) => {
  const location = useLocation();
  const token = localStorage.getItem("token");
  const loginResponse = useSelector((state) => state.loginResponse.value);
  
  if (location.pathname === "/login" && token) {
            if(loginResponse?.role === 'user'){
              return <Navigate to={PATHS.userDashboard} />;
            }
            else if(loginResponse?.role === 'astrologer'){
              return <Navigate to={PATHS.astrologerDashboard} />;
            }
            else if(loginResponse?.role === 'admin'){
              return <Navigate to={PATHS.adminDashboard} />;
            }


  }
  
  return children;
};

export default ReverseAuthRoute;