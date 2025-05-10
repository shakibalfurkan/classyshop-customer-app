import { Link } from "react-router-dom";
import { IoTimeOutline } from "react-icons/io5";

export default function BlogCard() {
  return (
    <div className="max-w-md bg-white rounded-sm group overflow-hidden">
      <div className="rounded-sm overflow-hidden max-w-[450px] max-h-[280px]">
        <Link to="#">
          <img
            className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
            src="https://flowbite.com/docs/images/blog/image-1.jpg"
            alt="Blog Thumbnail"
          />
        </Link>
      </div>
      <div className="p-4">
        <p className="mb-1.5 text-sm text-primary uppercase font-medium tracking-wider flex items-center gap-1.5">
          <IoTimeOutline className="text-xl" /> 1 April, 2021
        </p>
        <Link
          to="#"
          className="text-[17px] font-medium tracking-tight text-gray-900 hover:text-primary transition duration-200"
        >
          Noteworthy technology 2021 acquisitions technology acquisitions
        </Link>
        <p className="mb-3 text-[15px] mt-1.5 text-gray-600">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse. far, in reverse chronological order.
        </p>
        <Link
          to="#"
          className="inline-flex items-center text-sm font-semibold text-center text-primary hover:text-gray-900 transition duration-200 uppercase"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
