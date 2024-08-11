import { useForm } from "react-hook-form";
import Field from "./Field";
export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const submitForm = async (formData) => {
    console.log(formData);
  };
  return (
    <div className=" md:w-2/5 mx-auto h-screen flex  items-center">
      <form
        onSubmit={handleSubmit(submitForm)}
        action=""
        className="py-12 px-8 md:w-3/5 mx-auto my-12 rounded-md bg-gray-300"
      >
        <div className="mb-6">
          <Field label="Email" error={errors.email}>
            <input
              {...register("email", { required: "Email Id is required!" })}
              type="email"
              id="email"
              name="email"
              className={`w-full p-3 bg-gray-400 border
                // eslint-disable-next-line no-extra-boolean-cast
                ${
                  errors.email ? "border-red-500" : ""
                } border-white/20 rounded-md focus:outline-none focus:border-indigo-500`}
            />
          </Field>
        </div>
        <div className="mb-6">
          <Field label="Password" error={errors.password}>
            <input
              {...register("password", {
                required: "Password Id is required!",
                minLength: {
                  value: 8,
                  message: "Your password must be at least 8 characters!",
                },
              })}
              type="password"
              id="password"
              name="password"
              className={`w-full p-3 bg-gray-400 border
                // eslint-disable-next-line no-extra-boolean-cast
                ${
                  errors.password ? "border-red-500" : ""
                } border-white/20 rounded-md focus:outline-none focus:border-indigo-500`}
            />
          </Field>
        </div>
        <p>{errors?.root?.random?.message}</p>
        <div className="mb-6">
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
          >
            Login
          </button>
        </div>
        <p className="text-center">
          Don't have an account?{" "}
          <a href="/register" className="text-indigo-600 hover:underline">
            Register
          </a>
        </p>
      </form>
    </div>
  );
}
