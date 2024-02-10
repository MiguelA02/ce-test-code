import React from "react";

const Header = ({ backgroundImage }) => {
  return (
    <div
      className="h-[330px] w-full rounded-[30px]"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "fill",
        backgroundPosition: "center",
      }}
    ></div>
  );
};

export default Header;
