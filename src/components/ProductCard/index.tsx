import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";

export default function ProductCard() {
  const title =
    "Home Decorative Wood Night Table Lamp Home Decorative Wood Night Table Lamp";
  return (
    <section className="max-w-[230px] bg-white rounded-sm border border-gray-200 drop-shadow-xs flex flex-col justify-center relative group hover:shadow-md transition-all duration-100">
      <div className="p-2 w-full flex items-center justify-center">
        <Link
          to={"/"}
          className="max-w-[212px] max-h-[219px] group relative overflow-hidden"
        >
          <img
            src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/53-home_default/today-is-a-good-day-framed-poster.jpg"
            alt="image 1"
            className="w-[212px] h-[219px] object-cover transition-all duration-500 ease-in-out group-hover:opacity-0 rounded-sm"
          />
          <img
            src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/25-home_default/hummingbird-printed-t-shirt.jpg"
            alt="image 2"
            className="h-full w-full object-cover absolute inset-0 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 rounded-sm"
          />
        </Link>
      </div>

      <div className="p-3.5 border-t border-gray-100">
        <p className="text-[13px] text-gray-600 mb mb-1.5">Gadget Zone</p>

        <h3 className="text-sm font-medium w-full mb-2">
          <Link
            to={"/"}
            className="w-full hover:text-primary hover:underline transition-all duration-100"
          >
            {title.length > 50 ? title.slice(0, 50) + "..." : title}
          </Link>
        </h3>
        <div className="mb-2">
          <Rating value={1.6} readOnly className="max-w-20" />
        </div>
        <div className="space-x-2.5">
          <span className="text-gray-400 line-through [text-decoration-thickness:1px] tracking-wide">
            $58.00
          </span>
          <span className="text-primary font-semibold tracking-wide">
            $50.00
          </span>
        </div>
      </div>
      {/* <div className="absolute top-1.5 right-1"></div> Apple AirPods Max Over-Ear Wireless Headphone Apple . */}
    </section>
  );
}
