import React from 'react'
import Navbar from '../components/Navbar'
import InputField from '../components/InputField'
import {useState,useEffect} from 'react'

function Stafflisting() {


    const [data, setdata] = useState([]);

  
    useEffect(() => {
      const fetchstaff = async () => {
        const response = await fetch("/getStaffinfo");
        const data = await response.json();
        setdata(data);
      };
  
      fetchstaff();
    }, []);


  return (
    <div className='w-full flex items-center  pt-28 px-4 flex-col gap-8 bg-[url("https://wallpaperaccess.com/full/1126753.jpg")] h-screen bg-cover bg-scroll bg-center'>
                <Navbar />


            <div className='flex w-full h-5/6 md:w-5/6 xl:w-2/3 flex-col bg-[#08192ea0] backdrop-blur-md rounded mt-8'>
                <div className='flex p-4 pl-8 text-slate-200 border-b-[1px] border-slate-500'>Staff Listing</div>
                <div className='h-[20rem] gap-6 w-full flex flex-col'>
                    <div className="flex items-center w-full justify-between p-4 text-slate-300">
                        <div className="flex items-center gap-4">
                            <div>Enter the Branch Number </div>
                            <InputField type={"text"} placeholder={"Branch Number"} />
                        </div>

                        <button className='px-4 py-2 rounded bg-blue-400 text-slate-300'>Search</button>
                    </div>
                    <div className='px-4 pb-10'>
                        <table className='px-4 rounded border-[2px] border-slate-300 w-full text-slate-300'>
                            <tr>
                                <th>Staff Number</th>
                                <th>Name</th>
                                <th>Position</th>
                            </tr>
                            {!data ? (
                                <tr></tr>

                            ) : (data.map((item) => (
                                <tr>
                         <td>{item.staffNo}</td>
                  <td>{item.fname} {item.lname}</td>
                  <td>{item.position}</td>
                                </tr>
                            )))}

                        </table>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Stafflisting