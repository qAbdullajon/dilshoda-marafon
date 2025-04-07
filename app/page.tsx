'use client'

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function Page() {
    const router = useRouter()
    const [form, setForm] = useState({
        name: "",
        phone: "998",
        plan: "premium",
    });
    const [errors, setErrors] = useState({
        name: "",
        phone: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newErrors = { name: "", phone: "" };

        if (form.name.trim().length < 4) {
            newErrors.name = "Iltimos ism familyangizni yozing!";
        }

        const phoneRegex = /^[0-9]{9,12}$/;
        if (!phoneRegex.test(form.phone)) {
            newErrors.phone = "Quydagicha bo&apos;lishi kerak m: 998901234567";
        }

        setErrors(newErrors);

        if (newErrors.name === "" && newErrors.phone === "") {
            router.push(`/tolov?name=${form.name}&phone=${form.phone}&plan=${form.plan}`)
        }
    };

    return (
        <div className='flex justify-center w-full min-h-screen'>
            <div className='w-full max-w-[450px] my-4 mx-3'>
                <p className='text-[28px] font-medium uppercase text-center'><span className='text-gradient'>Kursda ishtirok</span> etish <span className='text-gradient'>uchun</span> maxsus taklif</p>
                <div className="bg-white rounded-[15px] mt-2 overflow-hidden">
                    <div className="mx-auto p-4 pt-6 border-b border-gray-400">
                        <div className="relative mx-0 sm:mx-8">
                            <div className="absolute top-3 left-[5%] right-0 h-[8px] w-[90%] bg-[#BCBCBC] z-0">
                                <div className='bg-[#069957] w-1/4 h-full'></div>
                            </div>
                            <div className="flex justify-between relative z-10">
                                <div className="flex flex-col items-start">
                                    <div className="w-8 h-8 rounded-full bg-[#069957] text-white flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
                                    </div>
                                    <p className="mt-2 text-sm text-center text-[#241d1d]">Ma&apos;lumot <br /> kiritish</p>
                                </div>

                                <div className="flex flex-col items-center">
                                    <div className="w-8 h-8 rounded-full bg-gray-300 text-black flex items-center justify-center">
                                        <div className='w-[18px] h-[18px] bg-white rounded-full'></div>
                                    </div>
                                    <p className="mt-2 text-sm text-center text-[#241d1d]">Sovg&apos;ani <br /> olish</p>
                                </div>

                                <div className="flex flex-col items-end">
                                    <div className="w-8 h-8 rounded-full bg-gray-300 text-black flex items-center justify-center">
                                        <div className='w-[18px] h-[18px] bg-white rounded-full'></div>
                                    </div>
                                    <p className="mt-2 text-sm text-center text-[#241d1d]">Yakunlash</p>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="px-4 py-2 text-black text-lg">
                        <p className='text-xl font-semibold py-2 rounded-[8px] bg-black text-center'><span className='text-gradient'>SUPER RUS TILI 40 KUNDA</span></p>
                        <p className='text-center text-xl pt-1'><b>Start:</b> 12-may</p>
                        <p className='text-center text-[17px] sm:text-xl font-bold pt-2'>2025-YIL <span className='text-[#317F5E]'>DILSHODA KURBONOVA</span> BILAN RUS TILIDA ERKIN MULOQOT QILISH DARAJASIGA KURATORLAR NAZORATIDA CHIQASIZ</p>
                        <p className='text-center text-sm pb-5 pt-2'>Hoziroq formani to\’ldiring va bonuslarni qo\’lga kiriting!</p>

                        <form
                            onSubmit={handleSubmit}
                            className="max-w-md mx-auto bg-white rounded-2xl shadow-xl space-y-4"
                        >
                            <label className="font-semibold">Ism familyangiz:</label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                className="w-full border rounded-[4px] p-2"
                                required
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

                            <label className="font-semibold">Telefon raqamingiz:</label>
                            <input
                                type="tel"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                className="w-full border rounded-[4px] p-2"
                                required
                            />
                            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

                            <label className="font-semibold">Tarifni tanlang:</label>
                            <select
                                name="plan"
                                value={form.plan}
                                onChange={handleChange}
                                className="w-full border rounded-[4px] p-2"
                            >
                                <option value="standard">Standard - 1,100,000</option>
                                <option value="premium">Premium - 1,300,000</option>
                                <option value="vip">Vip - 3,000,000</option>
                            </select>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-[#39FC79] to-[#05B7FF] cursor-pointer hover:opacity-80 uppercase text-black text-base font-semibold py-2 rounded-[6px] transition"
                            >
                                Davom etish
                            </button>
                        </form>

                    </div>
                </div>

            </div>
        </div>
    )
}
