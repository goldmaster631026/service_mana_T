import type { FC } from "react";
import { AiOutlineZoomIn } from "react-icons/ai";

const YouMayLike: FC<YouMayLikeProps> = (props) => {
  const { name, imgSrc, company, price, id } = props;
  return (
    <div className="w-full h-full flex flex-col gap-4 ">
      <div
        className="w-full h-[80%] bg-cover bg-no-repeat flex items-start justify-end"
        style={{
          backgroundImage: `url(${imgSrc}`,
          backgroundPosition: `center`,
        }}
      >
        <AiOutlineZoomIn className="mr-8 mt-8 text-2xl text-white" />
      </div>
      <div className="w-full h-[20%] grid grid-cols-[60%_40%] place-items-center">
        <div className="w-full h-fit flex flex-col">
          <span className="text-base text-gray-400 font-bold uppercase">
            {company}
          </span>
          <span className="text-base text-[rgb(10,8,58)] font-medium md:font-bold">
            {name}
          </span>
        </div>
        <span className="text-2xl font-bold text-[rgb(10,8,58)]">${price}</span>
      </div>
      <button className="w-[50%] h-[12%] rounded-md text-[#315BFF] text-sm border border-[#315BFF] self-center transition duration-200 hover:text-white hover:bg-[#315BFF] hover:border-none miniSm:h-[10%]">
        shop now
      </button>
    </div>
  );
};

export default YouMayLike;
