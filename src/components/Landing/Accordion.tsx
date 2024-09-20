import { memo, type FC } from "react";
import { Link } from "react-router-dom";
import { useResponsive } from "../../hooks/useResponsive";

const Accordion: FC<AccordionProps> = (props) => {
  const { summary, links: allLinks, isActive, handleChange } = props;
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
    <div className="w-full h-full flex flex-col items-start justify-center pl-[30%] gap-4 transition-all duration-1000 md:pl-0 md:justify-start md:pt-[2rem]">
      <span
        className="text-lg font-medium text-[#0A083A]  transition-all duration-700 lg:text-2xl md:font-semibold whitespace-nowrap"
        onClick={() => handleChange(summary)}
      >
        {summary}
      </span>
      <div
        className="flex flex-col items-start justify-start transition-all duration-1000"
        style={{ display: `${isActive || mobile ? "flex" : "none"}` }}
      >
        {allLinks.map((linkData: Link, index: number) => {
          const { link, to } = linkData;
          return (
            <Link to={`/${to}`} key={index} className="text-sm md:text-base">
              {link}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default memo(Accordion);
