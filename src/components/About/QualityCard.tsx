import { FC, useMemo } from "react";
import Triangle from "./Triangle";
import { Zoom, Fade, Bounce } from "react-reveal";

const QualityCard: FC<QualityCProps> = (props) => {
  const { imgSrc, heading, description, triangles, id, delay } = props;

  const textColors: string[] = useMemo(() => {
    return ["#315BFF", "#FE7831", "#02BE83"];
  }, []);

  const fadeDirection = useMemo(() => {
    return id == 1 ? { right: true } : { left: true };
  }, [id]);

  return (
    <div
      className={`w-full h-fit py-[.5rem] flex flex-col items-center justify-center gap-[3rem] xLgMd:w-full ${
        id == 1 ? "lsm" : "normal"
      } lsm:gap-0`}
    >
      <div className="w-full h-[50%] relative grid place-items-center">
        <Zoom delay={delay}>
          <div
            className="h-[12rem] w-[85%] minSm:h-[15rem] bg-cover rounded-md z-10 bg-no-repeat xLgMd:h-[16rem] lg:h-[20rem]"
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundPosition: "center",
            }}
          ></div>
        </Zoom>
        {triangles.map((triangle) => {
          const { position, id, rotation } = triangle;
          return (
            <Triangle
              key={id}
              position={position}
              id={id}
              rotation={rotation}
              delay={delay}
            />
          );
        })}
      </div>
      <div className="h- w-full flex flex-col items-start justify-center px-[1.5rem] gap-[1.5rem] lsm:items-center">
        <Bounce delay={delay + 500} top>
          <span
            className={`text-2xl font-bold lsm:text-center`}
            style={{ color: textColors[id] }}
          >
            {heading}
          </span>
        </Bounce>
        <Fade delay={delay + 500} {...fadeDirection}>
          <p className="text-base tracking-wide text-gray-800 font-medium lsm:text-center">
            {description}
          </p>
        </Fade>
      </div>
    </div>
  );
};

export default QualityCard;
