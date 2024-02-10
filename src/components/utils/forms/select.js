import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const SelectComponent = ({ values, label, onChange, value }) => {
  return (
    <div>
      <FormControl fullWidth size="small">
        <InputLabel id={`${label}`}>{label}</InputLabel>
        <Select
          labelId={`${label}`}
          id={`${label}`}
          value={value}
          label={`${label}`}
          onChange={onChange}
        >
          {values?.map((item, index) => (
            <MenuItem key={index} value={item?.value}>
              {item?.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectComponent;
