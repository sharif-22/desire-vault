import propTypes from "prop-types";

const TextareaField = ({
  name,
  label,
  placeholder,
  register,
  error,
  cols,
  rows,
}) => {
  return (
    <div>
      <div>
        <div className="space-y-1 py-2">
          <label htmlFor={name} className="text-xl ">
            {label}
          </label>
          <textarea
            name={name}
            cols={cols}
            rows={rows}
            id={name}
            placeholder={placeholder}
            {...register}
            className="w-full block py-2 px-3 outline-none rounded placeholder:text-gray-400"
          ></textarea>
          {error && <small className="text-red-500">{error.message}</small>}
        </div>
      </div>
    </div>
  );
};

TextareaField.propTypes = {
  label: propTypes.string,
  name: propTypes.string,
  type: propTypes.string,
  cols: propTypes.string,
  rows: propTypes.string,
  placeholder: propTypes.string,
  register: propTypes.object,
  error: propTypes.object,
};

export default TextareaField;
