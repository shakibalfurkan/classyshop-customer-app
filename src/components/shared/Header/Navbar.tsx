import { Link } from "react-router-dom";

import rocket from "@/assets/icons/rocket.svg";
import CategorySidebar from "./CategorySidebar/CategorySidebar";

export default function Navbar() {
  return (
    <section className="hidden lg:block shadow-md">
      <div className="container flex items-center justify-between">
        {/* category menu */}
        <div className="min-w-[260px]">
          <CategorySidebar />
        </div>
        {/* divider */}
        <div className="hidden lg:block h-[30px] w-[2px] bg-gray-200"></div>
        {/* nav links */}
        <div className="flex-1 px-2">
          <ul className="flex items-center gap-4">
            <li>
              <Link to="/" className="link px-1 py-3.5 font-medium">
                Home
              </Link>
            </li>
            <li className="relative group">
              <Link to="/fashion" className="link px-1 py-3.5 font-medium">
                Fashion
              </Link>
              <div
                className="z-10 absolute top-[34px] left-0 bg-white shadow-lg min-w-42
                opacity-0 translate-y-2 pointer-events-none 
                group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto 
                transition-all duration-300 ease-out border-t-3 border-primary"
              >
                <ul className="py-2 text-sm text-gray-800 ">
                  <li className="relative group/sub">
                    <Link
                      to="#"
                      className="block px-4 py-1 hover:bg-primary hover:text-white"
                    >
                      Apparel
                    </Link>
                    <div
                      className="z-10 absolute top-[0%] left-[100%] bg-white shadow-lg min-w-44
                opacity-0 translate-x-2 pointer-events-none 
                group-hover/sub:opacity-100 group-hover/sub:translate-x-0 group-hover/sub:pointer-events-auto 
                transition-all duration-300 ease-out"
                    >
                      <ul className="py-2 text-sm text-gray-800 ">
                        <li>
                          <Link
                            to="#"
                            className="block px-4 py-1 hover:bg-primary hover:text-white"
                          >
                            Smart Tablet
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="block px-4 py-1 hover:bg-primary hover:text-white"
                          >
                            Crepe T-Shirt
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="relative group/sub">
                    <Link
                      to="#"
                      className="block px-4 py-1 hover:bg-primary hover:text-white"
                    >
                      Outerwear
                    </Link>
                    <div
                      className="z-10 absolute top-[0%] left-[100%] bg-white shadow-lg min-w-44
                opacity-0 translate-x-2 pointer-events-none 
                group-hover/sub:opacity-100 group-hover/sub:translate-x-0 group-hover/sub:pointer-events-auto 
                transition-all duration-300 ease-out"
                    >
                      <ul className="py-2 text-sm text-gray-800 ">
                        <li>
                          <Link
                            to="#"
                            className="block px-4 py-1 hover:bg-primary hover:text-white"
                          >
                            Smart Tablet
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="block px-4 py-1 hover:bg-primary hover:text-white"
                          >
                            Crepe T-Shirt
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="block px-4 py-1 hover:bg-primary hover:text-white"
                    >
                      Footwear
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link to="/electronics" className="link px-1 py-3.5 font-medium">
                Electronics
              </Link>
            </li>
            <li>
              <Link to="/groceries" className="link px-1 py-3.5 font-medium">
                Groceries
              </Link>
            </li>
            <li>
              <Link to="/beauty" className="link px-1 py-3.5 font-medium">
                Beauty
              </Link>
            </li>
            <li>
              <Link to="/drugs" className="link px-1 py-3.5 font-medium">
                Drugs
              </Link>
            </li>
            <li>
              <Link to="/blog" className="link px-1 py-3.5 font-medium">
                Blog
              </Link>
            </li>
          </ul>
        </div>
        {/* offer text */}
        <div>
          <p className="flex items-center gap-2 text-sm ">
            <img src={rocket} alt="rocket image" className="size-5" />
            <span className="font-medium">Free International Delivery</span>
          </p>
        </div>
      </div>
    </section>
  );
}
