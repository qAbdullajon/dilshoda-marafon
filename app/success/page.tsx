'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import React, { Suspense } from 'react';

function SuccessContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const name = searchParams.get("name");
  const phone = searchParams.get("phone");
  const tarif = searchParams.get("plan");

  if (!name || !phone || !tarif) {
    router.push('/');
    return null;
  }

  return (
    <div className="min-h-screen flex justify-center px-3 py-4 pb-6 bg-black">
      <div className="max-w-[430px] text-white">
        <p className="text-center text-5xl">✅</p>
        <p className="text-center text-[#7F6B3C] text-2xl font-semibold pt-5">
          Xaridingiz Muvaffaqiyatli <br /> Yakunlandi
        </p>
        <p className="text-base md:text-lg pt-3">Rus tili 40 kunda 6.0 kursi 12-may kuni boshlanadi.</p>
        <p className="text-base md:text-lg py-2">Siz bilan operatorlarimiz 48 soat ichida bog&apos;lanishadi.</p>
        <p className="text-base md:text-lg">Kursda ko&apos;rishguncha.</p>
        <p className="text-base md:text-lg py-2">Hurmat ila</p>
        <p className="text-base md:text-lg pb-3">Dilshoda Qurbonova</p>
        <div className="border-2 border-white py-2 px-3">
          <p className="text-3xl text-center text-[#7F6B3C]">Chek Tasdiqlandi</p>
          <div className="h-[1px] bg-white my-2"></div>
          <p className="text-base md:text-lg">Kurs: Rus tili 40 kunda 6.0</p>
          <p className="text-base md:text-lg">Ism: {name}</p>
          <p className="text-base md:text-lg">Telefon: {phone}</p>
          <p className="text-base md:text-lg capitalize">Tarif: {tarif}</p>
          <button 
            onClick={() => router.push('https://t.me//dilshoda_kurbonova')} 
            className="mt-2 p-1 uppercase cursor-pointer yakun bg-transparent border border-white rounded-none w-full hover:bg-white hover:text-black transition-colors"
          >
            ADMINGA O&apos;TISH
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Success() {
  return (
    <Suspense fallback={
      <div className="h-screen flex items-center justify-center bg-black text-white">
        <p>Yuklanmoqda...</p>
      </div>
    }>
      <SuccessContent />
    </Suspense>
  );
}