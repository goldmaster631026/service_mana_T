import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import { Autoplay, Controller, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { youMayLike } from "../../data";
import YouMayLike from "../Products/YouMayLike";
import { useCallback, useRef, useState, type FC, memo } from "react";
import SlideNextButton from "./SlideNextButton";
import SlidePrev from "./SlidePrevbutton";
import { useResponsive } from "../../hooks/useResponsive";

const YoumayLikes: FC<PageProps> = (props) => {
  const prevButtonRef = useRef<HTMLDivElement | null>(null);
  const nextButtonRef = useRef<HTMLDivElement | null>(null);
  const [isDraggable, setIsDraggable] = useState(false);

  const handleIsDraggable = useCallback(() => {
    setIsDraggable((prev) => {
      return !prev;
    });
  }, [isDraggable]);

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

  return (
    <div className="w-full bg-white flex flex-col items-center xl:px-16 2xl:px-32">
      <div className="w-full h-full pt-[1rem] flex justify-between items-center px-4 gap-2 bg-white">
        <span className="text-start text-xl text-[rgb(10,8,58)] font-bold xlarge:text-3xl">
          You may also like
        </span>

        <div className="w-[5rem] h-[5rem] flex items-center justify-center gap-1 xlarge:w-[6rem] xlarge:h-[6rem]">
          <BsFillCaretLeftFill
            className="text-xs text-gray-400 xlarge:text-sm"
            onClick={() => prevButtonRef.current?.click()}
          />
          <span
            className={`w-[2rem] h-[2rem] rounded-full text-[.5rem] font-bold uppercase grid place-items-center transition xlarge:w-[2.5rem]  xlarge:h-[2.5rem] xlarge:text-[.6rem] ${
              isDraggable
                ? "bg-[#315affc0] text-white"
                : "text-[rgb(10,8,58)] border border-gray-400"
            }`}
            onClick={handleIsDraggable}
          >
            Drag
          </span>
          <BsFillCaretRightFill
            className="text-xs text-gray-400 xlarge:text-sm"
            onClick={() => nextButtonRef.current?.click()}
          />
        </div>
      </div>
      <div
        className={`youMayLikeSwiper w-full h-[30rem] px-[1rem] miniSm:h-[40rem]`}
      >
        <Swiper
          modules={[Controller, Autoplay, Pagination]}
          slidesPerView={laptop ? 4 : miniLaptop ? 3 : tablet ? 2 : 1}
          className="w-full h-full bg-white"
          spaceBetween={20}
          autoplay={true}
          loop={true}
          noSwiping={!isDraggable}
          noSwipingClass="swiper-slide"
          pagination={mobile}
        >
          {youMayLike.map((data) => {
            const { name, company, price, id, imgSrc } = data;
            return (
              <SwiperSlide key={id} className="h-full">
                <YouMayLike
                  name={name}
                  company={company}
                  price={price}
                  imgSrc={imgSrc}
                  id={id}
                />
                <SlideNextButton swipingButtonRefNext={nextButtonRef} />
                <SlidePrev swipingButtonRefPrev={prevButtonRef} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default memo(YoumayLikes);
