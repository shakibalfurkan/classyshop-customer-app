import { Link } from "react-router-dom";
import categoryImage from "../../../assets/categoryimagelist.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { Grid, Navigation, Pagination } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function FeaturedCategories() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  useEffect(() => {
    if (swiperInstance) {
      if (swiperInstance.params.navigation) {
        if (typeof swiperInstance.params.navigation !== "boolean") {
          swiperInstance.params.navigation.prevEl = prevRef.current;
        }

        if (typeof swiperInstance.params.navigation !== "boolean") {
          swiperInstance.params.navigation.nextEl = nextRef.current;
        }
        swiperInstance.navigation.init();
        swiperInstance.navigation.update();
      }
    }
  }, [swiperInstance]);

  return (
    <section className="container mt-9 lg:mt-[70px] overflow-hidden relative group">
      <Swiper
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        slidesPerView={3}
        grid={{ rows: 2, fill: "row" }}
        slidesPerGroup={3}
        spaceBetween={10}
        rewind={true}
        speed={800}
        breakpoints={{
          480: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 10,
            speed: 800,
          },
          634: {
            slidesPerView: 5,
            slidesPerGroup: 5,
            speed: 1000,
            spaceBetween: 10,
          },
          860: {
            slidesPerView: 6,
            slidesPerGroup: 6,
            speed: 1000,
            spaceBetween: 10,
          },
          924: {
            slidesPerView: 7,
            slidesPerGroup: 7,
            speed: 1500,
            spaceBetween: 10,
          },
          1025: {
            slidesPerView: 8,
            slidesPerGroup: 8,
            speed: 1800,
            spaceBetween: 10,
          },
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        modules={[Grid, Pagination, Navigation]}
        className=""
      >
        {Array.from({ length: 63 }, (_, index) => (
          <SwiperSlide key={index}>
            <Link
              to={`/category/${index + 1}`}
              className="h-full w-full flex flex-col items-center justify-center rounded-md shadow hover:shadow-md bg-white overflow-hidden group/category px-1 py-2 md:px-1.5 lg:px-2 md:py-4"
            >
              <img
                src={categoryImage}
                className="w-full max-w-10 md:max-w-12 lg:max-w-16 group-hover/category:scale-110 transition-all duration-300 mb-3"
                alt="category"
              />

              <h2 className="text-xs md:text-sm group-hover/category:text-primary transition-colors duration-300 text-gray-700 text-center">
                Slider SliderSlider {index + 1}
              </h2>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Prev Button */}
      <button
        ref={prevRef}
        className="bg-white hover:bg-primary hover:pointer-events-auto hover:text-white rounded-full p-1 lg:p-1.5 transition-all duration-300 ease-in-out absolute top-1/2 -translate-y-1/2 left-2 z-20 ml-2 shadow-sm cursor-pointer border border-gray-300"
      >
        <IoIosArrowBack className="text-xl" />
      </button>

      <button
        ref={nextRef}
        className="bg-white hover:bg-primary hover:pointer-events-auto hover:text-white rounded-full p-1 lg:p-1.5 transition-all duration-300 ease-in-out absolute top-1/2 -translate-y-1/2 right-2 z-20 mr-2 shadow-sm cursor-pointer border border-gray-300"
      >
        <IoIosArrowForward className="text-xl" />
      </button>
    </section>
  );
}
