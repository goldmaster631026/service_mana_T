import { memo, type FC } from "react";
import { Fade, Zoom } from "react-reveal";

const Accessories: FC = () => {
  return (
    <div className="w-full h-fit flex flex-col md:flex-row md:h-fit xl:h-[55vh]">
      <Fade left>
        <div className="w-full h-[32rem] py-[5rem] bg-[#02BE83] z-10 flex flex-col items-center justify-start relative gap-[2rem] md:flex-row md:h-[25rem] md:gap-0 xl:h-full">
          <div
            className="absolute w-10 h-10 rounded-full right-4 top-[12rem]"
            style={{
              background: "linear-gradient(270deg, #02BE83 0%, #B3F6DC 100%)",
            }}
          ></div>
          <div
            className="absolute w-20 h-20 rounded-full left-[-2rem] top-[2rem]"
            style={{
              background: "linear-gradient(270deg, #02BE83 0%, #B3F6DC 100%)",
            }}
          ></div>
          <div className="w-2/3 h-1/2 relative flex items-center justify-center md:w-1/2 md:h-full">
            <Zoom>
              <img
                src={import.meta.env.VITE_MEDIA_STORAGE_URL! +"football 1.png"}
                alt=""
                className="absolute z-10 xl:scale-[1.2]"
              />
            </Zoom>
            <img
              src={import.meta.env.VITE_MEDIA_STORAGE_URL! +"fback.png"}
              alt=""
              className="absolute right-[8%] bottom-[3%] w-[60%] md:bottom-[25%] xLgMd:right-[15%]"
            />
          </div>
          <Fade left>
            <div className="w-1/2 flex flex-col gap-4 justify-center items-center md:items-start md:gap-[2rem]">
              <span className="text-[#0A083A]">Accessories</span>
              <h1 className="text-white text-4xl font-bold md:text-start sm:whitespace-nowrap">
                Foot ball
              </h1>
              <p className="text-white text-center px-0 md:text-start md:px-0 md:z-10">
                We receive new sportwear every day. Just take your pick.
              </p>
              <button
                className="px-10 py-3 bg-[#0A083A] text-white text-sm rounded-md shadow-xl tracking-wider font-medium"
                style={{ boxShadow: "rgba(10, 8, 58, 0.3)" }}
              >
                Shop Now
              </button>
            </div>
          </Fade>
        </div>
      </Fade>
      <Fade right>
        <div className="w-full h-[37rem] py-[5rem] bg-[#0A083A] flex flex-col items-center justify-start relative md:flex-row md:h-[25rem] md:gap-0 xl:h-full">
          <div
            className="absolute w-10 h-10 rounded-full right-4 top-[12rem]"
            style={{
              background:
                "linear-gradient(97.49deg, rgba(138, 168, 248, 0.7) -0.43%, rgba(49, 91, 255, 0.7) 144.53%)",
            }}
          ></div>
          <div
            className="absolute w-20 h-20 rounded-full left-[-2rem] top-[2rem]"
            style={{
              background:
                "linear-gradient(97.49deg, rgba(138, 168, 248, 0.7) -0.43%, rgba(49, 91, 255, 0.7) 144.53%)",
            }}
          ></div>
          <div className="w-2/3 h-1/2 relative flex items-center justify-center md:w-1/2 xLgMd:w-1/2 md:h-full xLgMd:h-full">
            <Zoom>
              <img
                src={import.meta.env.VITE_MEDIA_STORAGE_URL! +"volley 1.png"}
                alt=""
                className="w-[14rem] absolute z-10 lg:scale-[1.2] xl:scale-[1.3] 2xl:scale-[1.5]"
              />
            </Zoom>
            <img
              src={import.meta.env.VITE_MEDIA_STORAGE_URL! +"fback.png"}
              alt=""
              className="absolute right-[15%] bottom-[-2%] w-[50%] md:bottom-[15%] xLgMd:bottom-[10%] xLgMd:right-[20%]"
            />
          </div>
          <Fade left>
            <div className="w-1/2 flex flex-col gap-4 justify-center items-center md:items-start md:gap-[2rem]">
              <span className="text-[#02BE83]">Accessories</span>
              <h1 className="text-white text-4xl font-bold md:text-start sm:whitespace-nowrap">
                Volley ball
              </h1>
              <p className="text-white text-center px-16 xLgMd:text-start md:text-start md:px-0 sm:px-0">
                We receive new sportwear every day. Just take your pick.
              </p>
              <div className="flex flex-col items-center justify-center relative after:w-[8rem] after:h-[2rem] after:bg-[#02be82c7] after:blur-[24px] after:absolute after:bottom-[-.5rem]">
                <button className="px-10 py-3 bg-[#02BE83] text-white text-sm rounded-md tracking-wider font-medium z-10">
                  Shop Now
                </button>
              </div>
            </div>
          </Fade>
        </div>
      </Fade>
    </div>
  );
};

export default memo(Accessories);
