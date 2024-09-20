import CartItem from "./CartItem";
import { IoMdArrowDropleft } from "react-icons/io";

const CartItems = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-3 xlssm:w-[90%] circleLg:items-start circleLg:justify-start circleLg:w-full circleLg:pl-[2rem] circleLg:gap-[5rem]">
      <div className="w-full h-fit flex flex-col items-center gap-2 circleLg:items-start circleLg:pl-2">
        <span className="text-[rgb(10,8,58)] text-2xl font-bold md:text-3xl 2xl:text-4xl block">
          Shopping Cart
        </span>
        <span className="text-sm font-bold text-slate-500 md:text-base 2xl:text-lg">
          Total: 2 items
        </span>
      </div>
      <div className="w-full h-fit py-2  flex flex-col items-center justify-center gap-6 mini2xl:items-start">
        <CartItem />
        <CartItem />
      </div>
      <span className="w-[92%] items-center justify-start poppins font-bold text-lg text-[rgb(10,8,58)] hidden circleLg:flex">
        <IoMdArrowDropleft />
        continue shopping
      </span>
    </div>
  );
};

export default CartItems;
