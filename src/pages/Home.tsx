import FeaturedPros from "../components/Landing/FeaturedPros";
import Accessories from "../components/Global/Accessories";
import BestSeller from "../components/Landing/BestSeller";
import NewArrivals from "../components/Landing/NewArrivals";
import WhyUs from "../components/Landing/WhyUs";
import Categories from "../components/Landing/Categories";
import Brands from "../components/Landing/Brands";
import Subscriptions from "../components/Landing/Subscriptions";
import { Fade, Zoom, Flip, Bounce } from "react-reveal";
import "swiper/css";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import SlideNextButton from "../components/Global/SlideNextButton";
import SlidePrevButton from "../components/Global/SlidePrevbutton";
import { memo, useCallback, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const swipingButtonRef = useRef<HTMLButtonElement | null>(null);
  const swipingButtonRefPrev = useRef<HTMLButtonElement | null>(null);

  const [isLiked, setIsLiked] = useState(false);

  const otherChildComponents = useCallback(() => {
    return <>
      <FeaturedPros />
      <Accessories />
      <BestSeller
        rating={5}
        improvement={"Improved stability, traction control & sole handling"}
        description={"Adidas Falcon Shoes for women - 2021 Edition"}
        price={120.5}
        id={2}
      />
      <NewArrivals
        rating={0}
        description={""}
        price={90}
        imgSrc={""}
        id={3}
        indexId={0}
      />
      <WhyUs />
      <Categories />
      <Brands />
      <Subscriptions /></>
  }, [])

  return (
    <div className="w-screen h-fit flex sm:flex-col xs:flex-col relative overflow-hidden">
      <div className="w-full pb-[4rem] mt-[4rem] h-fit flex flex-col md:flex-row md:items-center xs:mt-0 overflow-hidden lg:pl-[5rem]">
        <div className="w-full flex flex-col gap-5 md:pl-[2rem] md:gap-[3rem]">
          <Flip top duration={1000}>
            <h1
              className="text-3xl font-bold text-center text-[#0A083A] md:text-start lg:text-5xl xl:text-6xl 2xl:text-7xl xl:tracking-tighter"
              style={{
                color: "transparent",
                background:
                  "linear-gradient(-270deg, #FE7831 0%, #FFB2B2 100%)",
                WebkitBackgroundClip: "text",
              }}
            >
              <span className="whitespace-nowrap">Get your awesome</span>{" "}
              sneakers.
            </h1>
          </Flip>
          <Bounce top duration={800}>
            <p className="text-sm text-center text-gray-800 leading-5 tracking-wide px-9 md:text-start md:px-0 md:text-base md:text-gray-700 md:pr-[1rem] xl:text-base xl:font-medium xl:pr-[20rem]">
              We offer the best deals in our shop.check them out now. We have
              awesome on sale for you.
            </p>
          </Bounce>
          <div className="flex items-center justify-center gap-[2rem] w-full md:justify-start">
            <Flip left delay={1000}>
              <button
                className="w-[8rem] h-[2.7rem] px-4 rounded-[.3rem] bg-[#FF3C78] text-white text-sm text-center xl:w-[15rem] xl:h-[3rem]"
                style={{
                  boxShadow: "hwb(0deg 0% 0% / 41%) 0px 25px 50px -10px",
                }}
              >
                Shop now
              </button>
            </Flip>
            <Fade left duration={500} delay={2000}>
              <div
                className="w-fit h-fit"
                onClick={() => setIsLiked((prev) => !prev)}
              >
                <img
                  src={import.meta.env.VITE_MEDIA_STORAGE_URL! + "Vector.png"}
                  alt=""
                  className={`relative z-20 `}
                />
              </div>
            </Fade>
            <div
              className={`w-screen h-screen fixed bg-[#ffffffbe] top-0 left-0 grid place-items-center z-[199] ${!isLiked && "hidden"
                } `}
            >
              <Zoom duration={1000}>
                <img
                  src={import.meta.env.VITE_MEDIA_STORAGE_URL! + "heartIcon2.svg"}
                  alt=""
                  className={`w-[50rem] relative`}
                />
              </Zoom>
              <Flip right>
                <div className="absolute grid gap-2 text-white place-items-center">
                  <span className="text-6xl font-bold">Shop then !!</span>
                  <Link to="/about">
                    <button
                      className="w-[8rem] h-[2.7rem] px-4 rounded-[.3rem] bg-[#f2b1c4] text-white text-sm text-center xl:w-[15rem] xl:h-[3rem]"
                      style={{
                        boxShadow: "hwb(0deg 0% 0% / 41%) 0px 25px 50px -10px",
                      }}
                    >
                      Shop now
                    </button>
                  </Link>
                </div>
              </Flip>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center gap-[1rem] pl-24 mt-[1rem] md:justify-start md:p-0 md:flex-row md:gap-[4rem] xMiniTablet:items-center xMiniTablet:mr-[25%] lsm:ml-[0%] md:pt-4 lssm:items-center lssm:mr-[50%]">
            {["Free shipping", "Free returns"].map((item, index) => {
              return (
                <Zoom delay={1500} left key={index}>
                  <div className="flex items-center justify-center gap-4">
                    <img
                      src={import.meta.env.VITE_MEDIA_STORAGE_URL! + "Group 4.png"}
                      alt=""
                      className="w-[1.3rem]"
                    />
                    <span className="text-xs text-gray-800 whitespace-nowrap xl:text-base xl:font-medium xMiniTablet:text-base lsm:text-sm">
                      {item}
                    </span>
                  </div>
                </Zoom>
              );
            })}
          </div>
        </div>
        <div className="w-fit h-fit translate-x-[180%] translate-y-[40%] absolute z-10">
          <div className="spinBlur w-72 h-72 bg-[#ff3c7663]  blur-[105px]"></div>
        </div>
        <div className="w-full h-fit flex flex-col items-center justify-center ">
          <div className="relative w-full flex items-center justify-center">
            <Zoom delay={500}>
              <div className="w-[18rem] h-[18rem] md:w-[22rem] md:h-[22rem] xLgMd:w-[25rem] xLgMd:h-[25rem] lg:w-[35rem] lg:h-[31rem] absolute z-10 lg:-left-[4rem] xl:left-0 mini2xl:left-[3rem]">
                <Swiper
                  modules={[Autoplay]}
                  slidesPerView={1}
                  className="w-full h-full"
                  spaceBetween={2}
                  autoplay={true}
                  loop={true}
                >
                  <SwiperSlide className="flex items-start justify-end lg:mt-[2rem] xl:mt-0">
                    <img
                      src={import.meta.env.VITE_MEDIA_STORAGE_URL! + "alexander.png"}
                      alt=""
                      className="w-full h-full scale-[1.1] md:max-w-lg md:scale-[1.2] lg:max-w-lg xl:max-w-none xl:h-[35rem] lg:scale-[1.1] -rotate-[35deg]"
                    />
                  </SwiperSlide>
                  <SlideNextButton swipingButtonRefNext={swipingButtonRef} />
                  <SlidePrevButton
                    swipingButtonRefPrev={swipingButtonRefPrev}
                  />
                </Swiper>
              </div>
            </Zoom>
            <Flip delay={20} left>
              <img
                src={import.meta.env.VITE_MEDIA_STORAGE_URL! + "Group 267.svg"}
                alt=""
                className="md:w-[100rem] md:max-w-md lg:max-w-lg xl:max-w-2xl xl:relative xl:z-0 xl:bottom-[-2rem] "
              />
            </Flip>
            <Flip delay={1000}>
              <div
                className="decoration w-8 h-8 rounded-full absolute md:right-[30%] md:self-center md:bottom-[20%] xl:bottom-[20%] xl:z-40"
                style={{
                  background:
                    "linear-gradient(270deg, rgba(254, 120, 49, 0.7) 0%, rgba(255, 222, 190, 0.7) 100%)",
                }}
              ></div>
            </Flip>
            <Zoom right delay={1000}>
              <div
                className="w-[15rem] md:w-[15rem] xl:w-[20rem] h-fit p-3 flex items-center justify-center rounded-[2rem] absolute bottom-[7rem] bg-white gap-2 md:h-[4rem] tracking-tight xl:z-10 xl:self-center xl:left-[-7rem] lg:left-[-4rem] lg:bottom-[8rem] lg:self-center xl:bottom-[13rem] sm:h-[15%] 2xl:left-0 z-50 "
                style={{
                  boxShadow: "0px 20px 30px rgba(64, 103, 254, 0.15)",
                }}
              >
                <div className="w-[2rem] h-[2rem] bg-white grid place-items-center rounded-full shadow-slate-400 shadow-xl absolute right-5 top-[-1rem]">
                  <img src={import.meta.env.VITE_MEDIA_STORAGE_URL! + "lock.png"} alt="" width={12} />
                </div>
                <img src={import.meta.env.VITE_MEDIA_STORAGE_URL! + "Ellipse 6.png"} alt="" />
                <span className="text-xs xl:text-sm ">
                  <b>Joan</b> has just purchased these sneakers right now.
                </span>
              </div>
            </Zoom>
          </div>
          <div className="flex gap-4 z-50">
            {[
              {
                imgUrl: import.meta.env.VITE_MEDIA_STORAGE_URL! + "arrow-left-circle.png",
                ref: swipingButtonRefPrev,
              },
              {
                imgUrl: import.meta.env.VITE_MEDIA_STORAGE_URL! + "arrow-left-circle-1.png",
                ref: swipingButtonRef,
              },
            ].map((item, index) => {
              const { imgUrl, ref } = item;
              return (
                <img
                  src={imgUrl}
                  alt=""
                  key={index}
                  onClick={() => ref.current?.click()}
                />
              );
            })}
          </div>
        </div>
      </div>
      {otherChildComponents()}
    </div>
  );
};

export default memo(Home);
