import React from "react";
import { useState } from "react";
import { HiPhotograph } from "react-icons/hi";
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
import axios from 'axios';


function RegistrationProperty() {
  const [propertynum, setpropertynum] = useState('')
  const [type, settype] = useState('')
  const [rooms, setrooms] = useState(0)
  const [rent, setrent] = useState(0)
  const [ownerid, setownerid] = useState('')
  const [streetaddress, setstreetaddress] = useState('')
  const [city, setcity] = useState('')
  const [postalcode, setpostalcode] = useState(0)
  const [managedby, setmanagedby] = useState('')
  const [ImageUrl, setImageUrl] = useState('no url')




  const[ImageSelected,setImageSelected]=useState("")

  const [isLoading, setIsLoading] = useState(false);


  const uploadImage = async () => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append("file", ImageSelected);
    formData.append("upload_preset", "t5v5qlov");

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dmmfdufus/image/upload",
        formData
      );
      setImageUrl(response.data.secure_url);
      alert("Image uploaded");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  

  const handlesubmit = async (e) => {


  
    const response = await fetch("/propertyregistration", {
      method: "POST",
      body: JSON.stringify({
        propertynum: propertynum,
        type: type,
        rooms: rooms,
        rent: rent,
        ownerid: ownerid,
        streetaddress: streetaddress,
        city: city,
        postalcode: postalcode,
        managedby: managedby,
        ImageUrl: ImageUrl

      }),
      headers: { "Content-type": "application/json" }
    })

    const json = await response.json()

    if (json.mssg === "FAILED") {
      window.alert("error in inserting values")
    }
    else {
      window.alert("Property Registration Successful")
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
            Dream Home Property Registration
          </h1>
          <div className="grid grid-rows-2 sm:grid-rows-none sm:grid-cols-2 gap-10 p-4">
            <div className="bg-[#EFEFEF] bg-opacity-[16%] flex flex-col gap-6 p-4 rounded-2xl">
              <div className="relative rounded-full border">
                <input
                  type="text"
                  onChange={(e) => setpropertynum(e.target.value)}
                  className="w-full bg-white bg-opacity-[65%] px-10 py-2 rounded-full bg-transparent placeholder-black"
                  placeholder="Property Number"
                />
                <img
                  src={clientIcon}
                  alt="Client Icon"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6"
                />
              </div>

              <div className="relative rounded-full border">
                <select onChange={(e) => settype(e.target.value)} className="block bg-white bg-opacity-[65%] w-full pl-10 pr-3 py-2 rounded-full bg-transparent appearance-none placeholder-black">
                  <option value="None">Type</option>
                  <option value="Apartment">Apartment</option>
                  <option value="House">House</option>
                  <option value="Condo">Condo</option>
                </select>
                <img
                  src={NameIcon}
                  alt="Name Icon"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6"
                />
              </div>

              <h3 className="text-white text-lg underline">
                Property Requirements
              </h3>

              <div className="relative rounded-full border">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <img src={clientType} alt="Client Icon" className="h-6 w-6" />
                </div>
                <input
                  type="text"
                  onChange={(e) => setrooms(e.target.value)}
                  className="w-full bg-white bg-opacity-[65%] px-10 py-2 rounded-full bg-transparent placeholder-black"
                  placeholder="Rooms"
                />
              </div>

              <div className="relative rounded-full border">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <img src={money} alt="Money Icon" className="h-6 w-6" />
                </div>
                <input
                  type="number"
                  onChange={(e) => setrent(e.target.value)}
                  className="w-full bg-white bg-opacity-[65%] px-10 py-2 rounded-full bg-transparent placeholder-black"
                  placeholder="Rent"
                  pattern="[0-9]*"
                />
              </div>

              <div className="relative rounded-full border overflow-hidden">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  < HiPhotograph className="text-2xl"/>
                </div>
                <label for="file-upload" class="inline-flex items-center justify-center px-4 py-2 w-full text-sm font-medium bg-white bg-opacity-[65%] text-black border border-transparent rounded-md hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                  <svg class="w-5 h-5 mr-2 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>                  <span>Select Photo</span>
                </label>
                <input onChange={(event)=>{
                  setImageSelected(event.target.files[0])
                }}id="file-upload" name="file-upload" accept="image/*" type="file" class="hidden" />

          
       

              </div>
              <button className="inline-block bg-gradient-to-br from-blue-300 to-blue-400 py-2 px-12 rounded-full text-lg text-purple-100 uppercase tracking-wide shadow-xs hover:shadow-2xl active:shadow-xl transform hover:-translate-y-1 active:translate-y-0 transition duration-200" onClick={uploadImage} disabled={isLoading || !ImageSelected}>
        {isLoading ? "Uploading..." : "Upload"}
      </button>
            </div>

            <div className="bg-[#EFEFEF] bg-opacity-[16%] flex flex-col gap-6 p-4 rounded-2xl">
              <div className="relative rounded-full border">
                <input
                  type="text"
                  onChange={(e) => setownerid(e.target.value)}
                  className="w-full bg-white bg-opacity-[65%] px-10 py-2 rounded-full bg-transparent placeholder-black"
                  placeholder="Owner ID"
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
                  onChange={(e) => setstreetaddress(e.target.value)}
                  className="w-full bg-white bg-opacity-[65%] px-10 py-2 rounded-full bg-transparent placeholder-black"
                  placeholder="Street Address"
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
                  onChange={(e) => setcity(e.target.value)}
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
                  onChange={(e) => setpostalcode(e.target.value)}
                  className="w-full bg-white bg-opacity-[65%] px-10 py-2 rounded-full bg-transparent placeholder-black"
                  placeholder="Postal Code"
                />
                <img
                  src={map}
                  alt="map Icon"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6"
                />
              </div>

              <h3 className="text-white text-lg underline">
                Registration Details
              </h3>

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
                  onChange={(e) => setmanagedby(e.target.value)}
                  className="w-full bg-white bg-opacity-[65%] px-10 py-2 rounded-full bg-transparent placeholder-black"
                  placeholder="Managed by"
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

export default RegistrationProperty;
