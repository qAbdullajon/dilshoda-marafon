"use client";

import Image from "next/image";
import React from "react";
import ImageAuth from "../../public/aauther3.png";
import ImageSovga from "../../public/sovga5.jpg"
import "react-phone-input-2/lib/bootstrap.css";
import { useRouter } from "next/navigation";

export default function Register() {
  const navigate = useRouter();

  const openModal = () => {
    navigate.push("https://t.me/dilshodakurbonova_marafon");
  };

  return (
    <div className="min-h-screen text-black">
      <div className="flex items-center w-[95%] md:w-[90%] mx-auto">
        <div>
          <div className="flex items-center justify-center md:justify-start gap-[14px] mt-2">
            <div className="flex items-center gap-2 border text-sm border-black rounded-[100px] px-2 py-2 md:px-7 md:py-2 md:text-lg w-fit">
              <span>23-24-25-aprel | 20:00 UZB</span>
            </div>
            <div>
              <p className="text-[10px] md:text-base font-medium">Dilshoda Kurbonova</p>
              <p className="text-[10px] md:text-base text-[#167D3A]">Bepul Marafon</p>
            </div>
          </div>

          <p className="text-xl text-center md:text-[36px] font-semibold pt-5 md:pt-[30px] md:text-start">
          Qanday qilib 3 kunda so'z boyligingizni oshirib, <span className="underline">Rus tilida qo'rqmasdan gapirish</span> mumkin
          </p>

          <Image
            src={ImageAuth}
            className="md:hidden"
            priority
            alt="ImageAuth"
          />

          <div className="flex items-center flex-col -translate-y-4 gap-2 md:hidden">
            <button
              onClick={openModal}
              className="uppercase text-white cursor-pointer font-semibold text-xl bg-[#167D3A] rounded-[25px] px-20 py-6"
            >
              Ishtirok etish
            </button>
          </div>

          <p className="flex items-center justify-between text-lg md:text-xl py-5 max-w-[400px] mx-auto md:mx-0">
            <span>Marafon narxi</span>
            <span>
              <span className="line-through">300.000 so'm</span>
              <span className="text-[#167D3A] font-semibold uppercase ml-2">Bepul</span>
            </span>
          </p>

          <div className="md:w-[521px]">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 bg-[#167D3A] rounded-full min-w-6 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-icon text-white lucide-check"><path d="M20 6 9 17l-5-5" /></svg>
              </div>
              <p className="text-base">
                Qanday qilib 25 daqiqada 65 ta so'zni eslab qolish mumkin
              </p>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 bg-[#167D3A] rounded-full min-w-6 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-icon text-white lucide-check"><path d="M20 6 9 17l-5-5" /></svg>
              </div>
              <p className="text-base">
                Qanday qilib yodlagan so'z va qoidalarizni muloqotda ishlatish 7 ta sirli usuli
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-[#167D3A] rounded-full min-w-6 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-icon text-white lucide-check"><path d="M20 6 9 17l-5-5" /></svg>
              </div>
              <p className="text-base">
                Qanday qilib rus tilida erkin gapirishiz metodini ko'rib chiqamiz
              </p>
            </div>
          </div>

          <div className="flex items-center flex-col gap-5 pt-5 md:flex-row">
            <p className="flex items-center gap-2 text-lg font-medium max-w-[420px] leading-5">
              <Image src={ImageSovga} alt="as" width={50} />
              <span>Rus tili eng ko'p ishlatiladigan 1000 ta iboralar ro'yxati</span>
            </p>
            <button
              onClick={openModal}
              className="uppercase text-white cursor-pointer font-semibold text-xl bg-[#167D3A] rounded-[25px] px-20 py-6"
            >
              Ishtirok etish
            </button>
          </div>
        </div>

        <Image
          src={ImageAuth}
          className="w-[502px] lg:w-[440px] xl:w-[502px] object-cover h-[630px] hidden lg:inline"
          alt="ImageAuth priority"
        />
      </div>

      <div className="max-w-[560px] w-full mx-auto">
        <div className="flex flex-col items-center mt-10">
          <p className="font-bold text-[22px]">Dilshoda Kurbonova</p>
          <a className="text-xl font-medium" href="tel:+998917893555">+998 91 789 35 55</a>
          <p className="pt-10 text-lg">Barcha huquqlar himoyalangan, 2025.</p>
          <p className="pt-[14px] text-base md:text-lg text-center">
            (STIR: 632157672) 28.07.2023 yil berilgan № 0003994396-sonli ma'lumotnomaga asosan xizmat ko'rsatadi.
          </p>
          <p className="pt-[14px] text-base md:text-lg text-center">
            This site or product is not part of or endorsed by Facebook, Google, or any social media platform in any way
          </p>
          <p className="pt-[14px] pb-7 text-base md:text-lg text-center">
            FACEBOOK is a trademark of META PLATFORMS, Inc. YOUTUBE and GOOGLE are trademarks of ALPHABET, Inc.
          </p>
        </div>
      </div>
    </div>
  );
}
