import { Link } from "react-router-dom";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import banner1 from "../../assets/banner1.jpeg";
import banner2 from "../../assets/banner2.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


const Banner = () => {
  
  return (
    <div>
      <div className="mt-0">
        {" "}
        <Swiper
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
        >
          <SwiperSlide>
            <div
              className="hero   w-full "
              style={{ backgroundImage: `url(${banner1})` }}
            >
              <div className="hero-overlay bg-opacity-30 bg-[hsla(0,0%,0%,0.8)]"></div>
              <div className="hero-content text-center text-neutral-content ">
                <div className="w-full  text-center lg:pt-28 lg:pb-44 space-y-6 p-8 ">
                  <h1 className="mt-6 mb-16 text-3xl font-bold tracking-tight md:text-4xl xl:text-6xl text-sky-300">
                    Task Mastery <br /> Hub
                  </h1>

                  <p className=" mb-10 w-full text-lg text-sky-200 dark:text-white">
                    Empower Your Productivity with Seamless Task Management
                  </p>
                  <Link to="">
                    <a
                      className="my-4 inline-block rounded-full border-2 border-sky-400 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 md:mr-2 md:mb-0"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                      href="#!"
                      role="button" 
                    >
                      Learn more
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="hero   w-full "
              style={{ backgroundImage: `url(${banner2})` }}
            >
              <div className="hero-overlay bg-opacity-60 bg-[hsla(0,0%,0%,0.8)]"></div>
              <div className="hero-content text-center text-neutral-content ">
                <div className="w-full  text-center lg:pt-28 lg:pb-44 space-y-6 p-8 ">
                  <h1 className="mt-6 mb-16 text-3xl font-bold tracking-tight md:text-4xl xl:text-6xl text-sky-300">
                    Effortless Task <br /> Triumph
                  </h1>

                  <p className="mb-16 w-full text-lg text-sky-200">
                    Your Gateway to Achieving Goals – Add, Update, Complete with
                    Ease
                  </p>
                  <Link to="/">
                    <a
                      className="my-4 inline-block rounded-full border-2 border-sky-400  px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 md:mr-2 md:mb-0"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                      href="#!"
                      role="button" 
                    >
                      Learn more
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
