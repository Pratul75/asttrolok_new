import { useSelector } from "react-redux";
import SidebarItem from "./SidebarItem";
import { sidebarMapping } from "../mappings";
import AstrolokLogo from "../assets/astrolokLogo.png";

const Sidebar = () => {
  const isExpanded = useSelector((state) => state.appConfig.sidebarOpen);

  return (
    <aside
      className={` w-full text-white py-4 h-screen ${
        isExpanded ? "" : "-w-[20vw] "
      } transition-all duration-300 ease-in-out border-[1px] border-gray-200`}
    >
      {/* Logo */}
      <div className="flex items-center justify-center px-8 py-4">
        <img
          className={`w-${isExpanded ? "48" : "12"}`}
          src={AstrolokLogo}
          alt="Astrolok logo"
        />
      </div>
      {/* Sidebar content */}
      <nav>
        <div className="flex flex-col gap-4 px-8 h-full">
          <ul className="py-2 flex flex-col gap-4 w-full overflow-y-auto">
            {sidebarMapping.map(({ Icon, text, navlink }) => (
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
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
