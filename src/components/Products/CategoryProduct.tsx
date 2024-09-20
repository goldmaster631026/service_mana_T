import { AiOutlineHeart } from "react-icons/ai";
import { FC, memo } from "react";
import { Fade } from "react-reveal";

const CategoryProduct: FC<CategoryProductProps> = (props) => {
  const { imgSrc, discount, sneakersName, sneakersType, price } = props;
  return (
    <Fade bottom>
      <div className="w-full h-[20rem] rounded-xl bg-[#f5f5f5] p-2 px-3 flex flex-col items-center justify-center md:items-start max2xl:h-[25rem] 2xl:h-[30rem]">
        <div
          className="w-full h-[70%] bg-cover bg-no-repeat rounded-lg flex items-start justify-between p-4 hover:bg-hover 2xl:mb-[2rem]"
          style={{ backgroundImage: `url(${imgSrc})` }}
        >
          {discount && (
            <span className="text-xs font-bold text-white uppercase bg-[#FF3C78] rounded-full px-2 py-1 2xl:text-sm">
              {discount}% off
            </span>
          )}
          <AiOutlineHeart className="text-white text-2xl md:hidden" />
        </div>
        <span className="text-base font-bold text-[rgb(10,8,58)] text-center justify-start items-center md:text-lg md:w-full md:flex md:justify-between 2xl:text-xl">
          {sneakersName}
          <AiOutlineHeart className="hidden text-[#FF3C78] md:block" />
        </span>
        <span className="text-base font-bold text-gray-500 text-center">
          {sneakersType}
        </span>
        <span className="text-lg font-bold text-[rgb(10,8,58)] text-center 2xl:text-2xl">
          ${price}
        </span>
      </div>
    </Fade>
  );
};

export default memo(CategoryProduct);
