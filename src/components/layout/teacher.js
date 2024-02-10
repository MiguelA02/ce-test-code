import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import { Container, Typography, Box, Grid } from "@mui/material";
import Logo from "../../assets/images/logo.svg";
import AvatarIcon from "../../assets/images/avatar.svg";

const TeacherHeader = () => {
  return (
    <AppBar
      position="static"
      color="transparent"
      className="bg-black shadow-none border-b-[1px] border-[#EBECF1]"
      sx={{ boxShadow: "none" }}
    >
      <Container maxWidth="lg">
        <Toolbar className="flex justify-between items-center">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            className="mr-4"
          >
            <img src={Logo} />
          </IconButton>
          <Grid
            container
            justifyContent="center"
            className="flex-grow items-center gap-11 hidden"
          >
            <Grid item>
              <Typography
                variant=""
                component="div"
                className="text-[#344054] font-semibold text-base cursor-pointer hidden md:block"
              >
                My Students
              </Typography>
            </Grid>
            <Grid
              item
              className="text-[#344054] font-semibold text-base cursor-pointer hidden md:block"
            >
              <Typography
                variant=""
                component="div"
                className="text-[#344054] font-semibold bg-[#F9FBFA] p-2 rounded-md text-base cursor-pointer"
              >
                My Profile
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant=""
                component="div"
                className="text-[#344054] font-semibold text-base cursor-pointer hidden md:block"
              >
                Calendar
              </Typography>
            </Grid>
          </Grid>
          <Box className="flex items-center">
            <IconButton color="st">
              <NotificationsOutlinedIcon className="text-black font-semibold" />
            </IconButton>
            <Avatar alt="User" src={AvatarIcon} className="ml-2 " />
          </Box>
        </Toolbar>
        <Grid
          container
          justifyContent="center"
          className="flex-grow items-center py-2 gap-5 md:hidden md:py-0"
        >
          <Grid item>
            <Typography
              variant=""
              component="div"
              className="text-[#344054] font-semibold text-base cursor-pointer md:hidden"
            >
              My Students
            </Typography>
          </Grid>
          <Grid
            item
            className="text-[#344054] font-semibold text-base cursor-pointer md:hidden"
          >
            <Typography
              variant=""
              component="div"
              className="text-[#344054] font-semibold bg-[#F9FBFA] p-2 rounded-md text-base cursor-pointer"
            >
              My Profile
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant=""
              component="div"
              className="text-[#344054] font-semibold text-base cursor-pointer md:hidden"
            >
              Calendar
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
};

export default TeacherHeader;
