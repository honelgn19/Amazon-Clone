import React from "react";
import { categoryFullInfo } from "./categoryFullInfo";
import CategoryCard from "./CategoryCard";

function Category() {
  return (
    <div className="px-6 py-10">
      <h1 className="text-2xl font-bold mb-6">Shop by Category</h1>

      <div className="grid grid-flow-col auto-cols-[minmax(200px,1fr)] gap-6 overflow-x-auto">
        {categoryFullInfo.map((item) => (
          <CategoryCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Category;
