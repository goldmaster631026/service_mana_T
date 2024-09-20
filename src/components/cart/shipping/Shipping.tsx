import { IoMdArrowDropleft } from "react-icons/io";
import FTextField from "../../FormComponents/FTextField";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  MenuItem,
  Radio,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useCallback, useState } from "react";
import { OutlinedInput } from "@material-ui/core";

const ITEM_HEIGHT = 40;
const ITEM_PADDING_TOP = 1;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const Shipping = () => {
  const [plan, setPlan] = useState<string>("Free");
  const handleSendSUpdates = () => setSendSUpdates((prev) => !prev);
  const [sendSUpdates, setSendSUpdates] = useState(false);

  const handleChange = useCallback(
    (event: SelectChangeEvent<typeof plan>) => {
      const {
        target: { value },
      } = event;
      setPlan(value);
    },
    [plan]
  );

  return (
    <div className="w-full h-full flex flex-col gap-4 xlssm:w-[90%] circleLg:gap-10 2xl:-ml-24">
      <div className="w-full h-fit flex flex-col gap-4 border border-gray-200 p-6">
        <FTextField _onChange={undefined} label="Email" variant="standard" />
        <FTextField _onChange={undefined} label="Phone" variant="standard" />
        <FTextField _onChange={undefined} label="Delivery Address" variant="standard" />
      </div>
      <FormControlLabel
        label="Please send me SMS shipping updates about my order."
        className="w-full"
        control={
          <Checkbox
            checked={sendSUpdates}
            color="primary"
            size="small"
            onChange={handleSendSUpdates}
          />
        }
      />
      <div className="w-full h-fit flex flex-col items-start gap-4">
        <span className="text-[rgb(10,8,58)] text-lg font-bold">
          Select Delivery Method
        </span>
        <FormControl fullWidth>
          <Select
            value={plan}
            input={<OutlinedInput />}
            MenuProps={MenuProps}
            className="w-full"
            onChange={handleChange}
          >
            <MenuItem disabled value="choose">
              Choose Option
            </MenuItem>
            {[
              { label: "Free", value: "Free", type: "Standard delivery" },
              { label: "Pay $50", value: "Pay $50", type: "Premium delivery" },
            ].map((el, index) => {
              return (
                <MenuItem value={el.label} key={index}>
                  <div className="w-full flex justify-between items-center">
                    <div>
                      <Radio checked color="success" />
                      <span>{el.type}</span>
                    </div>
                    <span>{el.label}</span>
                  </div>
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </div>
      <div className="w-full flex justify-between">
        <span className="w-full flex items-center justify-start poppins font-black text-sm text-[rgb(10,8,58)] md:w-[90%]">
          <IoMdArrowDropleft />
          Return to Address
        </span>
        <button className="button hover:buttonOutline py-1 h-12 text-xs hover:py-1 hover:text-xs">
          Proceed to Billing
        </button>
      </div>
    </div>
  );
};

export default Shipping;
