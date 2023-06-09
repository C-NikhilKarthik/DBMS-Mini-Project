import React,{useState} from 'react'
import { GiPerson } from 'react-icons/gi'
import { HiOutlineArrowsExpand } from 'react-icons/hi'
import { IoBed } from 'react-icons/io5'
import { FaUser } from "react-icons/fa";

function ModalComponent({ propertyNo ,img, area, room, washroom, price }) {


    const[ClientID,setClientID]=useState("")
    const[Comment,setComment]=useState("")
    const[date,setdate]=useState("")


    // console.log(propertyNo)
    
  const handlesubmit = async (e) => {
    // const currentDate = new Date();
    // setdate(currentDate.toDateString())

    const currentDate = new Date();
    setdate(currentDate.toISOString().slice(0, 10));
    const response = await fetch("/commenting", {
      method: "POST",
      body: JSON.stringify({
        comment:Comment,
        propertyNo:propertyNo,
        ClientID:ClientID,
        Date:date


      }),
      headers: { "Content-type": "application/json" },
    });

    const json = await response.json();

    if (json.mssg === "FAILED") {
      window.alert("error in inserting values");
    } else {
      window.alert("Comment recorded");
    }
  };
    
    return (
        <div className="sm:w-[44rem] overflow-y-auto flex text-slate-200 flex-col h-full w-full bg-slate-800 text-base">
            <img className='"w-full object-cover h-2/3 object-center border-slate-500 border-b-[1px]' src={img} />
            <div className="flex flex-col gap-4 p-6">
                <div className="text-lg font-semibold"></div>
                <div className='px-2 py-3'></div>
                <div className="flex w-full flex-wrap gap-8">
                    <div className="flex items-center gap-2">
                        <HiOutlineArrowsExpand />
                        <div className="text-xs whitespace-nowrap">{area}</div>
                    </div>
                    <div className="flex items-center gap-2">
                        <IoBed />
                        <div className="text-xs whitespace-nowrap">{washroom}</div>
                    </div>
                    <div className="flex items-center gap-2">
                        <GiPerson />
                        <div className="text-xs whitespace-nowrap">{room}</div>
                    </div>
                </div>
                <div className="rounded w-fit shadow bg-yellow-400 p-2">{price}</div>
                <input onChange={(event)=>setComment(event.target.value)} type="text" className='w-full rounded shadow p-2 bg-slate-700' placeholder='Add your Comments' />
                <div className="relative w-52">
                    <input
                        type="text"
                        id="client-id"
                        name="client-id"
                        placeholder="Enter client ID"
                        className="w-full border-2 border-gray-300 rounded-lg pl-10 pr-4 py-2 mb-4 focus:outline-none focus:border-blue-500"
                        onChange={(event)=>setClientID(event.target.value)}
                    />
                    <label
                        htmlFor="client-id"
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 flex items-center pl-4"
                    >
                        <FaUser className="text-gray-500 mb-4" />
                    </label>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-32"
                    onClick={handlesubmit}
                >
                    Submit
                </button>
            </div>
        </div>
    )
}

export default ModalComponent