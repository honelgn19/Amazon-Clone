import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const LowerHeader = () => {
  return (
    <div className="w-full bg-[#232F3E] text-white">
      <div className="flex items-center px-4 py-1 gap-3 whitespace-nowrap">
        {/* All Menu */}
        <div className="flex items-center gap-2 font-bold cursor-pointer hover:border hover:border-white px-2 py-1">
          <FaBars />
          <span>All</span>
        </div>

        {/* Links */}
        <Link to="/deals" className="hover:border hover:border-white px-2 py-1">
          Today's Deals
        </Link>

        <Link
          to="/gift-cards"
          className="hover:border hover:border-white px-2 py-1"
        >
          Gift Cards
        </Link>

        <Link to="/sell" className="hover:border hover:border-white px-2 py-1">
          Sell
        </Link>

        <Link
          to="/registry"
          className="hover:border hover:border-white px-2 py-1"
        >
          Registry
        </Link>

        <Link to="/prime" className="hover:border hover:border-white px-2 py-1">
          Prime Video
        </Link>

        <Link
          to="/customer-service"
          className="hover:border hover:border-white px-2 py-1"
        >
          Customer Service
        </Link>
      </div>
    </div>
  );
};

export default LowerHeader;
