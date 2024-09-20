import Triangle from "./Triangle";
import { trianglesData } from "../../data";
import { Zoom, Fade } from "react-reveal";
import { memo } from "react";

const FounderMessage = () => {
  return (
    <div className="w-full h-fit flex flex-col items-center justify-center gap-[2rem] bg-[#f5f5f5] py-10 lsm:flex-row lg:px-[5rem]">
      <div className="flex flex-col items-center justify-center gap-8">
        <Zoom>
          <span className="w-full text-center text-[#02BE83] text-base font-semibold uppercase lsm:text-start pl-[2rem]">
            Founder Message
          </span>
        </Zoom>
        <Zoom>
          <p className="w-full text-center text-xl font-black text-[rgb(10,8,58)] lsm:text-start pl-[2rem]">
            I strongly believe that this Sneaker store will improve your daily
            vibes
          </p>
        </Zoom>
        <Fade duration={1000} right>
          <div className="w-full flex flex-col items-start justify-center gap-6 px-[.75rem] lsm:pl-[2rem]">
            <p className="text-sm text-[rgb(37,37,37)] text-center tracking-wider lsm:text-start">
              For atheletes, high altitude produces two contradictory effects on
              performance.
            </p>
            <p className="text-sm text-[rgb(37,37,37)] text-center tracking-wider lsm:text-start">
              For explosive events (sprints up to 400 metres, long jump, tripple
              jump) the reduction in atmospheric pressure means there is less
              resistance from the atmosphere.
            </p>
            <p className="text-sm text-[rgb(37,37,37)] text-center tracking-wider lsm:text-start">
              For parties, the sneakers are good depending on your favourite,
              you can find the on that fits you.
            </p>
          </div>
        </Fade>
      </div>
      <Zoom>
        <div className="w-full h-[25rem] relative grid place-items-center 2xl:w-[70%]">
          <div
            className="w-[85%] h-[20rem] bg-cover bg-no-repeat rounded-xl relative z-10"
            style={{
              backgroundImage: `url("https://learn.microsoft.com/en-us/answers/storage/attachments/209536-360-f-364211147-1qglvxv1tcq0ohz3fawufrtonzz8nq3e.jpg")`,
              backgroundPosition: `center`,
            }}
          ></div>
          {trianglesData.map((triangle) => {
            const { position, id, rotation } = triangle;
            return (
              <Triangle
                key={id}
                position={position}
                id={id}
                rotation={rotation}
              />
            );
          })}
        </div>
      </Zoom>
    </div>
  );
};

export default memo(FounderMessage);
