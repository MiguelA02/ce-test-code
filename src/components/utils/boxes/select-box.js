import React from "react";
import { Box, Typography, IconButton, Button } from "@mui/material";
import Pencil from "../../../assets/icons/pencil.svg";
import Badge from "../../utils/badges/badge";
import ModalForm from "../modals/form";
import SelectForm from "../../utils/forms/simple-select";
import { classNames } from "../../../utils/util";

const SelectBox = ({
  title,
  options,
  optionsSelect,
  optionsButtons,
  labelSelect,
  labelInput,
  icon,
  customClassName = "",
  onSave,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [select, setSeleted] = React.useState(optionsButtons[0] ?? "");

  const toggleVisible = () => {
    setIsOpen(!isOpen);
  };
  const handleSelectOption = (option) => {
    setSeleted(option);
  };

  return (
    <Box className="w-full flex flex-col mt-5">
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
          <img src={Pencil} alt="icon" />
        </IconButton>
      </Box>

      <Box
        className={classNames(
          "flex flex-col w-full gap-3 rounded-xl p-5 border-[#EBEDF0] border-[2px]",
          customClassName
        )}
      >
        <Box className="flex w-full gap-3 bg-[#F9FAFB] p-1 rounded-lg">
          {optionsButtons?.map((option, index) => {
            const isSelected = option === select;
            return (
              <Button
                key={index}
                style={{
                  backgroundColor: `${isSelected ? "#FFFFFF" : "#F9FAFB"}`,
                  color: "#354154",
                  fontWeight: "bold",
                  fontSize: "12px",
                  textTransform: "none",
                }}
                className={classNames(
                  isSelected ? "shadow-sm" : "",
                  "w-full rounded-lg"
                )}
                onClick={() => handleSelectOption(option)}
              >
                {option}
              </Button>
            );
          })}
        </Box>
        <Box className="flex flex-col w-full">
          {options?.map((option, index) => (
            <Box key={index} className="flex flex-col text-start">
              <Typography
                variant="subtitle1"
                component="div"
                width={"100%"}
                borderRadius={"4px"}
                fontWeight={"bold"}
                color={"black"}
              >
                {option?.name}
              </Typography>
              <Box className="flex flex-wrap gap-2 mt-2 mb-3">
                {option?.grades?.map((item, index) => (
                  <Badge key={index} name={item.name} />
                ))}
              </Box>
            </Box>
          ))}
          <Button
            style={{
              backgroundColor: "#FFFFFF",
              color: "#354154",
              fontWeight: "bold",
              fontSize: "12px",
              textTransform: "none",
              border: "1px solid #EBEDF0",
              marginTop: "15px",
            }}
            className="w-full rounded-lg"
          >
            View more
          </Button>
        </Box>
      </Box>
      <ModalForm visible={isOpen} toggleVisible={toggleVisible}>
        <SelectForm
          handleCancel={toggleVisible}
          onSave={onSave}
          label={title}
          labelInput={labelInput}
          labelSelect={labelSelect}
          options={optionsSelect}
        />
      </ModalForm>
    </Box>
  );
};

export default SelectBox;
