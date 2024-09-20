import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Fade, Zoom } from "react-reveal";
import { reasonsData } from "../../data";
import { memo } from "react";

const WhyUs = () => {
  return (
    <div className="w-full h-[150vh] bg-white flex flex-col items-center justify-center gap-[2rem] md:flex-row-reverse md:h-[100vh] md:items-end md:pb-[5rem] ">
      <div className="h-fit w-fit flex flex-col items-center justify-center gap-[2rem] md:h-[35vh] md:w-full md:items-start">
        <Fade right>
          <h1 className="font-bold text-2xl text-center px-[6rem] mt-[20rem] md:mt-0 md:p-0 md:text-4xl md:whitespace-nowrap">
            Why choose our shop
          </h1>
        </Fade>
        <Fade right delay={500}>
          <p className="text-sm text-gray-700 text-center px-11 md:p-0 md:text-start md:text-base">
            For explosive events (sprints up to 400 metres, long jump, triple
            jump) the reduction in atmospheric pressure means there is less
            resistance from the atmosphere.
          </p>
        </Fade>
        <Fade bottom delay={1000}>
          <div className="w-full h-fit md:grid place-items-center gap-[2rem] hidden md:grid-cols-2 md:justify-items-start">
            {reasonsData.map((item, index) => {
              return (
                <div className="w-[10rem] flex gap-3 text-sm" key={index}>
                  <img src={item.imgSrc} alt="" />{" "}
                  <span className="text-base">{item.name}</span>
                </div>
              );
            })}
          </div>
        </Fade>
      </div>
      <div className="w-full h-[16rem] grid place-items-center relative md:h-[20rem]">
        <Zoom>
          <div className="w-[90%] h-[85%] z-20 rounded-[1rem] grid place-items-center relative md:rounded-[1rem] miniTablet:w-[70%] ">
            <img
              src={import.meta.env.VITE_MEDIA_STORAGE_URL! +"videoBg.png"}
              alt=""
              className="h-full absolute"
            />

            <div className="w-12 h-12 rounded-full border border-white grid place-items-center  filter z-10 ishimwe absolute">
              <PlayArrowIcon className="text-white backdrop-filter backdrop-blur-md" />
            </div>
          </div>
        </Zoom>
        <img
          src={import.meta.env.VITE_MEDIA_STORAGE_URL! + "backDecor.svg"}
          alt=""
          className="w-full h-full absolute bottom-[-3rem] left-[-5.5rem] z-0"
        />
      </div>
      <div className="w-full h-fit grid place-items-center gap-[2rem] md:hidden">
        {reasonsData.map((item, index) => {
          return (
            <Fade bottom key={index}>
              <div className="w-[10rem] flex gap-3 text-sm">
                <img src={item.imgSrc} alt="" />{" "}
                <span className="text-base">{item.name}</span>
              </div>
            </Fade>
          );
        })}
      </div>
    </div>
  );
};

export default memo(WhyUs);
