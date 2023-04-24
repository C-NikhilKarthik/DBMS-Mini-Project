import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between items-center">
        <div className="w-full sm:w-auto mb-4 sm:mb-0">
          <h2 className="text-xl font-bold">Property Pilot</h2>
          <p className="text-sm mt-2">Book your dream house today!</p>
        </div>
        <div className="w-full sm:w-auto flex justify-center items-center">
          <ul className="flex space-x-4">
            <li>
              <Link to="/home" className="hover:text-gray-400">Home</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-400">Contact Us</Link>
            </li>
            <li>
              <Link to="/" className="hover:text-gray-400">FAQ</Link>
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-auto text-sm mt-4 sm:mt-0">
          <p>© 2023 Dream House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
