import { Link } from "react-router-dom";

import rocket from "@/assets/icons/rocket.svg";
import CategorySidebar from "./CategorySidebar/CategorySidebar";

export default function Navbar() {
  return (
    <section className="hidden lg:block">
      <div className="container flex items-center justify-between">
        {/* category menu */}
        <div className="min-w-[260px]">
          <CategorySidebar />
        </div>
        {/* divider */}
        <div className="hidden lg:block h-[30px] w-[2px] bg-gray-200"></div>
        {/* nav links */}
        <div className="flex-1 px-2">
          <ul className="flex items-center gap-[2px]">
            <li>
              <Link to="/" className="link px-5 py-3.5 font-medium">
                Home
              </Link>
            </li>
            <li>
              <Link to="/fashion" className="link px-5 py-3.5 font-medium">
                Fashion
              </Link>
            </li>
            <li>
              <Link to="/electronics" className="link px-5 py-3.5 font-medium">
                Electronics
              </Link>
            </li>
            <li>
              <Link to="/groceries" className="link px-5 py-3.5 font-medium">
                Groceries
              </Link>
            </li>
            <li>
              <Link to="/beauty" className="link px-5 py-3.5 font-medium">
                Beauty
              </Link>
            </li>
            <li>
              <Link to="/drugs" className="link px-5 py-3.5 font-medium">
                Drugs
              </Link>
            </li>
            <li>
              <Link to="/blog" className="link px-5 py-3.5 font-medium">
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
