import React from 'react'
import { GiPerson } from 'react-icons/gi'
import { HiOutlineArrowsExpand } from 'react-icons/hi'
import { IoBed } from 'react-icons/io5'

function ModalComponent({ img, title, area, room, washroom, price ,Description}) {
    return (
        <div className="sm:w-[44rem] overflow-y-auto flex text-slate-200 flex-col h-full w-full bg-slate-800 text-base">
            <img className='"w-full object-cover h-2/3 object-center border-slate-500 border-b-[1px]' src={img} />
            <div className="flex flex-col gap-4 p-6">
                <div className="text-lg font-semibold">{title}</div>
                <div className='px-2 py-3'>{Description}</div>
                <div className="flex w-full flex-wrap gap-8">
                    <div className="flex items-center gap-2">
                        <HiOutlineArrowsExpand />
                        <div className="text-xs whitespace-nowrap">{area}</div>
                    </div>
                    <div className="flex items-center gap-2">
                        <IoBed />
                        <div className="text-xs whitespace-nowrap">{washroom}</div>
                    </div>
                    <div className="flex items-center gap-2">
                        <GiPerson />
                        <div className="text-xs whitespace-nowrap">{room}</div>
                    </div>
                </div>
                <div className="rounded w-fit shadow bg-yellow-400 p-2">{price}</div>
                <input type="text" className='w-full rounded shadow p-2 bg-slate-700' placeholder='Add your Comments' />
            </div>
        </div>
    )
}

export default ModalComponent