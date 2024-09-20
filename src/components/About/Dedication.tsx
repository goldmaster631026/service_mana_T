import { memo, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination } from "swiper";
import SlideNextButton from "../Global/SlideNextButton";
import SlidePrevButton from "../Global/SlidePrevbutton";
import DedCard from "./DedCard";
import { brandsData } from "../../data";
import { Zoom, Bounce, Fade } from "react-reveal";
import { useResponsive } from "../../hooks/useResponsive";

const Dedication = () => {
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

  const swipingButtonRef = useRef<HTMLButtonElement | null>(null);
  const swipingButtonRefPrev = useRef<HTMLButtonElement | null>(null);

  return (
    <div className="w-full h-fit flex flex-col items-center justify-center relative bg-[#f5f5f5] px-[5rem] sm:px-[1rem] lg:pt-[3rem] lg:flex-row lg:pl-[10rem] ">
      <div
        className="w-[3.5rem] h-[7rem] rounded-l-full absolute right-0 top-0 md:rotate-[270deg] md:right-7 md:top-[-1.7rem]"
        style={{
          background:
            "linear-gradient(270deg, rgba(254, 120, 49, 0.7) 0%, rgba(255, 222, 190, 0.7) 100%)",
        }}
      ></div>
      <div className="w-full h-fit flex flex-col items-center justify-center gap-6 lg:self-start">
        <Bounce>
          <span className="text-3xl font-black text-[#0A083A] text-center md:text-4xl mt-[4rem] lg:mt-0 lg:text-start">
            Dedicated to our customers
          </span>
          <p className="text-center px-2 lg:pl-[1.5rem] lg:text-start">
            So it really behaves like neither. Now we have given up. We say "it
            is like neither"
          </p>
        </Bounce>
        <Fade right delay={1000}>
          <div className="w-full hidden items-start justify-start gap-4 mt-[1rem] lg:flex lg:pl-[1.5rem]">
            <img
              src={import.meta.env.VITE_MEDIA_STORAGE_URL! + "arrow-left-circle.png"}
              alt="leftIcon"
              className="w-8"
              onClick={() => swipingButtonRefPrev.current?.click()}
            />
            <img
              src={import.meta.env.VITE_MEDIA_STORAGE_URL! + "arrow-left-circle-1.png"}
              alt="rightIcon"
              className="w-8"
              onClick={() => swipingButtonRef.current?.click()}
            />
          </div>
        </Fade>
      </div>
      <Zoom>
        <div className="w-full h-[28rem] flex flex-col items-center justify-center gap-4 p-2 md:flex-row md:h-[28rem] lg:w-[70%] lg:h-[20rem] lg:gap-2 md:w-[90%]">
          <img
            src={import.meta.env.VITE_MEDIA_STORAGE_URL! + "arrow-left-circle.png"}
            alt="leftIcon"
            className="w-8  hidden md:block lg:hidden"
            onClick={() => swipingButtonRefPrev.current?.click()}
          />
          <Swiper
            modules={[Pagination]}
            slidesPerView={!smallMobile ? 1 : !mobile ? 2 : 3}
            className="w-full h-[70%]"
            spaceBetween={10}
          >
            {brandsData.map((brand) => {
              const { id, heading, description } = brand;

              return (
                <SwiperSlide className="w-full h-full" key={id}>
                  <DedCard
                    id={id}
                    heading={heading}
                    description={description}
                  />
                </SwiperSlide>
              );
            })}
            <SlideNextButton swipingButtonRefNext={swipingButtonRef} />
            <SlidePrevButton swipingButtonRefPrev={swipingButtonRefPrev} />
          </Swiper>
          <img
            src={import.meta.env.VITE_MEDIA_STORAGE_URL! + "arrow-left-circle-1.png"}
            alt="rightIcon"
            className="w-8  hidden md:block lg:hidden"
            onClick={() => swipingButtonRef.current?.click()}
          />
          <div className="w-full h-8 flex self-center gap-4 items-center justify-center md:hidden">
            <img
              src={import.meta.env.VITE_MEDIA_STORAGE_URL! + "arrow-left-circle.png"}
              alt="leftIcon"
              className="w-8 "
              onClick={() => swipingButtonRefPrev.current?.click()}
            />
            <img
              src={import.meta.env.VITE_MEDIA_STORAGE_URL! + "arrow-left-circle-1.png"}
              alt="rightIcon"
              className="w-8 "
              onClick={() => swipingButtonRef.current?.click()}
            />
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default memo(Dedication);
