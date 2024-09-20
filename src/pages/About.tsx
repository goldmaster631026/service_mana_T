import Description from "../components/About/Description";
import Trending from "../components/About/Trending";
import { FiGift } from "react-icons/fi";
import FounderMessage from "../components/About/FounderMessage";
import Quality from "../components/About/Quality";
import Dedication from "../components/About/Dedication";
import Accessories from "../components/Global/Accessories";
import OurProducts from "../components/About/OurProducts";
import PopularBrands from "../components/About/PopularBrands";
import { descriptionsData } from "../data";
import { Link } from "react-router-dom";
import { Zoom, Flip } from "react-reveal";
import { memo } from "react";

const About = () => {
  return (
    <div className="w-screen h-fit flex flex-wrap">
      <div className="h-fit w-full grid grid-cols-1 grid-rows-aboutTop lssm:grid-rows-aboutTopResponsive place-items-center gap-5 mb-[2rem] md:grid-cols-3 md:px-2 md:grid-rows-aboutTopMd xl:grid-rows-aboutTopLarge xlarge:mt-[5rem]">
        <div className="w-full h-full flex flex-col items-center justify-center md:col-span-2 md:items-start md:gap-4 ">
          <Flip top duration={3000}>
            <span className="text-[#ff3c76d9] text-sm font-semibold pl-[2.5rem] hidden md:block  ">
              About Us
            </span>
          </Flip>
          <Flip top duration={1000}>
            <span className="text-white text-3xl text-center font-bold sm:text-2xl md:text-4xl md:text-start px-[2.5rem] xlarge:text-6xl ">
              The Best Sneakers delivered to you.
            </span>
          </Flip>
        </div>
        <Zoom delay={2000}>
          <div
            className="w-[90%] h-full flex flex-col items-center justify-center rounded-md bg-no-repeat bg-cover md:row-span-2 md:w-full md:h-[95%] md:self-end  "
            style={{
              backgroundImage: `url(${import.meta.env.VITE_MEDIA_STORAGE_URL! + "mcQueenWear.jpeg"})`,
              backgroundPosition: "center",
            }}
          >
            <div
              className="w-6 h-6 rounded-full grid place-items-center z-10"
              style={{
                background: "linear-gradient(270deg, #02BE83 0%, #B3F6DC 100%)",
              }}
            >
              <div className="w-2 h-2 rounded-full bg-white"></div>
            </div>
            <Flip delay={3500} duration={1000} top>
              <div
                className="w-[15rem] h-fit px-3 py-2 flex items-center justify-center rounded-[.5rem] relative bottom-[-.5rem] bg-white gap-2 tracking-tight md:w-[85%] "
                style={{ boxShadow: "0px 20px 30px rgba(64, 103, 254, 0.15)" }}
              >
                <div className="w-[2rem] h-[2rem] bg-white grid place-items-center rounded-full shadow-slate-400 shadow-xl absolute right-5 top-[-1rem]">
                  <img src={import.meta.env.VITE_MEDIA_STORAGE_URL! +"lock.png"} alt="" width={12} />
                </div>
                <img
                  src={import.meta.env.VITE_MEDIA_STORAGE_URL! +"Ellipse 6.png"}
                  alt=""
                  className="w-8"
                />
                <span className="text-xs">
                  <b>Joan</b> has just purchased these sneakers right now.
                </span>
              </div>
            </Flip>
          </div>
        </Zoom>
        <Zoom delay={1000}>
          <div
            className="w-[90%] h-full flex flex-col items-center justify-end rounded-md bg-no-repeat bg-cover gap-4 overflow-hidden md:w-full md:h-[75%] md:self-end xl:flex-col-reverse"
            style={{
              backgroundImage: `url(${import.meta.env.VITE_MEDIA_STORAGE_URL! +"nikeShoes.jpg"})`,
              backgroundPosition: "center",
            }}
          >
            <div
              className="w-6 h-6 rounded-full grid place-items-center z-10 transition"
              style={{
                background: "linear-gradient(270deg, #02BE83 0%, #B3F6DC 100%)",
              }}
            >
              <div className="w-2 h-2 rounded-full bg-white"></div>
            </div>

            <Trending
              imgSrc={import.meta.env.VITE_MEDIA_STORAGE_URL! +"nikeShoes.jpg"}
              name="Nike Air 780c"
              price={890}
              size={8}
              category="male"
            />
          </div>
        </Zoom>
        <Zoom delay={1500}>
          <div
            className="w-[90%] h-full flex flex-col items-center justify-end bg-[white] rounded-md bg-no-repeat bg-contain gap-2 md:w-full md:h-[85%] md:self-start xl:justify-start xl:pt-[2rem] "
            style={{
              backgroundImage: `url(${import.meta.env.VITE_MEDIA_STORAGE_URL! + "yeezyBoost.jpg"})`,
              backgroundPosition: "center",
            }}
          >
            <Flip delay={3000} top duration={1000}>
              <div className="h-[4rem] w-[95%] rounded-xl justify-between flex bg-white shadow-xl shadow-slate-400 lg:w-[80%] ">
                <div className="w-8/12 flex items-center gap-2 pl-2">
                  <div className="w-[3rem] h-[3rem] grid place-items-center bg-[#adbdff] rounded-full row-span-2 md:h-[1.5rem] md:w-[1.5rem]">
                    <FiGift className="text-xl text-white md:text-sm" />
                  </div>
                  <div className="w-fit h-full flex flex-col items-start justify-center">
                    <span className="text-[#315bff] text-xl font-bold md:text-sm">
                      10%
                    </span>
                    <span className="text-xs text-[rgb(10,8,58)] font-semibold whitespace-nowrap md:font-medium">
                      This week's discount
                    </span>
                  </div>
                </div>
                <div className="h-full w-3/12 grid place-items-center relative border-l-2 border-dashed border-l-gray-300">
                  <button className="w-[3rem] h-fit text-[#315bff] text-xs font-bold uppercase">
                    <Link to="/products/promoProducts">share a gift</Link>
                  </button>
                  <div className="h-[1rem] w-[1rem] rounded-full bg-[#d4d4d4] absolute top-[-.5rem] left-[-.5rem] "></div>
                  <div className="h-[1rem] w-[1rem] rounded-full bg-[#d4d4d4] absolute bottom-[-.5rem] left-[-.5rem]"></div>
                </div>
              </div>
            </Flip>
            <div
              className="w-6 h-6 rounded-full grid place-items-center z-10"
              style={{
                background: "linear-gradient(270deg, #02BE83 0%, #B3F6DC 100%)",
              }}
            >
              <div className="w-2 h-2 rounded-full bg-white"></div>
            </div>
          </div>
        </Zoom>
      </div>
      <Flip top delay={4000}>
        <div className="w-full h-fit flex flex-col items-center justify-center gap-[2rem] mb-10 lsm:flex-row lsm:gap-0 lg:gap-10">
          {descriptionsData.map((descriptionData, index) => {
            const { imgSrc, degree, description } = descriptionData;
            return (
              <Description
                imgSrc={imgSrc}
                degree={degree}
                description={description}
                key={index}
              />
            );
          })}
        </div>
      </Flip>
      <FounderMessage />
      <Quality />
      <Dedication />
      <Accessories />
      <OurProducts />
      <PopularBrands />
    </div>
  );
};

export default memo(About);
