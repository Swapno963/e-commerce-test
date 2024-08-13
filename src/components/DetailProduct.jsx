import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import product_img from "../assets/image_not_found.png";
import { getUrl } from "../lib/index";

export default function DetailProduct() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${getUrl()}/products/${id}`);
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
  return (
    <div className=" mb-12 container mx-auto p-6 max-w-4xl bg-white shadow-lg rounded-lg mt-10">
      <div className="flex flex-wrap md:flex-nowrap">
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img
            src={product?.thumbnail ? product?.thumbnail : product_img}
            alt="Product Image"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>

        <div className="w-full md:w-1/2 md:pl-6 pt-12 ">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {product?.name}
          </h1>
          <p className="text-gray-600 mb-4">{product?.description}</p>
          <p className="text-xl font-semibold text-gray-800 mb-6">
            {" "}
            Price : $ {product?.price}
          </p>
          <p className="text-xl font-semibold text-gray-800 mb-6">
            {" "}
            Quantity: {product?.quantity}
          </p>
        </div>
      </div>
    </div>
  );
}
