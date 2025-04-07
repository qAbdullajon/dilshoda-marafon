'use client'

import React, { useState, useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'

export default function Admin() {
    const [state, setState] = useState('start')
    const [form, setForm] = useState({
        login: '',
        parol: '',
    })

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedState = sessionStorage.getItem('state') || 'start'
            setState(savedState)
        }
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    const notify = () => toast.error("Parol yoki login noto‘g‘ri")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (
            form.login === process.env.NEXT_PUBLIC_ADMIN_LOGIN &&
            form.parol === process.env.NEXT_PUBLIC_ADMIN_PAROL
        ) {
            setState('home')
            if (typeof window !== 'undefined') {
                sessionStorage.setItem('state', 'home')
            }
        } else {
            notify()
        }
    }

    return (
        <>
            <ToastContainer />
            {state === 'start' ? (
                <div className='flex justify-center min-h-screen bg-[#171717]'>
                    <div className='w-full max-w-[400px] py-8'>
                        <form
                            onSubmit={handleSubmit}
                            className='max-w-md mx-auto bg-white rounded-2xl shadow-xl space-y-4 p-4'
                        >
                            <p className='text-3xl font-semibold'>Welcome back</p>

                            <label className='font-semibold'>Username</label>
                            <input
                                type='text'
                                name='login'
                                placeholder='Username'
                                value={form.login}
                                onChange={handleChange}
                                className='w-full border rounded-[4px] p-2 focus:border-black outline-none'
                                required
                            />

                            <label className='font-semibold'>Password</label>
                            <input
                                type='password'
                                name='parol'
                                placeholder='Parol'
                                value={form.parol}
                                onChange={handleChange}
                                className='w-full border rounded-[4px] p-2 focus:border-black outline-none'
                                required
                            />

                            <button
                                type='submit'
                                className='w-full bg-[#62449D] cursor-pointer hover:opacity-80 uppercase text-white text-base font-semibold py-2 rounded-[6px] transition'
                            >
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            ) : (
                <div className='flex justify-center items-center min-h-screen'>
                    <a href={`${process.env.NEXT_PUBLIC_DB_URL}/api/users/download-excel`} className='flex items-center gap-2 bg-green-700 text-white p-4 rounded-2xl'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cloud-download-icon lucide-cloud-download"><path d="M12 13v8l-4-4" /><path d="m12 21 4-4" /><path d="M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284" /></svg>
                        <span>Download excel file</span>
                    </a>
                </div>
            )}
        </>
    )
}
