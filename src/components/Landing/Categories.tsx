import { memo, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Collection from "./Collection";
import "swiper/css";
import "swiper/css/pagination";
import { collectionsData } from "../../data";
import { Zoom, Flip } from "react-reveal";
import { useResponsive } from "../../hooks/useResponsive";

const Categories = () => {
  const categoriesRef = useRef<HTMLDivElement | null>(null);

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
    <div className="w-full h-[110vh] flex flex-col items-start justify-start bg-white">
      <Zoom>
        <div className="flex flex-wrap gap-6 px-6 md:flex-col md:items-center md:px-0">
          <span className="text-2xl font-bold pr-[8rem] md:pr-0 md:text-4xl lg:text-5xl ">
            Choose categories
          </span>
          <p className="text-gray-700 text-sm md:text-center md:text-lg md:px-[4rem] lg:px-[10rem] miniLarge:px-[15rem] xl:px-[20rem] 2xl:px-[30rem] ">
            For explosive events (sprints up to 400 metres, long jump, triple
            jump) the reduction in atmospheric pressure means there is less
            resistance from the atmosphere.
          </p>
        </div>
      </Zoom>
      <Flip bottom>
        <div className="w-full h-[60%] grid place-items-center self-center 2xl:w-[70%] lg:gap-[10rem]">
          <Swiper
            className="w-full h-full"
            slidesPerView={!smallMobile ? 1 : !catMiniLaptop || !mobile ? 2 : 3}
            spaceBetween={
              !smallMobile ? 10 : mobile ? 15 : catMiniLaptop ? 20 : 30
            }
            onSlideChange={(swiper) => {
              if (categoriesRef.current) {
                categoriesRef.current.style.transform = `translateX(${
                  !mobile
                    ? swiper.activeIndex * 35
                    : (swiper.activeIndex * 200) / collectionsData.length
                }%)`;
              }
            }}
          >
            {collectionsData.map((collection) => {
              const {
                collectionName,
                nbrOfProducts,
                imgSource,
                indexId,
                collectionPath,
              } = collection;
              return (
                <SwiperSlide
                  className="w-full h-full grid place-items-center"
                  key={indexId}
                >
                  <Collection
                    collectionName={collectionName}
                    nbrOfProducts={nbrOfProducts}
                    imgSource={imgSource}
                    indexId={indexId}
                    collectionPath={collectionPath}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </Flip>
      <Zoom>
        <div className="rounded-full w-[50%] h-[0.5rem] bg-[#f5f5f5] self-center overflow-hidden  ">
          <div
            className={`w-[75%] lg:w-[50%] h-full rounded-full bg-[#02BE83] transition-all duration-500 md:w-[60%] xl:w-[67%]`}
            ref={categoriesRef}
          ></div>
        </div>
      </Zoom>
    </div>
  );
};

export default memo(Categories);
