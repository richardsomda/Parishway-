import Image from 'next/image'
import React from 'react'
import { RiErrorWarningFill } from "react-icons/ri";
import { FaMapMarkerAlt } from "react-icons/fa";
import Navbar from '../components/Navbar';





export default function page() {
    return (

        <div>
            <div className="md:fixed w-full top-0 bg-white">
                <Navbar
                    currentPage='Register'

                />
            </div>
            <div className="max-h-screen items-center w-[75%] md:w-[85%] mt-8 xl:w-[70%] md:pt-32 md:pb-32 xl:pt-16 pb-[200px] mx-auto flex flex-wrap md:flex">
                <div className="gap-">
                    <p className="text-primary font-bold">Register</p>
                    <h1 className="text-dark text-5xl font-bold mt-2">Enlist Your Church </h1>
                    {/* <p className="text-gray-400 mt-1">Version 1.0.0</p> */}
                </div>


                <div className="w-full  flex flex-wrap md:flex items-center gap-8 md:gap-0 ">
                    <div className="w-full mt-2 md:w-[65%] flex flex-col gap-6">
                        <p className="text-">
                            Join the growing network of churches in Ghana utilizing ParishWay to connect with parishioners, share updates, and foster a thriving Catholic community. Register today and experience the transformative power of technology in strengthening your faith.
                        </p>
                    </div>

                    <h1 className='font-semibold mt-6'>By registering with ParishWay, your parish gains access to a suite of valuable features:</h1>

                    <div className='flex items-start gap-y-6 flex-wrap md:flex my-2'>
                        {/* Advantage one */}
                        <div className="w-full md:w-[48%] flex flex-wrap md:flex items-cente gap-2 mt- md:gap-0 ">
                            <h1 className="font-bold text-primar text-base w-full md:w-[50%] text-primary">
                                Dedicated Parish Profile:{" "}
                            </h1>

                            <div className="w-full mt- md:w-[80%] flex flex-col gap-6">
                                <p className="text-">
                                    Create a comprehensive profile highlighting your parish's unique identity, contact information, and Mass timings.</p>
                            </div>
                        </div>

                        {/* Advantage two */}
                        <div className="w-full md:w-[48%] flex flex-wrap md:flex items-cente gap-2 mt- md:gap-0 ">
                            <h1 className="font-bold text-primar text-base w-full md:w-[50%] text-primary">
                                Event Calendar:{" "}
                            </h1>

                            <div className="w-full mt- md:w-[80%] flex flex-col gap-6">
                                <p className="text-">
                                    Manage and share upcoming events, retreats, and gatherings, keeping your community informed and involved.
                                </p>
                            </div>
                        </div>


                        {/* Advantage three */}
                        <div className="w-full md:w-[48%] flex flex-wrap md:flex items-cente gap-2 mt- md:gap-0 ">
                            <h1 className="font-bold text-primar text-base w-full md:w-[50%] text-primary">
                                Announcement Board:{" "}
                            </h1>

                            <div className="w-full mt- md:w-[80%] flex flex-col gap-6">
                                <p className="text-">
                                    Publish important updates, news, and spiritual reflections directly to your parishioners' fingertips.
                                </p>
                            </div>
                        </div>

                        {/* Advantage four */}
                        <div className="w-full md:w-[48%] flex flex-wrap md:flex items-cente gap-2 mt- md:gap-0 ">
                            <h1 className="font-bold text-primar text-base w-full md:w-[50%] text-primary">
                                Prayer Request Section:{" "}
                            </h1>

                            <div className="w-full mt- md:w-[80%] flex flex-col gap-6">
                                <p className="text-">
                                    Offer a dedicated space for parishioners to submit prayer requests, fostering a supportive and connected community.
                                </p>
                            </div>
                        </div>
                    </div>


                </div>

                <div className="w-full bg-red-30  my-8 flex flex-wrap md:flex items-start gap-4 md:gap-0 ">

                    {/* left side */}
                    <div className='w-full md:w-[70%] lg:w-[50%] bg-blue-'>
                        <div>
                            <p className='font-semibold'>Parish Name</p>
                            <div className='border-2 rounded-lg w-full '>
                                <input
                                    type="text"
                                    placeholder='Parish Name'
                                    className='px-3 py-3  bg-transparent w-full outline-none '
                                />
                            </div>
                        </div>

                        <div className='flex justify-between flex-wrap md:flex'>
                            <div className='mt-6 w-full md:w-[48%]' >
                                <p className='font-semibold'>Select Region</p>
                                <div className='border-2 rounded-lg  '>
                                    <input
                                        type="text"
                                        placeholder='Parish Name'
                                        className='px-3 py-3  bg-transparent w-full outline-none '
                                    />
                                </div>
                            </div>
                            <div className='mt-6 w-full md:w-[48%]'>
                                <p className='font-semibold'>Parish City/Town</p>
                                <div className='border-2 rounded-lg  '>
                                    <input
                                        type="text"
                                        placeholder='City/Town'
                                        className='px-3 py-3  bg-transparent w-full outline-none '
                                    />
                                </div>
                            </div>
                        </div>





                        <div>
                            <p className='font-semibold mt-6'>Parish Address</p>
                            <div className='border-2 rounded-lg w-full '>
                                <input
                                    type="text"
                                    placeholder='Parish Address'
                                    className='px-3 py-3 bg-transparent w-full outline-none '
                                />
                            </div>
                        </div>


                        <div className='flex justify-between flex-wrap md:flex'>
                            <div className='mt-6 w-full md:w-[48%]' >
                                <p className='font-semibold'>Parish Administrator Name</p>
                                <div className='border-2 rounded-lg  '>
                                    <input
                                        type="text"
                                        placeholder='Parish Name'
                                        className='px-3 py-3  bg-transparent w-full outline-none '
                                    />
                                </div>
                            </div>
                            <div className='mt-6 w-full md:w-[48%]'>
                                <p className='font-semibold'>Parish Administrator Phone</p>
                                <div className='border-2 rounded-lg  '>
                                    <input
                                        type="text"
                                        placeholder='City/Town'
                                        className='px-3 py-3  bg-transparent w-full outline-none '
                                    />
                                </div>
                            </div>
                        </div>


                        <div>
                            <p className='font-semibold mt-6'>Parish Administrator Email Address</p>
                            <div className='border-2 rounded-lg w-full '>
                                <input
                                    type="text"
                                    placeholder='Email Address'
                                    className='px-3 py-3 bg-transparent w-full outline-none '
                                />
                            </div>
                        </div>

                        <div className='w-full relative bg-primary bg-opacity-20 rounded-xl py-4 my-6 '>
                            <div className='w-[95%] mx-auto text-sm flex justify-between items-center'>
                                <div className='w-8 h-8 bg-primary text-white flex rounded-full justify-center items-center '>
                                    <RiErrorWarningFill className='text-lg' />
                                </div>

                                <p className='text-sm w-[90%] flex'>You can use the red marker  on the map to locate your church or type in your church name from the search bar to locate your church.</p>

                            </div>
                        </div>

                        {/* button */}
                        <div className='flex items-center w-full my-4'>
                            <button className='bg-primary px-5 py-3 hover:bg-opacity-80 w-full text-white rounded-full'>
                                Submit
                            </button>
                        </div>

                    </div>

                    {/* right side map */}
                    <div className='w-full md:w-[70%] lg:w-[48%] mt-6 mx-0 lg:mx-auto'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7942.086759460236!2d-0.26944385783795705!3d5.560589159351869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9780643ecafb%3A0xd18fe368b02ddd27!2sSt.%20Martin%20de%20Porres%20School!5e0!3m2!1sen!2sgh!4v1708381839021!5m2!1sen!2sgh" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className=' rounded-xl md:h-96 lg:h-96 w-full'></iframe>

                    </div>

                </div>
            </div>
        </div>
    )
}
