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
      <div className="p-6">
        <form className="max-w-6xl mx-auto" onSubmit={handleOnSubmit}>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Book name
              </label>
              <input
                name="book_name"
                type="text"
                id="book_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Harry Potter"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Author Name
              </label>
              <input
                name="author_name"
                type="text"
                id="author_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="J. K. Rowling"
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
          <div className="max-w-2xl mx-auto text-gray-700 py-5 ">
            <button className="px-3 py-2 text-lg bg-">
                Save wish product
            </button>

        </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
