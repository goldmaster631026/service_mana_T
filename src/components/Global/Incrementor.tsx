import { memo, useState, type FC } from "react";

const Incrementor: FC<IncrementorProps> = (props) => {
  const [nbrOfProducts, setNbrOfProducts] = useState(1);
  const { customStyles } = props;
  return (
    <div
      className={`w-[30%] h-full grid grid-cols-3 ${customStyles?.container} `}
    >
      <div
        className="w-full h-full grid place-items-center text-[rgb(10,8,58)] font-bold text-2xl bg-[#f5f5f5]"
        onClick={() =>
          setNbrOfProducts((prev) => {
            if (prev == 1) return prev;
            return prev - 1;
          })
        }
      >
        -
      </div>
      <div className="w-full h-full grid place-items-center text-[rgb(10,8,58)] font-bold  bg-white border-y">
        {nbrOfProducts}
      </div>
      <div
        className="w-full h-full grid place-items-center text-[rgb(10,8,58)] font-bold text-2xl bg-[#f5f5f5]"
        onClick={() => setNbrOfProducts((prev) => prev + 1)}
      >
        +
      </div>
    </div>
  );
};

export default memo(Incrementor);
