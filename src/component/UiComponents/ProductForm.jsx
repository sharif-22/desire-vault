import React from "react";
import InputField from "../FormComponents/Input";
import TextAreaInput from "../FormComponents/TextAreaInput";
import ButtonInput from "../FormComponents/ButtonInput";

const inputs = [
  {
    label: "Product Name",
    placeholder: "Enter Product name",
    name: "productName",
    requried: true,
    type: "text",
    width: "w-full",
  },
  {
    label: "Price",
    placeholder: "Enter Price",
    name: "price",
    requried: true,
    type: "number",
    width: "w-full",
  },
  {
    label: "Product URL",
    placeholder: "Enter product URL",
    name: "productURL",
    requried: true,
    type: "url",
    width: "w-full",
  },
];

const ProductForm = () => {
  return (
    <>
      <form action="" className="h-fit sticky top-20">
        <div className="max-w-xs xl:max-w-sm bg-slate-100 p-2 rounded">
          {inputs.map((input) => {
            return (
              <InputField
                label={input.label}
                name={input.name}
                required={input.requried}
                placeholder={input.placeholder}
                type={input.type}
                width={input.width}
              />
            );
          })}
          <TextAreaInput
            name={"desc"}
            label="Reason to buy this product"
            placeholder="Reason to buy this product"
            row={3}
          />
          <ButtonInput
            styles={
              "text-lg capitalize text-white bg-slate-700 hover:bg-slate-800 "
            }
            width="w-full"
            children={"save"}
          />
        </div>
      </form>
    </>
  );
};

export default ProductForm;
