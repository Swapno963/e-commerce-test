import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { getUrl } from "../lib/index";
import Field from "./Field";

export default function EditProduct() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let { id } = useParams();
  console.log("product id is :", id, "and product is :", product);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${getUrl()}/product/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-300 font-bold text-3xl">
        Loading...
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-red-200 font-bold text-3xl ">
        Error: {error}
      </div>
    );
  }
  const submitForm = async (formData) => {
    console.log(formData);
    try {
      const newdata = { ...formData, thumbnail: formData.thumbnail[0] };
      console.log(newdata);

      const response = await axios.patch(
        `${getUrl()}/product/${id}/`,
        newdata,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Response is:", response.data);
      if (response.data?.id > 0) {
        console.log("Product is created");
        navigate("/");
      }
    } catch (error) {
      console.log("Error Editing product:", error);
    }
  };
  return (
    <div>
      <div className=" md:w-3/5 mx-auto h-screen flex  items-center">
        <form
          onSubmit={handleSubmit(submitForm)}
          action=""
          className="py-12 px-8 md:w-3/5 mx-auto my-12 rounded-md bg-gray-300"
        >
          {/* Product name  */}
          <div className="mb-6">
            <Field label="Product Name" error={errors.name}>
              <input
                {...register("name", {
                  required: "name Id is required!",
                })}
                type="text"
                id="name"
                name="name"
                defaultValue={product.name}
                className={`w-full p-3 bg-gray-400 border ${
                  errors.email ? "border-red-500" : ""
                } border-white/20 rounded-md focus:outline-none focus:border-indigo-500`}
              />
            </Field>
          </div>
          {/* last name */}
          <div className="mb-6">
            <Field label="Description " error={errors.last_name}>
              <input
                {...register("description", {
                  required: "Description Id is required!",
                })}
                type="text"
                id="description"
                name="description"
                defaultValue={product.description}
                className={`w-full p-3 bg-gray-400 border
                ${
                  errors.email ? "border-red-500" : ""
                } border-white/20 rounded-md focus:outline-none focus:border-indigo-500`}
              />
            </Field>
          </div>
          {/* price */}
          <div className="mb-6">
            <Field label="price " error={errors.last_name}>
              <input
                {...register("price", {
                  required: "price Id is required!",
                })}
                type="text"
                id="price"
                name="price"
                defaultValue={product.price}
                className={`w-full p-3 bg-gray-400 border
                ${
                  errors.email ? "border-red-500" : ""
                } border-white/20 rounded-md focus:outline-none focus:border-indigo-500`}
              />
            </Field>
          </div>
          {/* quantity */}
          <div className="mb-6">
            <Field label="Quantity " error={errors.quantity}>
              <input
                {...register("quantity", {
                  required: "quantity Id is required!",
                })}
                type="text"
                id="quantity"
                name="quantity"
                defaultValue={product.quantity}
                className={`w-full p-3 bg-gray-400 border
                            ${
                              errors.email ? "border-red-500" : ""
                            } border-white/20 rounded-md focus:outline-none focus:border-indigo-500`}
              />
            </Field>
          </div>
          {/* Image */}
          <div className="mb-6">
            <Field label="Thumbnail " error={errors.quantity}>
              <input
                type="file"
                {...register("thumbnail", {
                  required: "thumbnail Id is required!",
                })}
                id="thumbnail"
                name="thumbnail"
                className={`w-full p-3 bg-gray-400 border
                    ${
                      errors.email ? "border-red-500" : ""
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
              Update Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
