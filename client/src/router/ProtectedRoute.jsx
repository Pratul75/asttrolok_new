import PropTypes from "prop-types";
import { Navigate, Outlet } from "react-router-dom";
import { PATHS } from "./paths";
import { Children } from "react";

const useAuth = () => {
  // get item from localstorage
  let user;
  let astrologer;
  let admin;
  let role;
  const _user = localStorage.getItem("role");

  // console.log("USER IN USE AUTH", _user);
  if (_user) {
    role = JSON.parse(_user).role;
    if (role === "user") {
      user = role;
    } else if (role === "astrologer") {
      astrologer = role;
    } else if (role === "admin") {
      admin = role;
    }
  }
  if (user || astrologer || admin) {
    return {
      auth: true,
      role: role,
    };
  } else {
    return {
      auth: false,
      role: null,
    };
  }
};

const RouteValidate = (path, role) => {
  for (let key in PATHS) {
    if (PATHS[key] === path) {
      if (PATHS[key].includes(role)) {
        return true;
      }
    }
  }

  return false;
};

// protected routes
export const ProtectedRoute = ({ roleRequired, paths, children }) => {
  const { auth, role } = useAuth();
  console.log("this is protected ROute");
  console.log(roleRequired, paths, children, auth);
  // console.log("AUTH: ", auth, "ROLE: ", role);
  // if the role required is there or not

  if (roleRequired) {
    // console.log("ROLE REQUIRED: ", roleRequired, role);
    return auth ? (
      roleRequired === role && RouteValidate(paths, role) ? (
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
