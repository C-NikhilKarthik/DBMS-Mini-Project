import React from 'react'
import Navbar from '../components/Navbar'
import InputField from '../components/InputField'

function Viewrent({ data }) {
    return (
        <div className='w-full flex items-center  pt-28 px-4 flex-col gap-8 bg-[url("https://wallpaperaccess.com/full/1126753.jpg")] h-screen bg-cover bg-scroll bg-center'>
            <Navbar />
            <div className='flex w-full md:w-5/6  h-5/6 xl:w-2/3 flex-col bg-[#08192ea0] backdrop-blur-md rounded mt-8'>
                <div className='flex p-4 pl-8 text-slate-200 border-b-[1px] border-slate-500'>View Rent</div>
                <div className='h-[20rem] gap-6 w-full flex flex-col'>
                    <div className="flex items-center w-full justify-between p-4 text-slate-300">
                        <div className="flex items-center gap-4">
                            <div>Enter the Property Number </div>
                            <InputField type={"text"} placeholder={"Client Number"} />
                        </div>

                        <button className='px-4 py-2 rounded bg-blue-400 text-slate-300'>Search</button>
                    </div>
                    <div className='px-4 pb-10'>
                        <table class="min-w-full divide-y divide-gray-200 bg-white shadow-md">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Owner Number</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Owner Name</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Client Number</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Client Name</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Rent</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                {!data ? (
                                    <tr></tr>

                                ) : (data.map((item, index) => (
                                    <tr className={index % 2 === 0 ? "bg-gray-300" : ""}>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            {item.staffNo}</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            {item.fname} {item.lname}</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            {item.position}</td>
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

export default Viewrent