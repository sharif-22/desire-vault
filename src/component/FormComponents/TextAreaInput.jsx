import React from "react";
import propTypes from "prop-types";

const TextAreaInput = ({
  label,
  name,
  placeholder,
  required,
  value,
  type,
  width,
  register,
  row,
  handleOnChange,
<<<<<<< HEAD
  error
=======
  error,
>>>>>>> f35405d4968915f0e4ac79085f15a89d13259164
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
        onChange={handleOnChange}
        value={value}
        rows={row}
        {...register}
      ></textarea>
<<<<<<< HEAD
      {error && (
        <small className="text-sm text-red-500">{error.message}</small>
      )}
=======
      {error && <small className="text-sm text-red-500">{error.message}</small>}
>>>>>>> f35405d4968915f0e4ac79085f15a89d13259164
    </div>
  );
};

TextAreaInput.propTypes = {
  label: propTypes.string,
  name: propTypes.string,
  value: propTypes.string,
  row: propTypes.number,
  type: propTypes.string,
  placeholder: propTypes.string,
  register: propTypes.object,
  error: propTypes.object,
  width: propTypes.string,
  required: propTypes.bool,
  bgColor: propTypes.string,
  handleOnChange: propTypes.func,
};

export default TextAreaInput;
