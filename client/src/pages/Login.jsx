import React from 'react'
import Navbar from '../components/Navbar'
import myBackgroundImage from "../assets/loginbg.jpg";
import loginicon from "../assets/key.png"
import login from "../assets/user.png"
import lock from "../assets/padlock.png"
import type from "../assets/ethnic.png"
import { Link } from "react-router-dom";

function Login() {
    return (
        <>
            <Navbar />
            <div
                className="bg-cover bg-center h-full sm:h-screen w-screen flex items-center justify-end py-32 px-10"
                style={{ backgroundImage: `url(${myBackgroundImage})` }}
            >
                <div className="sm:w-1/3 w-full h-fit bg-[#050505] bg-opacity-[43%] backdrop-blur-md rounded-lg p-4">
                    <div className="flex justify-center mt-2">
                        <img className="mx-auto w-10" src={loginicon} alt="key" />
                    </div>
                    <h1 className=" text-center text-white">
                        Login
                    </h1>

                    <div className="relative rounded-full border mt-10">
                        <input
                            type="text"
                            className="w-full bg-white bg-opacity-[65%] px-10 py-2 rounded-full bg-transparent placeholder-black"
                            placeholder="User Number"
                        />
                        <img
                            src={login}
                            alt="User Icon"
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6"
                        />
                    </div>

                    <div className="relative rounded-full border mt-10">
                        <input
                            type="password"  
                            name="password"  
                            className="w-full bg-white bg-opacity-[65%] px-10 py-2 rounded-full bg-transparent placeholder-black"
                            placeholder="Password"
                        />
                        <img
                            src={lock}
                            alt="User Icon"
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6"
                        />
                    </div>


                    <Link to='/login' className='flex justify-end text-blue-300'>Forget Password?</Link>

                    <div className="relative rounded-full border mt-6">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <img src={type} alt="Client Icon" className="h-6 w-6" />
                        </div>
                        <select className="block bg-white bg-opacity-[65%] w-full pl-10 pr-3 py-2 rounded-full bg-transparent appearance-none placeholder-black">
                            <option value="Manager">Manager</option>
                            <option value="Supervisor">Supervisor</option>
                            <option value="Assistant">Assistant</option>
                        </select>
                    </div>

                    <div className="flex justify-end pt-8">
                        <Link
                            to="/home"
                            class="inline-block bg-gradient-to-br from-blue-300 to-blue-400 py-2 px-8 rounded-full text-sm text-purple-100 uppercase tracking-wide shadow-xs hover:shadow-2xl active:shadow-xl transform hover:-translate-y-1 active:translate-y-0 transition duration-200 "
                        >
                            Sign In
                        </Link>
                    </div>

                    <Link to='/login' className='flex justify-center text-blue-300 py-2'>Staff Registration Form</Link>
                </div>
            </div>
        </>
    )
}

export default Login