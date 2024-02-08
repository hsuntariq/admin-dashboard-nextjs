import React from 'react'
import { IoMdNotifications } from "react-icons/io";
import { CiGlobe, CiChat1 } from "react-icons/ci";

const Navbar = () => {
    return (
        <>
            <div className='self-start w-[95%] text-white rounded-lg mt-5 mx-auto flex justify-between p-4 bg-[#192237] '>
                <div className="logo">
                    Dashboard
                </div>
                <div className="flex items-center justify-between gap-4">
                    <form action="" className='flex justify-end'>
                        <input type="search" className='px-5 py-1 outline-none rounded-md w-3/4 ms-auto bg-[#2E374A] border-0 text-gray-800' name="search" id="" placeholder="Search" />
                    </form >
                    <div className="icons flex items-center gap-3">
                        <IoMdNotifications />
                        <CiGlobe />
                        <CiChat1 />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
