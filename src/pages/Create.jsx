import { useForm } from "react-hook-form";
import InputFieLd from "../component/InputField";
import TextareaField from "../component/TextareaField";
import SelectFiled from "../component/SelectFiled";

import { collection, addDoc } from "firebase/firestore";
import db from "../firebase/index";

const Create = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const addFireStoreDoc = async (data) => {
    const { user } = data;
    await addDoc(collection(db, user), data);
  };

  const dataSubmit = (data, e) => {
    e.preventDefault();

    console.log("Getting values from form submit: ", data);
    addFireStoreDoc(data);
    reset();
  };
  return (
    <div>
      <h1 className="md:text-3xl text-xl p-5 text-center font-medium text-gray-800 ">
        Create Your Dream List ...
      </h1>
      <div className="">
        <form action="" onSubmit={handleSubmit(dataSubmit)}>
          <div className="max-w-2xl mx-auto text-gray-700 bg-slate-200 rounded py-5 px-5">
            <div className="">
              <div>
                <InputFieLd
                  name={"user"}
                  label="Enter your name "
                  type="text"
                  placeholder="Enter product name here "
                  register={register("user", {
                    required: "This filed is required",
                  })}
                  error={errors["user"]}
                  required
                />
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
                  className={"w-full"}
                  name={"price"}
                  label="Price"
                  type="number"
                  placeholder="Enter price here..!"
                  register={register("price", {
                    required: "This field is required",
                  })}
                  error={errors["price"]}
                  required
                />
              </div>
              <SelectFiled
                name={"category"}
                label="Category"
                register={register("category", {
                  required: "This category field is required",
                })}
                error={errors["category"]}
                required
              />
              <InputFieLd
                name={"url"}
                label="Enter product Webpage URL here"
                type="url"
                placeholder="Enter product Webpage URL here "
                register={register("url", {
                  required: "This field is required",
                })}
                error={errors["url"]}
                required
              />

              <TextareaField
                name={"description"}
                label="Reason to buy this product"
                cols="30"
                rows="3"
                placeholder="Reason to buy this product"
                register={register("description", {
                  required: "This field is required",
                })}
                error={errors["description"]}
                required
              />
            </div>
            <div className="py-4">
              <button className="px-3 py-2 text-lg text-white bg-blue-700 hover:bg-blue-800 w-full rounded">
                Add product to Vault List
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
