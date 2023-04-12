import React from "react";
import Color from "../assets/Color.png";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = React.useState(null);

  React.useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    };
  }, [scrollDirection]);

  return scrollDirection;
}

// header component
function Navbar() {
  const scrollDirection = useScrollDirection();

  return (
    <div
      className={`fixed ${
        scrollDirection === "down" ? "-translate-y-[100%]" : "translate-y-0"
      } top-0 bg-[#08192ea0] backdrop-blur-md z-10 transition-all w-full duration-500`}
    >
      <nav className="w-full py-2 px-6 sm:px-12 flex justify-between">
        <img src={Color} alt="CNK Logo" className="h-20" />
        <ul className="flex items-center text-slate-300 text-sm">
          <li className="mx-4 cursor-pointer hover:text-[#64ffdb]">
            <Link to="/home">Home</Link>
          </li>
          <li className="mx-4 cursor-pointer">
            <Dropdown/>
          </li>
          <li className="mx-4 cursor-pointer hover:text-[#64ffdb]">
            <a href="#project">Status</a>
          </li>
          <li className="mx-4 cursor-pointer hover:text-[#64ffdb]">
            <a href="#contact">Contact</a>
          </li>
          <button className="mx-4 hover:bg-[#64ffdb24] transition-[background-color] duration-300 text-[#64FFDA] border-2 border-[#64FFDA] px-4 py-2 rounded-md text-sm font-semibold">
            LogIn
          </button>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
