/* eslint-disable react/display-name */
import { forwardRef } from "react";

const InputText = forwardRef(function ({ onChange, onClick, value, placeholder, className }, ref) {
  return (
    <input
      ref={ref}
      className={`p-5 rounded-t-xl w-full ${className}`}
      onChange={onChange}
      name="title"
      placeholder={placeholder}
      value={value}
      onClick={onClick}
    />
  );
});

export default InputText;
