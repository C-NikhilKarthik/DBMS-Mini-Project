import React from 'react'
import myBackgroundImage from "../assets/registration-bg.jpg";
import Navbar from "../components/Navbar";
import clientIcon from "../assets/registered.png";
import clientType from "../assets/house.png";
import {HiStatusOnline} from "react-icons/hi"
import { MdOutlineAttachMoney } from "react-icons/md";

function RegistrationAdvertisement() {
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
                                    type="text"
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

                                    className="w-full bg-white bg-opacity-[65%] px-10 py-2 rounded-full bg-transparent placeholder-black"
                                    placeholder="Medium"
                                />
                            </div>

                            <div className="relative rounded-full border">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <MdOutlineAttachMoney />
                                </div>
                                <input
                                    type="number"
                                    className="w-full bg-white bg-opacity-[65%] px-10 py-2 rounded-full bg-transparent placeholder-black"
                                    placeholder="Price"
                                />
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default RegistrationAdvertisement