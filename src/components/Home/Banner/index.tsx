import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Banner() {
  const progressCircle = useRef<SVGSVGElement | null>(null);
  const progressContent = useRef<HTMLSpanElement | null>(null);
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
    <section className="container flex flex-col lg:flex-row items-center gap-3 mt-4 lg:mt-5 overflow-hidden">
      <section className="h-50 w-full lg:w-fit md:h-[365px] lg:h-[486px] flex items-center justify-center relative z-0 group overflow-hidden">
        <Swiper
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          spaceBetween={20}
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
          className="w-full h-full z-0"
        >
          {Array.from({ length: 9 }).map((_, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center h-full text-2xl font-semibold bg-blue-400 rounded-sm"
            >
              Slide {index + 1}
            </SwiperSlide>
          ))}

          <div
            className="absolute right-4 bottom-4 z-10 w-9 h-9 flex items-center justify-center font-bold text-white"
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
          className="opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto bg-white hover:bg-primary hover:text-white rounded-md p-1.5 transition-all duration-300 ease-in-out absolute top-1/2 -translate-y-1/2 -left-4 translate-x-[-20px] group-hover:translate-x-8 z-20 ml-4 shadow-sm cursor-pointer"
        >
          <IoIosArrowBack className="text-xl" />
        </button>

        <button
          ref={nextRef}
          className="opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto bg-white hover:bg-primary hover:text-white rounded-md p-1.5 transition-all duration-300 ease-in-out absolute top-1/2 -translate-y-1/2 -right-4 translate-x-[20px] group-hover:-translate-x-8 z-20 mr-4 shadow-sm cursor-pointer"
        >
          <IoIosArrowForward className="text-xl" />
        </button>
      </section>
      <section className="w-full flex flex-col md:flex-row justify-between lg:flex-col gap-3">
        <div className="rounded-sm w-[350px] h-[236px] relative overflow-hidden group">
          <img
            src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg"
            alt="Banner 1"
            className="rounded-sm h-full w-full group-hover:scale-110 transition-all duration-700 ease-out"
          />
          <div className="absolute top-12 left-8 max-w-[170px]">
            <h2 className="text-2xl font-medium capitalize">
              Samsung Gear VR Camera
            </h2>
            <h3 className="text-xl font-bold text-primary my-3">৳888</h3>
            <Link
              to={"/"}
              className="text-sm uppercase font-medium underline hover:no-underline p-0.5"
            >
              Shop Now
            </Link>
          </div>
        </div>
        <div className="rounded-sm w-[350px] md:h-[236px] relative overflow-hidden group">
          <img
            src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg"
            alt="Banner 1"
            className="rounded-sm h-full w-full group-hover:scale-110 transition-all duration-700 ease-out"
          />
          <div className="absolute top-12 left-8 max-w-[170px]">
            <h2 className="text-2xl font-medium capitalize">
              Samsung Gear VR Camera
            </h2>
            <h3 className="text-xl font-bold text-primary my-3">৳888</h3>
            <Link
              to={"/"}
              className="text-sm uppercase font-medium underline hover:no-underline p-0.5"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
}
