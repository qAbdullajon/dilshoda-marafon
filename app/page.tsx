"use client";

import Image from "next/image";
import React, { useState } from "react";
import ImageAuth from "../public/auther.png";
import ImageSovga from "../public/sovga5.jpg"
import "react-phone-input-2/lib/bootstrap.css";
import PhoneInput from "react-phone-input-2";
import { useRouter } from "next/navigation";

export default function Register() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false)
  const navigate = useRouter();

  const openModal = () => {
    setIsOpen(true)
  };

  const closeModal = () => setIsOpen(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let formIsValid = true;
    const newErrors = { name: "", phone: "" };

    if (!form.name.trim()) {
      newErrors.name = "Iltimos, ismingizni kiriting";
      formIsValid = false;
    } else if (form.name.length < 4) {
      newErrors.name = "Ism kamida 4 ta belgidan iborat bo‘lishi kerak";
      formIsValid = false;
    }

    if (!form.phone || form.phone.length <= 11) {
      newErrors.phone = "Iltimos, to'liq telefon raqamingizni kiriting.";
      formIsValid = false;
    }

    setErrors(newErrors);

    if (formIsValid) {
      console.log("Yuborilmoqda:", form);
      try {
        setLoading(true)
        const req = await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/api/register`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form)
        })
        const res = await req.json()
        console.log(res);

      } catch (error) {
        console.log(error);
      }
      finally {
        navigate.push("/subscription");
        setLoading(false)
      }

    }
  }

  return (
    <>
      <div className="min-h-screen text-black pt-5">
        <div className="flex items-center w-[95%] md:w-[90%] mx-auto">
          <div>
            <div className="">
              <div className="text-sm md:text-xl font-bold border border-[#167D3A] text-center py-2 md:py-3 rounded-lg max-w-[285px] md:max-w-[400px] mx-auto md:mx-0">
                <span>23-24-25-Aprel | Soat 20:00 da</span>
              </div>
            </div>
            <p className="text-[13px] py-3 text-center md:text-start">Dilshoda Kurbonovadan 3-kunlik BEPUL Marafon</p>

            <p className="text-lg text-center md:text-[36px] font-semibold md:pt-[30px] md:text-start">
              Qanday qilib 3 kun ichida Super Rus tili metodi orqali erkin muloqotga chiqish mumkin?
            </p>

            <Image
              src={ImageAuth}
              className="md:hidden w-[70%] max-w-[350px] mx-auto mt-6"
              priority
              alt="ImageAuth"
            />

            <div className="flex items-center flex-col -translate-y-10 gap-2 md:hidden">
              <button
                onClick={openModal}
                className="uppercase text-white cursor-pointer font-semibold text-xl bg-[#167D3A] shadow-xl shadow-[#9a9797] rounded-full w-full max-w-[320px] py-6"
              >
                Ishtirok etish
              </button>
            </div>

            <p className="flex items-center justify-between text- md:text-xl pb-5 px-2 max-w-[400px] mx-auto md:mx-0">
              <span>Marafon narxi</span>
              <span>
                <span className="line-through">300.000 so&apos;m</span>
                <span className="text-[#167D3A] font-semibold uppercase ml-2">Bepul</span>
              </span>
            </p>

            <div className="md:w-[521px] px-2">
              <p className="text-center text-lg font-semibold pb-2">Marafonda siz:</p>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-[#167D3A] rounded-full min-w-6 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-icon text-white lucide-check"><path d="M20 6 9 17l-5-5" /></svg>
                </div>
                <p className="text-sm">
                  Qanday qilib 25 daqiqada 65 ta so&apos;zni eslab qolish mumkin
                </p>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-[#167D3A] rounded-full min-w-6 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-icon text-white lucide-check"><path d="M20 6 9 17l-5-5" /></svg>
                </div>
                <p className="text-sm">
                  Qanday qilib yodlagan so&apos;z va qoidalarizni muloqotda ishlatish 7 ta sirli usuli
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-[#167D3A] rounded-full min-w-6 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-icon text-white lucide-check"><path d="M20 6 9 17l-5-5" /></svg>
                </div>
                <p className="text-sm">
                  Qanday qilib rus tilida erkin gapirishiz metodini ko&apos;rib chiqamiz
                </p>
              </div>
            </div>

            <div className="flex items-center flex-col gap-5 pt-5 md:flex-row">
              <p className="flex items-center md:order-2 gap-2 text-lg font-medium max-w-[420px] leading-5">
                <Image src={ImageSovga} alt="as" width={50} />
                <span>Rus tili eng ko&apos;p ishlatiladigan 1000 ta iboralar ro&apos;yxati</span>
              </p>
              <button
                onClick={openModal}
                className="uppercase text-white cursor-pointer font-semibold text-xl bg-[#167D3A] shadow-xl shadow-[#9a9797] rounded-full w-full max-w-[320px] py-6"
              >
                Ishtirok etish
              </button>
            </div>
          </div>

          <Image
            src={ImageAuth}
            className="w-[502px] lg:w-[440px] xl:w-[502px] object-cover h-[630px] hidden lg:inline"
            alt="ImageAuth priority"
            priority
          />
        </div>

        <div className="max-w-[560px] w-full mx-auto px-2">
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
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white px-4 py-4 md::px-[45px] md:py-10 w-[560px]"
            onClick={(e) => e.stopPropagation()} // modal ichida bosganda yopilmasligi uchun
          >
            <p className="text-xl font-semibold mb-[11px] text-center">
              Online marafonda ishtirok etish uchun quyidagi formani to&apos;ldiring!
            </p>
            <form
              onSubmit={handleSubmit}
              className="max-w-md mx-auto bg-white rounded-2xl shadow-xl space-y-4"
            >
              <label className="text-xl font-light">Ism familyangiz:</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full border border-[#c9c9c9] rounded-[4px] px-5 h-[60px] focus:border-[#c9c9c9] outline-none"
                required
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}

              <label className="text-xl font-light">Telefon raqamingiz:</label>
              <PhoneInput
                country={"uz"}
                value={form.phone}
                onChange={(value) =>
                  setForm((prev) => ({
                    ...prev,
                    phone: value,
                  }))
                }
                inputStyle={{
                  boxShadow: "none",
                  border: "1px solid #c9c9c9",
                  color: "black",
                  borderRadius: "4px",
                  width: "100%",
                  height: "60px",
                  paddingLeft: "58px",
                }}
                buttonStyle={{
                  border: "none",
                  borderRadius: "4px",
                }}
                placeholder="Telefon raqamingizni kiriting"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
              <button
                type="submit"
                className="w-full text-base font-bold uppercase py-3 cursor-pointer bg-[#167D3A] text-white rounded"
              >
                {
                  loading ? (
                    <div className="mx-auto w-fit animate-spin">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-loader-circle-icon lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56" /></svg>
                    </div>
                  ) : "Yuborish"
                }
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
