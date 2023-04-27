import React from "react";
import { useState } from "react";
import registrationclient from '../assets/registrationclient.jpg';
// import myBackgroundImage from "../assets/registration-bg.jpg";
import Navbar from "../components/Navbar";
import clientIcon from "../assets/registered.png";
import NameIcon from "../assets/name.png";
import clientType from "../assets/house.png";
import money from "../assets/money.png";
import office from "../assets/office.png";
import map from "../assets/map.png";
import edit from "../assets/edit.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import calendarIcon from "../assets/calendar.png";
import { BsPersonCheckFill, BsPersonCircle, BsCalendar3, BsTelephoneInboundFill, BsFillCaretDownFill } from "react-icons/bs";

function LeaseForm() {
    const [leasenumber,setleasenumber]=useState('')
    const [clientnumber,setclientnumber]=useState('')
    const [monthlyrent,setmonthlyrent]=useState(0)
    const [paymentmethod,setpaymentmethod]=useState('')
    const [propertynumber,setpropertynumber]=useState('')
    const [rentstart,setrentstart]=useState(null)
    const [rentend,setrentend]=useState(null)
    const [duration,setduration]=useState('')
    const [units,setunits]=useState('')
    const [depositpaid,setdepositpaid]=useState('')

    const handlesubmit=async(e)=>{
        const response=await fetch("/leaseregistration",{
            method:"POST",
            body:JSON.stringify({
              leasenumber:leasenumber,
              clientnumber:clientnumber,
              monthlyrent:monthlyrent,
              paymentmethod:paymentmethod,
              propertynumber:propertynumber,
              rentstart:rentstart,
              duration:duration,
              units:units,
              depositpaid:depositpaid,
              
            }),
            headers:{ "Content-type": "application/json" }
          })
      
          const json=await response.json()
      
          if(json.mssg==="FAILED")
          {
            window.alert("error in inserting values")
          }
          else{
            window.alert("Lease Registration Successful")
          }
    }

    const handlerent=(date)=>{
        setrentstart(date)
    }

 
    return (
        <div className='w-full flex items-center  pt-28 px-4 flex-col gap-8 bg-[url("https://wallpaperaccess.com/full/1126753.jpg")] h-screen bg-cover bg-scroll bg-center'>
            <Navbar />
            <div className="sm:w-2/3 w-full h-fit bg-[#050505] bg-opacity-[43%] backdrop-blur-md rounded-lg p-4">
                <h1 className="font-sans font-bold text-4xl text-center py-6 text-slate-200">
                    Dream Home Lease Form
                </h1>
                <div className="grid grid-rows-2 sm:grid-rows-none sm:grid-cols-2 gap-10 p-4">
                    <div className="bg-[#EFEFEF] bg-opacity-[16%] flex flex-col gap-6 p-4 rounded-2xl">
                        <div className="relative rounded-full border">
                            <input
                                type="text"
                                onChange={(e)=>setleasenumber(e.target.value)}
                                className="w-full bg-white bg-opacity-[65%] px-10 py-2 rounded-full bg-transparent placeholder-black"
                                placeholder="Lease Number"
                            />
                            <img
                                src={clientIcon}
                                alt="Client Icon"
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6"
                            />
                        </div>

                        <div className="relative rounded-full border">
                            <input
                                type="text"
                                onChange={(e)=>setclientnumber(e.target.value)}
                                className="w-full bg-white bg-opacity-[65%] px-10 py-2 rounded-full bg-transparent placeholder-black"
                                placeholder="Client Number"
                            />
                            <img
                                src={clientIcon}
                                alt="Client Icon"
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6"
                            />
                        </div>

                        <h3 className="text-white text-lg underline">
                            Enter Payment Details
                        </h3>

                        <div className="relative rounded-full border">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <img src={clientType} alt="Client Icon" className="h-6 w-6" />
                            </div>
                            <input
                                type="number"
                                onChange={(e)=>setmonthlyrent(e.target.value)}
                                className="w-full bg-white bg-opacity-[65%] px-10 py-2 rounded-full bg-transparent placeholder-black"
                                placeholder="Monthly Rent"
                            />
                        </div>

                        <div className="relative rounded-full border">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <img src={money} alt="Money Icon" className="h-6 w-6" />
                            </div>
                            <select onChange={(e)=>setpaymentmethod(e.target.value)} className="block w-full pl-10 bg-white bg-opacity-[65%] pr-3 py-2 rounded-md bg-transparent appearance-none placeholder-black">
                                <option value="None">Payment Method</option>
                                <option value="Cheque">Cheque</option>
                                <option value="Cash">Cash</option>
                                <option value="Online">Online</option>
                            </select>
                        </div>
                    </div>
                    <div className="bg-[#EFEFEF] bg-opacity-[16%] flex flex-col gap-6 p-4 rounded-2xl">
                        <div className="relative rounded-full border">
                            <input
                                type="text"
                                onChange={(e)=>setpropertynumber(e.target.value)}
                                className="w-full bg-white bg-opacity-[65%] px-10 py-2 rounded-full bg-transparent placeholder-black"
                                placeholder="Property Number"
                            />
                            <img
                                src={office}
                                alt="Office Icon"
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6"
                            />
                        </div>

                        <div className="relative rounded-full border">
                        <div className="relative w-full flex items-center">
                            < BsCalendar3 className="absolute text-xl z-[2] left-2" />
                            <DatePicker
                            selected={rentstart}
                            onChange={handlerent}
                            dateFormat="MM/dd/yyyy"
                            className="w-full px-10 py-2 bg-white bg-opacity-[65%] rounded-md bg-transparent placeholder-black"
                            placeholderText="Rent Start Date"
                            />
                        </div>
                        </div>

                        <div className="relative rounded-full border">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <img
                                    src={NameIcon}
                                    alt="Calendar Icon"
                                    className="h-6 w-6 z-[2]"
                                />
                            </div>
                            <input
                                type="text"
                                onChange={(e)=>setduration(e.target.value)}
                                className="w-full bg-white bg-opacity-[65%] px-10 py-2 rounded-full bg-transparent placeholder-black"
                                placeholder="Duration"
                            />
                            
                        </div>

                        <div className="relative rounded-full border">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <img
                                    src={NameIcon}
                                    alt="Calendar Icon"
                                    className="h-6 w-6 z-[2]"
                                />
                            </div>
                            <select onChange={(e)=>setunits(e.target.value)} className="block w-full pl-10 bg-white bg-opacity-[65%] pr-3 py-2 rounded-md bg-transparent appearance-none placeholder-black">
                                <option value="None">Units</option>
                                <option value="YEAR">Year</option>
                                <option value="MONTH">Month</option>
                            </select>
                        </div>

                        <div className="relative rounded-full border">
                            <select onChange={(e)=>setdepositpaid(e.target.value)} className="block w-full pl-10 bg-white bg-opacity-[65%] pr-3 py-2 rounded-md bg-transparent appearance-none placeholder-black">
                                <option value="None">Deposit Paid</option>
                                <option value="Y">Yes</option>
                                <option value="N">No</option>
                            </select>
                            <img
                                src={map}
                                alt="map Icon"
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6"
                            />
                        </div>
                    </div>

                </div>
                <div className="flex w-full justify-end p-2">
                    <button
                        type="button"
                        onClick={handlesubmit}
                        class="inline-block bg-gradient-to-br from-blue-300 to-blue-400 py-4 px-12 rounded-full text-lg text-purple-100 uppercase tracking-wide shadow-xs hover:shadow-2xl active:shadow-xl transform hover:-translate-y-1 active:translate-y-0 transition duration-200 "
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LeaseForm