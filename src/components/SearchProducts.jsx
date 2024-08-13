import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import product_img from "../assets/image_not_found.png";
import { getUrl } from "../lib/index";
export default function SearchProducts() {
  const [products, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let { search_str } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `${getUrl()}/products/?search=${search_str}`
        );
        setProduct(response.data);
        console.log(response);

        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [search_str]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-300 font-bold text-3xl text-white">
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
    <div className="min-h-[600px]">
      <div className="flex justify-center mx-auto md:w-4/5  mt-12 ">
        <div className="grid grid-cols-3 gap-5 ">
          {products?.map((product) => (
            <div
              key={product?.id}
              className="col-span-3 sm:col-span-1 w-[350px] mx-auto bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                className="w-full h-48 object-cover object-center"
                src={product?.thumbnail ? product?.thumbnail : product_img}
                alt="Product Image"
              />
              <div className="p-4">
                <div className="mt-4 flex items-center justify-between">
                  <a
                    href={`/detail/${product?.id}`}
                    className="text-xl font-semibold text-gray-800 cursor-pointer"
                  >
                    {product?.name}
                  </a>
                  <div
                    className="cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                  ></div>
                </div>

                <p className="text-gray-600 mt-2">
                  {product?.description?.slice(0, 50)}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-gray-800 text-sm font-bold">
                    Price : $ {product?.price}
                  </p>
                  <p className="text-gray-800 text-sm font-bold">
                    Quantity: {product?.quantity}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
