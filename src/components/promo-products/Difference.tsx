import { differenceData } from "../../data";
import DiffCard from "./DiffCard";
import { Bounce } from "react-reveal";

const Difference = () => {
  return (
    <div className="w-full h-fit flex flex-col items-center justify-center bg-white lg:flex-row lg:py-[10rem] lg:gap-16 relative">
      <div className="w-full h-fit flex flex-col gap-[1rem] p-[3rem] lg:w-fit lg:items-start">
        <Bounce top duration={1500}>
          <span className="text-center text-xs text-[#FF3C78] uppercase font-bold block lg:text-base xlarge:text-lg">
            Benefits
          </span>
        </Bounce>
        <Bounce top duration={1000}>
          <h1 className="text-center text-2xl text-[#0A083A] flex flex-col  font-bold lg:text-4xl lg:items-start xlarge:text-5xl">
            <span>Why we are </span>
            <span>different</span>
          </h1>
        </Bounce>
      </div>
      <div className="w-fit h-full lsm:grid lsm:grid-cols-2 transition duration-1000 ">
        {differenceData.map((data, index) => {
          const { heading, content, imgSrc } = data;
          return (
            <DiffCard heading={heading} content={content} imgSrc={imgSrc} key={index} />
          );
        })}
      </div>
    </div>
  );
};

export default Difference;
