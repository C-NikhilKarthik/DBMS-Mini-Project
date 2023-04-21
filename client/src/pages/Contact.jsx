import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Contact() {
    const [branchName, setBranchName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleChange = (e) => {
        setBranchName(e.target.value);
    };

    return (
        <>
            <Navbar />

            <div className="flex flex-col items-center justify-center mt-12 md:mt-36">
                <h1 className="text-3xl font-bold mb-4 underline">Search For Branch</h1>
                <div className="w-full max-w-sm my-4">
                    <form onSubmit={handleSubmit} className="flex">
                        <input
                            className="flex-grow w-full px-4 py-2 mr-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-blue-500"
                            type="text"
                            value={branchName}
                            onChange={handleChange}
                            placeholder="Find branch"
                            aria-label="Search"
                        />
                        <button
                            className="inline-block px-6 py-3 text-sm font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700"
                            type="submit"
                        >
                            Search
                        </button>
                    </form>
                </div>

                <hr className="my-10 w-full " style={{ borderTopWidth: "2px", borderColor: "black" }} />

                <div className="grid gap-4 md:grid-cols-3 w-full mt-10">
                    <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden cursor-pointer">
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2">Address</h2>
                            <p className="text-gray-700">123, Main Road, Vidyanagar, Hubli, Karnataka 580031, India.</p>
                        </div>
                    </div>

                    <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden cursor-pointer">
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2">Contact</h2>
                            <p className="text-gray-700">+91 98765 43210</p>
                            <p className="text-gray-700">bookinghouse123@gmail.com</p>
                        </div>
                    </div>

                    <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden cursor-pointer">
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2">FAQ</h2>
                            <p className="text-gray-700"><a href='/'>Read More</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='fixed bottom-0 w-full'>
                <Footer />
            </div>

        </>
    );
}

export default Contact;
