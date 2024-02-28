import InputField from "../FormComponents/Input";
import TextAreaInput from "../FormComponents/TextAreaInput";
import ButtonInput from "../FormComponents/ButtonInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = z.object({
  productName: z.string().min(3).max(15),
  price: z.string().min(1).max(8),
  productURL: z.optional(z.string().trim().url({ message: "Invalid URL" })),
  desc: z
    .string()
    .min(15, { message: "Description must be at least 15 characters" }),
});

const ProductForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const getValues = (data) => {
    console.log("Getting values from form submit: ", data);
  };
  return (
    <>
      <form
        action=""
        className="h-fit sticky top-20"
        onSubmit={handleSubmit(getValues)}
      >
        <div className="max-w-xs xl:max-w-sm bg-slate-100 p-2 rounded">
          <InputField
            label="Product Name"
            placeholder="Enter Product name"
            name="productName"
            type="text"
            width="w-full"
            className="outline-none rounded bg-slate-200 p-2"
            register={register("productName")}
            error={errors.productName}
            requried
          />
          <InputField
            label="Price"
            placeholder="Enter Price"
            name="price"
            type="number"
            width="w-full"
            className="outline-none rounded bg-slate-200 p-2"
            requried
            register={register("price")}
            error={errors.price}
          />
          <InputField
            label="Product URL"
            placeholder="Enter product URL"
            name="productURL"
            type="url"
            width="w-full"
            className="outline-none rounded bg-slate-200 p-2"
            requried
            register={register("productURL")}
            error={errors.productURL}
          />
          <TextAreaInput
            label="Reason to buy this product"
            name="desc"
            placeholder="Reason to buy this product"
            type="text"
            row={3}
            requried
            register={register("desc")}
            error={errors.desc}
          />
          <ButtonInput
            styles={
              "text-lg capitalize text-white bg-slate-700 hover:bg-slate-800 "
            }
            width="w-full"
            btnText={"save"}
          />
        </div>
      </form>
    </>
  );
};

export default ProductForm;

// const inputs = [
//   {
//     label: "Product Name",
//     placeholder: "Enter Product name",
//     name: "productName",
//     requried: true,
//     type: "text",
//     width: "w-full",
//     valid : name
//   },
//   {
//     label: "Price",
//     placeholder: "Enter Price",
//     name: "price",
//     requried: true,
//     type: "number",
//     width: "w-full",
//     valid : name
//   },
//   {
//     label: "Product URL",
//     placeholder: "Enter product URL",
//     name: "productURL",
//     requried: true,
//     type: "url",
//     width: "w-full",
//     valid : name
//   },
// ];
