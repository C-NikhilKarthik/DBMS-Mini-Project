import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Dropdown = () => {
  const [showMenu, setShowMenu] = useState(false);
  const dropdownRef = useRef(null);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        className="py-2 flex items-center text-gray-300 hover:text-[#64ffdb]"
        onClick={handleMenuToggle}
      >
        Registration
      </button>
      {showMenu && (
        <div className="absolute z-50 mt-2 py-2 w-48 bg-white  rounded-md shadow-lg">
          <Link
            to="/registration/client"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Client Registration
          </Link>
          <Link
            to="/registration/owner"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Owner Registration
          </Link>
          <Link
            to="/registration/property"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Property Registration
          </Link>
          <Link
            to="/registration/staff"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Staff Registration
          </Link>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
