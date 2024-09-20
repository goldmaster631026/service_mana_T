import { type FC, useMemo } from "react";
import { memo } from "react";
import { colors } from "../../data";

const FeaturedPro: FC<FeaturedProInterface> = (props) => {
  const { rating, description, price, imgSrc, id, indexId, from } = props;

  const styles = useMemo(() => {
    return {
      background: `linear-gradient(270deg, ${colors[indexId].firstColor} 0%, ${colors[indexId].secondColor} 100%)`,
    };
  }, []);

  const theRatingStars: JSX.Element[] = useMemo(() => {
    return [...Array(Math.floor(rating))].map(
      (el: undefined, index: number) => {
        return <img src={import.meta.env.VITE_MEDIA_STORAGE_URL!! +"Star 4.svg"} alt="" key={index} />;
      }
    );
  }, [id]);

  const theUnfilledStars: JSX.Element[] = useMemo(() => {
    return rating < 5
      ? [...Array(5 - Math.floor(rating))].map(
          (el: undefined, index: number) => {
            return <img src={import.meta.env.VITE_MEDIA_STORAGE_URL!! +"Star 5.svg"} alt="" key={index} />;
          }
        )
      : [];
  }, [indexId]);

  return (
    <div
      className={`w-full h-full flex flex-col items-center justify-center gap-[1rem] sm:gap-[1rem]`}
    >
      <div className="w-full h-auto relative flex items-center justify-center">
        <div
          className="w-[7rem] h-[7rem] rounded-full absolute top-[-1rem] right-[9rem] sm:right-[30%] lsm:right-[40%] lssm:right-[40%]"
          style={styles}
        ></div>
        <img src={imgSrc} alt="" className="h-[10rem] z-0" loading="lazy" />
        <div
          className="w-[2rem] h-[2rem] rounded-full grid place-items-center absolute bottom-10 z-10 "
          style={{
            background:
              "linear-gradient(97.49deg, rgba(138, 168, 248, 0.6) -0.43%, rgba(49, 91, 255, 0.6) 144.53%)",
          }}
        >
          <img src={import.meta.env.VITE_MEDIA_STORAGE_URL!! +"Group.svg"} alt="" />
        </div>
      </div>
      <div className="flex gap-2">
        {theRatingStars} {theUnfilledStars}
      </div>
      <span className="w-[14rem] text-center">{description}</span>
      <span className="font-bold">{`$ ${price}`}</span>
    </div>
  );
};

export default memo(FeaturedPro);
