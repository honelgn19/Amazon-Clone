import React from "react";
import Rating from "@mui/material/Rating";
import CurencyFormatting from "../CurencyFormat/CurencyFormatting";
import { useCart } from "./CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="group relative bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition duration-300">
      <div className="h-48 flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain"
        />
      </div>

      <h3 className="mt-5 flex justify-center font-semibold text-sm line-clamp-2">
        {product.title}
      </h3>

      

      <div className="flex items-center gap-2 mt-2">
        <Rating
          value={product.rating?.rate || 0}
          precision={0.1}
          readOnly
        />
        <small className="text-gray-500">
          ({product.rating?.count || 0})
        </small>
      </div>

      <div className="mt-2 font-bold text-lg">
        <CurencyFormatting amount={product.price} />
      </div>

      <div className="absolute bottom-4 right-4">
        <button
          onClick={() => addToCart(product)}
          className="bg-gray-700 text-white px-4 py-2 rounded-lg text-sm opacity-0 translate-y-3 scale-95 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 group-hover:visible transition-all duration-300 ease-out"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;