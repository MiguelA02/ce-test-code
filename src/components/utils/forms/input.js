import React from "react";
import { classNames } from "../../../utils/util";

const Input = ({ label, value, onChange, customClassName }) => {
  return (
    <div
      className={classNames(
        "mb-2 mt-4 text-[#354154] w-full flex flex-col justify-start items-start",
        customClassName
      )}
    >
      <label className="block text-sm font-medium mb-2">{label}</label>
      <input
        value={value}
        onChange={onChange}
        className="w-full text-sm t-2 font-medium rounded-lg py-2.5 pl-2 border-[2px] border-[#EBEDF0] focus:outline-none"
      />
    </div>
  );
};

export default Input;
