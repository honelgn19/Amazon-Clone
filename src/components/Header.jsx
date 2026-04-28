import React from "react";
import { FaSearch, FaShoppingCart, FaMapMarkerAlt } from "react-icons/fa";
import logo from "./images/amazon-logo.png.webp";


const Header = () => {
  return (
    <div className=" text-white flex items-center px-4 py-2 gap-4">
      
      {/* Logo */}
      <div className="flex items-center cursor-pointer">
        <span className="text-2xl font-bold"><img src={logo} width="100%" height="25vh" alt="logo" /></span>
      </div>

      {/* Location */}
      <div className="hidden md:flex items-center text-sm cursor-pointer">
        <FaMapMarkerAlt className="mr-1" />
        <div>
          <p className="text-gray-300 text-xs">Deliver to</p>
          <p className="font-bold">Ethiopia</p>
        </div>
      </div>

      {/* Search Bar */}    
      <div className="flex flex-1 h-10">
        <select className="bg-gray-200 text-black px-2 rounded-l-md text-sm">
          <option>All</option>
        </select>

        <input
          type="text"
          placeholder="Search Amazon"
          className="w-full px-3 text-black outline-none"
        />

        <button className="bg-yellow-400 px-4 flex items-center justify-center rounded-r-md">
          <FaSearch />
        </button>
      </div>

      {/* Language */}
      <div className="hidden md:block text-sm cursor-pointer">
        EN
      </div>

      {/* Account */}
      <div className="hidden md:block text-sm cursor-pointer">
        <p className="text-xs">Hello, sign in</p>
        <p className="font-bold">Account & Lists</p>
      </div>

      {/* Orders */}
      <div className="hidden md:block text-sm cursor-pointer">
        <p className="text-xs">Returns</p>
        <p className="font-bold">& Orders</p>
      </div>

      {/* Cart */}
      <div className="flex items-center cursor-pointer">
        <FaShoppingCart size={22} />
        <span className="ml-1 font-bold">0</span>
      </div>

    </div>
  );
};

export default Header;