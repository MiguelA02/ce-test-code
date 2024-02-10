import React from "react";
import { Box } from "@mui/material";
import Input from "../forms/input";
import Map from "../../../assets/images/map.svg";

const MapBox = ({address, onChange}) => {
  return (
    <Box className="w-full flex-col">
      <Input
        label="My address"
        customClassName={"mt-4"}
        value={address}
        onChange={onChange}
      />
      <img src={Map} className="mt-4" />
    </Box>
  );
};

export default MapBox;
