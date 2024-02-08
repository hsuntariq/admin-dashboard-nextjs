import React from 'react'
import { FaUser } from 'react-icons/fa'
import { MdDashboard } from "react-icons/md";
import { RiUserSmileFill } from "react-icons/ri";
import { FaShoppingBasket } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";
import Link from 'next/link';

const Sidebar = () => {
    return (
        <>
            <div className="py-4 flex flex-col gap-4  px-2 min-h-screen xl:w-[20%] md:w-[30%] bg-[#192237] text-white">
                <div className="flex items-center gap-4">
                    <div className="icon bg-gray-600 p-4 rounded-full">
                        <FaUser />
                    </div>
                    <div className="flex flex-col">
                        <h5 className="text-sm font-bold">
                            user1
                        </h5>
                        <p className="text-gray-400 text-sm font-light">
                            Admin
                        </p>
                    </div>
                </div>
                <div className="firs">

                    <h5 className="text-sm text-gray-400 font-bold">
                        Pages
                    </h5>
                    <ul className="list-none ">
                        <Link href="/dashboard" className='flex items-center gap-4 cursor-pointer ps-4 p-1 hover:bg-[#0e121d] transition'> <MdDashboard /> Dashboard</Link>
                        <Link href="/dashboard/users" className='flex items-center gap-4 cursor-pointer ps-4 p-1 hover:bg-[#0e121d] transition'> <RiUserSmileFill /> Users</Link>
                        <Link href='/dashboard/products' className='flex items-center gap-4 cursor-pointer ps-4 p-1 hover:bg-[#0e121d] transition'> <FaShoppingBasket /> Products</Link>
                        <li className='flex items-center gap-4 cursor-pointer ps-4 p-1 hover:bg-[#0e121d] transition'> <GrTransaction /> Transaction</li>
                    </ul>
                </div>
                <div className="firs">

                    <h5 className="text-sm text-gray-400 font-bold">
                        Analytics
                    </h5>
                    <ul className="list-none ">
                        <li className='flex items-center gap-4 cursor-pointer ps-4 p-1 hover:bg-[#0e121d] transition'> <MdDashboard /> Revenue</li>
                        <li className='flex items-center gap-4 cursor-pointer ps-4 p-1 hover:bg-[#0e121d] transition'> <RiUserSmileFill /> Reports</li>
                        <li className='flex items-center gap-4 cursor-pointer ps-4 p-1 hover:bg-[#0e121d] transition'> <FaShoppingBasket /> Teams</li>

                    </ul>
                </div>
                <div className="firs">

                    <h5 className="text-sm text-gray-400 font-bold">
                        User
                    </h5>
                    <ul className="list-none ">
                        <li className='flex items-center gap-4 cursor-pointer ps-4 p-1 hover:bg-[#0e121d] transition'> <MdDashboard /> Settings</li>
                        <li className='flex items-center gap-4 cursor-pointer ps-4 p-1 hover:bg-[#0e121d] transition'> <RiUserSmileFill /> Help</li>
                        <li className='flex items-center gap-4 cursor-pointer ps-4 p-1 hover:bg-[#0e121d] transition'> <FaShoppingBasket /> Logout</li>

                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar
