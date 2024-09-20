import { InputAdornment, OutlinedInput } from "@mui/material";
import type { FC } from "react";

const FOutlinedInput: FC<FTextFieldProps> = (props) => {
  const { label, children, name, _onChange, type } = props;

  return (
    <OutlinedInput
      fullWidth
      placeholder={label}
      className="w-full text-white"
      endAdornment={<InputAdornment position="end">{children}</InputAdornment>}
      onChange={_onChange}
      name={name}
      type={type}
    />
  );
};

export default FOutlinedInput;
