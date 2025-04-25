import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import { Badge } from "../ui/badge";
import { IoIosGitCompare, IoMdHeartEmpty } from "react-icons/io";
import { HiArrowsPointingOut } from "react-icons/hi2";

export default function ProductCard() {
  const title =
    "Home Decorative Wood Night Table Lamp Home Decorative Wood Night Table Lamp";
  return (
    <section className="max-w-[260px] bg-white rounded-sm border border-gray-200 drop-shadow-xs flex flex-col justify-center relative group hover:shadow-md transition-all duration-100">
      <div className="p-1.5 md:p-3 w-full flex items-center justify-center rounded-sm overflow-hidden">
        <Link
          to={"/"}
          className="h-full w-full max-w-[232px] max-h-[238px] group relative  rounded-sm overflow-hidden"
        >
          <img
            src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/53-home_default/today-is-a-good-day-framed-poster.jpg"
            alt="image 1"
            className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:opacity-0 rounded-sm"
          />
          <img
            src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/25-home_default/hummingbird-printed-t-shirt.jpg"
            alt="image 2"
            className="h-full w-full object-cover absolute inset-0 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 rounded-sm"
          />
        </Link>
      </div>

      <div className="p-2 md:p-3 border-t border-gray-100">
        <p className="text-[13px] text-gray-600 mb mb-1.5">Gadget Zone</p>

        <h3 className="text-sm w-full mb-2">
          <Link
            to={"/"}
            className="w-full hover:text-primary hover:underline transition-all duration-100"
          >
            {title.length > 60 ? title.slice(0, 60) + "..." : title}
          </Link>
        </h3>
        <div className="mb-2">
          <Rating value={1.6} readOnly className="max-w-20" />
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-primary font-semibold tracking-wide">
            ৳48,000
          </span>
          <span className="text-xs text-gray-400 line-through [text-decoration-thickness:1px] tracking-wide">
            ৳50,000
          </span>
        </div>
      </div>

      <div className="absolute top-3 left-3 lg:top-3.5 lg:left-3.5 flex flex-col gap-1">
        <p className="bg-primary text-white text-xs px-1.5 py-0.5 rounded w-fit tracking-wide">
          Save: ৳1000 (-6%)
        </p>
        <p className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-0 transition-all duration-500 bg-[#44b367] text-white uppercase text-[11px] font-medium px-1.5 py-0.5 rounded w-fit tracking-wide">
          New
        </p>
        <p className="bg-[#ff8e3e] uppercase text-white text-[11px] tracking-wide font-medium px-1.5 py-0.5 rounded w-fit">
          Sold Out
        </p>
      </div>

      <div className="absolute top-3 right-3 lg:top-3.5 lg:right-3.5 flex flex-col gap-1 -translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
        <button className="p-2 rounded-full bg-white hover:bg-primary border border-gray-300 text-center transition-all duration-[50ms] hover:text-white cursor-pointer">
          <IoMdHeartEmpty className="text-xl" />
        </button>
        <button className="p-2 rounded-full bg-white hover:bg-primary border border-gray-300 text-center transition-all duration-[50ms] hover:text-white cursor-pointer">
          <IoIosGitCompare className="text-xl" />
        </button>
        <button className="p-2 rounded-full bg-white hover:bg-primary border border-gray-300 text-center transition-all duration-[50ms] hover:text-white cursor-pointer">
          <HiArrowsPointingOut className="text-xl" />
        </button>
      </div>
    </section>
  );
}
