import React from 'react'
import { BsWatch } from 'react-icons/bs'
import InputField from './InputField'

const inputs = [
  {
    id: 1,
    text: 'Property Type',
    type: 'text'
  },
  {
    id: 2,
    text: 'Location',
    type: 'text'
  },
  {
    id: 3,
    text: 'Bedrooms',
    type: 'text'
  },
  {
    id: 4,
    text: 'Bathrooms',
    type: 'text'
  },
  {
    id: 5,
    text: 'Square Ft.',
    type: 'text'
  },
  {
    id: 6,
    text: 'Price',
    type: 'text'
  }
]
function Selections() {
  return (
    <div className='min-h-[25vh] h-full md:flex grid grid-rows-[auto_auto] overflow-hidden border-b-[1px] border-[#838383] relative w-full bg-slate-200'>
      <div className='flex py-4 md:w-fit items-center gap-6 bg-[#D9D9D9] box pl-20 pr-8 rounded-md justify-center'>
        <BsWatch className='text-3xl' />
        <div className='text-xl flex flex-col'>
          <p>Rent</p>
          <p>Any</p>
          <p>Sale</p>
        </div>
      </div>
      <div className='flex flex-col p-4 gap-4 w-full items-center justify-center'>
        <div className='grid xl:grid-cols-6 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4'>
          {inputs.map((input) => (<InputField text={input.text} key={input.id} type={input.type} />))}
        </div>
        <div className='flex justify-end w-full'>
          <button type="button" className="rounded shadow bg-yellow-400 py-2 px-5">Search</button>
        </div>
      </div>
    </div>
  )
}

export default Selections