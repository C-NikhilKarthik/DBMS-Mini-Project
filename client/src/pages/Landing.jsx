import React from 'react'
import Navbar from '../components/Navbar'
import myBackgroundImage from "../assets/landingbg.jpg"


function Landing() {
    return (
        <>
            <Navbar />
            <div
                className="bg-cover bg-center h-full sm:h-screen w-screen flex items-center justify-center py-32 px-4"
                style={{ backgroundImage: `url(${myBackgroundImage})` }}
            >
                <div className="sm:w-2/3 w-full h-fit bg-[#050505] bg-opacity-[43%] backdrop-blur-md rounded-lg p-4">
                    <h1 className='text-white text-2xl text-center pt-10'>Professional solutions for owners and investors in property management. </h1>
                    <h3 className='text-white text-xl text-center pt-8'>Customized assistance.</h3>
                    <div className="flex justify-center py-10">
                        <button className="text-white text-lg bg-blue-400 rounded-full p-2">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Landing