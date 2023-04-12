import React from "react";
import { useState } from "react";
import myBackgroundImage from "../assets/registration-bg.jpg";
import { motion } from 'framer-motion'
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import clientIcon from "../assets/registered.png";
import { BsPersonCheckFill, BsPersonCircle, BsCalendar3, BsTelephoneInboundFill, BsFillCaretDownFill } from "react-icons/bs";
import { GiRank3 } from "react-icons/gi";
import { MdOutlineAttachMoney } from "react-icons/md";
import office from "../assets/office.png";
import map from "../assets/map.png";
// import edit from "../assets/edit.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import calendarIcon from "../assets/calendar.png";
function RegistrationStaff() {

  const [selectedDate, setSelectedDate] = useState(null);
  const [open, setOpen] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <>
      <Navbar />
      <div
        className="bg-cover bg-center h-full sm:h-screen w-screen flex items-center justify-center py-32 px-4"
        style={{ backgroundImage: `url(${myBackgroundImage})` }}
      >
        <form>
          <motion.div layout transition={{ layout: { duration: 1, type: "spring" } }} className="sm:w-2/3 layout  w-full h-fit bg-[#050505] bg-opacity-[43%] backdrop-blur-md rounded-lg p-4">
            <h1 className="font-sans font-bold text-4xl text-center py-6 text-slate-200">
              Dream House Client Registration
            </h1>
            <div className="grid grid-rows-2 lg:grid-rows-none lg:grid-cols-2 gap-10 p-4">
              <div className="bg-[#EFEFEF] bg-opacity-[16%] flex flex-col gap-6 p-4 rounded-2xl">
                <div className="relative flex items-center">
                  <input placeholder="Full Name" type="text" className="bg-white flex items-center bg-opacity-[65%] px-10 py-2 rounded-md bg-transparent placeholder-black w-full" />
                  < BsPersonCircle className="absolute text-xl left-2" />
                </div>
                <div className="relative flex items-center">
                  <input placeholder="Position" type="text" className="bg-white flex items-center bg-opacity-[65%] px-10 py-2 rounded-md bg-transparent placeholder-black w-full" />
                  < GiRank3 className="absolute text-xl left-2" />
                </div>
                <div className="flex gap-4 w-full">
                  <div className="relative flex items-center">
                    <input placeholder="Staff Number" type="text" className="bg-white flex items-center bg-opacity-[65%] px-10 py-2 rounded-md bg-transparent placeholder-black w-full" />
                    <img
                      src={clientIcon}
                      alt="Client Icon"
                      className="absolute left-2 h-6 w-6"
                    />
                  </div>
                  <div className="relative flex items-center">
                    <input placeholder="Salary" type="number" className="bg-white flex items-center bg-opacity-[65%] px-10 py-2 rounded-md bg-transparent placeholder-black w-full" />
                    < MdOutlineAttachMoney className="absolute text-xl left-2" />
                  </div>
                </div>
                <div className="relative flex gap-4 items-center">
                  <div className="relative w-full flex items-center">
                    < BsCalendar3 className="absolute text-xl z-[2] left-2" />
                    <DatePicker
                      selected={selectedDate}
                      onChange={handleDateChange}
                      dateFormat="MM/dd/yyyy"
                      className="w-full px-10 py-2 bg-white bg-opacity-[65%] rounded-md bg-transparent placeholder-black"
                      placeholderText="Date of Birth"
                    />
                  </div>
                  <div className="w-full relative flex items-center">
                    < BsPersonCheckFill className="absolute text-xl left-2" />
                    <select className="block w-full pl-10 bg-white bg-opacity-[65%] pr-3 py-2 rounded-md bg-transparent appearance-none placeholder-black">
                      <option value="none">Sex</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="bg-[#EFEFEF] bg-opacity-[16%] flex flex-col gap-6 p-4 rounded-2xl">
                <div className="relative flex items-center">
                  <input
                    type="text"
                    className="w-full bg-white bg-opacity-[65%] px-10 py-2 rounded-md bg-transparent placeholder-black"
                    placeholder="Branch Number"
                  />
                  <img
                    src={office}
                    alt="Office Icon"
                    className="absolute left-3 h-6 w-6"
                  />
                </div>

                <div className="relative flex items-center">
                  <input
                    type="text"
                    className="w-full bg-white bg-opacity-[65%] px-10 py-2 rounded-md bg-transparent placeholder-black"
                    placeholder="Branch Address"
                  />
                  <img
                    src={map}
                    alt="map Icon"
                    className="absolute left-3 h-6 w-6"
                  />
                </div>
                <div className="relative flex items-center">
                  <input placeholder="Telephone Numbers" type="text" className="bg-white flex items-center bg-opacity-[65%] px-10 py-2 rounded-md bg-transparent placeholder-black w-full" />
                  < BsTelephoneInboundFill className="absolute text-xl left-2" />
                </div>
              </div>
            </div>
            <div className="w-full p-4">
              <motion.div layout transition={{ layout: { duration: 1, type: "spring" } }} className="bg-[#EFEFEF] bg-opacity-[16%] flex flex-col gap-6 rounded-2xl p-4">
                <motion.div layout="position" className="flex justify-between items-center">
                  <div className="text-xl text-slate-200 font-semibold">
                    Enter Details where applicable (Optional)
                  </div>
                  <button id="button" type="button" onClick={() => { setOpen(!open) }} className="  rounded-full bg-white p-2">
                    < BsFillCaretDownFill />
                  </button>
                </motion.div>
                {
                  open && (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-4 flex-col lg:flex-row w-full">
                    <div className="relative w-full flex items-center">
                      <input placeholder="Full Name" type="text" className="bg-white flex items-center bg-opacity-[65%] px-10 py-2 rounded-md bg-transparent placeholder-black w-full" />
                      < BsPersonCircle className="absolute text-xl left-2" />
                    </div>
                    <div className="relative w-full flex items-center">
                      < BsCalendar3 className="absolute text-xl z-[2] left-2" />
                      <DatePicker
                        selected={selectedDate}
                        onChange={handleDateChange}
                        dateFormat="MM/dd/yyyy"
                        className="w-full px-10 py-2 bg-white bg-opacity-[65%] rounded-md bg-transparent placeholder-black"
                        placeholderText="Date of Birth"
                      />
                    </div>
                    <div className="relative flex w-full items-center">
                      <input placeholder="Salary" type="number" className="bg-white flex items-center bg-opacity-[65%] px-10 py-2 rounded-md bg-transparent placeholder-black w-full" />
                      < MdOutlineAttachMoney className="absolute text-xl left-2" />
                    </div>
                  </motion.div>)
                }

              </motion.div>
            </div>
            <div className="flex justify-end p-2">
              <Link
                to="#"
                class="inline-block bg-gradient-to-br from-blue-300 to-blue-400 py-4 px-12 rounded-full text-lg text-purple-100 uppercase tracking-wide shadow-xs hover:shadow-2xl active:shadow-xl transform hover:-translate-y-1 active:translate-y-0 transition duration-200 "
              >
                Submit
              </Link>
            </div>
          </motion.div>
        </form>
      </div>
    </>
  );

}

export default RegistrationStaff