import React from 'react'
import Navbar from '../components/Navbar'
import InputField from '../components/InputField'
import { useState, useEffect } from 'react';

function Propertylisting() {

    const [data, setdata] = useState([]);


    useEffect(() => {
        const fetchproperty = async () => {
            const response = await fetch("/getPropertyInfo");
            const data = await response.json();
            setdata(data);
        };

        fetchproperty();
    }, []);

    return (
        <div className='w-full flex items-center  pt-28 px-4 flex-col gap-8 bg-[url("https://wallpaperaccess.com/full/1126753.jpg")] h-screen bg-cover bg-scroll bg-center'>
            <Navbar />
            <div className='flex w-full md:w-5/6  h-5/6 xl:w-2/3 flex-col bg-[#08192ea0] backdrop-blur-md rounded mt-8'>
                <div className='flex p-4 pl-8 text-slate-200 border-b-[1px] border-slate-500'>Property Listing</div>
                <div className='h-[20rem] gap-6 w-full flex flex-col pt-10'>
                    <div className='px-4 pb-10'>
                        <table class="min-w-full divide-y divide-gray-200 bg-white shadow-md">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Property Number</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Address</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Type</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Room</th>
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
                                            {item.propertyNo}</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            {item.street},{item.city},{item.zipCode}</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            {item.type}</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            {item.rooms}</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            {item.rent}/-</td>
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

export default Propertylisting