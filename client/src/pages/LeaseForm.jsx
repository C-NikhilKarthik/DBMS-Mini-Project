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

function LeaseForm() {
    return (
        <div className='w-full flex items-center  pt-28 px-4 flex-col gap-8 bg-[url("https://wallpaperaccess.com/full/1126753.jpg")] h-screen bg-cover bg-scroll bg-center'>
            <Navbar />
            <div className="sm:w-2/3 w-full h-fit bg-[#050505] bg-opacity-[43%] backdrop-blur-md rounded-lg p-4">
                <h1 className="font-sans font-bold text-4xl text-center py-6 text-slate-200">
                    Dream Home Property Registration
                </h1>
                <div className="grid grid-rows-2 sm:grid-rows-none sm:grid-cols-2 gap-10 p-4">
                    <div className="bg-[#EFEFEF] bg-opacity-[16%] flex flex-col gap-6 p-4 rounded-2xl">
                        <div className="relative rounded-full border">
                            <input
                                type="text"
                                className="w-full bg-white bg-opacity-[65%] px-10 py-2 rounded-full bg-transparent placeholder-black"
                                placeholder="Client Number"
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
                                placeholder="Full Name"
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
                                type="text"
                                className="w-full bg-white bg-opacity-[65%] px-10 py-2 rounded-full bg-transparent placeholder-black"
                                placeholder="Monthly Rent"
                            />
                        </div>

                        <div className="relative rounded-full border">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <img src={money} alt="Money Icon" className="h-6 w-6" />
                            </div>
                            <input
                                type="number"
                                className="w-full bg-white bg-opacity-[65%] px-10 py-2 rounded-full bg-transparent placeholder-black"
                                placeholder="Payment Method"
                                pattern="[0-9]*"
                            />
                        </div>
                    </div>
                    <div className="bg-[#EFEFEF] bg-opacity-[16%] flex flex-col gap-6 p-4 rounded-2xl">
                        <div className="relative rounded-full border">
                            <input
                                type="text"
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
                            <input
                                type="text"
                                className="w-full bg-white bg-opacity-[65%] px-10 py-2 rounded-full bg-transparent placeholder-black"
                                placeholder="Property Address"
                            />
                            <img
                                src={map}
                                alt="map Icon"
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6"
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
                            <input
                                type="text"
                                className="w-full bg-white bg-opacity-[65%] px-10 py-2 rounded-full bg-transparent placeholder-black"
                                placeholder="Rent Start"
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
                            <input
                                type="text"
                                className="w-full bg-white bg-opacity-[65%] px-10 py-2 rounded-full bg-transparent placeholder-black"
                                placeholder="Rent Finish"
                            />
                        </div>

                        <div className="relative rounded-full border">
                            <input
                                type="text"
                                className="w-full bg-white bg-opacity-[65%] px-10 py-2 rounded-full bg-transparent placeholder-black"
                                placeholder="Duration"
                            />
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