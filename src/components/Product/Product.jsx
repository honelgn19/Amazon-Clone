import React from "react";
import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";
import axios from "axios";

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulate an API call to fetch products
    const fetchProducts = async () => {
      // Replace this with your actual API call
      try {
        const response = await axios.axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          {...product}
        />
      ))}
    </div>
  );
}

export default Product;
