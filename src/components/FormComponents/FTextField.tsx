import { InputAdornment, TextField } from "@mui/material";
import type { FC } from "react";

const FTextField: FC<FTextFieldProps> = (props) => {
  const { label, variant, children } = props;

  return (
    <TextField
      label={label}
      variant={variant || "outlined"}
      className="w-full text-white"
      InputLabelProps={{ style: { color: "rgb(10,8,58)" } }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="end">{children}</InputAdornment>
        ),
      }}
    />
  );
};

export default FTextField;
