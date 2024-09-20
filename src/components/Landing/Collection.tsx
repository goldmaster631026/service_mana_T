import { useMemo, type FC } from "react";
import { memo } from "react";
import { Link } from "react-router-dom";
import { colors } from "../../data";

const Collection: FC<CollectionProps> = (props) => {
  const { collectionName, nbrOfProducts, collectionPath, indexId, imgSource } =
    props;

  const textColors: string[] = useMemo(() => {
    return ["#315BFF", "#FE7831", "#FF3C78", "#02BE83"];
  }, []);

  const styles = useMemo(() => {
    return {
      background: `linear-gradient(270deg, ${colors[indexId].firstColor} 0%, ${colors[indexId].secondColor} 100%)`,
    };
  }, [indexId]);

  return (
    <div className="w-[85%] h-[65%] bg-[#F5F5f5] rounded-xl flex flex-col items-center justify-center relative top-[-2rem] md:items-start lg:w-[70%] miniLarge:w-[85%]">
      <div className="grid place-items-center gap-2 md:place-items-start md:ml-[2rem]">
        <p
          className="text-xl font-bold md:text-3xl md:flex md:flex-col"
          style={{ color: textColors[indexId] }}
        >
          <span>{collectionName}</span> <span>Collection</span>
        </p>
        <span className="text-base text-gray-700 md:text-lg">
          {nbrOfProducts} products
        </span>
        <Link
          to=""
          className={` text-lg underline font-semibold`}
          style={{ color: textColors[indexId] }}
        >
          See collection
        </Link>
      </div>
      <div
        className="w-[4rem] h-[2.5rem] rounded-t-full -rotate-[140deg] absolute left-2 md:w-[5rem] md:-rotate-[150deg] md:top-[3rem] md:left-[60%]"
        style={styles}
      ></div>
      <div className="w-full h-1/2 relative bottom-[-8rem]">
        <img
          src={imgSource}
          alt=""
          className="w-[25rem] absolute left-[3rem] top-[-8rem]"
          style={{
            transform: `scale(${indexId == 0 && 1.6})`,
            left: `${indexId == 0 && "-2rem"}`,
            top: `${indexId == 0 && "-5rem"}`,
          }}
        />
      </div>
    </div>
  );
};

export default memo(Collection);
