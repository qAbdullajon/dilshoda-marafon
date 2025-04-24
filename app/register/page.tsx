'use client'

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

export default function Page() {
  const router = useRouter()
  const [form, setForm] = useState({
    name: "",
    phone: "",
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
      newErrors.phone = "Quydagicha bo'lishi kerak m: 998901234567";
    }

    setErrors(newErrors);

    if (newErrors.name === "" && newErrors.phone === "") {
      router.push(`/tolov?name=${form.name}&phone=${form.phone}&plan=${form.plan}`)
    }
  };

  return (
    <div className='flex justify-center w-full min-h-screen bg-[#171717]'>
      <div className='w-full max-w-[450px] my-4 mx-1 mb-8'>
        <p className='text-[22px] min-[450px]:text-[28px] font-medium uppercase text-center text-white'><span className='text-gradient'>Kursda ishtirok</span> etish <br /> <span className='text-gradient'>uchun</span> maxsus taklif</p>
        <div className="bg-white rounded-[15px] mt-2 overflow-hidden">
          <div className="mx-auto p-4 pt-6 border-b border-[#BCBCBC]">
            <div className="relative mx-0 sm:mx-8">
              <div className="absolute top-3 left-[6%] right-0 h-[8px] w-[88%] bg-gray-200 z-0">
                <div className='bg-[#069957] w-1/4 h-full'></div>
              </div>
              <div className="flex justify-between relative z-10 px-4">
                <div className="flex flex-col items-start">
                  <div className="w-8 h-8 rounded-full bg-[#069957] text-white flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
                  </div>
                  <p className="mt-2 text-sm font-medium text-center text-[#241d1d]">Ma&apos;lumot <br /> kiritish</p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-200 text-black flex items-center justify-center">
                    <div className='w-[18px] h-[18px] bg-white rounded-full'></div>
                  </div>
                  <p className="mt-2 text-sm font-medium text-center text-[#241d1d]">Chekni <br /> kiriting</p>
                </div>

                <div className="flex flex-col items-end">
                  <div className="w-8 h-8 rounded-full bg-gray-200 text-black flex items-center justify-center">
                    <div className='w-[18px] h-[18px] bg-white rounded-full'></div>
                  </div>
                  <p className="mt-2 text-sm font-medium text-center text-[#241d1d]">Yakunlash</p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 py-3 pb-5 text-black text-lg">
            <p className='text-xl font-semibold py-2 rounded-[8px] bg-black text-center'><span className='text-gradient'>SUPER RUS TILI 40 KUNDA</span></p>
            <p className='text-center text-xl pt-1'><b>Start:</b> 12-May</p>
            <p className='text-center text-[15px] sm:text-xl font-bold pt-2'>2025-YIL <span className='text-[#317F5E]'>DILSHODA KURBONOVA</span> BILAN RUS TILIDA ERKIN MULOQOT QILISH DARAJASIGA KURATORLAR NAZORATIDA CHIQASIZ</p>
            <p className='text-center text-[12px] pb-5 pt-2'>Hoziroq formani to’ldiring va bonuslarni qo’lga kiriting!</p>

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
                className="w-full border rounded-[4px] p-2 focus:border-black outline-none"
                required
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

              <label className="font-semibold">Telefon raqamingiz:</label>
              <PhoneInput
                country={'uz'}
                value={form.phone}
                onChange={(value) =>
                  setForm((prev) => ({
                    ...prev,
                    phone: value,
                  }))
                }
                inputStyle={{
                  boxShadow: "none",
                  border: "1px solid #000",
                  color: "black",
                  borderRadius: "4px",
                  width: "100%",
                  height: "44px",
                  paddingLeft: "58px",
                }}
                buttonStyle={{
                  border: "none",
                  borderRadius: "4px",
                }}
                placeholder="Telefon raqamingizni kiriting"
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

              <label className="font-semibold">Tarifni tanlang:</label>
              <select
                name="plan"
                value={form.plan}
                onChange={handleChange}
                className="w-full border rounded-[4px] p-2 focus:border-black outline-none"
              >
                <option value="standard">Standard - 1,397,000</option>
                <option value="premium">Premium - 1,497,000</option>
                <option value="vip">Vip - 3,997,000</option>
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

        <div className="max-w-[560px] text-white w-full mx-auto px-2">
          <div className="flex flex-col items-center mt-10">
            <p className="font-bold text-[22px]">Dilshoda Kurbonova</p>
            <a className="text-xl font-medium" href="tel:+998917893555">+998 91 789 35 55</a>
            <p className="pt-10 text-base text-center">Barcha huquqlar himoyalangan, 2025.</p>
            <p className="pt-[14px] text-[12px] md:text-lg text-center">
              (STIR: 632157672) 28.07.2023 yil berilgan № 0003994396-sonli ma&apos;lumotnomaga asosan xizmat ko&apos;rsatadi.
            </p>
            <p className="pt-[14px] text-[12px] md:text-lg text-center">
              This site or product is not part of or endorsed by Facebook, Google, or any social media platform in any way
            </p>
            <p className="pt-[14px] pb-7 text-[12px] md:text-lg text-center">
              FACEBOOK is a trademark of META PLATFORMS, Inc. YOUTUBE and GOOGLE are trademarks of ALPHABET, Inc.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
