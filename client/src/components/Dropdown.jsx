import React, { useState } from "react";
import { Link } from "react-router-dom";

const Dropdown = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="relative">
      <button
        className="px-4 py-2 flex items-center text-gray-300 hover:text-[#64ffdb]"
        onClick={handleMenuToggle}
      >
        Registration
      </button>
      {showMenu && (
        <div className="absolute z-50 mt-2 py-2 w-48 bg-white  rounded-md shadow-lg">
          <Link
            to="/registration/client"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Client Registration
          </Link>
          <Link
            to="/registration/owner"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Owner Registration
          </Link>
          <Link
            to="/registration/property"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Property Registration
          </Link>
          <Link
            to="/registration/staff"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Staff Registration
          </Link>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
