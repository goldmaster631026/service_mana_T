import { ImQuotesLeft } from "react-icons/im";
import { useMemo, type FC } from "react";

const Testimonial: FC<CustomerTestProps> = (props) => {
  const { customerName, rating, testimonial } = props;
  const theFilledStars: JSX.Element[] = useMemo(() => {
    return [...Array(Math.floor(rating))].map(
      (el: undefined, index: number) => {
        return (
          <img
            src={import.meta.env.VITE_MEDIA_STORAGE_URL!!! +"Star 4.svg"}
            alt=""
            key={index}
            className="w-4"
          />
        );
      }
    );
  }, []);

  const theUnfilledStars: JSX.Element[] = useMemo(() => {
    return rating < 5
      ? [...Array(5 - Math.floor(rating))].map(
          (el: undefined, index: number) => {
            return (
              <img
                src={import.meta.env.VITE_MEDIA_STORAGE_URL!!! +"Star 5.svg"}
                alt=""
                key={index}
                className="w-4"
              />
            );
          }
        )
      : [];
  }, []);
  return (
    <div className="w-full h-full border border-[#444082] relative flex flex-col items-center justify-center gap-2 p-3 before:w-8 before:h-14 before:absolute before:-top-1 before:-left-1 before:z-0 before:bg-[#0A083A] after:w-8 after:h-2 after:absolute after:-bottom-1 after:-right-1 after:z-0 after:bg-[#0A083A] lg:items-start lg:pl-8">
      <ImQuotesLeft className="w-16 h-16 text-[#c4c3c362] absolute -top-1 lg:right-1 " />
      <span className="flex gap-1 z-10">
        {theFilledStars}
        {theUnfilledStars}
      </span>
      <p className="text-white text-sm text-center font-bold z-10 mini2xl:text-start">
        {testimonial}
      </p>
      <span className="text-[#2e1fff] text-sm">{customerName}</span>
    </div>
  );
};

export default Testimonial;
