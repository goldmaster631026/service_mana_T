import { memo } from "react";
import { qualityCardsData } from "../../data";
import QualityCard from "./QualityCard";
import { Zoom, Flip } from "react-reveal";

const Quality = () => {
  return (
    <div className="w-full h-fit flex flex-col bg-white py-[3rem] items-center">
      <div className="flex flex-wrap gap-6 px-6 md:flex-col md:items-center md:px-0 mb-8">
        <Zoom>
          <span className="text-3xl font-black pr-[2rem] md:pr-0 md:text-4xl lg:text-5xl ">
            Making high quality products
          </span>
        </Zoom>
        <Flip bottom delay={500}>
          <p className="text-gray-700 text-sm font-medium md:text-center md:text-lg md:px-[4rem] lg:px-[10rem] miniLarge:px-[15rem] xl:px-[20rem] 2xl:px-[30rem] ">
            For explosive events (sprints up to 400 metres, long jump, triple
            jump) the reduction in atmospheric pressure means there is less
            resistance from the atmosphere.
          </p>
        </Flip>
      </div>
      <div className="flex flex-col gap-[.5rem] items-center justify-center lg:w-[80%]">
        {qualityCardsData.map((qualityCard) => {
          const { imgSrc, heading, description, triangles, id, delay } =
            qualityCard;
          return (
            <QualityCard
              key={id}
              id={id}
              imgSrc={imgSrc}
              heading={heading}
              description={description}
              triangles={triangles}
              delay={delay}
            />
          );
        })}
      </div>
    </div>
  );
};

export default memo(Quality);
