import { useSelector } from "react-redux";
import SidebarItem from "./SidebarItem";
import { sidebarMapping } from "../mappings";
import AstrolokLogo from "../assets/astrolokLogo.png";

const Sidebar = () => {
  const isExpanded = useSelector((state) => state.appConfig.sidebarOpen);

  return (
    <aside
      className={` text-white ${
        isExpanded ? "" : "w-0 md:w-16"
      } transition-all duration-300 ease-in-out`}
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
            {sidebarMapping?.map(({ Icon, text, navlink }) => (
              <li key={text} className="pl-2">
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
