import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import Pencil from "../../../assets/icons/pencil.svg";
import Badge from "../../utils/badges/badge";
import Simple from "../forms/simple";
import ModalForm from "../modals/form";

import { classNames } from "../../../utils/util";

const OptionBox = ({
  title,
  options,
  icon,
  customClassName = "",
  children,
  onChange,
  onSave,
  value,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleVisible = () => {
    setIsOpen(!isOpen);
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
          "rounded-xl p-5 border-[#EBEDF0] border-[2px] flex flex-col w-full",
          customClassName
        )}
      >
        <Box className="flex flex-wrap gap-3">
          {options?.map((option, index) => (
            <Box
              key={index}
              className={classNames(
                "flex flex-col".option?.image?.length ? "max-w-48" : ""
              )}
            >
              {option?.image ? (
                <img src={option?.image} alt="" className="mb-4" />
              ) : null}

              <Badge name={option.name} />
            </Box>
          ))}
        </Box>
        {children}
      </Box>

      <ModalForm visible={isOpen} toggleVisible={toggleVisible}>
        <Simple
          handleCancel={toggleVisible}
          onChange={onChange}
          onSave={() => {
            onSave();
            toggleVisible();
          }}
          label={title}
          value={value}
        />
      </ModalForm>
    </Box>
  );
};

export default OptionBox;
