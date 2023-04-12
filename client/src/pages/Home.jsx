import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Selections from "../components/Selections";
import RecentListing from "../components/RecentListing";

function Home() {
  return (
    <div className="w-full flex flex-col bg-slate-200">
      <Navbar />
      <Carousel />
      <Selections/>
      <RecentListing/>
    </div>
  );
}

export default Home;
