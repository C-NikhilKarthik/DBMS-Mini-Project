import React, { useState } from "react";
import { Link } from "react-router-dom";

const Dropdown1 = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="relative">
      <button
        className="py-2 flex items-center text-gray-300 hover:text-[#64ffdb]"
        onClick={handleMenuToggle}
      >
        Listings
      </button>
      {showMenu && (
        <div className="absolute z-50 mt-2 py-2 w-48 bg-white  rounded-md shadow-lg">
          <Link
            to="/listing/property"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Property Listing
          </Link>
          <Link
            to="/listing/staff"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Staff Listing
          </Link>
        </div>
      )}
    </div>
  );
};

export default Dropdown1;
