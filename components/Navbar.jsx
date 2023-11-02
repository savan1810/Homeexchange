'use client'

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import '../style/style.css'
import { usePathname } from 'next/navigation'



const Navbar = () => {
    const pathname = usePathname()


    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className={`py-4 flex items-center justify-between px-8 ${pathname === '/about' && 'bg-[#F5F7F8]'}`}>
            <div className='flex justify-center items-center gap-4'>
                <Link href='/'>
                    <Image src={`${pathname === '/about' | '/apartment' ? '/logo.png' : '/logo.jpeg'}`} height={90} width={90} alt='Homies' />
                </Link>
                <Link href='/'>
                    <Image src="/insta.jpeg" height={30} width={30} alt='Instagram' />
                </Link>
                <Link href='/' className=''>
                    <Image src="/facebook.png" height={30} width={30} alt='facebook' />
                </Link>
            </div>
            <div className='hidden lg:flex border-b-2 border-black' >
                <ul className='text-lg ml-4 font-medium flex items-center justify-between gap-8  '>
                    <li ><Link href='/about' className={`relative hover:text-red-500 ${pathname === '/about' && 'text-orange-400'}`}>About Us</Link></li>
                    <li ><Link href='/apartment' className={`relative hover:text-red-500 ${pathname === '/apartment' && 'text-orange-400'}`}>Apartments</Link></li>
                    <li ><Link href='/login' className={`relative hover:text-red-500 ${pathname === '/login' && 'text-orange-400'}`}>Login</Link></li>
                    
                </ul>
            </div>
            <div className='lg:hidden  block'>
                        <Button className=' ' variant="" size='large' sx={{}}
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>



                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}><Link href='/about'>About Us</Link></MenuItem>
                            <MenuItem onClick={handleClose}><Link href='/apartment'>Apartments</Link></MenuItem>
                            <MenuItem onClick={handleClose}><Link href='/login'>Login</Link></MenuItem>
                        </Menu>
                    </div>
        </div>
    )
}

export default Navbar
