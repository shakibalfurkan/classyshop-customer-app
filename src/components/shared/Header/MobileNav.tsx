import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BsBagCheck } from "react-icons/bs";
import { HiOutlineUser } from "react-icons/hi2";
import { IoIosGitCompare, IoMdHeartEmpty } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

export default function MobileNav() {
  const { pathname } = useLocation();

  return (
    <section className="lg:hidden fixed bottom-0 left-0 bg-white shadow-[0px_-1px_4px_rgba(0,0,0,0.1)] z-10 hfu min-h-12 w-full px-3 py-1 flex items-center justify-between border-t border-gray-200">
      {/* home */}
      <Link
        to="/"
        className={`flex flex-col items-center justify-center p-1.5 ${
          pathname === "/" ? "text-primary" : "text-gray-800"
        }`}
      >
        <IoHomeOutline className="size-5" />
        <span className="text-[10px]">Home</span>
      </Link>
      {/* wishlist */}
      <Link
        to="/wishlist"
        className={`flex flex-col items-center justify-center p-1.5 ${
          pathname === "/wishlist" ? "text-primary" : "text-gray-800"
        }`}
      >
        <IoMdHeartEmpty className="size-5" />
        <span className="text-[10px]">Wishlist</span>
      </Link>
      {/* compare */}
      <Link
        to="/compare"
        className={`flex flex-col items-center justify-center p-1.5 ${
          pathname === "/compare" ? "text-primary" : "text-gray-800"
        }`}
      >
        <IoIosGitCompare className="size-5" />
        <span className="text-[10px]">Compare</span>
      </Link>

      {/* orders */}
      <Link
        to="/orders"
        className={`flex flex-col items-center justify-center p-1.5 ${
          pathname === "/orders" ? "text-primary" : "text-gray-800"
        }`}
      >
        <BsBagCheck className="size-5" />
        <span className="text-[10px]">Orders</span>
      </Link>

      {/* mobile login menu */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="text-gray-800">
          <div className="flex flex-col items-center justify-center p-1.5">
            <HiOutlineUser className="size-5" />
            <span className="text-[10px]">Account</span>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-30">
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
    </section>
  );
}
