'use client';
import React, { useState } from 'react';
import Button from '../components/Button';

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <main className="flex items-center justify-center min-h-screen bg-black px-4 pt-20">
            <div className="w-full max-w-3xl bg-black border border-amber-50 rounded-2xl shadow-xl p-8 md:p-12">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-white">
                    Contact Us
                </h1>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6">


                    <div className="relative w-full">
                        <input
                            type="text"
                            name="name"
                            placeholder=" "
                            value={formData.name}
                            onChange={handleChange}
                            className="peer capitalize w-full border-b-2 border-gray-300 bg-transparent pt-6 pb-1 pl-2 text-2xl text-white placeholder-transparent focus:outline-none focus:border-white"
                        />
                        <label className={`absolute left-4 text-gray-400 transition-all duration-200
              ${formData.name ? 'top-0 text-white text-sm' : 'top-6 text-white text-2xl'}
              peer-focus:top-0 peer-focus:text-white peer-focus:text-sm`}
                        >
                            Name
                        </label>
                    </div>

                    <div className="relative w-full">
                        <input
                            type="email"
                            name="email"
                            placeholder=" "
                            value={formData.email}
                            onChange={handleChange}
                            className="peer w-full border-b-2 border-gray-300 bg-transparent pt-6 pb-1 pl-2 text-2xl text-white placeholder-transparent focus:outline-none focus:border-white"
                        />
                        <label className={`absolute left-4 text-gray-400 transition-all duration-200
              ${formData.email ? 'top-0 text-white text-2xl' : 'top-6 text-white text-2xl'}
              peer-focus:top-0 peer-focus:text-white peer-focus:text-sm`}
                        >
                            Email
                        </label>
                    </div>

                    <div className="relative w-full">
                        <textarea
                            name="message"
                            placeholder=" "
                            value={formData.message}
                            onChange={handleChange}
                            rows={6}
                            className="peer capitalize w-full border-b-2 border-gray-300 bg-transparent pt-6 pb-1 pl-2 text-2xl text-white placeholder-transparent focus:outline-none focus:border-white"
                        />
                        <label className={`absolute left-4 text-gray-400 transition-all duration-200
              ${formData.message ? 'top-0 text-white text-2xl' : 'top-6 text-white text-2xl'}
              peer-focus:top-0 peer-focus:text-white peer-focus:text-sm`}
                        >
                            Your Message
                        </label>
                    </div>

                    <Button
                        Text="Send Message"
                        src="#"
                        color="text-white"
                        hovercolor="hover:text-black"
                        bgcolor="bg-black"
                        bgcolorhover="hover:bg-white"
                    />
                </form>
            </div>
        </main>
    );
}
