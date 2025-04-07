'use client'
import React, { useState } from 'react'

export default function Admin() {
    const [state, setState] = useState(sessionStorage.getItem('state') || "start")
    const [form, setForm] = useState({
        login: "",
        parol: "",
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
        if(form.login === process.env.ADMIN_LOGIN && form.parol === process.env.ADMIN_PAROL) {
            setState('home')
        }
    };

    return (
        <>
            {
                state === "start" ? ("") : ("")
            }
            <div className='flex justify-center min-h-screen bg-[#171717]'>
                <div className='w-full max-w-[400px] py-8'>
                    <form
                        onSubmit={handleSubmit}
                        className="max-w-md mx-auto bg-white rounded-2xl shadow-xl space-y-4 p-4"
                    >
                        <p className='text-3xl font-semibold'>Welcome back</p>

                        <label className="font-semibold">Username</label>
                        <input
                            type="text"
                            name="login"
                            placeholder='Username'
                            value={form.login}
                            onChange={handleChange}
                            className="w-full border rounded-[4px] p-2 focus:border-black outline-none"
                            required
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

                        <label className="font-semibold">Password</label>
                        <input
                            type="text"
                            name="parol"
                            placeholder='Parol'
                            value={form.parol}
                            onChange={handleChange}
                            className="w-full border rounded-[4px] p-2 focus:border-black outline-none"
                            required
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

                        <button
                            type="submit"
                            className="w-full bg-[#62449D] cursor-pointer hover:opacity-80 uppercase text-white text-base font-semibold py-2 rounded-[6px] transition"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}
