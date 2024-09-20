import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import AutoModeIcon from "@mui/icons-material/AutoMode";
import { memo, useMemo, type FC } from "react";

const PromoProduct: FC<PromoProductProps> = (props) => {
  const {
    sneakerName,
    madeOf,
    durabilityType,
    imgSrc,
    userImage,
    userTestimonial,
    rating,
    id,
  } = props;

  const theRatingStars: JSX.Element[] = useMemo(() => {
    return [...Array(Math.floor(rating))].map(
      (el: undefined, index: number) => {
        return (
          <img
            src={import.meta.env.VITE_MEDIA_STORAGE_URL! + "Star 4.svg"}
            alt=""
            key={index}
            className="w-3"
          />
        );
      }
    );
  }, [id]);

  const theUnfilledStars: JSX.Element[] = useMemo(() => {
    return rating < 5
      ? [...Array(5 - Math.floor(rating))].map(
          (el: undefined, index: number) => {
            return (
              <img
                src={import.meta.env.VITE_MEDIA_STORAGE_URL! + "Star 5.svg"}
                alt=""
                key={index}
                className="w-3"
              />
            );
          }
        )
      : [];
  }, []);
  return (
    <div className="w-[20rem] h-full flex flex-col items-center justify-center relative z-40 lsm:w-[30rem] lsm:h-[30rem] ">
      <div className="w-full h-[40%] flex flex-col items-center justify-start gap-0 lsm:h-fit lsm:gap-x-[2rem] lsm:gap-y-[1rem] lsm:grid lsm:justify-center lsm:place-items-center">
        <span className="text-sm text-white font-bold  lsm:col-span-2 lsm:text-2xl">
          {sneakerName}
        </span>
        <span className="text-xs text-white flex items-center gap-2 lsm:text-base md:text-lg font-medium">
          <StackedLineChartIcon
            className="p-1 text-[#fa9358] lsm:p-0"
            fontSize="medium"
          />
          {madeOf}
        </span>
        <span className="text-xs text-white flex items-center gap-2 lsm:text-base md:text-lg font-medium">
          <AutoModeIcon
            className="p-1 text-[#fa9358] lsm:p-0"
            fontSize="medium"
          />
          {durabilityType} materials
        </span>
      </div>
      <div className="w-full h-[54%] flex flex-col items-center justify-center lsm:h-[80%] ">
        <div className="w-full h-[15rem] relative top-[-3rem] flex flex-col items-center justify-center lsm:top-0">
          <img
            src={imgSrc}
            alt=""
            className="max-w-none w-[22rem] relative lsm:scale-[1.7] md:scale-[2] z-20"
          />

          <div className="w-[70%] h-fit px-2 py-3 flex flex-col items-center justify-center relative rounded-xl gap-[.5rem] bottom-[4rem] backdrop-blur-xl border z-30 ">
            <span className="flex gap-2">
              {theRatingStars}
              {theUnfilledStars}
            </span>
            <span className="text-sm text-white whitespace-nowrap ">
              {userTestimonial}
            </span>
            <img
              src={userImage}
              alt="testimonialImage"
              className="w-10 h-10 rounded-full border border-white absolute right-[-1rem] top-[-1rem]"
            />
          </div>
        </div>
        <span className="text-white relative bottom-[2rem] text-xl font-bold border-b-4 border-b-[#FF3C78] lsm:-bottom-6 md:-bottom-[4rem]">
          {sneakerName}
        </span>
      </div>
    </div>
  );
};

export default memo(PromoProduct);
