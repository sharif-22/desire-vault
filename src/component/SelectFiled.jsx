import propTypes from "prop-types";

const SelectFiled = ({ name, label, register, error }) => {
  return (
    <div>
      <div className="flex flex-col space-y-1 py-2">
        <label htmlFor="category" className="text-xl ">
          {label}
        </label>
        <select
          id={name}
          name={name}
          {...register}
          className="w-full mx-auto block py-2 px-3 outline-none rounded placeholder:text-gray-400"
        >
          <option value="" >--Select--</option>
          <option value="mobile">Mobile</option>
          <option value="laptop">Laptop</option>
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
          <option value="others">Others</option>
        </select>
        {error && <small className="text-red-500">{error.message}</small>}
      </div>
    </div>
  );
};

SelectFiled.propTypes = {
  name: propTypes.string,
  label: propTypes.string,
  register: propTypes.object,
  error: propTypes.object,
};

export default SelectFiled;
