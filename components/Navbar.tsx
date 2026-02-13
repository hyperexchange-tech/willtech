'use client';
import { MenuIcon, XIcon } from 'lucide-react';
import { PrimaryButton } from './Buttons';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/#' },
        { name: 'About', href: '/#about' },
        { name: 'Services', href: '/services' },
        { name: 'FAQ', href: '/#faq' },
    ];

    return (
        <motion.nav className='fixed top-0 left-0 right-0 z-50 px-0'
            initial={{ y: -140, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
        >
            <div className='w-full flex items-center justify-between bg-white/80 backdrop-blur-md border border-orange-200/60 p-3 shadow-sm'>
                <a href='/#'>
                    <span className="text-2xl md:text-3xl font-bold text-[#F37335]">WillTechs LTD</span>
                </a>

                <div className='hidden md:flex items-center gap-8 text-base md:text-lg font-medium text-gray-700'>
                    {navLinks.map((link) => (
                        <a href={link.href} key={link.name} className="hover:text-orange-600 transition">
                            {link.name}
                        </a>
                    ))}
                </div>

                <div className='hidden md:flex items-center gap-3'>
                    <PrimaryButton className='max-sm:text-xs hidden sm:inline-block'>Get Started</PrimaryButton>
                </div>

                <button onClick={() => setIsOpen(!isOpen)} className='md:hidden'>
                    <MenuIcon className='size-6' />
                </button>
            </div>
            <div className={`flex flex-col items-center justify-center gap-6 text-xl md:text-2xl font-medium fixed inset-0 bg-white/95 backdrop-blur-md z-60 transition-all duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                {navLinks.map((link) => (
                    <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-gray-800 hover:text-orange-600">
                        {link.name}
                    </a>
                ))}

                <PrimaryButton onClick={() => setIsOpen(false)}>Get Started</PrimaryButton>

                <button
                    onClick={() => setIsOpen(false)}
                    className="rounded-md bg-white p-2 text-gray-800 ring-white active:ring-2"
                >
                    <XIcon />
                </button>
            </div>
        </motion.nav>
    );
};
