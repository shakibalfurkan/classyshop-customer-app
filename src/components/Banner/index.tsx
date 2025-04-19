import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Banner() {
  const progressCircle = useRef<SVGSVGElement | null>(null);
  const progressContent = useRef<HTMLSpanElement | null>(null);
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  const onAutoplayTimeLeft = (
    swiper: SwiperType,
    time: number,
    progress: number
  ) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty(
        "--progress",
        (1 - progress).toString()
      );
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <section className="container h-50 md:h-[360px] lg:h-[500px] flex items-center justify-center mt-4 lg:mt-5 relative z-0 group">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          if (typeof swiper.params.navigation !== "boolean") {
            if (swiper.params.navigation) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }
        }}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="w-full h-full block relative"
      >
        {Array.from({ length: 9 }).map((_, index) => (
          <SwiperSlide
            key={index}
            className="flex items-center justify-center text-2xl font-semibold bg-blue-400 rounded-sm"
          >
            Slide {index + 1}
          </SwiperSlide>
        ))}

        <div
          className="absolute right-4 bottom-4 z-10 w-9 h-9 lg:w-12 lg:h-12 flex items-center justify-center font-bold text-white"
          slot="container-end"
        >
          <svg
            viewBox="0 0 48 48"
            ref={progressCircle}
            className="absolute top-0 left-0 w-full h-full stroke-white fill-none drop-shadow"
            style={{
              strokeDasharray: "125.6",
              strokeDashoffset: "calc(125.6px * (1 - var(--progress)))",
              strokeWidth: "4px",
              transform: "rotate(-90deg)",
            }}
          >
            <circle cx="24" cy="24" r="20" />
          </svg>
          <span
            ref={progressContent}
            className="drop-shadow text-[12px] lg:text-[14px]"
          ></span>
        </div>
      </Swiper>

      {/* Prev Button */}
      <button
        ref={prevRef}
        className="opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto bg-white hover:bg-primary hover:text-white rounded-md p-1.5 transition-all duration-300 ease-in-out absolute top-1/2 -translate-y-1/2 -left-4 translate-x-[-20px] group-hover:translate-x-8 z-20 ml-4"
      >
        <IoIosArrowBack className="text-xl" />
      </button>

      <button
        ref={nextRef}
        className="opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto bg-white hover:bg-primary hover:text-white rounded-md p-1.5 transition-all duration-300 ease-in-out absolute top-1/2 -translate-y-1/2 -right-4 translate-x-[20px] group-hover:-translate-x-8 z-20 mr-4"
      >
        <IoIosArrowForward className="text-xl" />
      </button>
    </section>
  );
}
