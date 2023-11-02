'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import '@/style/style.css'

// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});


const page = () => {

    // const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')




    // const handleLogin=async (ev)=>{
    //   try{
    //     ev.preventDefault()

    //     await axios.post(`/api/auth/login`,{email,password},{
    //       headers: {
    //           'Access-Control-Allow-Origin': '*', 
    //           'Content-Type': 'application/json'
    //       }})
    //     // console.log(token)
    //     alert('Login Successful.')
    //     setEmail('')
    //     setPassword('')
    //     navigate('/home')
    //   }
    //   catch(e){
    //     alert('Login Failed,Please enter valid credentials.')
    //   }
    // }



    return (
        <div className='z-10 flex sm:w-1/2 md:w-3/4 lg:2/3  w-3/5  justify-center items-center mx-auto back_image'>
            <div className='bg-white px-4 py-2 mx-auto rounded-2xl border shadow-2xl flex-col items-center justify-center z-10 '>
                <p className="md:text-2xl text-xl font-medium text-center  tracking-wider">Sign Up</p>
                <form className="mt-2 mx-auto flex-col justify-center items-center">
                    <div className="flex flex-wrap md:gap-10  p-4 mx-auto">
                        <div className="flex-col mx-auto gap-2" >
                            <div>
                                <label for="name" className="font-medium opacity-90  ">Name<span className="text-red-500 align-top">*</span></label><br />
                                <input type="text" id="name" className="outline-none px-3 py-2 border rounded-lg mb-2" placeholder="John" />
                            </div>
                            <div>
                                <label for="email" className="font-medium opacity-90  ">Email<span className="text-red-500 align-top">*</span></label><br />
                                <input type="email" id="email" placeholder="abc@gmail.com" className="outline-none px-3 py-2  border rounded-lg mb-2" />
                            </div>

                            <div>
                                <label for="phone" className="font-medium opacity-90  ">Phone<span className="text-red-500 align-top">*</span></label><br />
                                <input type="text" id="phone" className="outline-none px-3 py-2 border rounded-lg mb-2" placeholder="+91 1234567890" />
                            </div>
                            <div>
                                <label for="address" className="font-medium opacity-90  ">Address<span className="text-red-500 align-top">*</span></label><br />
                                <input type="text" id="address" className="outline-none px-3 py-2 border rounded-lg mb-2" placeholder="India" />
                            </div>

                        </div>
                        <div className="flex-col mx-auto gap-2" >
                            <div>
                                <label for="country" className="font-medium opacity-90  ">Country<span className="text-red-500 align-top">*</span></label><br />
                                <input type="text" id="country" className="outline-none px-3 py-2 border rounded-lg mb-2" placeholder="India" />
                            </div>
                            <div>
                                <label for="School" className="font-medium opacity-90  ">School<span className="text-red-500 align-top">*</span></label><br />
                                <input type="text" id="School" placeholder="abc" className="outline-none px-3 py-2  border rounded-lg mb-2" />
                            </div>
                            <div>
                                <label for="line" className="font-medium opacity-90  ">Line at school<span className="text-red-500 align-top">*</span></label><br />
                                <input type="text" id="line" className="outline-none px-3 py-2 border rounded-lg mb-2 text-left" placeholder="Computer Enginnering" />
                            </div>
                            <div>
                                <label for="sign" className="font-medium opacity-90  ">Signature from your school<span className="text-red-500 align-top">*</span></label><br />
                                <Button component="label" variant="outlined" className="w-full flex justify-start outline-none px-4 py-2 hover:border-gray-200 hover:bg-transparent border-gray-200 text-gray-400 rounded-lg mb-2" startIcon={<CloudUploadIcon />}>
                                    Upload file
                                    <VisuallyHiddenInput type="file" />
                                </Button>
                            </div>
                            <div>
                                <label for="imageCard" className="font-medium opacity-90  ">Image of student card<span className="text-red-500 align-top">*</span></label><br />
                                <Button component="label" variant="outlined" className="w-full  flex justify-start outline-none hover:border-gray-200 hover:bg-transparent px-4 py-2  border-gray-200 text-gray-400 rounded-lg mb-2" startIcon={<CloudUploadIcon />}>
                                    <p className=''>Upload file</p>
                                    <VisuallyHiddenInput type="file" />
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className='p-4 text-center'>
                    <button className='w-full bg-red-500 hover:bg-red-400 text-xl p-2 my-2 outline-0 text-white rounded-2xl' >Sign Up</button>
                    </div>
                    <div className='text-center  text-gray-500'>
                        <span>Already a member? </span>
                        <Link href="/login"><span className='underline  text-[#363062] md:text-xl text-lg'>Login</span></Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default page
