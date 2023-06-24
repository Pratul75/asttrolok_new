import { Navigate, Route } from "react-router-dom";

export const hasAccess = (role, page) => {
  // Define the access rules based on user role
  const accessRules = {
    admin: ["admin", "astrologer", "users"],
    astrologer: ["astrologer"],
    user: ["user"],
  };

  // TODO: Check if the user role has access to the given page
  return accessRules[role] && accessRules[role].includes(page);
};

// need to be fetched from localstorage
const userRole = "user";

export const buildRoutes = (data) => {
  // need to be provided from BE
  data.map(({ identifier, path, redirectPath, Element }) => {
    console.log("HAS ACCESS: ", hasAccess(userRole, identifier));
    return (
      <Route key={identifier} path={path}>
        {hasAccess(userRole, identifier) ? (
          Element
        ) : (
          <Navigate to={redirectPath} />
        )}
      </Route>
    );
  });
};

export const getRandomColor = () => {
  const colorArr = [
    "bg-primary",
    "bg-secondary",
    "bg-info",
    "bg-warning",
    "bg-error",
    "bg-accent",
  ];
  // Get a random index from the colorArr
  const randomIndex = Math.floor(Math.random() * colorArr.length);
  // Get the random color using the random index
  const randomColor = colorArr[randomIndex];

  return randomColor;
};
