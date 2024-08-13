import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUrl } from "../lib/index";

export default function SearchProducts() {
  const [product, setProduct] = useState({});
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
  return <div>SearchProducts</div>;
}
