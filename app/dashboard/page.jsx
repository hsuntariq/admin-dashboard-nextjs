import React from 'react'
import Sidebar from '../components/dashboard/sidebar/Sidebar'
import Navbar from '../components/dashboard/navbar/Navbar'
import { FaUser, FaFireAlt } from 'react-icons/fa'
import Transactions from './transaction/Transactions'
import Chart from './charts/Chart'

const page = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row w-[95%] mx-auto justify-between gap-5  mt-5 min-h-[80%] overflow-y-scroll">
                <div className="flex flex-col w-full gap-3">

                    <div className="left self-start flex w-full justify-between gap-5 items-center ">

                        <div className="flex self-start justify-between items-center rounded-lg p-5 w-full text-white  bg-[#192237]">
                            <div className="flex flex-col">
                                <div className="flex">
                                    <FaUser />
                                    <p className="text-sm">
                                        Total Users
                                    </p>
                                </div>
                                <h3 className='text-1xl font-bold'>
                                    10,430
                                </h3>

                            </div>
                        </div>
                        <div className="flex justify-between items-center rounded-lg p-5 w-full text-white  bg-[#192237]">
                            <div className="flex flex-col">
                                <div className="flex">
                                    <FaUser />
                                    <p className="text-sm">
                                        Total Users
                                    </p>
                                </div>
                                <h3 className='text-1xl font-bold'>
                                    10,430
                                </h3>

                            </div>
                        </div>
                        <div className="flex justify-between items-center rounded-lg p-5 w-full text-white  bg-[#192237]">
                            <div className="flex flex-col">
                                <div className="flex">
                                    <FaUser />
                                    <p className="text-sm">
                                        Total Users
                                    </p>
                                </div>
                                <h3 className='text-1xl font-bold'>
                                    10,430
                                </h3>

                            </div>
                        </div>
                    </div>
                    <Transactions />
                    <Chart />
                </div>



                <div className="flex flex-col gap-1 w-[30%] rounded-5 text-white">
                    <div style={{
                        backgroundImage: 'linear-gradient(45deg,rgba(25, 34, 55,0.3),rgba(20, 37, 50,0.7)),url(https://i.pinimg.com/originals/58/9e/ab/589eab35dd53bb00a87f28129ef8f16c.png)',
                        backgroundSize: 'contain',
                        backgroundPosition: 'right right'
                        // backgroundRepeat: 'no-repeat'
                    }} className="flex flex-col gap-4 shadow p-4">
                        <div className="flex gap-3">
                            <FaFireAlt color="red" />
                            <h4 className="font-bold text-[0.7rem]">
                                Available Now
                            </h4>
                        </div>
                        <h2 className="font-bold text-[0.7rem]">
                            How to use the new version of the dashboard
                        </h2>
                        <p className="text-gray-400 text-[0.5rem]">
                            Lorem ipsum dolor sit amet consectetur adipisicing.
                        </p>
                        <p className="text-gray-400 text-[0.5rem]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        <button className="bg-purple-200">
                            Watch Now
                        </button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default page
