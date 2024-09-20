import { memo, type FC } from "react";

const DesignerTalk: FC<DesignerTalkProps> = (props) => {
  const { talk, name, role } = props;
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#3661fe] gap-8 xMiniTablet:gap-2 relative z-[1999]">
      <p className="text-xs font-bold text-white text-center px-4 xMiniTablet:text-[.6rem]">
        {talk}
      </p>
      <div className="flex flex-col items-center justify-center gap-2 xMiniTablet:w-full xMiniTablet:pr-8 xMiniTablet:items-end">
        <span className="text-base text-white font-bold text-center xMiniTablet:text-sm">
          {name}
        </span>
        <span className="text-xs text-[#0A083A] font-bold text-center uppercase xMiniTablet:text-[.6rem]">
          {role}
        </span>
      </div>
    </div>
  );
};

export default memo(DesignerTalk);
