import React from 'react'
import { RxDividerVertical } from "react-icons/rx";


export default function Footer() {
    return (
        <div className='w-[80%] mx-auto bottom-0'>

            <div className='text-primary text-sm justify-center bg-white flex items-center gap-4'>
                <p>© 2024 JITBrands</p>
                <RxDividerVertical className='text-primary font-regular text-[16px]' />

                <button>
                    Privacy Policy
                </button>
            </div>


        </div>
    )
}
