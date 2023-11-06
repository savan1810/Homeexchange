import React from 'react'

const page = () => {
    return (
        <div className='bg-gradient-to-r from-[#fdfcfb] to-[#e2d1c3] '>
            <div className='w-4/6 mx-auto '>
                <p className='text-center  py-4 md:text-3xl text-xl  font-semibold tracking-wide text-gray-700'>Meet the team</p>
                <div className='flex justify-center gap-10 items-center flex-wrap'>
                    <div>
                        <div className='border border-[#86A789] w-56 h-56 rounded-t-full'>
                        </div>
                        <p className='mt-2 text-center font-medium'>Anna Louise Ravn Poulsen</p>
                    </div>
                    <div>
                        <div className='border border-[#86A789] w-56 h-56 rounded-t-full'>

                        </div>
                        <p className='mt-2 text-center font-medium'>Mathilde Deela Christensen</p>
                    </div>
                    <div>
                        <div className='border border-[#86A789] w-56 h-56 rounded-t-full'>

                        </div>
                        <p className='mt-2 text-center font-medium'> Louise Bergkrantz</p>
                    </div>

                </div>
                <p className='mt-6  text-center text-black text-sm'>We are the minds behind the HOMIES.We are three friends who founded HOMIES together.Our idea with HOMIES is to make it easier and safer for exchange student to swap homes with each other.We are a brand-new startup that was established in 2023. </p>
                <div className='my-10  flex justify-center items-center gap-10 flex-wrap'>
                    <button className='border-2 text-sm font-semibold tracking-wider text-white bg-gradient-to-r from-[#86A789] to-[#B2C8BA] rounded-lg px-10 py-2'>Email Us</button>
                    <button className='border-2 text-sm font-semibold tracking-wider text-white bg-gradient-to-r from-[#86A789] to-[#B2C8BA]   rounded-lg px-10 py-2'>Call Us</button>
                </div>
            </div>
            <div className='w-4/5 mx-auto '>
                <p className='text-center  py-4 md:text-3xl text-xl font-semibold tracking-wide text-gray-700'>About HOMIES</p>
                <div className='flex py-10 justify-between gap-10  items-center flex-wrap  '>
                    <div className='px-3 py-6 h-[270px] w-[270px] text-sm mx-auto bg-[#CCC8AA] rounded-lg' >
                        <p className='text-center text-[#61677A]'> We understand that exchange students often face challenges when searching for temporary accomodations in foreign country.With HOMIES, we aim to eliminate these barriers and provide a safe and reliable network for home exchange.Our platform enables students to connect with potential home exchange partners from around the world and customize their housing search to meet their individual needs.</p>

                    </div>
                    <div className='px-3 py-6 h-[270px] w-[270px] text-sm mx-auto bg-[#CCC8AA] rounded-lg' >
                        <p className='text-center text-[#61677A]'>We prioritize the safety and quality of home exchanges through carefully selected security measures and quality checks.This ensures that our users cn trust that they are exchaning homes with dependaple partners and receive the support they need throughtout the process.</p>

                    </div>
                    <div className='px-3 py-6 h-[270px] w-[270px] text-sm mx-auto bg-[#CCC8AA] rounded-lg' >
                        <p className='text-center text-[#61677A]'>HOMIES is not just about finding a place to live;it is also abou buildingconnections and sharing cultures.We believe that by helping students find homely atmosphere in a new country,We can contribute to a more enriching and memorable exchange experience.</p>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default page
