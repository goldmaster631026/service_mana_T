import { memo, useRef  } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Brand from "./Brand";
import { Pagination } from "swiper";
import SlideNextButton from "../Global/SlideNextButton";
import SlidePrevButton from "../Global/SlidePrevbutton";
import { Flip } from "react-reveal";
import { brandLogosData } from "../../data";
import { useResponsive } from "../../hooks/useResponsive";

const Brands = () => {
  const [
    tablet,
    miniLaptop,
    laptop,
    mobile,
    smallMobile,
    catMiniLaptop,
    desktop,
    newArrMobile,
    largeTablet,
  ] = useResponsive();

  const swipingButtonRefNext = useRef<HTMLButtonElement | null>(null);
  const swipingButtonRefPrev = useRef<HTMLButtonElement | null>(null);

  return (
    <div className="w-full h-[70vh] flex flex-col items-center justify-end relative bg-[#f5f5f5] px-[5rem] sm:px-[1rem] lg:justify-start lg:pt-[3rem]">
      <div
        className="w-[3.5rem] h-[7rem] rounded-r-full absolute left-0 top-0 lg:rotate-[90deg] lg:left-7 lg:top-[-1.7rem]"
        style={{
          background:
            "linear-gradient(270deg, rgba(254, 120, 49, 0.7) 0%, rgba(255, 222, 190, 0.7) 100%)",
        }}
      ></div>
      <Flip right>
        <span className="text-4xl font-bold text-[#0A083A] md:text-5xl">
          Popular brands
        </span>
      </Flip>
      <Flip bottom>
        <div className="w-full h-[70%] flex flex-col items-center justify-center gap-4 p-2 lg:flex-row lg:gap-2 md:w-[90%]">
          <img
            src={import.meta.env.VITE_MEDIA_STORAGE_URL! +"leftIcon.png"}
            alt="leftIcon"
            className="w-2  hidden lg:block"
            onClick={() => swipingButtonRefPrev.current?.click()}
          />
          <Swiper
            modules={[Pagination]}
            slidesPerView={!mobile ? 2 : 4}
            className="w-full h-[50%] md:w-[90%] sm:h-[40%] miniTablet:h-[40%] lg:h-[50%]"
            spaceBetween={10}
            loop
          >
            {brandLogosData.map((brand) => {
              const { id, imgSrc } = brand;

              return (
                <SwiperSlide
                  className="w-[20rem] h-[20rem] md:h-[10rem]"
                  key={id}
                >
                  <Brand id={id} imgSrc={imgSrc} />
                </SwiperSlide>
              );
            })}
            <SlideNextButton swipingButtonRefNext={swipingButtonRefNext} />
            <SlidePrevButton swipingButtonRefPrev={swipingButtonRefPrev} />
          </Swiper>
          <img
            src={import.meta.env.VITE_MEDIA_STORAGE_URL! +"rightIcon.png"}
            alt="leftIcon"
            className="w-2  hidden lg:block"
            onClick={() => swipingButtonRefNext.current?.click()}
          />
          <div className="w-full h-8 flex self-center gap-4 items-center justify-center lg:hidden">
            <img
              src={import.meta.env.VITE_MEDIA_STORAGE_URL! +"leftIcon.png"}
              alt="leftIcon"
              className="w-2 "
              onClick={() => swipingButtonRefPrev.current?.click()}
            />
            <img
              src={import.meta.env.VITE_MEDIA_STORAGE_URL! +"rightIcon.png"}
              alt="leftIcon"
              className="w-2"
              onClick={() => swipingButtonRefNext.current?.click()}
            />
          </div>
        </div>
      </Flip>
    </div>
  );
};

export default memo(Brands);
