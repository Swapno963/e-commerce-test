import axios from "axios";
import React, { useEffect, useState } from "react";
import { getUrl } from "../lib/index";
import Dropdown from "./Dropdown";
import ProductCart from "./ProductCart";
import Topbanner from "./Topbanner";

export default function ProductArea() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedNumber, setSelectedNumber] = useState(4);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${getUrl()}/products/?limit=${selectedNumber}`
        );
        setProducts(response?.data?.results);
        setLoading(false);
        console.log(response?.data?.results);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedNumber]);

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
    <div>
      <Topbanner />
      <div className="absolute left-[400px]">
        <Dropdown
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <div className="flex justify-center mx-auto md:w-4/5  mt-12">
        {/* All products are hear */}
        <div className="grid grid-cols-3 gap-5 ">
          {products?.length > 0 &&
            products?.map((product) => (
              <ProductCart
                key={product.id}
                product={product}
                products={products}
                setProducts={setProducts}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
