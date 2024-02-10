import React from "react";
import { Button, Grid } from "@mui/material";
import Select from "./select";
import Input from "./input";

const SelectForm = ({
  labelSelect = "",
  labelInput = "",
  onSave,
  handleCancel,
  color,
  background,
  options,
}) => {
  const [selected, setSelected] = React.useState("");
  const [text, setText] = React.useState("");

  const handleSelectChange = (event) => {
    setSelected(event.target.value);
  };

  const handleChangeText = (value) => {
    setText(value?.target.value);
  };

  const handleSave = () => {
    onSave(selected, text);
    handleCancel();
  };

  return (
    <Grid container spacing={2} justifyContent="end">
      <Grid item xs={12}>
        <Select
          values={options}
          label={labelSelect}
          onChange={handleSelectChange}
          value={selected}
        />
        <Input label={labelInput} value={text} onChange={handleChangeText} />
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
          onClick={handleSave}
        >
          Save
        </Button>
      </Grid>
    </Grid>
  );
};

export default SelectForm;
