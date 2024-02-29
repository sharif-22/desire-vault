import propTypes from "prop-types";

const Input = ({
  label,
  name,
  placeholder,
  register,
  error,
  required,
  className,
  handleOnChange,
  type = "text",
  width = "w-full",
  labelclassName = "font-medium text-base text-zinc-700 dark:text-white",
  // bgColor = "bg-slate-200",
}) => {
  return (
    <div className={`flex flex-col p-3 gap-y-2 ${width} `}>
      <div className="flex">
        <label className={labelclassName} htmlFor={name}>
          {label}
        </label>
        {required ? (
          <span className="text-pink-500 font-bold px-1">*</span>
        ) : (
          ""
        )}
      </div>
      <input
        // className={className}
        className={`outline-none rounded p-2 dark:bg-slate-500 dark:text-white`}
        type={type}
        name={name}
        id={name}
        {...register}
        placeholder={placeholder}
        onChange={handleOnChange}
      />
      {error && <small className="text-sm text-red-500">{error.message}</small>}
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
  width: propTypes.string,
  required: propTypes.bool,
  bgColor: propTypes.string,
  className: propTypes.string,
  labelclassName: propTypes.string,
  handleOnChange: propTypes.func,
};

export default Input;
