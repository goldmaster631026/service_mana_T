import { memo, type FC } from "react";
import { Flip } from "react-reveal";

const DiffCard: FC<DiffProps> = (props) => {
  const { heading, content, imgSrc } = props;
  return (
    <Flip duration={800}>
      <div className="w-full h-full bg-white relative flex flex-col items-center justify-center gap-[2rem] p-[2rem] border group transition before:hidden before:h-[2rem] before:w-full before:absolute before:bg-[#315bff] before:-top-8 before:left-0 hover:bg-[#315bff] hover:shadow-2xl hover:shadow-[#315bff] hover:border-0 hover:before:block hover:z-50 hover:before:z-50 lgMd:items-start lsm:w-[20rem] lsm:h-[20rem]">
        <img
          src={imgSrc}
          alt=""
          className="w-16 h-16 hidden group-hover:block"
        />
        <span className="text-center text-lg font-bold group-hover:text-white lg:text-xl">
          {heading}
        </span>
        <p className="text-center text-sm group-hover:text-white lgMd:text-start lg:text-base">
          {content}
        </p>
      </div>
    </Flip>
  );
};

export default memo(DiffCard);
