import { memo } from "react";
import { productsData } from "../../data";
import OurProduct from "./OurProduct";
import { Zoom } from "react-reveal";

const OurProducts = () => {
  return (
    <div className="w-full h-fit flex flex-col items-start justify-center gap-[2rem] bg-[#f5f5f5] py-[3rem] lsm:gap-[5rem] xl:items-center">
      <span className="w-full text-start font-bold text-4xl text-[#0A083A] pl-[2rem] lsm:text-center lg:text-5xl">
        Our Products
      </span>
      <Zoom>
        <div className="w-full flex flex-col items-center justify-center gap-[4rem] miniTablet:flex-row xl:w-[80%]">
          {productsData.map((product) => {
            const { imgSrc, id, summary, description, productUrl } = product;
            return (
              <OurProduct
                key={id}
                id={id}
                imgSrc={imgSrc}
                summary={summary}
                description={description}
                productUrl={productUrl}
              />
            );
          })}
        </div>
      </Zoom>
    </div>
  );
};

export default memo(OurProducts);
