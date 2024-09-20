import { memo, useRef } from "react";
import FeaturedPro from "./FeaturedPro";
import { Swiper, SwiperSlide } from "swiper/react";
import { featuredProsData } from "../../data";
import { Flip, Zoom } from "react-reveal";
import { Autoplay, Pagination } from "swiper";
import "swiper/css/autoplay";
import { useResponsive } from "../../hooks/useResponsive";

const FeaturedPros = () => {
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

  const categoriesRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="w-full h-fit bg-white flex flex-col items-center justify-center py-[4rem] gap-[3rem] lg:pl-[5rem]">
      <Zoom>
        <div className=" w-full flex justify-between items-center sm:justify-center md:justify-around lgMd:justify-between lg:justify-between xl:justify-between z-0 md:px-[0rem] lgMd:px-[8rem] ">
          <h1 className="text-3xl font-bold text-[#0A083A] lg:text-4xl xl:text-5xl whitespace-nowrap">
            Featured Products
          </h1>
          <span className="text-sm text-[#FF3C78]  hidden lg:flex md:flex lgMd:flex xl:flex 2xl:flex lg:text-base md:items-center md:justify-center">
            <span className="font-semibold text-lg">View all</span>{" "}
            <img src={import.meta.env.VITE_MEDIA_STORAGE_URL!!!!!! +"chevron-right.png"} alt="" className="h-5 lg:h-5 lg:w-5" />{" "}
          </span>
        </div>
      </Zoom>
      {!mobile ? (
        <Zoom bottom>
          <div className="w-full flex flex-col items-center justify-center gap-[5rem] md:flex-row md:gap-0">
            {featuredProsData.map((product: FeaturedProInterface) => {
              const { rating, description, price, imgSrc, id, indexId } =
                product;
              return (
                <FeaturedPro
                  key={id}
                  rating={rating}
                  description={description}
                  price={price}
                  imgSrc={imgSrc}
                  id={id}
                  indexId={indexId}
                  from="desktop"
                />
              );
            })}
          </div>
        </Zoom>
      ) : (
        <>
          <Flip left>
            <div className="w-full h-[50vh] flex items-center justify-center xLgMd:h-[40vh] lgMd:z-30 lg:h-[50vh] lgMd:h-[50vh] lg:w-[80vw] ">
              <Swiper
                modules={[Autoplay, Pagination]}
                slidesPerView={desktop ? 2 : 4}
                autoplay
                spaceBetween={50}
                className="w-full h-full"
                onSlideChange={(swiper) => {
                  if (categoriesRef.current) {
                    categoriesRef.current.style.transform = `translateX(${
                      swiper.activeIndex * 40
                    }%)`;
                  }
                }}
              >
                {featuredProsData.map((product: FeaturedProInterface) => {
                  const { rating, description, price, imgSrc, id, indexId } =
                    product;
                  return (
                    <SwiperSlide key={id} className="w-screen md:w-[23rem] ">
                      <FeaturedPro
                        rating={rating}
                        description={description}
                        price={price}
                        imgSrc={imgSrc}
                        id={id}
                        indexId={indexId}
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </Flip>
          <Zoom>
            <div className="rounded-full w-[60%] h-[0.5rem] bg-[#f5f5f5] self-center overflow-clip ">
              <div
                className={`w-[40%] lg:w-[56%] h-full rounded-full bg-[#02BE83] transition-all duration-500`}
                ref={categoriesRef}
              ></div>
            </div>
          </Zoom>
        </>
      )}
      <span className="text-sm text-[#FF3C78] flex gap-2 md:hidden lg:hidden xl:hidden 2xl:hidden">
        view all <img src={import.meta.env.VITE_MEDIA_STORAGE_URL!!!!!! +"chevron-right.png"} alt="" className="h-5" />{" "}
      </span>
    </div>
  );
};

export default memo(FeaturedPros);
