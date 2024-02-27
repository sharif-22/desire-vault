const CheckBox = ({
  width = "w-full",
  name,
  desc,
  required,
  checked,
  error,
  register,
}) => {
  return (
    <div>
      <div className={`flex gap-2 px-3 ${width}`}>
        <input
          checked={checked}
          type="checkbox"
          name={name}
          id={name}
          {...register}
        />
        <label className="text-sm" htmlFor={name}>
          {desc}
          {required ? (
            <span className="text-pink-500 font-bold px-1">*</span>
          ) : (
            ""
          )}
        </label>
      </div>

      {error && (
        <small className="text-sm text-red-500 px-3">{error?.message}</small>
      )}
    </div>
  );
};

export default CheckBox;
