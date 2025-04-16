"use client";

import Image from "next/image";
import React from "react";
import ImageAuth from "../public/auther.png";
// import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { useRouter } from "next/navigation";

export default function Register() {
  // const [isOpen, setIsOpen] = useState(false);
  const navigate = useRouter()

  const openModal = () => {
    // setIsOpen(true)
    navigate.push('https://t.me/dilshodakurbonova_marafon')
  };
  // const closeModal = () => setIsOpen(false);

  // const [form, setForm] = useState({
  //   name: "",
  //   phone: "",
  // });

  // const [errors, setErrors] = useState({
  //   name: "",
  //   phone: "",
  // });

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target as HTMLInputElement;
  //   setForm({ ...form, [name]: value });
  // };

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   let formIsValid = true;
  //   const newErrors = { name: "", phone: "" };

  //   if (!form.name.trim()) {
  //     newErrors.name = "Iltimos, ismingizni kiriting";
  //     formIsValid = false;
  //   } else if (form.name.length < 5) {
  //     newErrors.name = "Ism kamida 5 ta belgidan iborat bo‘lishi kerak";
  //     formIsValid = false;
  //   }

  //   if (!form.phone || form.phone.length <= 11) {
  //     newErrors.phone = "Iltimos, to'liq telefon raqamingizni kiriting.";
  //     formIsValid = false;
  //   }

  //   setErrors(newErrors);

  //   if (formIsValid) {
  //     console.log("Yuborilmoqda:", form);
  //     try {
  //       const req = await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/api/register`, {
  //         method: 'POST',
  //         headers: { 'Content-Type': 'application/json' },
  //         body: JSON.stringify(form)
  //       })
  //       const res = await req.json()
  //       console.log(res);

  //     } catch (error) {
  //       console.log(error);
  //     }
  //     finally {
  //       // closeModal(); // Modalni yopish
  //       navigate.push("/subscription");
  //     }

  //   }
  // }
  return (
    <>
      <div className="min-h-screen text-black">
        {/* HEADER */}
        {/* <div className="header-wrapper py-4 md:py-[20px]">
          <div className="header">
            <p>23-24-25-Aprel bepul marafon</p>
            <p>23-24-25-Aprel bepul marafon</p>
            <p>23-24-25-Aprel bepul marafon</p>
            <p>23-24-25-Aprel bepul marafon</p>
            <p>23-24-25-Aprel bepul marafon</p>
            <p>23-24-25-Aprel bepul marafon</p>
            <p>23-24-25-Aprel bepul marafon</p>
          </div>
        </div> */}

        {/* MAIN */}
        <div className="flex items-center w-[95%] md:w-[90%] mx-auto">
          <div className="">
            <div className="flex items-center justify-center md:justify-start gap-[14px] mt-2">
              <div className="flex items-center gap-2 border text-sm border-black rounded-[100px] px-2 py-2 md:px-7 md:py-2 md:text-lg w-fit">
                <span>23-24-25-aprel | 20:00 UZB</span>
              </div>
              <div>
                <p className="text-[10px] md:text-base font-medium">
                  Dilshoda Kurbonova
                </p>
                <p className="text-[10px] md:text-base text-[#167D3A]">
                  Bepul Marafon
                </p>
              </div>
            </div>
            <p className="text-2xl text-center md:text-[36px] font-semibold pt-5 md:pt-[30px] md:text-start">
              Qanday qilib so&apos;z boyligini 10 varavar oshirib, yodlagan so&apos;z va
              qoidalarni muloqotda erkin ishlatish mumkin?
            </p>
            {/* <img className="md:hidden" src={Image} alt="" /> */}
            <Image
              src={ImageAuth}
              className="md:hidden"
              priority
              alt="ImageAuth"
            />
            <div className="flex items-center flex-col -translate-y-2 gap-2 md:hidden">
              <button
                onClick={openModal}
                className="uppercase text-white cursor-pointer font-semibold text-xl bg-[#167D3A] rounded-[25px] px-16 py-6"
              >
                Ishtirok etish
              </button>
              <p className="text-[40px] font-medium">BEPUL</p>
            </div>

            <p className="text-lg pt-0.5 pb-5 text-center md:text-start">
              3 kunlik marafonda siz:
            </p>

            <div className="md:w-[521px]">
              <div className="flex items-start gap-2">
                <p className="w-2 h-2 bg-[#167D3A] mt-2 min-w-2 rounded-full"></p>
                <p className="text-lg">
                  Qanday qilib 25 daqiqada 65 ta so&apos;zni eslab qolish va avtomat
                  muloqatda ishlatish mumkin
                </p>
              </div>
              <div className="flex items-start gap-2">
                <p className="w-2 h-2 bg-[#167D3A] mt-2 min-w-2 rounded-full"></p>
                <p className="text-lg">
                  Qanday qilib to&apos;g&apos;ri gap tuzish formulasnini o&apos;rganib tez va
                  oson fikringizni to&apos;liq rus tilida gapirish
                </p>
              </div>
              <div className="flex items-start gap-2">
                <p className="w-2 h-2 bg-[#167D3A] mt-2 min-w-2 rounded-full"></p>
                <p className="text-lg">
                  Qanday qilib 1.000 ta fe&apos;lni 12.000 ta qilib ishlatish;
                  РОДlarni; so&apos;zlarning oxirida ishlatiladigan qo&apos;shimchalarni
                  ko&apos;rib chiqamiz
                </p>
              </div>
            </div>

            <div className="flex items-center flex-col gap-5 pt-5 md:flex-row">
              <button
                onClick={openModal}
                className="uppercase text-white cursor-pointer font-semibold text-xl bg-[#167D3A] rounded-[25px] px-16 py-6"
              >
                Ishtirok etish
              </button>
              <p className="text-[40px] font-medium">BEPUL</p>
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
              (STIR: 632157672) 28.07.2023 yil berilgan № 0003994396-sonli ma&apos;lumotnomaga asosan xizmat ko&apos;rsatadi.
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

      {/* {isOpen && (
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
                className="w-full text-base font-bold uppercase py-3 cursor-pointer bg-[#DBA30A] text-white rounded"
              >
                Yuborish
              </button>
            </form>
          </div>
        </div>
      )} */}
    </>
  );
}
