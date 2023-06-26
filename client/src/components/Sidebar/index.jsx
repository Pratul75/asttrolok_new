import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import SidebarItem from "./SidebarItem";
import { userSidebarMapping, astrologerSidebarMapping } from "../../mappings";
import AstrolokLogo from "../../assets/astrolokLogo.png";
import AsttrolokSmallLogo from "../../assets/asttrolokSmallLogo.svg";
import { toggleSidebar } from "../../features/appConfig/AppSlice";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const isExpanded = useSelector((state) => state.appConfig.sidebarOpen);
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(isExpanded);

  const conditionalSidebarMapping = () => {
    const userRole = JSON.parse(localStorage.getItem("role"));
    const role = userRole?.role;
    console.log("ROLE: ", role);
    if (role === "user") {
      console.log("USER IS LOGGED");
      return userSidebarMapping;
    } else if (role === "astrologer") {
      console.log("ASTROLOGER IS LOGGED");
      return astrologerSidebarMapping;
    } else {
      return [];
    }
  };

  useEffect(() => {
    setExpanded(isExpanded);
    conditionalSidebarMapping();
  }, [isExpanded]);

  return (
    <motion.aside
      className={`md:w-full text-white py-4 h-screen overflow-y-auto border-r-[1px] border-gray-200 ${
        expanded ? "w-200" : "w-0"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center justify-center px-8 py-4">
        <motion.img
          className={expanded ? "w-48 mt-auto" : "w-12 mt-auto"}
          src={expanded ? AstrolokLogo : AsttrolokSmallLogo}
          alt="Astrolok logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Sidebar content */}
      <nav>
        <div className="flex flex-col gap-4 px-8 h-full">
          <ul className="py-2 flex flex-col gap-4 w-full">
            {conditionalSidebarMapping().map(({ Icon, text, navlink }) => (
              <motion.li key={text} className="flex">
                <SidebarItem
                  Icon={Icon}
                  text={text}
                  itemExpanded={expanded}
                  link={navlink}
                />
              </motion.li>
            ))}
          </ul>
        </div>
      </nav>
    </motion.aside>
  );
};

export default Sidebar;
