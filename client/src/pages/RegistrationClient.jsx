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

function RegistrationClient() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [clientnum,setClientNum]=useState(null)
  const [clientName,setClientName]=useState('')
  const [clientReqType,setClientReqType]=useState('none')
  const [clientMaxRent,setClientMaxRent]=useState(null)
  const [clientBranchno,setClientBranchno]=useState('')
  const [clientStaffReg,setClientStaffReg]=useState('')

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handlesubmit=async(e)=>{
    const response = await fetch("/clientregistration", {
      method: "POST",
      body: JSON.stringify({
        selectedDate,
        clientnum,
        clientName,
        clientReqType,
        clientMaxRent,
        clientBranchno,
        clientStaffReg
      }),
      headers: { "Content-type": "application/json" },
    });

    const json = await response.json();
    
    if(json.mssg==="FAILED")
    {
      window.alert("error in inserting values")
    }
    else{
      window.alert("Client Registration Successfull")
    }

  }
  return (
    <>
      <Navbar />
      <div
        className="bg-cover bg-center h-full sm:h-screen w-screen flex items-center justify-center py-32 px-4"
        style={{ backgroundImage: `url(${registrationclient})` }}
      >
        <div className="sm:w-2/3 w-full h-fit bg-[#050505] bg-opacity-[43%] backdrop-blur-md rounded-lg p-4">
          <h1 className="font-sans font-bold text-4xl text-center py-6 text-slate-200">
            Dream House Client Registration
          </h1>
          <div className="grid grid-rows-2 sm:grid-rows-none sm:grid-cols-2 gap-10 p-4">
            <div className="bg-[#EFEFEF] bg-opacity-[16%] flex flex-col gap-6 p-4 rounded-2xl">
              <div className="relative rounded-full border">
                <input
                  type="text"
                  className="w-full bg-white bg-opacity-[65%] px-10 py-2 rounded-full bg-transparent placeholder-black"
                  placeholder="Client Number"
                  onChange={(e)=>setClientNum(e.target.value)}
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
                  className="w-full bg-white bg-opacity-[65%] px-10 py-2 rounded-full bg-transparent placeholder-black"
                  placeholder="Name"
                  onChange={(e)=>setClientName(e.target.value)}
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
                <select onChange={(e)=>setClientReqType(e.target.value)} className="block bg-white bg-opacity-[65%] w-full pl-10 pr-3 py-2 rounded-full bg-transparent appearance-none placeholder-black">
                  <option value="Apartment">Apartment</option>
                  <option value="House">House</option>
                  <option value="Condo">Condo</option>
                </select>
              </div>

              <div className="relative rounded-full border">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <img src={money} alt="Money Icon" className="h-6 w-6" />
                </div>
                <input
                  type="number"
                  className="w-full bg-white bg-opacity-[65%] px-10 py-2 rounded-full bg-transparent placeholder-black"
                  placeholder="Max Rent"
                  pattern="[0-9]*"
                  onChange={(e)=>setClientMaxRent(e.target.value)}
                />
              </div>
            </div>

            <div className="bg-[#EFEFEF] bg-opacity-[16%] flex flex-col gap-6 p-4 rounded-2xl">
              <div className="relative rounded-full border">
                <input
                  type="text"
                  className="w-full bg-white bg-opacity-[65%] px-10 py-2 rounded-full bg-transparent placeholder-black"
                  placeholder="Branch Number"
                  onChange={(e)=>setClientBranchno(e.target.value)}
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
                  className="w-full bg-white bg-opacity-[65%] px-10 py-2 rounded-full bg-transparent placeholder-black"
                  placeholder="Branch Address"
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
                placeholder="Enter Staff Number"
                onChange={(e)=>setClientStaffReg(e.target.value)} 
                className="block w-full pl-10 bg-white bg-opacity-[65%] pr-3 py-2 rounded-full bg-transparent appearance-none placeholder-black"/>
                  
                
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
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat="MM/dd/yyyy"
                  className="w-full px-10 py-2 bg-white bg-opacity-[65%] rounded-full bg-transparent placeholder-black"
                  placeholderText="Select Date"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end p-2">
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
    </>
  );
}

export default RegistrationClient;
