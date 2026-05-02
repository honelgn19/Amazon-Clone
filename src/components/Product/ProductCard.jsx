import React from "react";
import Rating from '@mui/material/Rating';
import CurencyFormatting from "../CurencyFormat/CurencyFormatting";

function ProductCard({
  image,
  title,
  productDescription,
  rating,
  price,
}) {
  return (
    <div>
      <a href="">
        <img src={image} alt={title} />
        </a>
        <h3>{title}</h3>
        <p>{productDescription}</p>
        {/* rating */}
        <Rating value={rating.rate} precision={0.2} />
        {/* count */}
        <small>{rating.count}</small>
        {/* price */}
        <CurencyFormatting amount={price} />
      </div>

      {/* {drop down } */}
      <div>
        <button className="opasity-0 invisible top full right-0 group-hover: opasity-100 visible ">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
