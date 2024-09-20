import {
  MenuItem,
  OutlinedInput,
  SelectChangeEvent,
  Select,
  FormControl,
  Radio,
} from "@mui/material";
import { useCallback, useState } from "react";
import FOutlinedInput from "../../FormComponents/FOutlinedInput";
import { IoMdArrowDropleft } from "react-icons/io";
import { AiFillLock } from "react-icons/ai";

const ITEM_HEIGHT = 48;

const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const Billing = () => {
  const [paymentMethod, setPaymentMethod] = useState<string>("Free");

  const handleChange = useCallback(
    (event: SelectChangeEvent<typeof paymentMethod>) => {
      const {
        target: { value },
      } = event;
      setPaymentMethod(value);
    },
    [paymentMethod]
  );

  return (
    <div className="w-full h-full flex flex-col items-center gap-4 xlssm:w-[90%] xMiniTablet:mt-[5rem] circleLg:gap-8 2xl:-ml-24">
      <div className="w-full h-fit flex flex-col gap-4 border border-gray-200 p-6">
        <FormControl fullWidth>
          <Select
            value={paymentMethod}
            input={<OutlinedInput />}
            MenuProps={MenuProps}
            className="w-full"
            onChange={handleChange}
          >
            <MenuItem disabled value="choose">
              Choose Option
            </MenuItem>
            {[
              {
                label: "PayPal",
                value: "paypal",
                imgSrc: "payment1.png",
              },
              {
                label: "Credit card",
                value: "visa credit card",
                imgSrc: "payment2.png",
              },
              {
                label: "MoMo Pay",
                value: "momopay",
                imgSrc: "payment3.png",
              },
            ].map((el, index) => {
              return (
                <MenuItem value={el.value} key={index}>
                  <div className="w-full flex justify-between items-center">
                    <div>
                      <Radio checked color="success" />
                      <span>{el.label}</span>
                    </div>
                    <img
                      src={import.meta.env.VITE_MEDIA_STORAGE_URL! + el.imgSrc}
                      className="w-12 h-12"
                      alt=""
                    />
                  </div>
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FOutlinedInput
          label="Card number"
          children={<AiFillLock />}
          _onChange={undefined}
        />
        <FOutlinedInput label="Card holder name" _onChange={undefined} />

        <div className="w-full h-fit flex gap-2">
          <FOutlinedInput
            label="Expiration date (MM/YY)"
            _onChange={undefined}
          />
          <FOutlinedInput label="Security Code" _onChange={undefined} />
        </div>
      </div>

      <div className="w-full flex justify-between text-base  md:text-lg">
        <span className="w-full flex items-center justify-start poppins font-black text-[rgb(10,8,58)] md:w-[90%]">
          <IoMdArrowDropleft />
          return to delivery
        </span>
        <button className="button hover:buttonOutline py-1 h-16 hover:py-1">
          Pay Safely
        </button>
      </div>
    </div>
  );
};

export default Billing;
