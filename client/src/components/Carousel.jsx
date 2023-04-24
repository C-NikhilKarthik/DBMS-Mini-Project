import React, { useEffect, useState } from 'react';
import { AnimatePresence, easeInOut, motion } from 'framer-motion'
import { FaTape } from 'react-icons/fa';
import { BsHouseFill, BsArrowRightCircle, BsArrowLeftCircle } from 'react-icons/bs';
import { HiTruck } from 'react-icons/hi';
import { IoWifi } from 'react-icons/io5';
import { FcViewDetails } from 'react-icons/fc';

const variants = {
  initial: direction => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      // scale: 0.5,
    }
  },
  animate: {
    x: 0,
    opacity: 1,
    // scale: 1,
    // transition: 'ease-in',
    transition: {
      x: { type: 'spring', stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    },
  },
  exit: direction => {
    return {
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      // scale: 0.5,
      // transition: 'ease-in',
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
        
      },
    }
  },
  // initial:{
  //   x:200,
  //   opacity:0
  // },
  // animate:{
  //   x:0,
  //   opacity:1
  // },
  // exit:{
  //   x:-200,
  //   opacity:0
  // }
}

const Carousel = ({ img }) => {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  function nextStep() {
    setDirection(1)
    if (index === img.length - 1) {
      setIndex(0)
      return
    }
    setIndex(index + 1)
  }

  function prevStep() {
    setDirection(-1)
    if (index === 0) {
      setIndex(img.length - 1)
      return
    }
    setIndex(index - 1)
  }

  useEffect(() => {
    const timer = setTimeout(nextStep, 5000); // Change slide after 5 seconds

    // Clean up the timer on component unmount
    return () => {
      clearTimeout(timer);
    };
  }, [index]); 

  return (
    <div className='h-screen md:h-[75vh] justify-center w-full relative flex items-center'>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          variants={variants}
          animate='animate'
          initial='initial'
          exit='exit'
          src={img[index].image}
          key={img[index].id}
          custom={direction} 
          className='h-full absolute top-0 left-0 w-full object-cover' 
          alt='main logo' />
        <div className='absolute p-10 w-[90%] md:max-w-[75%] lg:max-w-[50%] xl:max-w-[40%] bg-[#D9D9D9] bg-opacity-10 backdrop-blur-md rounded-md md:right-10'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='flex relative flex-col gap-4 h-full w-full z-[5] shadow-[4.0px_-6.0px_8.0px_rgba(0,0,0,0.38)] bg-[#D4D4D4] p-3 rounded'
          >

            <p className='font-semibold text-lg'>{img[index].topic}</p>
            <p className='text-[#565656] text-sm'>Charming 3-bedroom, 2-bathroom home in the heart of a quiet
              neighbourhood. This property has been lovingly maintained and
              updated throughout the years.</p>
            <div className="flex w-full flex-wrap gap-2">
              <div className="p-2 w-fit bg-white items-center rounded flex gap-2">
                <FaTape />
                <div className='text-xs font-semibold'>3000 Sq Ft.</div>
              </div>
              <div className="p-2 w-fit bg-white items-center rounded flex gap-2">
                <BsHouseFill />
                <div className='text-xs font-semibold'>3000 Sq Ft.</div>
              </div>
              <div className="p-2 w-fit bg-white items-center rounded flex gap-2">
                <HiTruck />
                <div className='text-xs font-semibold'>Garbage</div>
              </div>
              <div className="p-2 w-fit bg-white items-center rounded flex gap-2">
                <IoWifi />
                <div className='text-xs font-semibold'>Wifi Connection</div>
              </div>
            </div>
            <div className='w-full h-[1px] rounded bg-[#656565]'></div>
            <div className="flex gap-4">
              <div className="rounded shadow bg-yellow-400 p-2">₹ 14,891</div>
              <button className="p-2 flex items-center gap-2 shadow rounded bg-slate-300">
                <FcViewDetails className="text-lg text-slate-500" />
                <div className="text-slate-600">Details</div>
              </button>
            </div>
            <div className="flex gap-2 absolute z-[2] translate-y-[-100%] h-10 top-0 right-0">
              <button onClick={prevStep}
                className="h-full aspect-square flex items-center cursor-pointer justify-center bg-[#3181CB] bg-opacity-[83%]">
                <BsArrowLeftCircle className="text-2xl text-white" />
              </button>
              <button onClick={nextStep}
                className="h-full aspect-square flex items-center justify-center cursor-pointer bg-[#3181CB] bg-opacity-[83%]">
                <BsArrowRightCircle className="text-2xl text-white" />
              </button>
            </div>
          </motion.div>
        </div>
      </AnimatePresence>
    </div>
  )
}

export default Carousel