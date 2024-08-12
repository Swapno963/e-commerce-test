import axios from "axios";
import React, { useEffect, useState } from "react";
import { getUrl } from "../lib/index";
import ProductCart from "./ProductCart";
import Topbanner from "./Topbanner";

export default function ProductArea() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${getUrl()}/product/`);
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
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
    <div>
      <Topbanner />
      <div className="flex mx-auto md:w-3/5">
        {/* <Login /> */}
        <div className="grid grid-cols-3 gap-5">
          {products?.map((product) => (
            <ProductCart key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
