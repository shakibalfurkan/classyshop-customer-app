import { Link } from "react-router-dom";
import categoryImage from "../../assets/categoryimagelist.jpg";

export default function HomeCategorySlider() {
  return (
    <section className="container pt-9 lg:pt-[70px] relative z-0 mb-80">
      <h2 className="text-xl md:text-[22px] font-medium mb-[20px] capitalize">
        Featured Categories
      </h2>
      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-1.5 md:gap-2 lg:gap-3">
        {/* featured categories */}
        {Array.from({ length: 16 }, (_, index) => (
          <Link
            to={`/category/${index + 1}`}
            className="flex flex-col items-center justify-center rounded-lg shadow hover:shadow-md bg-white overflow-hidden group p-1 lg:p-3"
          >
            <div className="w-fit p-2 lg:p-3">
              <img
                src={categoryImage}
                className="w-full max-w-12 md:max-w-16 group-hover:scale-110 transition-all duration-300"
                alt="category"
              />
            </div>
            <h2 className="text-[13px] lg:text-base md:font-medium group-hover:text-primary transition-colors duration-300 text-gray-700">
              T-Shirt
            </h2>
          </Link>
        ))}
      </div>
    </section>
  );
}
