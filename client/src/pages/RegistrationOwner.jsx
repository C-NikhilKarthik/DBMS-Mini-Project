import React from "react";
import { useState } from "react";
import myBackgroundImage from "../assets/registration-bg.jpg";
import { Link } from "react-router-dom";
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
function RegistrationOwner() {
    const [ownernumber,setownernumber]=useState('')
    const [name,setname]=useState('')
    const [telephonenumber,settelephonenumber]=useState('')
    const [typeofbusiness,settypeofbusiness]=useState('')
    const [streetaddress,setstreetaddress]=useState('')
    const [city,setcity]=useState('')
    const [postalcode,setpostalcode]=useState('')
    const [contactname,setcontactname]=useState('')

    const handlesubmit =async(e)=>{
      console.log("pressed")
      const response=await fetch("/ownerregistration",{
        method:"POST",
        body:JSON.stringify({
          ownernumber:ownernumber,
          name:name,
          telephonenumber:telephonenumber,
          typeofbusiness:typeofbusiness,
          streetaddress:streetaddress,
          city:city,
          postalcode:postalcode,
          contactname:contactname,
        }),
        headers:{ "Content-type": "application/json" }
      })
  
      const json=await response.json()
  
      if(json.mssg==="FAILED")
      {
        window.alert("error in inserting values")
      }
      else{
        window.alert("Owner Registration Successful")
      }
      
    }

    return (
      <>
        <Navbar />
        <div
        className="bg-cover bg-center h-full w-full flex items-center justify-center py-40 px-4"
        style={{ backgroundImage: `url(${myBackgroundImage})` }}
        >
          <div className="sm:w-2/3 w-full h-fit bg-[#050505] bg-opacity-[43%] backdrop-blur-md rounded-lg p-4">
            <h1 className="font-sans font-bold text-4xl text-center py-6 text-slate-200">
              Dream House Owner Registration
            </h1>
            <div className="grid grid-rows-2 sm:grid-rows-none sm:grid-cols-2 gap-10 p-4">
              <div className="bg-[#EFEFEF] bg-opacity-[16%] flex flex-col gap-6 p-4 rounded-2xl">
                <div className="relative rounded-full border">
                  <input
                    type="text"
                    onChange={(e)=>setownernumber(e.target.value)}
                    className="w-full bg-white bg-opacity-[65%] px-10 py-2 rounded-full bg-transparent placeholder-black"
                    placeholder="Owner Number"
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
                    onChange={(e)=>setname(e.target.value)}
                    className="w-full bg-white bg-opacity-[65%] px-10 py-2 rounded-full bg-transparent placeholder-black"
                    placeholder="Name"
                  />
                  <img
                    src={NameIcon}
                    alt="Name Icon"
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6"
                  />
                </div>
  
                <h3 className="text-white text-lg underline">Property Requirements</h3>
  
                <div className="relative rounded-full border">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <img src={clientType} alt="Client Icon" className="h-6 w-6" />
                  </div>
                  <input
                    type="text"
                    onChange={(e)=>settelephonenumber(e.target.value)}
                    className="w-full bg-white bg-opacity-[65%] px-10 py-2 rounded-full bg-transparent placeholder-black"
                    placeholder="Telephone Number"
                  />
                  
                </div>
  
                <div className="relative rounded-full border">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <img src={money} alt="Money Icon" className="h-6 w-6" />
                  </div>
                  <input
                    type="text"
                    onChange={(e)=>settypeofbusiness(e.target.value)}
                    className="w-full bg-white bg-opacity-[65%] px-10 py-2 rounded-full bg-transparent placeholder-black"
                    placeholder="Type of Business"
                  />
                </div>
              </div>
  
              <div className="bg-[#EFEFEF] bg-opacity-[16%] flex flex-col gap-6 p-4 rounded-2xl">
                <div className="relative rounded-full border">
                  <input
                    type="text"
                    onChange={(e)=>setstreetaddress(e.target.value)}
                    className="w-full bg-white bg-opacity-[65%] px-10 py-2 rounded-full bg-transparent placeholder-black"
                    placeholder="Street Address"
                  />
                  <img
                    src={office}
                    alt="Office Icon"
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6"
                  />
                </div>
  
                <div className="relative rounded-full border">
                  <input
                    type="text"
                    onChange={(e)=>setcity(e.target.value)}
                    className="w-full bg-white bg-opacity-[65%] px-10 py-2 rounded-full bg-transparent placeholder-black"
                    placeholder="City"
                  />
                  <img
                    src={map}
                    alt="map Icon"
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6"
                  />
                </div>

                <div className="relative rounded-full border">
                  <input
                    type="text"
                    onChange={(e)=>setpostalcode(e.target.value)}
                    className="w-full bg-white bg-opacity-[65%] px-10 py-2 rounded-full bg-transparent placeholder-black"
                    placeholder="Postal Code"
                  />
                  <img
                    src={map}
                    alt="map Icon"
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6"
                  />
                </div>
  
                <h3 className="text-white text-lg underline">Registration Details</h3>
  
                <div className="relative rounded-full border">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <img src={edit} alt="edit Icon" className="h-6 w-6" />
                  </div>
                  <input
                    type="text"
                    onChange={(e)=>setcontactname(e.target.value)}
                    className="w-full bg-white bg-opacity-[65%] px-10 py-2 rounded-full bg-transparent placeholder-black"
                    placeholder="Contact Name"
                  />
                  
                </div>

              </div>
            </div>
            <div className="flex justify-end p-2">
              <button
                type="submit"
                onClick={handlesubmit}
                class="inline-block bg-gradient-to-br from-blue-300 to-blue-400 py-4 px-12 rounded-full text-lg text-purple-100 uppercase tracking-wide shadow-xs hover:shadow-2xl active:shadow-xl transform hover:-translate-y-1 active:translate-y-0 transition duration-200 "
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </>
    );
  
}

export default RegistrationOwner