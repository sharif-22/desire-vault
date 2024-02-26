import { useForm } from "react-hook-form";
import InputFieLd from "../component/InputField";
import TextareaField from "../component/TextareaField";
import SelectFiled from "../component/SelectFiled";

const Create = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const dataSubmit = (data, e) => {
    e.preventDefault();
    console.log("Getting values from form submit: ", data);
    reset();
  };
  return (
    <div>
      <h1 className="text-3xl p-5 text-center">
        Add your wish product here ...
      </h1>
      <div>
        <form action="" onSubmit={handleSubmit(dataSubmit)}>
          <div className="max-w-2xl mx-auto text-gray-700 bg-blue-200 py-5 px-20">
            <div className="">
              <InputFieLd
                name={"product"}
                label="Product name"
                type="text"
                placeholder="Enter product name here "
                register={register("product", {
                  required: "This filed is required",
                })}
                error={errors["product"]}
                required
              />
              <InputFieLd
                name={"price"}
                label="₹ Price"
                type="text"
                placeholder="Enter price here..!"
                register={register("price", {
                  required: "This filed is required",
                })}
                error={errors["price"]}
                required
              />
              <SelectFiled
                name={"category"}
                label="Category"
                register={register("category", {
                  required: "This filed is required",
                })}
                error={errors["category"]}
                required
              />

              <InputFieLd
                name={"photo"}
                label="Photo"
                type="text"
                placeholder="Paste your photo link here!"
                register={register("Photo", {
                  required: "This filed is required",
                })}
                error={errors["Photo"]}
                required
              />

              <TextareaField
                name={"description"}
                label="Description"
                cols="30"
                rows="3"
                placeholder="Describe about place here "
                register={register("description", {
                  required: "This filed is required",
                })}
                error={errors["description"]}
                required
              />

              <div className="">
                <InputFieLd
                  name={"image"}
                  label="Image"
                  type="file"
                  placeholder="Paste your photo link here!"
                  register={register("image", {
                    required: "This filed is required",
                  })}
                  error={errors["image"]}
                  required
                />
              </div>
            </div>
            <div className="py-4">
              <button className="px-3 py-2 text-lg bg-blue-400 w-full rounded">
                Save your product
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
