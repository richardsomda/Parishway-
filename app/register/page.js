import Image from 'next/image'
import React from 'react'


export default function page() {
    return (
        <div className="max-h-screen items-center w-[75%] md:w-[85%] mt-8 xl:w-[70%] md:pt-32 md:pb-32 xl:pt-16 pb-[200px] mx-auto flex flex-wrap md:flex">
            <div className="gap-">
                <p className="text-primary font-bold">Register</p>
                <h1 className="text-dark text-5xl font-bold mt-2">Enlist Your Church </h1>
                {/* <p className="text-gray-400 mt-1">Version 1.0.0</p> */}
            </div>


            <div className="w-full flex flex-wrap md:flex items-center gap-8 md:gap-0 ">
                <div className="w-full mt-2 md:w-[65%] flex flex-col gap-6">
                    <p className="text-">
                        Join the growing network of churches in Ghana utilizing ParishWay to connect with parishioners, share updates, and foster a thriving Catholic community. Register today and experience the transformative power of technology in strengthening your faith.
                    </p>

                </div>


            </div>
        </div>
    )
}
