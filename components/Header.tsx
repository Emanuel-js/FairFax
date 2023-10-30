'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className='relative flex justify-between items-center px-4 lg:px-16 py-7 w-full z-50'>
            {/* Logo */}
            <div className='flex items-center gap-8'>
                <Image src='/images/logo.svg' width={50} height={50} alt='logo' />
                <ul className='flex gap-5 hidden lg:flex '>

                    <li className='text-lg p-4 hover:text-gray-700 cursor-pointer'><Link href='/'>About</Link></li>
                    <li className='text-lg p-4 hover:text-gray-700  cursor-pointer'><Link href='/'>Services</Link></li>
                    <li className='text-lg p-4 hover:text-gray-700  cursor-pointer'><Link href='/'>Blogs</Link></li>
                    <li className='text-lg p-4 hover:text-gray-700  cursor-pointer'><Link href='/'>Contact</Link></li>
                </ul>
            </div>

            <div className='hidden lg:flex gap-8 items-center justify-between'>


                <button>Login</button>
                <button className='bg-[#262534] text-white px-20 py-3 rounded-xl'>Sign Up</button>
            </div>
            <div className='lg:hidden'>
                <button
                    className='outline-none mobile-menu-button'
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? (
                        <svg className='block h-6 w-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className='block h-6 w-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    )}
                </button>
            </div>


            <div className={`fixed inset-0 bg-gray-900 bg-opacity-50 z-40 lg:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className={`bg-[#EEF8FE] h-full transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className='flex items-center justify-between p-4'>
                        <Image src='/images/logo.svg' width={50} height={50} alt='logo' />
                        <button
                            className='outline-none'
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <svg className='h-6 w-6 text-gray-700' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <ul className='flex flex-col items-center justify-evenly h-full'>
                        <div>
                            <li className='text-lg p-4 hover:text-gray-700  cursor-pointer'><Link href='/'>About</Link></li>
                            <li className='text-lg p-4 hover:text-gray-700  cursor-pointer'><Link href='/'>Services</Link></li>
                            <li className='text-lg p-4 hover:text-gray-700  cursor-pointer'><Link href='/'>Blogs</Link></li>
                            <li className='text-lg p-4 hover:text-gray-700  cursor-pointer'><Link href='/'>Contact</Link></li>
                        </div>
                        <div>
                            <button className='w-full bg-[#fff] text-black mb-5 px-4 py-2 rounded-xl'>Login</button>
                          <button className='w-full bg-[#262534] text-white px-4 py-2 rounded-xl'>Sign Up</button>
                        </div>
                    </ul>
                </div>
            </div>



        </div>
    );
};

export default Header;
