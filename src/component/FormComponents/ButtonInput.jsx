import React from "react";

const ButtonInput = ({ width = "w-full", btnName, btnText, styles }) => {
  return (
    <div className={`p-3`}>
      <button
        className={`p-2 rounded ${styles} ${width} font-medium text-base duration-700`}
      >
        {btnText ? btnText : <>{btnName ? btnName : "Button"} </>}
      </button>
    </div>
  );
};

export default ButtonInput;
