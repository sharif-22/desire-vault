import React from "react";

const Input = ({
  label,
  name,
  placeholder,
  required,
  register,
  error,
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
        <small className="text-sm text-red-500">{error?.message}</small>
      )}
    </div>
  );
};

export default Input;
