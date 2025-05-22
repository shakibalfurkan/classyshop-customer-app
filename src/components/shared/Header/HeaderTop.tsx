import { Link } from "react-router-dom";

import { Badge } from "@/components/ui/badge";
import { BsCart3 } from "react-icons/bs";

import { IoIosGitCompare, IoMdHeartEmpty } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

import CSTooltip from "../CSTooltip/CSTooltip";
import CategorySidebar from "./CategorySidebar/CategorySidebar";
import { useEffect, useState } from "react";
import SearchInput from "@/components/SearchInput";

export default function HeaderTop() {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [scrolledEnough, setScrolledEnough] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Set if scrolled past 130px
      if (currentScrollY > 50) {
        setScrolledEnough(true);
      } else {
        setScrolledEnough(false);
      }

      // Only track direction if scrolled enough
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <section
      className={`bg-white w-full border-b border-gray-200 shadow-sm lg:shadow-none transition-transform lg:transform-none duration-300 ${
        scrolledEnough && scrollDirection === "down"
          ? "-translate-y-full"
          : "translate-y-0"
      } ${scrolledEnough ? "fixed lg:static top-0 left-0" : "relative"} z-40`}
    >
      <div className="w-full relative">
        <div className="container py-2 lg:py-[22px] flex justify-between items-center">
          {/* menubar for mobile */}
          <div className="lg:hidden">Menu</div>

          {/* logo */}
          <div className="">
            <Link to="/">
              <img
                src="/logo.jpg"
                alt="logo"
                className="w-36 md:w-40 lg:w-52"
              />
            </Link>
          </div>

          {/* search bar */}
          <div className="hidden lg:block flex-1">
            <SearchInput />
          </div>

          {/* menu items */}
          <div className="flex items-center gap-4">
            {/* authentication link */}
            <div className="hidden lg:flex items-center gap-1 text-sm text-gray-900">
              <Link to="/login" className="link">
                Login
              </Link>
              /
              <Link to="/register" className="link">
                Register
              </Link>
            </div>

            {/* divider */}
            <div className="hidden lg:block h-[30px] w-[2px] bg-gray-200"></div>

            {/* icons */}
            <ul className="flex items-center gap-2.5 md:gap-4 lg:gap-[23px]">
              {/* compare */}
              <li className="hidden lg:block">
                <CSTooltip title="Compare">
                  <Link to="/compare" className="relative">
                    <IoIosGitCompare className="size-6 lg:size-[30px] text-gray-800 hover:text-primary transition-colors duration-100" />
                    <Badge className="absolute -top-2 -right-2 rounded-full px-[5px] py-[1px]">
                      9
                    </Badge>
                  </Link>
                </CSTooltip>
              </li>
              {/* wishlist */}
              <li className="hidden lg:block">
                <CSTooltip title="Wishlist">
                  <Link to="/wishlist" className="relative">
                    <IoMdHeartEmpty className="size-6 lg:size-[30px] text-gray-800 hover:text-primary transition-colors duration-100" />
                    <Badge className="absolute -top-2 -right-2 rounded-full px-[5px] py-[1px]">
                      9
                    </Badge>
                  </Link>
                </CSTooltip>
              </li>
              {/* search button */}
              <li
                onClick={() => setShowSearchBar(!showSearchBar)}
                className="lg:hidden"
              >
                <IoSearch
                  className={`size-6 text-gray-800 hover:text-primary transition-colors duration-100 ${
                    showSearchBar && "text-primary"
                  }`}
                />
              </li>
              {/* cart */}
              <li>
                <CSTooltip title="Cart">
                  <Link to="/cart" className="relative">
                    <BsCart3 className="size-6 lg:size-[30px] text-gray-800 hover:text-primary transition-colors duration-100" />
                    <Badge className="absolute -top-2 -right-2 rounded-full px-[5px] py-[1px]">
                      9
                    </Badge>
                  </Link>
                </CSTooltip>
              </li>
            </ul>
          </div>
        </div>
        {showSearchBar && (
          <div className="bg-white shadow-sm lg:hidden border-t border-gray-200 py-2 px-3 w-full absolute top-[100%] left-0 z-[9999]">
            <SearchInput />
          </div>
        )}
      </div>
    </section>
  );
}
