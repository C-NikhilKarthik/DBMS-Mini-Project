import React from 'react'
import Navbar from '../components/Navbar'
import InputField from '../components/InputField'
import { useState,useEffect } from 'react';

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
                <div className='h-[20rem] gap-6 w-full flex flex-col'>
                    <div className="flex items-center w-full justify-between p-4 text-slate-300">
                        <div className="flex items-center gap-4">
                            <div>Enter the Branch Number </div>
                            <InputField type={"text"} placeholder={"Client Number"} />
                        </div>

                        <button className='px-4 py-2 rounded bg-blue-400 text-slate-300'>Search</button>
                    </div>
                    <div className='px-4 pb-10'>
                        <table className='px-4 rounded border-[2px] border-slate-300 w-full text-slate-300'>
                            <tr>
                                <th>Property Number</th>
                                <th>Address</th>
                                <th>Type</th>
                                <th>Room</th>
                                <th>Rent</th>
                            </tr>
                            {!data ? (
                                <tr></tr>

                            ) : (data.map((item) => (
                                <tr>
                                    <td>{item.propertyNo}</td>
                                    <td>{item.street},{item.city},{item.zipCode}</td>
                                    <td>{item.type}</td>
                                    <td>{item.rooms}</td>
                                    <td>{item.rent}/-</td>
                                </tr>
                            )))}

                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Propertylisting