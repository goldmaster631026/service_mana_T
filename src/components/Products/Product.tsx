import React, { useCallback, useMemo, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Controller, EffectCoverflow, Pagination } from "swiper";
import { Add } from "@mui/icons-material";
import Size from "./Size";
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import FacAccordion from "../promo-products/FacAccordion";
import { theLookData } from "../../data";
import TheLook from "./TheLook";
import JoinOthers from "../Global/JoinOthers";
import "swiper/css/bundle";
import YoumayLikes from "../Global/YoumayLikes";
import Incrementor from "../Global/Incrementor";
import { useResponsive } from "../../hooks/useResponsive";

const Product = () => {
  const colors = useMemo(() => {
    return ["red", "black", "orange"];
  }, []);

  const theRatingStars: JSX.Element[] = useMemo(() => {
    return [...Array(Math.floor(4))].map((el: undefined, index: number) => {
      return (
        <img
          src={import.meta.env.VITE_MEDIA_STORAGE_URL! + "Star 4.svg"}
          alt=""
          key={index}
          className="miniTablet:w-3 2xl:max-w-4"
        />
      );
    });
  }, []);

  const theUnfilledStars: JSX.Element[] = useMemo(() => {
    return 4 < 5
      ? [...Array(5 - Math.floor(4))].map((el: undefined, index: number) => {
          return (
            <img
              src={import.meta.env.VITE_MEDIA_STORAGE_URL! + "Star 5.svg"}
              alt=""
              key={index}
              className="miniTablet:w-3 2xl:max-w-4"
            />
          );
        })
      : [];
  }, []);

  const categoriesRef = useRef<HTMLDivElement | null>(null);

  const imgSources = [
    "image 6.png",
    "image 4.png",
    "image 6.png",
    "image 4.png",
    "image 6.png",
  ];

  const [availableSizes, setAvailableSizes] = useState([
    { isActive: false, isAvailable: true, size: 6 },
    { isActive: false, isAvailable: false, size: 6.8 },
    { isActive: false, isAvailable: false, size: 7 },
    { isActive: false, isAvailable: true, size: 8 },
    { isActive: false, isAvailable: true, size: 8.5 },
    { isActive: false, isAvailable: true, size: 9 },
    { isActive: false, isAvailable: true, size: 10 },
    { isActive: false, isAvailable: false, size: 10.5 },
  ]);

  const accordionData = useMemo(() => {
    return [
      {
        question: "Material",
        answer:
          "yes it is possible that you can change the shipping address anytime before 3 days but notice that if you do so it will the delay in the arrival of your order",
        panel: "panel1",
      },
      {
        question: "Delivery & Returns",
        answer:
          "Yeah, the discounts are available as well as the promo codes, but not on all the products",
        panel: "panel2",
      },
      {
        question: "Description",
        answer:
          "Yeah, that is very simple after you have added the product or you didn't that's also possible, click on the basket icon in the right corner and you're good to go",
        panel: "panel3",
      },
      {
        question: "Reviews",
        answer:
          "Yeah, that is very simple after you have added the product or you didn't that's also possible, click on the basket icon in the right corner and you're good to go",
        panel: "panel4",
      },
    ];
  }, []);

  const toggleIsActive = useCallback(
    (size: number) => {
      setAvailableSizes((prevSizes) => {
        return prevSizes.map((prevSize) => {
          if (prevSize.size === size) {
            if (prevSize.isAvailable) {
              prevSizes.forEach((size) => {
                if (size.isActive) size.isActive = false;
              });
              return { ...prevSize, isActive: !prevSize.isActive };
            } else {
              return prevSize;
            }
          } else {
            return prevSize;
          }
        });
      });
    },
    [accordionData]
  );

  const [nbrOfShoes, setNbrOfShoes] = useState("");

  const handleSelectionChange = useCallback(
    (event: SelectChangeEvent) => {
      setNbrOfShoes(event.target.value);
    },
    [nbrOfShoes]
  );

  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = useCallback(
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    },
    [expanded]
  );

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
    <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-white">
      <div className="w-full h-full pt-[1rem] flex justify-start items-center pl-[1rem] gap-2 bg-white lsm:px-8 xl:px-20 2xl:px-24">
        <span className="text-base font-[550] text-[rgb(10,8,58)] 2xl:text-lg">
          Men
        </span>
        <div className="w-2 h-2 rounded-full bg-slate-500"></div>
        <span className="text-base font-medium text-slate-500 2xl:text-lg">
          Sneakers
        </span>
      </div>
      <div className="w-full h-full py-8 grid place-items-center lsm:px-8 miniTablet:grid-cols-2 xLgMd:gap-4 xlarge:gap-16 mini2xl:grid-cols-[40%_60%] 2xl:grid-cols-[30%_70%] xl:px-24">
        <div className="w-full h-full flex flex-col items-start justify-center gap-4 pl-[1rem] pt-[2rem] miniTablet:col-start-2 mini2xl:pr-[10%] 2xl:gap-6">
          <div className="w-full h-fit flex justify-between">
            <span className="text-base font-medium text-slate-500 2xl:text-lg">
              Men's Sneakers
            </span>
            <span className="gap-2 hidden miniTablet:flex">
              {theRatingStars}
              {theUnfilledStars}
            </span>
          </div>
          <span className="text-3xl font-bold text-[rgb(10,8,58)] 2xl:text-4xl">
            Nike Air Max 270
          </span>

          <div className="w-full flex items-center justify-start gap-8 2xl:gap-10">
            <span className="whitespace-nowrap text-gray-600 font-[550] 2xl:font-bold 2xl:text-lg">
              Available in
            </span>
            <div className="flex gap-3">
              {colors.map((color, index) => {
                return (
                  <div
                    className={`w-5 h-5 rounded-full 2xl:max-w-6 2xl:max-h-6`}
                    style={{ background: `${color}` }}
                    key={index}
                  ></div>
                );
              })}
            </div>
          </div>
          <div className="w-full flex items-center justify-start gap-8">
            <span className="text-[rgb(10,8,58)] text-2xl font-bold 2xl:text-3xl">
              $250.99
            </span>
            <span className="flex gap-2 miniTablet:hidden">
              {theRatingStars}
              {theUnfilledStars}
            </span>
          </div>
        </div>
        <div className="w-[20rem] h-[15rem] grid place-items-center xlssm:w-[32rem] miniTablet:w-full miniTablet:h-full miniTablet:row-span-2 miniTablet:row-start-1">
          {largeTablet ? (
            <Swiper
              modules={[Pagination]}
              slidesPerView={tablet ? 2 : 1}
              className="w-full h-full"
              spaceBetween={10}
              onSlideChange={(swiper) => {
                if (categoriesRef.current) {
                  categoriesRef.current.style.transform = `translateX(${
                    swiper.activeIndex * 38
                  }%)`;
                }
              }}
            >
              {imgSources.map((img, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="w-full h-full flex items-center justify-center">
                      <img
                        src={import.meta.env.VITE_MEDIA_STORAGE_URL + img}
                        alt=""
                        className="max-w-none w-full h-full"
                      />
                      <div
                        className={`w-11 h-11 rounded-full backdrop-blur-md absolute top-11 left-32 grid place-items-center border border-gray-400 ${
                          index != 0 && "hidden"
                        }`}
                      >
                        <Add />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          ) : (
            <div className="w-full h-[90%] grid grid-cols-2 self-start gap-2 pt-[2rem]">
              {imgSources.map((img, index) => {
                return (
                  <div
                    style={{
                      backgroundImage: `url(${
                        import.meta.env.VITE_MEDIA_STORAGE_URL! + img
                      })`,
                      backgroundPosition: `center`,
                    }}
                    className={`w-full h-full grid place-items-center bg-[#f5f5f5] bg-contain bg-no-repeat ${
                      index == 0 ? "col-span-2" : ""
                    }`}
                    key={""}
                  >
                    <img
                      src={import.meta.env.VITE_MEDIA_STORAGE_URL + img}
                      key={index}
                      className={`w-full h-[60%] lg:h-[75%] 2xl:max-w-full 2xl:max-h-full ${
                        index == 0 ? "col-span-2 lgMd:h-[80%] " : ""
                      }`}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
        {largeTablet && (
          <div className="w-full h-[3rem] bg-white grid place-items-center">
            <div className="rounded-full w-[80%] h-[.3rem] bg-[#f5f5f5] self-center overflow-clip ">
              <div
                className={`w-[40%] lg:w-[56%] h-full rounded-full bg-[#02BE83] transition-all duration-500`}
                ref={categoriesRef}
              ></div>
            </div>
          </div>
        )}
        <div className="w-full h-full bg-white flex flex-col items-start justify-center gap-5 px-[1rem] miniTablet:pr-0 mini2xl:pr-[10%]">
          <span className="text-lg font-semibold text-[rgb(10,8,58)] 2xl:text-xl">
            Details
          </span>
          <p className="text-gray-500 text-sm font-medium 2xl:text-base">
            They agree with reality to a high degree of accuracy as tested in
            the experiment after experiment
          </p>
          <div className="w-full h-fit flex justify-between">
            <span className="text-lg font-semibold text-[rgb(10,8,58)] 2xl:text-xl">
              Select size
            </span>
            <span className="text-lg font-semibold text-gray-500 underline hidden miniTablet:block ">
              Size guide
            </span>
          </div>
          <div className="w-full h-fit grid grid-cols-4 gap-2 2xl:gap-3">
            {availableSizes.map((availableSize) => {
              const { isActive, isAvailable, size } = availableSize;
              return (
                <Size
                  isActive={isActive}
                  isAvailable={isAvailable}
                  size={size}
                  toggleIsActive={toggleIsActive}
                  key={""}
                />
              );
            })}
          </div>
          <span className="text-lg font-semibold text-gray-500 underline miniTablet:hidden">
            Size guide
          </span>
          <div className="w-full h-[3rem] flex gap-3">
            {largeTablet ? (
              <FormControl className="w-[30%]">
                <Select
                  value={nbrOfShoes}
                  label="size"
                  onChange={handleSelectionChange}
                >
                  {[...Array(10)].map((item, index) => {
                    return (
                      <MenuItem value={index + 1} key={""}>
                        <span className="text-[rgb(10,8,58)] font-bold">
                          {index + 1}
                        </span>
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            ) : (
              <Incrementor />
            )}
            <button className="w-[70%] h-full bg-[rgb(10,8,58)] text-white text-sm font-bold">
              Add to cart
            </button>
          </div>
          <div className="w-full h-fit flex flex-col mt-12 mb-2">
            {accordionData.map((data) => {
              return (
                <FacAccordion
                  expanded={expanded === data.panel}
                  handleChange={handleChange}
                  question={data.question}
                  panel={data.panel}
                  answer={data.answer}
                  page="product"
                  key={""}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-[90%] h-fit flex flex-col items-start justify-center gap-3 bg-white lsm:px-8 miniTablet:w-full max2xl:px-4 xl:px-16 2xl:px-32 ">
        <span className="text-start text-xl text-[rgb(10,8,58)] font-bold xlarge:text-3xl ">
          complete the look
        </span>
        <span className="text-start text-sm text-gray-500 font-bold xlarge:text-lg">
          3 items
        </span>
        <div className="productSwiper w-full h-[28rem] place-items-center miniSm:h-[40rem] md:h-[30rem] max2xl:px-16 2xl:h-[40rem]">
          {!mobile ? (
            <Swiper
              modules={[Controller, Autoplay, Pagination]}
              slidesPerView={tablet ? 2 : 1}
              className="w-full h-full bg-white"
              spaceBetween={20}
              autoplay={true}
              loop={true}
              pagination
            >
              {theLookData.map((data) => {
                const { name, type, price, id, imgSrc } = data;
                return (
                  <SwiperSlide key={id} className="h-full">
                    <TheLook
                      name={name}
                      type={type}
                      price={price}
                      id={id}
                      imgSrc={imgSrc}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          ) : (
            <Swiper
              className="w-full h-full"
              modules={[EffectCoverflow, Autoplay]}
              autoplay={{ disableOnInteraction: false }}
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={miniLaptop ? 3 : 2}
              coverflowEffect={{
                rotate: 10,
                stretch: 0,
                depth: 50,
                modifier: miniLaptop ? 3 : 6,
                slideShadows: false,
              }}
              loop
            >
              {theLookData.map((data) => {
                const { name, type, price, id, imgSrc } = data;
                return (
                  <SwiperSlide key={id} className="h-full">
                    <TheLook
                      name={name}
                      type={type}
                      price={price}
                      id={id}
                      imgSrc={imgSrc}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          )}
        </div>
      </div>
      <YoumayLikes />
      <JoinOthers />
    </div>
  );
};

export default Product;
