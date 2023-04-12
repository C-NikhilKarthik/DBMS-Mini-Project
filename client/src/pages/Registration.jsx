import React from 'react'
import { useState } from 'react'; 
import myBackgroundImage from '../assets/registration-bg.jpg';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'
import clientIcon from '../assets/registered.png';
import NameIcon from '../assets/name.png';
import clientType from '../assets/house.png';
import money from '../assets/money.png';
import office from '../assets/office.png';
import map from '../assets/map.png';
import edit from '../assets/edit.png';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import calendarIcon from '../assets/calendar.png';

function Registration() {
  const [selectedDate, setSelectedDate] = useState(null); 

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <>
      <Navbar />
      <div
        className="bg-cover bg-center h-screen w-screen flex items-center justify-center pt-8"
        style={{ backgroundImage: `url(${myBackgroundImage})` }}
      >
        <div className='w-2/3 h-3/4 bg-black bg-opacity-20 backdrop-blur-md rounded-lg'>
          <h1 className='font-sans font-bold text-4xl text-center py-6'>Dream House Client Registration</h1>
          <div className='grid grid-cols-2 gap-10 h-80 p-4'>
            <div className='bg-white bg-opacity-20 rounded-2xl'>

              <div className="relative rounded-full border top-4">
                <input
                  type="text"
                  className="w-full px-10 py-2 rounded-full bg-transparent placeholder-black"
                  placeholder="Client Number"
                />
                <img
                  src={clientIcon}
                  alt="Client Icon"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6"
                />
              </div>

              <div className="relative rounded-full border top-8">
                <input
                  type="text"
                  className="w-full px-10 py-2 rounded-full bg-transparent placeholder-black"
                  placeholder="Name"
                />
                <img
                  src={NameIcon}
                  alt="Name Icon"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6"
                />
              </div>

              <h3 className='text-white underline  mt-10'>Property Requirements</h3>

              <div className="relative rounded-full border top-2">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <img
                    src={clientType}
                    alt="Client Icon"
                    className="h-6 w-6"
                  />
                </div>
                <select
                  className="block w-full pl-10 pr-3 py-2 rounded-full bg-transparent appearance-none placeholder-black"
                >
                  <option value="sale">Sale</option>
                  <option value="rent">Rent</option>
                </select>
              </div>


              <div className="relative rounded-full border top-6">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <img
                    src={money}
                    alt="Money Icon"
                    className="h-6 w-6"
                  />
                </div>
                <input
                  type="number"
                  className="w-full px-10 py-2 rounded-full bg-transparent placeholder-black"
                  placeholder="Max Rent"
                  pattern="[0-9]*"
                />
              </div>
            </div>

            <div className='bg-white bg-opacity-20 rounded-2xl'>
              <div className="relative rounded-full border top-4">
                <input
                  type="text"
                  className="w-full px-10 py-2 rounded-full bg-transparent placeholder-black"
                  placeholder="Branch Number"
                />
                <img
                  src={office}
                  alt="Office Icon"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6"
                />
              </div>

              <div className="relative rounded-full border top-8">
                <input
                  type="text"
                  className="w-full px-10 py-2 rounded-full bg-transparent placeholder-black"
                  placeholder="Branch Address"
                />
                <img
                  src={map}
                  alt="map Icon"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6"
                />
              </div>

              <h3 className='text-white underline  mt-12'>Registration Details</h3>

              <div className="relative rounded-full border top-2">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <img
                    src={edit}
                    alt="edit Icon"
                    className="h-6 w-6"
                  />
                </div>
                <select
                  className="block w-full pl-10 pr-3 py-2 rounded-full bg-transparent appearance-none placeholder-black"
                >
                  <option value="manager">Manager</option>
                  <option value="supervisor">Supervisor</option>
                  <option value="assistsnt">Assistant</option>
                </select>
              </div>

              <div className="relative rounded-full border top-4">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <img
                    src={calendarIcon}
                    alt="Calendar Icon"
                    className="h-6 w-6"
                  />
                </div>
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat="MM/dd/yyyy"
                  className="w-full px-10 py-2 rounded-full bg-transparent placeholder-black"
                  placeholderText="Select Date"
                />
              </div>

            </div>

          </div>
          <div className="flex justify-end p-2">
            <Link to="#" class="inline-block bg-gradient-to-br from-blue-300 to-blue-400 py-4 px-12 rounded-full text-lg text-purple-100 uppercase tracking-wide shadow-xs hover:shadow-2xl active:shadow-xl transform hover:-translate-y-1 active:translate-y-0 transition duration-200 ">
              Submit
            </Link>
          </div>
        </div>
      </div>

    </>
  )
}

export default Registration