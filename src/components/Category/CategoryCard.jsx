import React from "react";

function CategoryCard({ item }) {
  return (
    <a
      href={`/category/${item._id}`}
      className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
      </div>

      {/* Content */}
      <div className="p-4 text-center">
        <h2 className="text-lg font-semibold text-gray-800">
          {item.title}
        </h2>

        <p className="text-sm text-gray-500 mt-2 group-hover:text-black transition">
          Shop Now →
        </p>
      </div>
    </a>
  );
}

export default CategoryCard;