const JoinOthers = () => {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center gap-6 p-4 relative lsm:py-10 md:flex-row md:py-20 circleLg:gap-24 xlarge:py-[8rem] max2xl:gap-[15rem]"
      style={{
        background: "linear-gradient(270deg, #5479fc 0%, #8AA8F8 100%)",
      }}
    >
      <div
        className="w-[2rem] h-[2rem] rounded-full absolute top-0 left-0 mt-5 z-0 md:w-[3rem] md:h-[3rem] "
        style={{
          background: `linear-gradient(270deg, #315BFF 0%, #8AA8F8 100%)`,
        }}
      ></div>
      <div
        className="w-[1rem] h-[1rem] rounded-full absolute top-0 left-0 ml-10 mt-12 z-0 md:h-[2rem] md:w-[2rem]"
        style={{
          background: `linear-gradient(270deg, #315BFF 0%, #8AA8F8 100%)`,
        }}
      ></div>
      <div
        className="w-[1rem] h-[1rem] rounded-full absolute bottom-0 right-0 mr-12 mb-12 md:h-[2rem] md:w-[2rem]"
        style={{
          background: `linear-gradient(270deg, #315BFF 0%, #8AA8F8 100%)`,
        }}
      ></div>
      <div className="flex flex-col z-50 md:items-start">
        <span className="text-white text-xl text-center font-bold md:text-3xl lg:text-4xl max2xl:text-5xl 2xl:text-6xl">
          Join our customers club &
        </span>
        <span className="text-white text-xl text-center whitespace-nowrap font-bold md:text-3xl lg:text-4xl max2xl:text-5xl 2xl:text-6xl">
          Get <strong className="md:text-black">25% sale</strong> discount now.
        </span>
      </div>
      <button className="w-[50%] text-white text-sm bg-[#3661FE] p-3 rounded-md shadow-xl transition duration-300 hover:bg-white hover:text-[#3661FE] lssm:w-[40%] miniTablet:w-[30%] md:uppercase md:font-bold md:py-4 xLgMd:w-[20%] mini2xl:max-w-[15rem] max2xl:py-6">
        Sign up for free
      </button>
      <div
        className="w-[2rem] h-[2rem] rounded-full absolute bottom-0 right-0 mr-4 mb-5 z-0 md:w-[3rem] md:h-[3rem]"
        style={{
          background: `linear-gradient(270deg, #315BFF 0%, #8AA8F8 100%)`,
        }}
      ></div>
      <div
        className="w-[1rem] h-[1rem] rounded-full absolute bottom-0 right-0 mr-12 mb-12 z-0 md:w-[2rem] md:h-[2rem] md:mr-16"
        style={{
          background: `linear-gradient(270deg, #315BFF 0%, #8AA8F8 100%)`,
        }}
      ></div>
    </div>
  );
};

export default JoinOthers;
