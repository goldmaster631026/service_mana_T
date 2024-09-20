import { FiExternalLink } from "react-icons/fi";
import { memo, useCallback, type FC } from "react";

const Category: FC<CategoryProps> = (props) => {
  const { url, imgSrc, name, id } = props;

  const visitCollection = useCallback(() => {
    window.open(url);
  }, []);

  return (
    <div
      className={`w-full h-full bg-no-repeat bg-cover flex items-end justify-center pb-[1rem] group transition duration-300 md:justify-start md:pl-8 relative z-10 hover:scale-[.9] ${
        id == 1 ? "md:col-span-2" : id == 4 ? "md:col-span-2" : ""
      }`}
      style={{
        backgroundImage: `url(${imgSrc})`,
        backgroundPosition: `center`,
      }}
    >
      <div className="w-[10rem] backdrop-blur-xl p-4 rounded-md text-xs font-bold flex items-center justify-center gap-4 group-hover:scale-[1.1] transition duration-300 mini2xl:text-base mini2xl:w-[15rem]">
        <span className="whitespace-nowrap">{name} shoes </span>
        <FiExternalLink onClick={visitCollection} />
      </div>
    </div>
  );
};

export default memo(Category);
