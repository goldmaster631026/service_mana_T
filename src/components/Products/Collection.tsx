import { type FC, memo } from "react";

const Collection: FC<CollectionProps1> = (props) => {
  const { id, imgSrc, categoryName, productsNbr } = props;
  return (
    <div
      className="w-full h-full bg-cover bg-no-repeat flex flex-col items-center justify-end pb-2"
      style={{
        backgroundImage: `url(${imgSrc})`,
        backgroundPosition: `center`,
      }}
    >
      <span className="text-[rgb(10,8,58)] text-xl font-bold 2xl:text-3xl">
        {categoryName}
      </span>
      <p className="text-sm text-white text-center tracking-wider px-8 lsm:text-start font-semibold">
        {productsNbr} products
      </p>
    </div>
  );
};

export default memo(Collection);
