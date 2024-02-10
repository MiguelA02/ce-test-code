import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import Simple from "../forms/simple";
import ModalForm from "../modals/form";
import Pencil from "../../../assets/icons/pencil.svg";

const TextBox = ({ title, icon, onSave, value }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [text, setText] = React.useState(value);

  const toggleVisible = () => {
    setIsOpen(!isOpen);
  };

  const handleChangeText = (value) => {
    setText(value?.target.value);
  };

  const handleSaveText = () => {
    onSave(text);
    toggleVisible();
  }
  
  return (
    <Box className="w-full flex flex-col mt-10">
      <Box className="flex w-full mb-4 justify-between mr-2 md:mr-7">
        <Box className="flex items-center gap-3 ml-2 md:ml-5 ">
          <img src={icon} alt="icon" />
          <Typography
            variant="subtitle1"
            component="div"
            width={"100%"}
            borderRadius={"4px"}
            fontWeight={"bold"}
            color={"black"}
          >
            {title}
          </Typography>
        </Box>

        <IconButton onClick={toggleVisible}>
          <img src={Pencil} alt="icon"/>
        </IconButton>
      </Box>
      <Box className="bg-[#417BE2] rounded-xl p-5">
        <Typography
          className="text-white text-start font-light inter"
          variant="body2"
          style={{ fontSize: "13px" }}
        >
          {value}
        </Typography>
      </Box>
      <ModalForm visible={isOpen} toggleVisible={toggleVisible}>
        <Simple
          handleCancel={toggleVisible}
          onChange={handleChangeText}
          onSave={handleSaveText}
          label={title}
          value={text}
        />
      </ModalForm>
    </Box>
  );
};

export default TextBox;
