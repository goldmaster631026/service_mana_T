import type { FC } from "react";

const Size: FC<SizeProps> = (props) => {
  const { isActive, isAvailable, size, toggleIsActive } = props;
  return (
    <div
      className={`w-full h-[2.5rem] border border-gray-200 ${
        isActive && isAvailable ? `border-none bg-[rgb(10,8,58)] ` : ""
      } relative transition flex items-center justify-center overflow-hidden 2xl:h-[3rem]`}
      onClick={() => toggleIsActive(size)}
    >
      {!isAvailable && (
        <div className="w-[125%] absolute border border-gray-200 -left-2 bottom-4 rotate-[149deg] pointer-events-none"></div>
      )}
      <span
        className={`${
          isAvailable
            ? isActive
              ? "text-white"
              : "text-[rgb(10,8,58)]"
            : "text-gray-200"
        } text-sm font-bold pointer-events-none`}
      >
        {size}
      </span>
    </div>
  );
};

export default Size;
