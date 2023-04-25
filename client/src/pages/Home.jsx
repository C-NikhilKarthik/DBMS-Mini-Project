import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Selections from "../components/Selections";
import RecentListing from "../components/RecentListing";
import Footer from "../components/Footer";

const imgs = [
  {
    id:1,
    image:  'https://wallpaperaccess.com/full/5089528.jpg',
    topic:'789 Oak Avenue, Main Street, North Boulevard'
  },
  {
    id:2,
    image:  'https://wallpaperaccess.com/full/1126753.jpg',
    topic:'790 Oak Avenue, Main Street, North Boulevard'
  },
    {
    id:3,
    image:  'https://wallpaperaccess.com/full/1126807.jpg',
    topic:'791 Oak Avenue, Main Street, North Boulevard'
  }
]
function Home() {
  return (
    <div className="w-full overflow-y-hidden flex flex-col bg-slate-200">
      <Navbar />
      <Carousel img={imgs}/>
      <Selections/>
      <RecentListing/>
      <Footer/>
    </div>
  );
}

export default Home;
