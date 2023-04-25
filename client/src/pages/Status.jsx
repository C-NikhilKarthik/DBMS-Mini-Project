import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import PropertyListingImg from '../assets/property-listing.jpeg';
import StaffListingImg from '../assets/stafflisting.jpg';
import reportimage from '../assets/reportimage.jpg';
import rentimage from '../assets/rent.jpg';


function Status() {
    return (
        <div className='w-full flex items-center py-28 px-4 flex-col gap-8 bg-slate-100  bg-cover bg-scroll bg-center'>
            <Navbar />

            <div className='flex flex-col items-center justify-center bg-black bg-opacity-25 rounded-lg p-4 mt-4 w-4/5 shadow-xl'>
                <div className='flex flex-col items-center'>
                    <img src={PropertyListingImg} alt='Property Listing' className='w-96 h-auto rounded-xl' />
                    <h2 className='text-2xl font-bold text-white underline'>Lease Form</h2>
                </div>
                <p className='text-center text-white text-lg mt-4'>
                    Listing of available rental properties allows you to easily browse through a variety of options to find your perfect home.
                </p>
                <Link
                    to='/status/leaseform'
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg my-2'
                >
                    Check
                </Link>
            </div>
            
            <div className='flex flex-col items-center justify-center bg-black bg-opacity-25 rounded-lg p-4 mt-4 w-4/5 shadow-xl'>
                <div className='flex flex-col items-center'>
                    <img src={StaffListingImg} alt='Property Listing' className='w-96 h-auto rounded-xl' />
                    <h2 className='text-2xl font-bold text-white underline'>Staff Listing</h2>
                </div>
                <p className='text-center text-white text-lg mt-4'>
                    Easily access staff details. Help streamline your operations and keep your team on track.
                </p>
                <Link
                    to='/status/stafflisting'
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg my-2'
                >
                    Check
                </Link>
            </div>

            <div className='flex flex-col items-center justify-center bg-black bg-opacity-25 rounded-lg p-4 mt-4 w-4/5 shadow-xl'>
                <div className='flex flex-col items-center'>
                    <img src={PropertyListingImg} alt='Property Listing' className='w-96 h-auto rounded-xl' />
                    <h2 className='text-2xl font-bold text-white underline'>Property Listing</h2>
                </div>
                <p className='text-center text-white text-lg mt-4'>
                    Listing of available rental properties allows you to easily browse through a variety of options to find your perfect home.
                </p>
                <Link
                    to='/status/propertylisting'
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg my-2'
                >
                    Check
                </Link>
            </div>

            <div className='flex flex-col items-center justify-center bg-black bg-opacity-25 rounded-lg p-4 mt-4 w-4/5 shadow-xl'>
                <div className='flex flex-col items-center'>
                    <img src={reportimage} alt='Property Listing' className='w-96 h-auto rounded-xl' />
                    <h2 className='text-2xl font-bold text-white underline'>View Report</h2>
                </div>
                <p className='text-center text-white text-lg mt-4'>
                    Easily access reports submitted by clients on the properties they've visited.
                </p>
                <Link
                    to='/status/viewreport'
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg my-2'
                >
                    Check
                </Link>
            </div>

            <div className='flex flex-col items-center justify-center bg-black bg-opacity-25 rounded-lg p-4 mt-4 w-4/5 shadow-xl'>
                <div className='flex flex-col items-center'>
                    <img src={rentimage} alt='Property Listing' className='w-96 h-auto rounded-xl' />
                    <h2 className='text-2xl font-bold text-white underline'>Check Rent</h2>
                </div>
                <p className='text-center text-white text-lg mt-4'>
                    Rent viewing feature allows you to easily access the current rent of any rented property on our platform.</p>
                <Link
                    to='/status/viewrent'
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg my-2'
                >
                    Check
                </Link>
            </div>
        </div>
    );
}

export default Status;
