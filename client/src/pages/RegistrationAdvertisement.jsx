import React ,{useState} from 'react'
import myBackgroundImage from "../assets/registration-bg.jpg";
import Navbar from "../components/Navbar";
import clientIcon from "../assets/registered.png";
import clientType from "../assets/house.png";
import {HiStatusOnline} from "react-icons/hi"
import { MdOutlineAttachMoney } from "react-icons/md";
import DatePicker from "react-datepicker";
import calendarIcon from "../assets/calendar.png";

function RegistrationAdvertisement() {
    const [adId,setadId]=useState(0)
    const [propertynum,setpropertynum]=useState('')
    const [datead,setdatead]=useState(null)
    const [medium,setmedium]=useState('')
    const [price,setprice]=useState(0)

    const handlesubmit=async(e)=>{
        const response = await fetch("/adregistration", {
            method: "POST",
            body: JSON.stringify({
                adId:adId,
                propertynum:propertynum,
                medium:medium,
                datead:datead,
                price:price
              
            }),
            headers: { "Content-type": "application/json" },
          });
      
          const json = await response.json();
      
          if (json.mssg === "FAILED") {
            window.alert("error in inserting values");
          } else {
            window.alert("Advertisement Registration Successful");
          }
        };
      
        const handleDateChange=(date)=>{
            setdatead(date)
        }

    
    return (
        <>
            <Navbar />
            <div
                className="bg-cover bg-center h-full sm:h-screen w-screen flex items-center justify-center py-32 px-4"
                style={{ backgroundImage: `url(${myBackgroundImage})` }}
            >
                <div className="sm:w-2/3 w-full h-fit bg-[#050505] bg-opacity-[43%] backdrop-blur-md rounded-lg p-4">
                    <h1 className="font-sans font-bold text-4xl text-center py-6 text-slate-200">
                        Property Advertisement Registration
                    </h1>
                    <div className="sm:px-10 flex justify-center gap-10 p-4">
                        <div className="bg-[#EFEFEF] bg-opacity-[16%] flex w-full sm:w-1/2 flex-col gap-6 p-4 rounded-2xl">
                            <div className="relative rounded-full border">
                                <input
                                    type="number"
                                    onChange={(e)=>setadId(e.target.value)}
                                    className="w-full bg-white bg-opacity-[65%] px-10 py-2 rounded-full bg-transparent placeholder-black"
                                    placeholder="Advertisement Id"

                                />
                                <img
                                    src={clientIcon}
                                    alt="Client Icon"
                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6"
                                />
                            </div>

                            <div className="relative rounded-full border">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <img src={clientType} alt="Client Icon" className="h-6 w-6" />
                                </div>
                                <input
                                    type="text"
                                    onChange={(e)=>setpropertynum(e.target.value)}
                                    className="w-full bg-white bg-opacity-[65%] px-10 py-2 rounded-full bg-transparent placeholder-black"
                                    placeholder="Property Number"
                                />
                            </div>

                            
                            <div className="relative rounded-full border">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <HiStatusOnline/>
                                </div>
                                <input
                                    type="text"
                                    onChange={(e)=>setmedium(e.target.value)}
                                    className="w-full bg-white bg-opacity-[65%] px-10 py-2 rounded-full bg-transparent placeholder-black"
                                    placeholder="Medium"
                                />
                            </div>
                            <div className="relative rounded-full border">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <img
                            src={calendarIcon}
                            alt="Calendar Icon"
                            className="h-6 w-6 z-[2]"
                        />
                        </div>
                        <DatePicker
                        selected={datead}
                        onChange={handleDateChange}
                        dateFormat="MM/dd/yyyy"
                        className="w-full px-10 py-2 bg-white bg-opacity-[65%] rounded-full bg-transparent placeholder-black"
                        placeholderText="Date Advertised"
                        />
                    </div>

                            <div className="relative rounded-full border">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <MdOutlineAttachMoney />
                                </div>
                                <input
                                    type="number"
                                    onChange={(e)=>setprice(e.target.value)}
                                    className="w-full bg-white bg-opacity-[65%] px-10 py-2 rounded-full bg-transparent placeholder-black"
                                    placeholder="Price"
                                />
                            </div>
                            
                        </div>

                        
                    </div>
                    <button
                        type="button"
                        onClick={handlesubmit}
                        class="inline-block bg-gradient-to-br from-blue-300 to-blue-400 py-4 px-12 rounded-full text-lg text-purple-100 uppercase tracking-wide shadow-xs hover:shadow-2xl active:shadow-xl transform hover:-translate-y-1 active:translate-y-0 transition duration-200 "
                        >
                        Submit
                    </button>
                </div>
                
            </div>

        </>
    )
}

export default RegistrationAdvertisement