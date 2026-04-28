import React from "react";
import { FaBars } from "react-icons/fa";

const LowerHeader = () => {
  return (
    <div className="text-white flex items-center px-4 py-2 space-x-4 text-sm">
      
      {/* Menu */}
      <div className="flex items-center space-x-1 cursor-pointer">
        <FaBars />
        <span className="font-bold">All</span>
      </div>

      {/* Links */}
      <p className="cursor-pointer">Today's Deals</p>
      <p className="cursor-pointer">Customer Service</p>
      <p className="cursor-pointer">Registry</p>
      <p className="cursor-pointer">Gift Cards</p>
      <p className="cursor-pointer">Sell</p>

    </div>
  );
};

export default LowerHeader;