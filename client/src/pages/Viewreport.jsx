import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import InputField from '../components/InputField'

function Viewreport({ data }) {
    const [data1, setdata] = useState([]);
    const [branches, setBranches] = useState([]);
    const [branchName, setBranchName] = useState('');
    useEffect(() => {
        const fetchBranches = async () => {
            const response = await fetch("/getproperties");
            const data = await response.json();
            setBranches(data);
        };

        fetchBranches();
    }, []);
    const handleSearch = async (e) => {
        e.preventDefault();
        const response = await fetch(`/reports/${branchName}`);
        const json = await response.json()
        setdata(json)
    };
    const handleBranchChange = (e) => {
        setBranchName(e.target.value);
    };
    console.log(data1)
    return (
        <div className='w-full flex items-center  pt-28 px-4 flex-col gap-8 bg-[url("https://wallpaperaccess.com/full/1126753.jpg")] h-screen bg-cover bg-scroll bg-center'>
            <Navbar />
            <div className='flex w-full md:w-5/6  h-5/6 xl:w-2/3 flex-col bg-[#08192ea0] backdrop-blur-md rounded mt-8'>
                <div className='flex p-4 pl-8 text-slate-200 border-b-[1px] border-slate-500'>View Report</div>
                <div className='h-[20rem] gap-6 w-full flex flex-col'>
                    <div className="flex items-center w-full justify-between p-4 text-slate-300">
                        <div className="flex items-center gap-4">
                            <div>Enter the Property Number </div>
                            <select
                                id="branch"
                                name="branch"
                                value={branchName}
                                onChange={handleBranchChange}
                                className="block bg-white bg-opacity-[65%] w-full pl-10 pr-3 py-2 rounded text-slate-600 bg-transparent appearance-none placeholder-black"
                            >
                                <option value="">Select Property Number</option>
                                {branches.map((branch) => (
                                    <option key={branch.propertyNo} value={branch.propertyNo}>
                                        {branch.propertyNo}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <button className='px-4 py-2 rounded bg-blue-400 text-slate-300' onClick={handleSearch}>Search</button>
                    </div>
                    <div className='px-4 pb-10'>
                        <table class="min-w-full divide-y divide-gray-200 bg-white shadow-md">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Client Number</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Name</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Date</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Comments</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                {!data1 ? (
                                    <tr></tr>

                                ) : (data1.map((item, index) => (
                                    <tr className={index % 2 === 0 ? "bg-gray-300" : ""}>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            {item.clientNo}</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            {item.fname}</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            {item.dateOfView}</td>
                                        <td class="px-6 py-4 text-sm font-medium text-gray-900">
                                            {item.comments}</td>
                                    </tr>
                                )))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Viewreport