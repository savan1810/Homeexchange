
import Link from 'next/link'
import '../style/style.css'


export default function Home() {
  return (
    <div className='w-full  back_image ' >

      <div className='flex justify-center items-center w-full h-[85vh]' >

        <div className='flex-col justify-center items-center '>
          <p className='text-[#363062] text-center text-lg font-semibold tracking-widest mb-6'>WELCOME TO</p>
          <p className='mb-2 text-center text-6xl  md:text-7xl text-[#F99417] tractind-wide' >HOMIES</p>
          <p className='text-center text-[#363062] text-2xl tracking-wider'>ABOUT HOMIES</p>
          <p className='mx-auto mt-6 w-4/5 text-center'>
            HOMIES is a platform where exchange students can exchange housing with each other.HOMIES offers an easy and safe way to find housing in Europe.
          </p>
          <p className='text-center mt-10'>
            <Link href='/about' className='py-2 px-4 border font-semibold text-[#363062] border-[#4D4C7D] rounded-lg hover:bg-blue-100'>LEARN MORE</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
