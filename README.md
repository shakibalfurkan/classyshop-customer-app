import { useEffect, useRef, useState } from "react"; // Import Swiper React
components import { Swiper, SwiperSlide } from "swiper/react"; import type {
Swiper as SwiperType } from "swiper"; // Import Swiper styles import
"swiper/css"; import "swiper/css/free-mode"; import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules"; import { Link } from
"react-router-dom"; import { IoIosArrowBack, IoIosArrowForward } from
"react-icons/io";

import categoryImage from "../../assets/categoryimagelist.jpg";

export default function HomeCategorySlider() { const prevRef =
useRef<HTMLButtonElement | null>(null); const nextRef = useRef<HTMLButtonElement
| null>(null);

const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

useEffect(() => { if (swiperInstance) { if (swiperInstance.params.navigation) {
if (typeof swiperInstance.params.navigation !== "boolean") {
swiperInstance.params.navigation.prevEl = prevRef.current; }

        if (typeof swiperInstance.params.navigation !== "boolean") {
          swiperInstance.params.navigation.nextEl = nextRef.current;
        }
        swiperInstance.navigation.init();
        swiperInstance.navigation.update();
      }
    }

}, [swiperInstance]);

return ( <section className="container py-5 lg:py-7 relative z-0 group mb-80">
<Swiper onSwiper={(swiper) => setSwiperInstance(swiper)} spaceBetween={30}
modules={[Pagination, Navigation]} navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }} slidesPerView={3} rewind={true} speed={600} breakpoints={{
          426: {
            slidesPerView: 4,
          },
          769: {
            slidesPerView: 5,
          },
          1025: {
            slidesPerView: 7,
          },
        }} > {Array.from({ length: 12 }, (\_, index) => ( <SwiperSlide key={index}>
<Link to={`/category/${index + 1}`} className="size-[120px] md:size-[170px] lg:size-44
flex flex-col items-center justify-center rounded-md bg-white overflow-hidden group/link
p-4" > <img
                src={categoryImage}
                className="w-[90%] group-hover/link:scale-105 transition-all duration-300"
                alt="category"
              /> <h2 className="text-[15px] font-medium group-hover/link:text-primary transition-colors duration-300">
T-Shirt </h2> </Link> </SwiperSlide> ))} </Swiper>

      {/* Prev Button */}
      <button
        ref={prevRef}
        className="lg:opacity-0 lg:group-hover:opacity-100 bg-white hover:bg-primary hover:text-white rounded-full p-1.5 transition-all duration-300 ease-in-out z-20 ml-2 absolute top-[45%] left-2 border border-gray-300 cursor-pointer"
      >
        <IoIosArrowBack className="text-lg" />
      </button>

      <button
        ref={nextRef}
        className="lg:opacity-0 lg:group-hover:opacity-100 bg-white hover:bg-primary hover:text-white rounded-full p-1.5 transition-all duration-300 ease-in-out z-20 mr-2 shadow-sm absolute top-[45%] right-2 border border-gray-300 cursor-pointer"
      >
        <IoIosArrowForward className="text-lg" />
      </button>
    </section>

); }
