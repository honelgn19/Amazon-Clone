import React from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import logo from "./images/amazon-logo.png.PNG";
import { IoSearch } from "react-icons/io5";
import "./Header.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { BiCartAdd } from "react-icons/bi";

const Header = () => {
  return (
    <div className="bg-[#131921] text-white flex items-center px-4 py-2 gap-4 whitespace-nowrap header-sction">
      {/* Logo */}

      <a href="/" className="hover:border hover:border-white  cursor-pointer">
        <img src={logo} alt="Amazon Logo" className="w-[114px] h-[50px]" />
      </a>

      {/* Location */}
      <div className="flex items-center text-sm cursor-pointer px-2 hover:border hover:border-white">
        <span className="text-xs text-gray-300">
          {" "}
          <FiMapPin />
        </span>

        <div>
          <p className="text-gray-300 text-xs">Deliver to</p>
          <p className="font-bold">Ethiopia</p>
        </div>
      </div>

      {/* Search */}
      <div className="flex h-10 min-w-[700px]">
        <select className="bg-gray-200 text-black px-2 rounded-l-md text-sm cursor-pointer">
          <option>All</option>
        </select>

        <input
          type="text"
          placeholder="Search Amazon"
          className="w-full px-3 text-black bg-white focus:outline-none"
        />

        <button className=" search-btn px-4 flex items-center cursor-pointer justify-center rounded-r-md">
          <IoSearch className="text-black " />
        </button>
      </div>
      <div className="relative group px-2 ml-5 cursor-pointer hover:border hover:border-white">
        {/* Trigger */}
        <div className="flex mt-5">
          <p className="font-bold ">EN</p>
          <div className=" content-end ">
            <IoMdArrowDropdown />
          </div>
        </div>

        {/* Dropdown */}
        <div
          className="absolute right-0 top-full pt-2 z-50 
                  opacity-0 invisible 
                  group-hover:opacity-100 group-hover:visible 
                  transition duration-200"
        >
          <div className="bg-white text-black w-56 shadow-lg p-4 text-sm">
            {/* Section Title */}
            <p className="font-bold mb-2">Change language</p>

            {/* Languages */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer hover:underline">
                <input type="radio" name="lang" defaultChecked />
                English - EN
              </label>

              <label className="flex items-center gap-2 cursor-pointer hover:underline">
                <input type="radio" name="lang" />
                Amharic - AM
              </label>

              <label className="flex items-center gap-2 cursor-pointer hover:underline">
                <input type="radio" name="lang" />
                Arabic - AR
              </label>

              <label className="flex items-center gap-2 cursor-pointer hover:underline">
                <input type="radio" name="lang" />
                French - FR
              </label>
            </div>

            <hr className="my-3" />

            {/* Region */}
            <p className="font-bold mb-2">Change country/region</p>
            <p className="text-blue-500 cursor-pointer hover:underline">
              Ethiopia
            </p>
          </div>
        </div>
      </div>

      {/* Account */}
      <div className="flex ml-auto  items-center gap-4">
        <div className="relative group text-sm cursor-pointer px-2 hover:border hover:border-white">
          <div className="flex gap-1">
            {" "}
            <div>
              <p className="text-xs">Hello, sign in</p>
              <p className="font-bold">Account & Lists</p>
            </div>
            <div className=" content-end ">
              <IoMdArrowDropdown />
            </div>
          </div>

          {/* Dropdown list*/}
          <div className="absolute right-0 top-full  w-64 bg-white text-black shadow-lg hidden group-hover:block z-50">
            {/* Top Section */}
            <div className="p-4 border-b text-center">
              <button className="bg-yellow-400 px-4 py-1 w-full rounded">
                Sign in
              </button>
              <p className="text-xs mt-2">
                New customer?{" "}
                <span className="text-blue-500 cursor-pointer">Start here</span>
              </p>
            </div>

            {/* Links */}
            <div className="p-4 text-sm cursor-pointer">
              <p className="font-bold mb-2">Your Lists</p>

              <a
                href="#"
                className="block hover:underline hover:text-orange-700 "
              >
                Create a List
              </a>
              <a
                href="#"
                className="block hover:underline hover:text-orange-700 "
              >
                Find a List
              </a>

              <hr className="my-2" />

              <p className="font-bold mb-2">Your Account</p>

              <a
                href="#"
                className="block hover:underline hover:text-orange-700 "
              >
                Orders
              </a>
              <a
                href="#"
                className="block hover:underline hover:text-orange-700 "
              >
                Recommendations
              </a>
              <a
                href="#"
                className="block hover:underline hover:text-orange-700 "
              >
                Browsing History
              </a>
            </div>
          </div>
        </div>

        {/* Orders */}
        <div className="text-sm cursor-pointer px-2 hover:border hover:border-white">
          <p className="text-xs">Returns</p>
          <p className="font-bold">& Orders</p>
        </div>

        {/* Cart */}
        <div className="relative flex items-center cursor-pointer px-2 hover:border hover:border-white">
          <BiCartAdd className="text-5xl" />

          {/* Badge */}
          <span className="absolute text-yellow-400 bg-black text-md font-bold px-1 ml-5 mb-3 rounded">
            0
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
