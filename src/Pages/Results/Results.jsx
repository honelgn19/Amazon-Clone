import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "../../components/Product/ProductCard";

function Results() {
  const [products, setProducts] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          `https://fakestoreapi.com/products/category/${categoryName}`
        );

        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, [categoryName]);

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {products.length === 0 ? (
        <h2>Loading...</h2>
      ) : (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </div>
  );
}

export default Results;