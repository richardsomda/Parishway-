import Image from 'next/image'
import React from 'react'
import { CgPlayButtonO } from "react-icons/cg";
import { BiLogoPlayStore } from "react-icons/bi";
import { SiAppstore } from "react-icons/si";
import Navbar from './components/Navbar';


export default function page() {
  return (
    <div>
      <div className="md:fixed w-full top-0 bg-white">
        <Navbar
          currentPage='Home'

        />
      </div>
      <div className='backImage'>
        <div className='h-screen md:pt-10 xl:pt-16 items-center w-[75%] md:w-[85%] xl:w-[70%] mx-auto flex flex-wrap md:flex'>

          <div className='md:hidden mx-auto my- flex items-center  justify-center'>
            <Image
              src={'/pwlogo.png'}
              width={200}
              height={200}
              className='my-' />
          </div>

          {/* text */}
          <div className='w-full md:w-[48%] h-full items-center flex justify-center '>
            <div className='w-full'>
              <p className=' text-primary text-center mx-auto  md:text-left  '><span className='font-bold  text-[32px]    md:text-[32px] lg:text-[48px] xl:text-[48px] '>Stay Connected,</span><br /> <span className=' text-[32px]   md:text-[26px] lg:text-[40px] xl:text-[40px] font-regular'>In Or Our Of Church.</span></p>

              <p className='text-[#444444] text-[14px] lg:text-[20px] font-medium text-center md:text-left mx-auto md:mx-0 md:w-[80%] mt-4 md:mt-4'>The  App that keeps you connected to your parish</p>


              <div className=' flex items-center gap-6 my-4 mx-auto md:mx-0 w-full bg-bla justify-center md:justify-start'>
                <button className='border- gap-2 rounded-full flex items-center text-[#444444]'>
                  <BiLogoPlayStore className='text-3xl' />Google Play
                </button>
                <button className='border- gap-2 rounded-full flex items-center border-primary  text-[#444444]'>
                  <SiAppstore className='text-3xl' /> App Store

                </button>
              </div>



              <div className=' flex items-center gap-4 my-12 mx-auto md:mx-0 w-full bg-bla justify-center md:justify-start'>
                <button className='border-2 rounded-full border-primary px-5 hover:bg-primary hover:bg-opacity-10 py-2 text-primary'>
                  Get Started
                </button>

                <button className='flex items-center gap-2 text-primary '>
                  <CgPlayButtonO className='text-[32px]' />
                  Watch Video
                </button>
              </div>



            </div>
          </div>

          {/* hero image */}
          <div className='w-full md:w-[48%] flex  items-center mx-auto justify-center'>
            <Image
              src={'/mock.png'}
              width={200}
              height={200}
              className='lg:w-[700px] w-[80%] mx-auto'
            />
          </div>


        </div>
      </div>

    </div>
  )
}
