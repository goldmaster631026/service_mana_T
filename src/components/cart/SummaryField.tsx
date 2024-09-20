import { type FC, memo } from "react";

const SummaryField: FC<SummaryProps> = (props) => {
  const { label, value } = props;
  return (
    <p className="w-full flex justify-between items-center text-sm text-[rgb(10,8,58)] font-semibold md:text-base md:font-bold">
      <span className="poppins">{label}</span>
      <span
        className={`poppins ${
          label == "Applied promo code"
            ? "text-[#FF3C78]"
            : label == "Total"
            ? "text-xl"
            : ""
        } `}
      >
        {label == "Applied promo code" ? "-$" + value : "$" + value}
      </span>
    </p>
  );
};

export default memo(SummaryField);
