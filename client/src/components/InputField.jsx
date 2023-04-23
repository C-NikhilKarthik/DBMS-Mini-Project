import React from 'react'

function InputField({text,type,placeholder}) {
  return (
    <div className='flex flex-col'>
        <p>{text}</p>
        <input type={type} placeholder={placeholder} className='border-[1px] border-gray-300 rounded-md p-2'/>
    </div>
  )
}

export default InputField