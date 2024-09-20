import type { FC } from "react";

const Description: FC<DescriptionProps> = (props) => {
  const { imgSrc, description, degree } = props;

  return (
    <div className="w-fit h-fit flex flex-col gap-2 items-center justify-center lsm:w-[20rem]">
      <div className="w-[5rem] h-[5rem] rounded-full bg-[#ffffff16] grid place-items-end lsm:w-[4rem] lsm:h-[4rem]">
        <img
          src={imgSrc}
          className="w-14 lsm:w-12"
          alt=""
        />
      </div>
      <span className="text-4xl text-[#02BE83] font-bold lsm:text-3xl">
        {degree}
      </span>
      <span className="text-center font-medium text-xl text-white lsm:text-base">
        {description}
      </span>
    </div>
  );
};

export default Description;
