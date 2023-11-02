import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div>
            <div className="mt-10 w-5/6 mx-auto grid gap-x-6 gap-y-8 xl:grid-cols-4  lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                <Link className='relative mx-auto' href={'/apartment'}>
                    <div className="relative  mb-2 rounded-2xl flex">
                        <img className="rounded-2xl h-[270px] w-[270px] sm:object-cover sm:aspect-square" src="https://a0.muscache.com/im/pictures/miso/Hosting-13903824/original/82d996fb-d7c4-46a8-a713-febd281cd69f.jpeg?im_w=960" alt="" />
                    </div>
                    <div className='absolute top-[2%] left-[77%] text-white bg-black bg-opacity-50 rounded-2xl py-2 px-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24 " strokeWidth={1.5} stroke="currentColor" className="w-8 h-8  ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                    </div>
                    <h2 className="font-bold">
                      Torino, Piemonte, Italy</h2>
                    <h3 className="text-sm text-gray-500">Noble room into the historical Torino</h3>
                    <h3 className="text-sm text-gray-500">2 Rooms</h3>
                    <div className="mt-1 flex items-center">
                        <span className="font-bold mr-1">$1000<span> per month</span></span>
                    </div>

                </Link>
                <Link className='relative mx-auto' href={'/apartment'}>
                    <div className="relative  mb-2 rounded-2xl flex">
                        <img className="rounded-2xl h-[270px] w-[270px] sm:object-cover sm:aspect-square" src="https://a0.muscache.com/im/pictures/miso/Hosting-668146487515150072/original/8ff2a532-e0cd-41a2-9164-554c4d9eb28a.jpeg?im_w=960" alt="" />
                    </div>
                    <div className='absolute top-[2%] left-[77%] text-white bg-black bg-opacity-50 rounded-2xl py-2 px-3'>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24 " strokeWidth={1.5} stroke="currentColor" className="w-8 h-8  ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                    </div>
                    <h2 className="font-bold">

                        Nantes, Pays de la Loire, France</h2>
                    <h3 className="text-sm text-gray-500">Centre place Graslin - room La Cambronne</h3>
                    <h3 className="text-sm text-gray-500">3 Rooms</h3>
                    <div className="mt-1 flex items-center">
                        <span className="font-bold mr-1">$1000<span> per month</span></span>
                    </div>
                </Link>
                <Link className="relative mx-auto" href={'/apartment'}>
                    <div className="relative  mb-2 rounded-2xl flex">
                        <img className="rounded-2xl h-[270px] w-[270px] sm:object-cover sm:aspect-square" src="https://a0.muscache.com/im/pictures/miso/Hosting-668877859013653763/original/3907f6c6-5cf2-42e8-a9e0-12c2b88ca82f.jpeg?im_w=960" alt="" />
                    </div>
                    <div className='absolute top-[2%] left-[77%] text-white bg-black bg-opacity-50 rounded-2xl py-2 px-3'>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24 " strokeWidth={1.5} stroke="currentColor" className="w-8 h-8  ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                    </div>
                    <h2 className="font-bold">

                        Seddon, Victoria, Australia</h2>
                    <h3 className="text-sm text-gray-500">Comfy room in modern apartment</h3>
                    <h3 className="text-sm text-gray-500">2 Rooms</h3>
                    <div className="mt-1 flex items-center">
                        <span className="font-bold mr-1">$1000<span > per month</span></span>
                    </div>
                </Link>
                <Link className='relative mx-auto' href={'/apartment'}>
                    <div className="relative  mb-2 rounded-2xl flex">
                        <img className="rounded-2xl h-[270px] w-[270px] sm:object-cover sm:aspect-square" src="https://a0.muscache.com/im/pictures/miso/Hosting-757096670950759113/original/1aec33de-3097-4fb4-aa7c-f549f63633ca.jpeg?im_w=960" alt="" />
                    </div>
                    <div className='absolute top-[2%] left-[77%] text-white bg-black bg-opacity-50 rounded-2xl py-2 px-3'>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24 " strokeWidth={1.5} stroke="currentColor" className="w-8 h-8  ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                    </div>
                    <h2 className="font-bold">



                        London, England, United Kingdom</h2>
                    <h3 className="text-sm text-gray-500">Light spacious central London apartment</h3>
                    <h3 className="text-sm text-gray-500">2 Rooms</h3>
                    <div className="mt-1 flex items-center">
                        <span className="font-bold mr-1">$1000<span> per month</span></span>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default page
