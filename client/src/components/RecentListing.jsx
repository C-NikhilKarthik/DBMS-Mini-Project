import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";

function RecentListing() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchImagesAndData = async () => {
      const response = await fetch("/getPropertyInfo");
      const data = await response.json();
      setData(data);
    };

    fetchImagesAndData();
  }, []);

  return (
    <div className="sm:px-16 px-4 py-10 flex flex-col bg-gray-300">
      <div className="flex w-full items-center">
        <div className="border-2 rounded-md whitespace-nowrap border-slate-500 p-3 text-xl font-semibold">
          Recent Listing
        </div>
        <div className="bg-slate-500 h-[2px] w-full"></div>
      </div>
      <div className="py-6 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
        {data.map((card) => (
          <ListingCard
            key={card.id}
            img={card.img_url}
            Address={card.street}
            city={card.city}
            rooms={card.rooms}
            price={card.rent}
            propertyNo={card.propertyNo}
            postal={card.zipCode}
       
          />
        ))}
      </div>
    </div>
  );
}

export default RecentListing;

