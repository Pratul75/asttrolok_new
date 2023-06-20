import PropTypes from "prop-types";
import { Navigate, Outlet } from "react-router-dom";
import { PATHS } from "./paths";
import { Children } from "react";

const useAuth = () => {
  // get item from localstorage
  let user;
  const _user = localStorage.getItem("user");

  // console.log("USER IN USE AUTH", _user);
  if (_user) {
    user = JSON.parse(_user);
    console.log("user", user);
  }
  if (user) {
    return {
      auth: true,
      role: user.role,
    };
  } else {
    return {
      auth: false,
      role: null,
    };
  }
};

// protected routes
export const ProtectedRoute = ({ roleRequired, children }) => {
  const { auth, role } = useAuth();

  // console.log("AUTH: ", auth, "ROLE: ", role);
  // if the role required is there or not
  if (roleRequired) {
    // console.log("ROLE REQUIRED: ", roleRequired, role);
    return auth ? (
      roleRequired === role ? (
        children
      ) : (
        <Navigate to={PATHS.permissionDenied} />
      )
    ) : (
      <Navigate to={PATHS.login} />
    );
  } else {
    return auth ? children : <Navigate to={PATHS.login} />;
  }
};

ProtectedRoute.propTypes = {
  // Assuming roleRequired is a string
  roleRequired: PropTypes.string,
};

// // export default ProtectedRoute;
// import { decodeToken } from "react-jwt";
// import { Outlet, Navigate } from "react-router-dom";
// import { PATHS } from "../router/paths";

// const PrivateRoute = () => {
//   const token = localStorage.getItem("token");
//   let auth = { token };
//   const decodedToken = auth.token && decodeToken(auth.token);
//   console.log(decodedToken);

//   return auth.token ? <Outlet /> : <Navigate to={PATHS.login} />;
// };

// export default PrivateRoute;
