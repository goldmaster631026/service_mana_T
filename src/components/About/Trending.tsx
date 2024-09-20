import type { FC } from "react";
import { FiShoppingBag } from "react-icons/fi";
import { Flip } from "react-reveal";

const Trending: FC<TrendingProps> = (props) => {
  const { imgSrc, name, category, size, price } = props;

  return (
    <Flip right delay={2500} duration={1000}>
      <div className="w-[90%] h-[45%] bg-white rounded-md flex p-4 mb-4 shadow-xl shadow-slate-400 md:w-[95%] md:h-[40%] lg:w-[75%] xl:h-[30%] xl:mt-[2rem] xl:gap-[.5rem]">
        <img
          src={imgSrc}
          alt=""
          className="rounded-md h-full w-[30%] md:h-[80%] lg:h-full lg:w-[25%] "
        />
        <div className="w-[70%] flex flex-col items-start justify-center pl-4 ">
          <div className="flex flex-col items-start">
            <span className="text-base font-semibold text-[rgb(10,8,58)] md:text-sm lg:text-base">
              {name}
            </span>
            <span className="text-base font-semibold text-[rgb(10,8,58)] md:text-sm lg:text-base">
              for {category}
            </span>
          </div>
          <div className="flex items-center justify-center gap-3 md:gap-1 lg:gap-[1rem]">
            <p className="flex items-center justify-center gap-1">
              <span className="text-[rgb(10,8,58)] text-xs font-semibold lg:text-sm">
                size:
              </span>
              <span className="text[rgb(10, 8, 58)] text-xs font-normal text-center lg:text-sm">
                {size}
              </span>
            </p>
            <p className="flex items-center justify-center gap-1">
              <span className="text-[rgb(10,8,58)] text-xs font-semibold">
                price:
              </span>
              <span className="text[rgb(10, 8, 58)] text-xs font-normal">
                ${price}
              </span>
            </p>
            <FiShoppingBag
              className={`w-[1.5rem] xs:w-[1rem] sm:w-[1rem] miniTablet:w-[1.75rem] lg:w-[2rem] h-[1.5rem] font-bold text-[rgb(10,8,58)] md:w-4`}
            />
          </div>
        </div>
      </div>
    </Flip>
  );
};

export default Trending;
