'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

export default function Subscription() {
    const navigate = useRouter()
    return (
        <div className='w-full min-h-screen bg-[#0B0B0B] text-white flex flex-col items-center justify-center py-6'>
            <div className='w-[84px] h-[84px] bg-[#0e3e0f] rounded-[20px] relative flex items-center justify-center'>
                <div className='text-[50px] font-bold absolute z-10 bg-[#167D3A] text-center w-[70px] h-[70px] rounded-[20px] flex items-center justify-center'>
                    !
                </div>
            </div>
            <p className='text-center text-[35px] font-bold mt-6'>TO&apos;XTANG! <br /> YANA BIR QADAM...</p>
            <p className='text-center text-[19px] mt-6 mb-14'>Jonli efirda qatnashish uchun quyidagi <br /> yashil tugmani bosib yopiq kanalga <br /> qo&apos;shiling</p>
            <button onClick={() => navigate.push('https://t.me/+i-VBLX5lcDs5YjQy')} className="bg-[#167D3A] text-lg px-10 py-5 md:px-16 md:py-6 cursor-pointer rounded-2xl shadow-2xl shadow-[#167D3A]">
                KANALGA OBUNA BO&apos;LISH
            </button>
        </div>
    )
}
