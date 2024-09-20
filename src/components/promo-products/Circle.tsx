import { useState } from "react";

const Circle = () => {
  const [hover, setHovered] = useState(false);

  return (
    <div
      className="w-[18rem] h-[10rem] rounded-t-full border-4 border-[#ffffff94] border-dotted border-b-0 flex items-end justify-center pb-[1rem] relative minSm:scale-[1.4] lsm:scale-[2] md:scale-[2.4] lgMd:scale-[2.6] xLgMd:scale-[2.8] circleLg:scale-[3] transition-all duration-1000 animate-pulse "
      style={{
        borderTopColor: `${hover ? "#FF3C78" : ""}`,
        borderRightColor: `${hover ? "#FF3C78" : ""}`,
      }}
    >
      <div className="h-2 w-2 rounded-full border absolute left-[2rem] top-[2.5rem] bg-[#0A083A]"></div>
      <div className="h-2 w-2 rounded-full border absolute translate-x-[50%] top-[-.4rem] bg-[#0A083A]"></div>
      <div
        className="h-2 w-2 rounded-full border absolute right-[2rem] top-[2.5rem] z-50 hover:border-none bg-[#FF3C78] transition-all duration-200"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      ></div>

      <div className="w-[85%] h-[85%] rounded-t-full border-4 border-[#ffffff94] border-dotted border-b-0 border-l-[#fa9358]"></div>

      {/* bottom circles */}
      <div className="h-2 w-2 rounded-full border absolute right-[-.3rem] bottom-[-.4rem]"></div>
      <div className="h-2 w-2 rounded-full border absolute left-[-.3rem] bottom-[-.4rem]"></div>
    </div>
  );
};

export default Circle;
