import React from "react";
import { Avatar, Typography, Box } from "@mui/material";

const Aside = ({ options, user }) => {
  const [seleted, setSeleted] = React.useState(1);

  const handleSelectOption = (option) => {
    setSeleted(option);
  };

  return (
    <Box className="flex flex-col  m">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Avatar
          alt="Profile Picture"
          src={user?.picture}
          className="min-w-56 min-h-56 mb-2"
        />
        <Typography
          variant="h5"
          component="div"
          fontWeight="bold"
          gutterBottom
          mt={2}
        >
          {`${user?.firstName} ${user?.lastName}`}
        </Typography>

        <Typography
          component="div"
          variant="p"
          mt={1}
          bgcolor={"#ECFDF3"}
          color={"#037848"}
          fontWeight={"medium"}
          className=" shadow-none text-sm rounded-full px-3 py-1"
        >
          {`$${user?.hourly} Hourly`}
        </Typography>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="start"
        justifyContent="center"
        mt={5}
      >
        {options?.map((item, index) => (
          <Typography
            key={index}
            variant="subtitle2"
            component="div"
            gutterBottom
            bgcolor={seleted === item?.id ? "#F9FBFA" : ""}
            textAlign={"left"}
            width={"100%"}
            px={2}
            py={"4px"}
            borderRadius={"4px"}
            fontWeight={"bold"}
            color={seleted === item?.id ? "#344054" : "#677084"}
            className="cursor-pointer"
            onClick={() => handleSelectOption(item?.id)}
          >
            {item?.name}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default Aside;
