import React from 'react'

export default function Subscription() {
    return (
        <div className='w-full min-h-screen bg-[#0B0B0B] text-white flex flex-col items-center justify-center'>
            <div className='w-[84px] h-[84px] bg-[#8C690A] rounded-[20px] relative flex items-center justify-center'>
                <div className='text-[50px] font-bold absolute z-10 bg-[#E3A90A] text-center w-[70px] h-[70px] rounded-[20px] flex items-center justify-center'>
                    !
                </div>
            </div>
            <p className='text-center text-[35px] font-bold mt-6'>TO&apos;XTANG! <br /> YANA BIR QADAM...</p>
            <p className='text-center text-[19px] mt-6 mb-14'>Jonli efirda qatnashish uchun quyidagi <br /> sariq tugmani bosib yopiq kanalga <br /> qo&apos;shiling</p>
            <button className="bg-[#E3A90A] text-lg px-16 py-6 cursor-pointer rounded-2xl shadow-2xl shadow-[#e8c259]">
                KANALGA OBUNA BO&apos;LISH
            </button>
        </div>
    )
}
