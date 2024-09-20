import { tastesData } from "../../data";
import Taste from "./Taste";
import { Flip, Zoom, Bounce } from "react-reveal";

const Benefits = () => {
  return (
    <div className="w-full h-fit bg-white py-8 grid place-items-center md:grid-cols-2 lg:p-[5rem] mini2xl:px-[10rem] 2xl:px-[20rem] 2xl:py-[10rem] ">
      <Flip top duration={1000}>
        <div className="w-full h-fit flex flex-col gap-2 items-center lsm:items-start lsm:pl-[2.5rem]">
          <span className="text-center text-xs text-[#FF3C78] uppercase font-bold block lsm:text-start lg:text-base xlarge:text-lg">
            Benefits
          </span>
          <h1 className="text-2xl text-[#0A083A] font-bold text-center pr-14 lsm:text-start  md:text-4xl ">
            Sports Shoes for all tastes
          </h1>
        </div>
      </Flip>
      <Bounce right duration={1000}>
        <p className="text-sm text-[rgb(37,37,37)] text-center tracking-wider px-[3rem] md:text-base lg:col-start-1 md:mt-[1rem] md:text-start">
          I am sure you won't regret having joined us. Your hapiness and
          satisfaction is our priority
        </p>
      </Bounce>

      <div className="w-fit h-fit flex flex-col items-center justify-center minSm:w-[70%] miniTablet:w-[60%] md:w-full lg:col-start-1">
        {tastesData.map((tasteData) => {
          const { imgSrc, heading, content, id } = tasteData;
          return (
            <Taste
              imgSrc={imgSrc}
              heading={heading}
              content={content}
              id={id}
              key={id}
            />
          );
        })}
      </div>
      <Zoom delay={500}>
        <div
          className="w-full h-[30rem] relative bg-no-repeat bg-cover flex items-end justify-center rounded-md minSm:w-[90%] xlssm:w-[80%] xLgMd:w-[90%] transition group md:w-full lg:h-full lg:row-start-1 lg:col-start-2 lg:row-span-3"
          style={{
            backgroundImage: `url(${
              import.meta.env.VITE_MEDIA_STORAGE_URL! + "mcQueenWear.jpeg"
            })`,
            backgroundPosition: `center`,
          }}
        >
          <div className="w-[90%] h-[25%] bg-[#f5f5f5db] mb-[2rem] rounded-lg flex items-center justify-center p-2 gap-4 group-hover:scale-[1.2] xlssm:w-[75%] miniTablet:w-[60%] lg:h-[20%] md:w-[80%] transition duration-200">
            <div
              className="w-[35%] h-full rounded-lg bg-no-repeat bg-cover"
              style={{
                backgroundImage: `url(${
                  import.meta.env.VITE_MEDIA_STORAGE_URL! + "mcQueenWear.jpeg"
                })`,
                backgroundPosition: `center`,
              }}
            ></div>
            <div className="w-[65%] h-full flex flex-col items-start justify-center gap-2">
              <span className="text-sm text-[#0A083A] font-bold">
                Nike Air Performance
              </span>
              <button className="whitespace-nowrap font-medium text-xs bg-white px-2 py-1 rounded-md">
                performance series
              </button>
              <span className="text-xs text-[rgb(37,37,37)] text-center tracking-wider lsm:text-start">
                soft touch material - white
              </span>
              <div className="flex w-full justify-start items-center gap-4">
                <span className="text-xs text-[#FF3C78] font-bold">
                  $180.00
                </span>
                <span className="text-xs text-[#0a083a66] font-bold line-through">
                  $320.00
                </span>
              </div>
            </div>
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default Benefits;
