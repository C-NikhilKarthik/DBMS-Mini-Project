import React from "react";
import { HiOutlineArrowsExpand } from "react-icons/hi";
import { IoBed } from "react-icons/io5";
import { GiPerson } from "react-icons/gi";
import { FcViewDetails } from "react-icons/fc";

function ListingCard({ img, Title, area, rooms, washrooms, price }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-md shadow-lg bg-white">
      <div className="w-full overflow-hidden aspect-square">
        <img
          src={img}
          alt="Card"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="flex flex-col gap-4 p-6">
        <div className="text-lg font-semibold">{Title}</div>
        <div className="flex justify-between w-full">
          <div className="flex items-center gap-2">
            <HiOutlineArrowsExpand />
            <div className="text-sm">{area}</div>
          </div>
          <div className="flex items-center gap-2">
            <IoBed />
            <div className="text-sm">{washrooms}</div>
          </div>
          <div className="flex items-center gap-2">
            <GiPerson />
            <div className="text-sm">{rooms}</div>
          </div>
        </div>
        <div className="h-[2px] w-full bg-slate-500"></div>
        <div className="flex gap-4">
          <div className="rounded shadow bg-yellow-400 p-2">{price}</div>
          <button className="p-2 flex items-center gap-2 shadow rounded bg-slate-300">
            <FcViewDetails className="text-lg text-slate-500"/>
            <div className="text-slate-600">Details</div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ListingCard;
