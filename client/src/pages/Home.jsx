import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";

function Home() {
  return (
    <div className="w-full flex flex-col bg-slate-200">
      <Navbar />
      <Carousel />
    </div>
  );
}

export default Home;
