import { Link } from "react-router-dom";
import SearchForm from "../../SearchForm";
import { Badge } from "@/components/ui/badge";
import { BsCart3 } from "react-icons/bs";
import { HiOutlineUser } from "react-icons/hi2";
import { IoIosGitCompare, IoMdHeartEmpty } from "react-icons/io";

import CSTooltip from "../CSTooltip/CSTooltip";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function HeaderTop() {
  return (
    <section className="border-b border-gray-200">
      <div className="container py-[22px] flex justify-between items-center">
        {/* logo */}
        <div className="">
          <Link to="/">
            <img src="/logo.jpg" alt="logo" className="w-36 md:w-fit" />
          </Link>
        </div>

        {/* search bar */}
        <div className="hidden lg:block flex-1">
          <SearchForm />
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
            {/* mobile login menu */}
            <li className="lg:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <HiOutlineUser className="size-6 text-gray-800 hover:text-primary" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-40">
                  <DropdownMenuGroup>
                    <Link to="/login">
                      <DropdownMenuItem className="flex items-center gap-2">
                        Login
                      </DropdownMenuItem>
                    </Link>
                    <Link to="/register">
                      <DropdownMenuItem className="flex items-center gap-2">
                        Register
                      </DropdownMenuItem>
                    </Link>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>

            {/* compare */}
            <li>
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
            <li>
              <CSTooltip title="Wishlist">
                <Link to="/wishlist" className="relative">
                  <IoMdHeartEmpty className="size-6 lg:size-[30px] text-gray-800 hover:text-primary transition-colors duration-100" />
                  <Badge className="absolute -top-2 -right-2 rounded-full px-[5px] py-[1px]">
                    9
                  </Badge>
                </Link>
              </CSTooltip>
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
    </section>
  );
}
