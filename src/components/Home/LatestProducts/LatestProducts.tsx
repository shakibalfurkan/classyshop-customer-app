import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

import { useEffect, useRef, useState } from "react";

import type { Swiper as SwiperType } from "swiper";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ProductCard from "@/components/ProductCard";

export default function LatestProducts() {
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
    <section className="container mt-10 lg:mt-[70px]">
      <div className="mb-5 flex items-center justify-between">
        {/* Title */}
        <h1 className="text-xl md:text-[22px] font-medium">Latest Products</h1>
        {/* slider buttons */}
        <div className="space-x-2 mr-2">
          {/* Prev Button */}
          <button
            ref={prevRef}
            className="bg-white hover:bg-primary hover:text-white rounded-full p-1 lg:p-1.5 transition-all duration-300 ease-in-out z-20 shadow cursor-pointer border border-gray-300"
          >
            <IoIosArrowBack className="text-lg" />
          </button>
          {/* Next Button */}
          <button
            ref={nextRef}
            className="bg-white hover:bg-primary hover:text-white rounded-full p-1 lg:p-1.5 transition-all duration-300 ease-in-out z-20 shadow cursor-pointer border border-gray-300"
          >
            <IoIosArrowForward className="text-lg" />
          </button>
        </div>
      </div>
      <div>
        <Swiper
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          slidesPerView={2}
          spaceBetween={7}
          breakpoints={{
            580: {
              slidesPerView: 3,
              spaceBetween: 7,
            },
            720: {
              slidesPerView: 4,
              spaceBetween: 7,
            },
            1025: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          rewind={true}
          modules={[Pagination, Navigation]}
        >
          {Array.from({ length: 10 }, (_, index) => (
            <SwiperSlide key={index} className="mb-1">
              <ProductCard />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
