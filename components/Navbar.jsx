'use client'

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import '../style/style.css'
import { usePathname } from 'next/navigation'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



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
        <div className={`py-2 border-b ${(pathname !== '/' ) ? 'border-b ':'border-b-gray-500'}  text-white opacity-90 flex items-center justify-between px-8`}>
            <div className='flex justify-center items-center gap-4'>
                <Link href='/'>
                    <Image src={`${pathname === '/about' | '/apartment' ? '/logo.jpeg' : '/logo.jpeg'}`} height={90} width={90} alt='Homies' />
                </Link>
                {/* <Link href='/'>
                    <Image src="/insta.jpeg" height={30} width={30} alt='Instagram' />
                </Link>
                <Link href='/' className=''>
                    <Image src="/facebook.png" height={30} width={30} alt='facebook' />
                </Link> */}
            </div>
            {/* <div className="text-md flex justify-around items-center border-2 p-1 ml-20  rounded-full font-semibold w-1/3 hover:shadow-lg cursor-pointer">
                    <div className='mx-2'> Anywhere </div>
                    <div className='mx-2 border-l border-gray-300 '> <span className='mx-4'>Any week</span> </div>
                    <div className='mx-2 border-l border-gray-300'> <span className='mx-4'>Add guests</span></div>
                    <div className=' bg-orange-500 rounded-full   flex justify-around items-center'>
                        <SearchIcon className=' text-white scale-75' />
                    </div>
                </div> */}
            <div className='hidden lg:flex' >
                <ul className={`ml-4 ${(pathname ===  '/about' ) &&  'text-black'} ${(pathname ===  '/apartment' ) &&  'text-black'}  flex items-center justify-between gap-8  `}>
                    <li ><Link href='/about' className={` relative border_transition  ${pathname === '/about' && 'text-orange-400'}`}>About Us</Link></li>
                    <li ><Link href='/apartment' className={`relative border_transition  ${pathname === '/apartment' && 'text-orange-400'}`}>Apartments</Link></li>
                    <div className={`mx-4 font-light hover:shadow-lg flex justify-between items-center border ${pathname === '/about'  ? 'border-gray-300' :'border-gray-300'}  rounded-full  cursor-pointer `}>
                    <Button className=' hove' variant="" size='large' sx={{}}
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                        <MenuIcon className='mx-2   ' />
                        <AccountCircleIcon className='mx-2 scale-125 -mt-1' />
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
                            <MenuItem onClick={handleClose}><Link href='/signup'>SignUp</Link></MenuItem>
                            <MenuItem onClick={handleClose}><Link href='/login'>Login</Link></MenuItem>
                            {/* <MenuItem onClick={handleClose}><Link href='/about'>About Us</Link></MenuItem> */}
                        </Menu>
                        
                    </div>
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
                        
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-8 h-8 ${((pathname==='/about') || (pathname==='/apartment')) ?   'text-black' :'text-white'} `}>
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
                            <MenuItem onClick={handleClose}><Link href='/signup'>SignUp</Link></MenuItem>
                        </Menu>
                    </div>
        </div>
    )
}

export default Navbar
