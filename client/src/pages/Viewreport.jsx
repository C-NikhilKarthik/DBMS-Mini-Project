import React from 'react'
import Navbar from '../components/Navbar'
import InputField from '../components/InputField'

function Viewreport({data}) {
  return (
    <div className='w-full flex items-center  pt-28 px-4 flex-col gap-8 bg-[url("https://wallpaperaccess.com/full/1126753.jpg")] h-screen bg-cover bg-scroll bg-center'>
            <Navbar />
            <div className='flex w-full md:w-5/6  h-5/6 xl:w-2/3 flex-col bg-[#08192ea0] backdrop-blur-md rounded mt-8'>
                <div className='flex p-4 pl-8 text-slate-200 border-b-[1px] border-slate-500'>View Report</div>
                <div className='h-[20rem] gap-6 w-full flex flex-col'>
                    <div className="flex items-center w-full justify-between p-4 text-slate-300">
                        <div className="flex items-center gap-4">
                            <div>Enter the Property Number </div>
                            <InputField type={"text"} placeholder={"Client Number"} />
                        </div>

                        <button className='px-4 py-2 rounded bg-blue-400 text-slate-300'>Search</button>
                    </div>
                    <div className='px-4 pb-10'>
                        <table className='px-4 rounded border-[2px] border-slate-300 w-full text-slate-300'>
                            <tr>
                                <th>Client Number</th>
                                <th>Name</th>
                                <th>Date</th>
                                <th>Comments</th>
                            </tr>
                            {!data ? (
                                <tr></tr>

                            ) : (data.map((item) => (
                                <tr>
                                    <td>item[0]</td>
                                    <td>item[1]</td>
                                    <td>item[2]</td>
                                    <td>item[3]</td>
                                
                                </tr>
                            )))}

                        </table>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Viewreport