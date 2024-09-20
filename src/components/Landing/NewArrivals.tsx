import { FC, memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import NewArrival from "../Global/NewArrival";
import "swiper/css/autoplay";
import { newArrivalsData } from "../../data";
import { Zoom, Flip } from "react-reveal";
import { useResponsive } from "../../hooks/useResponsive";

const NewArrivals: FC<FeaturedProInterface> = () => {
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

  const newArrivals = newArrivalsData.map((data: FeaturedProInterface) => {
    const { rating, description, price, imgSrc, id, indexId } = data;

    return (
      <SwiperSlide key={id} className="grid place-items-center">
        <NewArrival
          rating={rating}
          description={description}
          price={price}
          imgSrc={imgSrc}
          id={id}
          indexId={indexId}
        />
      </SwiperSlide>
    );
  });

  return (
    <div className="w-full h-[50vh] sm:h-[40vh] lssm:h-[40vh] flex flex-col items-center justify-start gap-11 pt-5 relative bg-[#F5F5F5]">
      <Zoom>
        <div className="w-full h-fit flex flex-col items-center justify-center gap-5 md:flex-row md:justify-around md:gap-[5rem]">
          <div className="flex flex-col gap-5 md:items-start">
            <span className="text-2xl font-bold text-center md:text-4xl ">
              New arrivals
            </span>
            <p className="text-center px-16 text-sm text-gray-800 md:text-start md:p-0 md:flex md:flex-col">
              <span>Enjoy the new products from our store.</span>
              <span>Select what you like, enjoy & return.</span>
            </p>
          </div>
          <span className="text-sm text-[#FF3C78] text-center  flex gap-2">
            View all <img src={import.meta.env.VITE_MEDIA_STORAGE_URL! + "chevron-right.png"} alt="" className="h-5" />{" "}
          </span>
        </div>
      </Zoom>
      <Flip bottom>
        <div className="w-full h-[80vh] sm:h-[80vh] sm:top-[6rem] absolute top-[12rem] lssm:h-[70vh] lssm:top-[8rem] lg:w-[80vw]">
          <Swiper
            pagination={{ clickable: true }}
            modules={[Pagination]}
            slidesPerView={
              !smallMobile ? 1 : newArrMobile ? 2 : !catMiniLaptop ? 3 : 4
            }
            autoplay
            spaceBetween={
              !smallMobile ? 10 : newArrMobile ? 15 : !catMiniLaptop ? 20 : 30
            }
            className="w-full h-full"
          >
            {newArrivals}
          </Swiper>
        </div>
      </Flip>
    </div>
  );
};

export default memo(NewArrivals);
