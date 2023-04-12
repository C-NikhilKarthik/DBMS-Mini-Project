import React from "react";
import ListingCard from "./ListingCard";

const List = [
    {
        img:"https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?cs=srgb&dl=pexels-thgusstavo-santana-2102587.jpg&fm=jpg",
        Title:"2211 Summer Ridge Dr",
        Area:"5000 Sq Ft.",
        Washrooms:"2 bathrooms",
        Rooms:"3 bedrooms",
        Price:"₹ 14,891",
    },
    {
        img:"https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?cs=srgb&dl=pexels-thgusstavo-santana-2102587.jpg&fm=jpg",
        Title:"2211 Summer Ridge Dr",
        Area:"5000 Sq Ft.",
        Washrooms:"2 bathrooms",
        Rooms:"3 bedrooms",
        Price:"₹ 14,891",
    },
    {
        img:"https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?cs=srgb&dl=pexels-thgusstavo-santana-2102587.jpg&fm=jpg",
        Title:"2211 Summer Ridge Dr",
        Area:"5000 Sq Ft.",
        Washrooms:"2 bathrooms",
        Rooms:"3 bedrooms",
        Price:"₹ 14,891",
    },
    {
        img:"https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?cs=srgb&dl=pexels-thgusstavo-santana-2102587.jpg&fm=jpg",
        Title:"2211 Summer Ridge Dr",
        Area:"5000 Sq Ft.",
        Washrooms:"2 bathrooms",
        Rooms:"3 bedrooms",
        Price:"₹ 14,891",
    }
]
function RecentListing() {
  return (
    <div className="sm:px-16 py-10 flex flex-col bg-gray-300">
      <div className="flex w-full items-center">
        <div className="border-2 rounded-md whitespace-nowrap border-slate-500 p-3 text-xl font-semibold">Recent Listing</div>
        <div className="bg-slate-500 h-[2px] w-full"></div>
      </div>
      <div className="py-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
        {List.map(card => (
            <ListingCard img={card.img} area={card.Area} Title={card.Title} rooms={card.Rooms} price={card.Price} washrooms={card.Washrooms}/>
        ))}
      </div>
    </div>
  );
}

export default RecentListing;
