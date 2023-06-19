import PropTypes from "prop-types";
import { Navbar, Sidebar } from "../components/";
import { useSelector } from "react-redux";

const AppLayout = ({ children }) => {
  const isExpanded = useSelector((state) => state.appConfig.sidebarOpen);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`${
          isExpanded ? "w-1/4" : "w-28   h-20"
        } transition-all duration-300`}
      >
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="flex flex-col w-full">
        {/* Navbar */}
        <Navbar />

        {/* Page content */}
        <div className="flex-grow mx-52 my-4 overflow-y-auto max-h-[calc(100vh-64px)] custom-scrollbar">
          {children}
        </div>
      </div>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
