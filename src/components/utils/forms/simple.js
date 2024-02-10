import React from "react";
import { Button, Grid } from "@mui/material";
import Input from "./input";

const Simple = ({
  label = "",
  value = "",
  onChange,
  onSave,
  handleCancel,
  color,
  background,
}) => {
  return (
    <Grid container spacing={2} justifyContent="end">
      <Grid item xs={12}>
        <Input label={label} value={value} onChange={onChange} />
      </Grid>
      <Grid item>
        <Button
          style={{
            fontWeight: "bold",
            textTransform: "none",
            color: "#354154",
          }}
          calassName="w-full rounded-lg"
          onClick={handleCancel}
        >
          Cancel
        </Button>
      </Grid>
      <Grid item>
        <Button
          style={{
            backgroundColor: background,
            color: color,
            fontWeight: "bold",
            textTransform: "none",
          }}
          calassName="w-full rounded-lg"
          onClick={onSave}
        >
          Save
        </Button>
      </Grid>
    </Grid>
  );
};

export default Simple;
