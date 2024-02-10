import React from "react";
import { Typography } from "@mui/material";
import { classNames } from "../../../utils/util";
const Badge = ({ name, bgColor, color, customClassName }) => {
  return (
    <Typography
      component="div"
      variant="p"
      bgcolor={bgColor}
      color={color}
      className={classNames(
        customClassName,
        "shadow-none text-sm rounded-full px-3 py-1 bg-[#ECFDF3] text-[#037848] font-medium"
      )}
    >
      {name}
    </Typography>
  );
};

export default Badge;
