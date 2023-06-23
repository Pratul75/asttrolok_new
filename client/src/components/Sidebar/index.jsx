import { useSelector, useDispatch } from "react-redux";
import SidebarItem from "./SidebarItem";
import { astrlogerSidebarMapping, sidebarMapping } from "../../mappings";

import AstrolokLogo from "../../assets/astrolokLogo.png";
import AsttrolokSmallLogo from "../../assets/asttrolokSmallLogo.svg";
import { toggleSidebar } from "../../features/appConfig/AppSlice";

const Sidebar = () => {
  const isExpanded = useSelector((state) => state.appConfig.sidebarOpen);

  const loginResponse = useSelector((state) => state.loginResponse.value);
  
 

  const handleMouseEnter = () => {
    if (!isExpanded) {
      dispatch(toggleSidebar());
    }
  };

  const handleMouseLeave = () => {
    if (isExpanded) {
      // SHOULD BE WORKING FINE WITHOUT IT¯
      // dispatch(toggleSidebar());
    }
  };

  return (
    <aside
      className={` md:w-full text-white py-4 h-screen overflow-y-auto  ${
        isExpanded ? "w-0" : "-w-[20vw] "
      } transition-all ease-in-out duration-300 border-r-[1px] border-gray-200`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Logo */}
      <div className="flex items-center justify-center px-8 py-4">
        <img
          className={`w-${isExpanded ? "48" : "12"} mt-auto`}
          src={isExpanded ? AstrolokLogo : AsttrolokSmallLogo}
          alt="Astrolok logo"
        />
      </div>

      {/* Sidebar content */}
      <nav className="overflow-y-auto">
        <div className="flex flex-col gap-4 px-8 h-full">
          <ul className="py-2 flex flex-col gap-4 w-full">
        {  (loginResponse?.role === "user")?( 
            sidebarMapping.map(({ Icon, text, navlink }) => (
              <li
                key={text}
                className={`${
                  !isExpanded && "justify-center items-center"
                } flex  `}
              >
                <SidebarItem
                  Icon={Icon}
                  text={text}
                  itemExpanded={isExpanded}
                  link={navlink}
                />
              </li>
            ))
          ):(
            astrlogerSidebarMapping.map(({ Icon, text, navlink }) => (
              <li
                key={text}
                className={`${
                  !isExpanded && "justify-center items-center"
                } flex  `}
              >
                <SidebarItem
                  Icon={Icon}
                  text={text}
                  itemExpanded={isExpanded}
                  link={navlink}
                />
              </li>
            ))
          )

}
           
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
