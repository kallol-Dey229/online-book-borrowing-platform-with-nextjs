'use client';
import React from 'react';
import twitter from '@/assets/twitter.png';
import facebook from '@/assets/facebook.png';
import instagram from '@/assets/instagram.png';
import Image from 'next/image';


const Footer = () => {
    return (
        <div className='bg-amber-950 text-white px-5 md:px-30 lg:px-65 text-center py-10 md:py-20 mt-20 space-y-6'>
            <h2 className='text-5xl'>Online <span className='font-bold'>Book Borrowing</span> Platform</h2>
            <p>This Application allows users to browse a wide collection of books, search by title, and borrow books digitally. It provides a simple and user-friendly interface where users can manage their borrowed books, view details, and explore new arrivals. The platform aims to make reading more accessible by bringing library services online.</p>
            <p className='font-bold'>Social Links</p>
            <ul className='flex gap-3 items-center justify-center'>
                <li><a href="https://twitter.com"><Image src={twitter} alt="Twitter" width={30} height={30} /></a></li>
                <li><a href="https://facebook.com"><Image src={facebook} alt="Facebook" width={30} height={30} /></a></li>
                <li><a href="https://instagram.com"><Image src={instagram} alt="Instagram" width={30} height={30} /></a></li>
            </ul>

            <hr className=" text-gray-500 opacity-50 mt-10 "/>

            <div className='flex justify-between mt-10 items-center'>
                <p className='text-[12px] md:text-sm'>&copy; 2026 KeenKeeper. All rights reserved.</p>
                <ul className='text-gray-400 flex gap-4 justify-center mt-2 text-[12px] md:text-sm'>
                    <li><a href="">Privacy Policy</a></li>
                    <li><a href="">Terms of Service</a></li>
                    <li><a href="">Cookies</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;