import { Link } from "react-router-dom";
import categoryImage from "../../../assets/categoryimagelist.jpg";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { Grid, Pagination } from "swiper/modules";

export default function FeaturedCategories() {
  return (
    <section className="container mt-9 lg:mt-[70px] overflow-hidden">
      <Swiper
        slidesPerView={3}
        grid={{ rows: 2, fill: "row" }}
        spaceBetween={10}
        breakpoints={{
          480: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          634: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          860: {
            slidesPerView: 6,
            spaceBetween: 10,
          },
          924: {
            slidesPerView: 7,
            spaceBetween: 10,
          },
          1025: {
            slidesPerView: 8,
            spaceBetween: 10,
          },
        }}
        modules={[Grid, Pagination]}
        className=""
      >
        {Array.from({ length: 63 }, (_, index) => (
          <SwiperSlide key={index}>
            <Link
              to={`/category/${index + 1}`}
              className="flex flex-col items-center justify-center rounded-md shadow hover:shadow-md bg-white overflow-hidden group px-1 py-2 md:px-1.5 lg:px-2 md:py-4"
            >
              <img
                src={categoryImage}
                className="w-full max-w-10 md:max-w-12 lg:max-w-16 group-hover:scale-110 transition-all duration-300 mb-3"
                alt="category"
              />

              <h2 className="text-xs md:text-sm group-hover:text-primary transition-colors duration-300 text-gray-700 text-center">
                Slider SliderSlider {index + 1}
              </h2>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 md:gap-3">
        
        {Array.from({ length: 16 }, (_, index) => (
          <Link
            to={`/category/${index + 1}`}
            className="flex flex-col items-center justify-center rounded-lg shadow hover:shadow-md bg-white overflow-hidden group px-1 py-2 lg:px-2 lg:py-4"
          >
            <img
              src={categoryImage}
              className="w-full max-w-10 md:max-w-12 lg:max-w-16 group-hover:scale-110 transition-all duration-300 mb-3"
              alt="category"
            />

            <h2 className="text-xs md:text-sm group-hover:text-primary transition-colors duration-300 text-gray-700">
              T-Shirt T-Shirt
            </h2>
          </Link>
        ))}
      </div> */}
    </section>
  );
}
