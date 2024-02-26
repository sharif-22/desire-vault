import { useForm } from "react-hook-form";
import InputFieLd from "../component/InputField";
import TextareaField from "../component/TextareaField";
import SelectFiled from "../component/SelectFiled";

const Create = () => {
  const {
    // handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  return (
    <div>
      <div>
        <form action="">
          <div className="max-w-2xl mx-auto text-gray-700 bg-dark py-5 px-20">
            <div className="">
                <InputFieLd
                  name={"product"}
                  label="product name"
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
                  label="₹ price"
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
                label="category"
                register={register("category", {
                  required: "This filed is required",
                })}
                error={errors["category"]}
                required
              />

              <InputFieLd
                name={"category"}
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
            </div>
          </div>
          {/* <div className="max-w-2xl mx-auto text-gray-700 py-5 ">
          <Button text="Save planner" />
        </div> */}
        </form>
      </div>
    </div>
  );
};

export default Create;
