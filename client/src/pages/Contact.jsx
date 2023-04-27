import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Contact() {
    const [branchName, setBranchName] = useState('');
    const [branches, setBranches] = useState([]);
    const [val, setVal] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        const response = await fetch(`/faq/${branchName}`, {
            method: "GET",
            headers: { "Content-type": "application/json" }
        })

        const json = await response.json()
        setVal(json)
    };


    useEffect(() => {
        const fetchBranches = async () => {
            const response = await fetch("/getbranches");
            const data = await response.json();
            setBranches(data);
        };

        fetchBranches();
    }, []);

    const handleBranchChange = (e) => {
        setBranchName(e.target.value);
    };
    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center px-4 justify-center mt-12 md:mt-36">
                <h1 className="text-3xl font-bold mb-4 underline">Search For Branch</h1>
                <div className="w-full max-w-sm my-4">
                    <form onSubmit={handleSubmit} className="flex">
                        <select
                            id="branch"
                            name="branch"
                            value={branchName}
                            onChange={handleBranchChange}
                            className="block bg-white bg-opacity-[65%] w-full pl-10 pr-3 py-2 rounded-full bg-transparent appearance-none placeholder-black"
                        >
                            <option value="">Select branchNo</option>
                            {branches.map((branch) => (
                                <option key={branch.branchNo} value={branch.branchNo}>
                                    {branch.branchNo}
                                </option>
                            ))}
                        </select>
                        <button
                            className="inline-block px-6 py-3 text-sm font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700"
                            type="submit"
                            onClick={handleSearch}
                        >
                            Search
                        </button>
                    </form>
                </div>

                <hr className="my-10 w-full " style={{ borderTopWidth: "2px", borderColor: "black" }} />

                <div className="grid gap-4 md:grid-cols-3 w-full mt-10">
                    <div className="bg-slate-200 rounded-lg shadow-lg overflow-hidden cursor-pointer">
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2">Address</h2>
                            {
                                val.length > 0 && (
                                    <p className="text-gray-700">{val[0].street},{val[0].city},{val[0].zipCode}</p>
                                )
                            }
                        </div>
                    </div>

                    <div className="bg-slate-200 rounded-lg shadow-lg overflow-hidden cursor-pointer">
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2">Contact</h2>
                            {
                                val.length > 0 && (
                                    <p className="text-gray-700">{val[0].phoneNo}</p>
                                )
                            }
                            <p className="text-gray-700">bookinghouse123@gmail.com</p>
                        </div>
                    </div>

                    <div className="bg-slate-200 rounded-lg shadow-lg overflow-hidden cursor-pointer">
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2">FAQ</h2>
                            <p className="text-gray-700"><a href='/faq'>Read More</a></p>
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
