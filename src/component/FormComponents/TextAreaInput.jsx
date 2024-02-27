import React from "react";

const TextAreaInput = ({
  label,
  name,
  placeholder,
  required,
  value,
  type,
  width,
  row,
  handleOnChange,
}) => {
  return (
    <div className={`flex flex-col p-3 gap-y-2 ${width}`}>
      <div>
        <label className="font-medium" htmlFor={name}>
          {label}
        </label>
        {required ? <span className="text-red-500 font-bold px-1">*</span> : ""}
      </div>
      <textarea
        className="outline-none rounded bg-slate-200 p-2"
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        required={required}
        onChange={handleOnChange}
        value={value}
        rows={row}
      ></textarea>
    </div>
  );
};

export default TextAreaInput;
