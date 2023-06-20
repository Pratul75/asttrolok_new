import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar, toggleDarkMode } from "../features/appConfig/AppSlice";
import { HiMenu, HiX } from "react-icons/hi";
import { GoSearch } from "react-icons/go";
import { BsBell } from "react-icons/bs";
import { AiOutlineShopping } from "react-icons/ai";
import { MdOutlineDarkMode } from "react-icons/md";
import { FiSun } from "react-icons/fi";
import { Dropdown } from "../components";
import { navbarMapping } from "../mappings";
import { PATHS } from "../router/paths";

const Navbar = () => {
  const dispatch = useDispatch();
  const isExpanded = useSelector((state) => state.appConfig.sidebarOpen);
  const darkMode = useSelector((state) => state.appConfig.darkMode);
  const navbarHeight = 64; // Adjust the height according to your navbar's height
  const [isFixed, setIsFixed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // toggle app drawer
  const toggleDrawer = () => {
    dispatch(toggleSidebar());
  };

  // toggle dark mode
  const handleDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  const handleAvatarClick = () => {
    const token = localStorage.getItem("token");
    localStorage.clear();
    window.location.href = "/login"; 

   
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsFixed(scrollTop > navbarHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`p-4 w-full ${isFixed ? "p-8 bg-white fixed " : ""}`}
        style={{ filter: isFixed ? "blur(5px)" : "none" }}
      >
        <div className="flex justify-between items-center">
          {/* Left side */}
          <div className="flex gap-4">
            <button
              className="text-gray-500 focus:outline-none"
              onClick={toggleDrawer}
            >
              {!isExpanded ? (
                <HiX className="w-8" />
              ) : (
                <HiMenu className="w-8" />
              )}
            </button>
            <div className="hidden md:flex">
              {navbarMapping?.map((item) => {
                if (item.type === "dropdown") {
                  return (
                    <Dropdown
                      key={item.label}
                      label={item.label}
                      itemsList={item.itemsArray}
                    />
                  );
                } else {
                  return (
                    <div
                      key={item.label}
                      className="flex justify-center items-center"
                    >
                      <Link
                        to={item.link}
                        className="btn btn-ghost text-black font-light lowercase"
                      >
                        {item.label}
                      </Link>
                    </div>
                  );
                }
              })}
            </div>
          </div>

          {/* Right side */}
          <div className="flex gap-4 justify-center">
            <button
              className="tooltip tooltip-info tooltip-bottom"
              data-tip="darkmode"
            >
              {!darkMode ? (
                <MdOutlineDarkMode onClick={handleDarkMode} />
              ) : (
                <FiSun onClick={handleDarkMode} />
              )}
            </button>

            <button
              data-tip="cart"
              className="tooltip tooltip-info tooltip-bottom"
            >
              <AiOutlineShopping />
            </button>

            <button
              data-tip="Notification"
              className="relative tooltip-info tooltip-bottom"
            >
              <BsBell />
              <div className="badge badge-primary badge-xs badge-info absolute top-0 left-2"></div>
            </button>

            <button
              className="tooltip tooltip-info tooltip-bottom"
              data-tip="search"
            >
              <GoSearch className="w-8 cursor-pointer" />
            </button>

            <Link onClick={handleAvatarClick}>
              <div className="avatar placeholder cursor-pointer">
                <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                  <span>VB</span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button
            className="fixed top-4 right-4 text-gray-500 focus:outline-none"
            onClick={handleMobileMenuToggle}
          >
            {!isMobileMenuOpen ? (
              <HiMenu className="w-8" />
            ) : (
              <HiX className="w-8" />
            )}
          </button>
          {isMobileMenuOpen && (
            <div className="bg-white p-4 mt-16">
              {navbarMapping?.map((item) => {
                if (item.type === "dropdown") {
                  return (
                    <Dropdown
                      key={item.label}
                      label={item.label}
                      itemsList={item.itemsArray}
                      mobileMenu
                    />
                  );
                } else {
                  return (
                    <div
                      key={item.label}
                      className="flex justify-center items-center"
                    >
                      <Link
                        to={item.link}
                        className="btn btn-ghost text-black font-light lowercase"
                      >
                        {item.label}
                      </Link>
                    </div>
                  );
                }
              })}
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
