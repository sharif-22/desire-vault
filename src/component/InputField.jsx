import propTypes from "prop-types";

const InputFieLd = ({ name, label, type, placeholder, register, error }) => {
  return (
    <div>
      <div className="space-y-1 py-2 ">
        <label htmlFor={name} className="text-xl ">
          {label}
        </label>
        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          {...register}
          className="w-full block py-2 px-3 outline-none rounded placeholder:text-gray-400"
        />
        {error && <small className="text-red-500">{error.message}</small>}
      </div>
    </div>
  );
};
InputFieLd.propTypes = {
  label: propTypes.string,
  name: propTypes.string,
  type: propTypes.string,
  placeholder: propTypes.string,
  register: propTypes.object,
  error: propTypes.object,
};

export default InputFieLd;
