/* eslint-disable react/prop-types */
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import three_dot from "../assets/3_dots.png";
import product_img from "../assets/image_not_found.png";
import { getUrl } from "../lib/index";

export default function ProductCart({ product, products, setProducts }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const hadelDelete = async (id) => {
    console.log(id);
    try {
      const response = await axios.delete(`${getUrl()}/products/${id}/`);
      if (response.status === 204) {
        setProducts(products?.filter((item) => item.id !== id));
        console.log("Item deleted successfully");
      }
      console.log(response);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };
  return (
    <div className=" w-full max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
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
          <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <img
              className="w-4 h-6 relative nline-block right-0"
              src={three_dot}
              alt="three dots"
            />
          </div>
          {isOpen && (
            <div className="absolute ml-[257px] mb-[50px] mt-2 w-24 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
              <ul className="py-1">
                <li
                  onClick={() => navigate(`/edit/${product?.id}`)}
                  className="px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                >
                  Edit
                </li>
                <li
                  onClick={() => hadelDelete(product.id)}
                  className="px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                >
                  Delete
                </li>
              </ul>
            </div>
          )}
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
  );
}
