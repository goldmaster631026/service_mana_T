import { memo, useMemo, type FC } from "react";
import Switch from "./Switch";
import { Zoom, Fade, Bounce } from "react-reveal";
import Bubble from "./Bubble";

const BestSeller: FC<BestSeller> = (props) => {
  const { rating, improvement, description, price, id } = props;

  const ratings = useMemo(() => {
    return [...Array(Math.floor(rating))].map(
      (rate: undefined, index: number) => {
        return (
          <img
            src={import.meta.env.VITE_MEDIA_STORAGE_URL! +"Star 4.svg"}
            className="w-5 lsm:w-4"
            alt=""
            key={index}
          />
        );
      }
    );
  }, [id]);

  return (
    <div className="w-full h-fit bg-white py-[4rem] flex flex-col gap-12 ">
      <Zoom>
        <div className="w-full flex flex-wrap items-center justify-center md:justify-around xMiniTablet:px-[2rem] lssm:justify-between lssm:px-[1rem] gap-4 h-fit xLgMd:flex-row">
          <h1 className="tracking-wide text-2xl text-[#0A083A] font-bold text-center md:text-4xl lg:text-5xl">
            Best seller this week
          </h1>
          <div className="flex gap-4 items-center justify-center">
            <span className="text-lg font-medium text-[#0A083A]">Men</span>
            <Switch />
            <span className="text-lg font-medium text-[#0A083A]">women</span>
          </div>
        </div>
      </Zoom>
      <div className="w-full h-fit flex flex-col items-center justify-center gap-16 lsm:flex-row lgMd:gap-0 py-[5rem]">
        <div className="w-full h-[12rem] relative flex items-center ">
          <Bounce left>
            <div
              className="w-[60%] h-[12rem] lsm:h-full  rounded-r-2xl flex items-center lg:h-[15rem] xlarge:h-[20rem] relative"
              style={{
                background:
                  "linear-gradient(270deg, #FF3C78 2.8%, #FFB2B2 100%)",
              }}
            >
              <Zoom delay={500}>
                <img
                  src={import.meta.env.VITE_MEDIA_STORAGE_URL! +"alexander.png"}
                  alt=""
                  className="max-w-none w-[20rem] minSm:w-[28rem] lsm:w-[20rem] absolute bottom-[-5rem] minSm:bottom-[-8rem] lsm:bottom-[-5rem] md:w-[23rem] lgMd:w-[26rem] lgMd:bottom-[-7rem] lg:w-[30rem] lg:bottom-[-8rem] lg:left-16 mini2xl:left-[5rem] 2xl:w-[40rem] 2xl:bottom-[-12rem] 2xl:left-[10rem] after:content-[''] after:w-96 after:h-96 after:absolute after:z-50 after:bg-[blue]"
                />
                <Bubble />
              </Zoom>
            </div>
          </Bounce>
        </div>
        <Fade right delay={500}>
          <div className="w-full h-[13rem] flex flex-col items-center lsm:items-start justify-center gap-[1rem] lgMd:w-[80%]">
            <div className="w-full h-fit flex items-center justify-center lsm:justify-start gap-[.2rem]">
              {ratings}
            </div>
            <span className="w-full text-center font-bold text-xl sm:px-4 minSm:px-[5rem] lsm:px-0 lsm:text-start md:pr-16 lg:pr-[18rem] xl:pr-[20rem]">
              {description}
            </span>
            <span className="w-full text-center font-bold text-xl lsm:text-start">
              ${price}
            </span>
            <div className="flex flex-col items-center justify-center relative after:w-[8rem] after:h-[2rem] after:bg-[#315affbf] after:blur-[24px] after:absolute after:bottom-[-.5rem] ">
              <button className="px-10 py-3 bg-[#315BFF] text-white text-sm rounded-md tracking-wider font-medium z-10 2xl:px-20">
                Shop Now
              </button>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default memo(BestSeller);
