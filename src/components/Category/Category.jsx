import React, { useState, useEffect } from "react";
import CategoryCard from "./CategoryCard";
import "./Category.css";
import axios from "axios";
import {pageUrl}  from "../../Api/endPoint";

function Category() {
  const [cate, setCate] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(
          `${pageUrl}/products/`
        );
        setCate(res.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="px-6 py-6">
      <h1 className="text-2xl font-bold mb-6">Shop by Category</h1>

      <div className="grid grid-flow-col auto-cols-[minmax(200px,1fr)] gap-6 overflow-x-auto h-[300px]">
        {cate.length > 0 ? (
          cate.map((item) => (
            <CategoryCard key={item.id} item={item} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Category;