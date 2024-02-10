import React from "react";
import { Container, Grid, Box } from "@mui/material";
import Aside from "../../components/utils/asides";
import Header from "../../components/utils/headers/header";
import TextBox from "../../components/utils/boxes/text-box";
import OptionBox from "../../components/utils/boxes/option-box";
import MapBox from "../../components/utils/boxes/map-box";
import SelectBox from "../../components/utils/boxes/select-box";
import TeacherHeader from "../../components/layout/teacher";
import Book from "../../assets/icons/book.svg";
import User from "../../assets/icons/user.svg";
import Badge from "../../assets/icons/babge.svg";
import Calendar from "../../assets/icons/calendar.svg";
import Location from "../../assets/icons/location.svg";
import HeaderImage from "../../assets/images/header.svg";
import Certification from "../../assets/images/certification.svg";
import {
  OPTIONS_ASIDE,
  USER,
  TYPES_TEACHING,
  DATA_PROFILE,
  OPTIONS_SERVICES,
} from "../../utils/constants";

const Profile = () => {

  const [value, setValue] = React.useState("");
  const [visible, setVisible] = React.useState(false);
  const [data, setData] = React.useState(DATA_PROFILE);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  const handleChangeText = (value) => {
    setValue(value.target.value);
  };
  const handleChangeAboutMe = (value) => {
    setData({ ...data, aboutMe: value });
  };

  const handleChangeCertification = () => {
    setData({
      ...data,
      certifications: [
        ...data?.certifications,
        { image: Certification, name: value },
      ],
    });
    setValue("");
  };

  const handleChangeLanguage = () => {
    setData({
      ...data,
      language: [...data?.language, { name: value }],
    });
    setValue("");
  };

  const handleChangeAvailability = () => {
    setData({
      ...data,
      availability: [...data?.availability, { name: value }],
    });
    setValue("");
  };

  const handleChangeService = (type, value) => {
    const services = [...data?.services];
    const service = services?.find((item) => item?.name === type);
    if (service) {
      service.grades = [...service?.grades, { name: value }];
      setData({
        ...data,
        services: [...services],
      });
    }
  };

  const handleChangeLocation = () => {
    setData({
      ...data,
      location: {
        ...data?.location,
        availability: [...data?.location?.availability, { name: value }],
      },
    });
    setValue("");
  };

  const handleChangeAddress = (value) => {
    setData({
      ...data,
      location: { ...data?.location, address: value?.target.value },
    });
  };

  return (
    <div className="w-full pb-10">
      <TeacherHeader />
      <Container>
        <Grid container>
          <Grid container spacing={3} mt={5}>
            <Grid item xs={12} md={3}>
              <Aside options={OPTIONS_ASIDE} user={USER} />
            </Grid>
            <Grid item xs={12} md={9} className="flex flex-col w-full">
              <Box>
                <Header backgroundImage={HeaderImage} />
                <TextBox
                  title={"A little about me"}
                  text={data?.aboutMe}
                  toggleVisible={toggleVisible}
                  icon={User}
                  value={data?.aboutMe}
                  onChange={handleChangeText}
                  onSave={handleChangeAboutMe}
                />
                <OptionBox
                  title={"What’s professional I have?"}
                  options={data?.certifications}
                  toggleVisible={toggleVisible}
                  customClassName="shadow-lg"
                  icon={Badge}
                  onChange={handleChangeText}
                  onSave={handleChangeCertification}
                  value={value}
                />
                <Grid container spacing={2} mt={1} className="w-full">
                  <Grid item xs={12} md={6} className="w-full">
                    <OptionBox
                      title={"I can speak..."}
                      options={data?.language}
                      toggleVisible={toggleVisible}
                      icon={Book}
                      onChange={handleChangeText}
                      onSave={handleChangeLanguage}
                      value={value}
                    />
                  </Grid>
                  <Grid item xs={12} md={6} className="w-full">
                    <OptionBox
                      title={"My availability"}
                      options={data?.availability}
                      toggleVisible={toggleVisible}
                      icon={Calendar}
                      onChange={handleChangeText}
                      onSave={handleChangeAvailability}
                      value={value}
                    />
                  </Grid>
                </Grid>
                <SelectBox
                  title={"What can I teach?"}
                  options={data?.services}
                  toggleVisible={toggleVisible}
                  icon={Badge}
                  labelInput={"Grade"}
                  labelSelect={"Subject"}
                  optionsButtons={TYPES_TEACHING}
                  optionsSelect={OPTIONS_SERVICES}
                  onSave={handleChangeService}
                />
                <OptionBox
                  title={"Location"}
                  options={data?.location?.availability}
                  toggleVisible={toggleVisible}
                  icon={Location}
                  onChange={handleChangeText}
                  onSave={handleChangeLocation}
                  value={value}
                >
                  <MapBox
                    address={data?.location?.address}
                    onChange={handleChangeAddress}
                  />
                </OptionBox>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Profile;
