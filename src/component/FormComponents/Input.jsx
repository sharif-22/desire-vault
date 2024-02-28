import React from "react";
import propTypes from "prop-types";

const Input = ({
  label,
  name,
  placeholder,
  register,
  error,
  required,
  type = "text",
  width = "w-full",
  bgColor = "bg-slate-200",
}) => {
  return (
    <div className={`flex flex-col p-3 gap-y-2 ${width}`}>
      <div>
        <label className="font-medium text-base text-zinc-700" htmlFor={name}>
          {label}
        </label>
        {required ? (
          <span className="text-pink-500 font-bold px-1">*</span>
        ) : (
          ""
        )}
      </div>
      <input
        className={`outline-none rounded ${bgColor} p-2`}
        type={type}
        name={name}
        id={name}
        {...register}
        placeholder={placeholder}
      />
      {error && (
        <small className="text-sm text-red-500">{error.message}</small>
      )}
    </div>
  );
};

Input.propTypes = {
  label: propTypes.string,
  name: propTypes.string,
  type: propTypes.string,
  placeholder: propTypes.string,
  register: propTypes.object,
  error: propTypes.object,
  width:propTypes.string,
  required:propTypes.bool,
  bgColor:propTypes.string
};

export default Input;
