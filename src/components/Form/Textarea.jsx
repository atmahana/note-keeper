/* eslint-disable react/display-name */
import { forwardRef } from "react";

const Textarea = forwardRef(function({onChange, className, value, rows, placeholder}, ref) {
    return (
        <textarea
        ref={ref}
        onChange={onChange}
        className={`p-5 rounded-b-xl w-full ${className}`}
        name="content"
        placeholder={placeholder}
        rows={rows}
        value={value}
      />
    )
});

export default Textarea;
