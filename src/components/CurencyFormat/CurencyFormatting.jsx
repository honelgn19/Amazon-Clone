import React from "react";
import numeral from "numeral";

function CurencyFormatting({ amount }) {
  const value = Number(amount);

  if (isNaN(value)) return <span>$0.00</span>;

  return (
    <span>
      ${numeral(value).format("0,0.00")}
    </span>
  );
}

export default CurencyFormatting;