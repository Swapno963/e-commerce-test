import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { getUrl } from "../lib/index";
import Field from "./Field";

export default function Registration() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const submitForm = async (formData) => {
    console.log(formData);
    if (formData.password != formData.confirm_password) {
      alert("Please enter same password");
      console.log("Please enter same password");
      return "";
    }
    try {
      const response = await axios.post(
        `${getUrl()}/auth/register/`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Response is:", response.data);
      if (response.data?.user_id > 0) {
        console.log("user created");
        navigate("/");
      }
    } catch (error) {
      console.log("Error creating product:", error);
    }
  };
  return (
    <div>
      <div className=" md:w-2/5 mx-auto h-screen flex  items-center">
        <form
          onSubmit={handleSubmit(submitForm)}
          action=""
          className="py-12 px-8 md:w-3/5 mx-auto my-12 rounded-md bg-gray-300"
        >
          {/* first name  */}
          <div className="mb-6">
            <Field label="First Name" error={errors.first_name}>
              <input
                {...register("first_name", {
                  required: "first name Id is required!",
                })}
                type="text"
                id="first_name"
                name="first_name"
                className={`w-full p-3 bg-gray-400 border
            // eslint-disable-next-line no-extra-boolean-cast
            ${
              errors.email ? "border-red-500" : ""
            } border-white/20 rounded-md focus:outline-none focus:border-indigo-500`}
              />
            </Field>
          </div>
          {/* last name */}
          <div className="mb-6">
            <Field label="Last Name" error={errors.last_name}>
              <input
                {...register("last_name", {
                  required: "first name Id is required!",
                })}
                type="text"
                id="last_name"
                name="last_name"
                className={`w-full p-3 bg-gray-400 border
            // eslint-disable-next-line no-extra-boolean-cast
            ${
              errors.email ? "border-red-500" : ""
            } border-white/20 rounded-md focus:outline-none focus:border-indigo-500`}
              />
            </Field>
          </div>
          {/* email */}
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
          {/* password */}
          <div className="mb-6">
            <Field label="Enter Password" error={errors.password}>
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
                name=""
                className={`w-full p-3 bg-gray-400 border
            // eslint-disable-next-line no-extra-boolean-cast
            ${
              errors.password ? "border-red-500" : ""
            } border-white/20 rounded-md focus:outline-none focus:border-indigo-500`}
              />
            </Field>
          </div>
          {/* confirm_password */}
          <div className="mb-6">
            <Field label="confirm password" error={errors.confirm_password}>
              <input
                {...register("confirm_password", {
                  required: "confirm password Id is required!",
                  minLength: {
                    value: 8,
                    message: "Your password must be at least 8 characters!",
                  },
                })}
                type="password"
                id="confirm_password"
                name=""
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
            Already have an account?{" "}
            <a href="/login" className="text-indigo-600 hover:underline">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
