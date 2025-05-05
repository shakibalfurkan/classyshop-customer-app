import { Link } from "react-router-dom";

// import usa from "../../../assets/images/country-flags/usa.jpg";

export default function TopStrip() {
  return (
    <section className="py-2 border-b border-gray-200 bg-white">
      <div className="container lg:flex items-center justify-between">
        <p className="text-sm text-gray-500 hidden lg:block font-medium font-secondary">
          Get up to 50% off new season styles, limited time only
        </p>

        <div className="flex items-center justify-center gap-4">
          <ul className="flex items-center gap-4 text-gray-500">
            <li>
              <Link to="/help-center" className="link">
                Help Center
              </Link>
            </li>
            <li className="h-[15px] w-[1px] bg-gray-200"></li>
            <li>
              <Link to="/order-tracking" className="link">
                Order Tracking
              </Link>
            </li>
          </ul>

          {/* <div className="h-[15px] w-0.5 bg-gray-200"></div>

          <ul className="text-sm text-gray-600 flex items-center gap-4">
            <li className="flex items-center gap-1">
              <img src={usa} alt="usa flag" />
              <span className="font-medium">English</span>
            </li>
            <li className="h-[15px] w-[1px] bg-gray-200"></li>
            <li className="font-medium">USD</li>
          </ul> */}
        </div>
      </div>
    </section>
  );
}
