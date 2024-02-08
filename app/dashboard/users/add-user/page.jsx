import React from 'react'

const page = () => {
    return (
        <>
            <div className="container mx-auto bg-[#192237] p-5 w-[95%] my-5">

                <form action="" className='flex flex-col gap-4'>
                    <div className="flex gap-3 justify-between items-center">

                        <input className='p-3 w-full bg-[#151C2D] focus:shadow-lg focus:-translate-y-1 transition outline-none text-white' placeholder="Username" type="text" name="username" id="" />
                        <input className='p-3 w-full bg-[#151C2D] focus:shadow-lg focus:-translate-y-1 transition outline-none text-white' placeholder="Email" type="text" name="email" id="" />
                    </div>
                    <div className="flex gap-3 justify-between items-center">

                        <input className='p-3 w-full bg-[#151C2D] focus:shadow-lg focus:-translate-y-1 transition outline-none text-white' placeholder="Password" type="text" name="password" id="" />
                        <input className='p-3 w-full bg-[#151C2D] focus:shadow-lg focus:-translate-y-1 transition outline-none text-white' placeholder="Phone" type="text" name="phone" id="" />
                    </div>
                    <div className="flex gap-3 justify-between items-center">

                        <select name="role" id="" className='p-3 w-full bg-[#151C2D] focus:shadow-lg focus:-translate-y-1 transition outline-none text-white' >
                            <option className='text-gray-700' value="admin">Admin</option>
                            <option className='text-gray-700' value="user">User</option>
                        </select>
                        <select name="active" id="" className='p-3 w-full bg-[#151C2D] focus:shadow-lg focus:-translate-y-1 transition outline-none text-white' >
                            <option className='text-gray-700' value="admin">Active</option>
                            <option className='text-gray-700' value="user">Inactive</option>
                        </select>

                    </div>

                    <textarea className='p-3 w-full bg-[#151C2D] focus:shadow-lg focus:-translate-y-1 transition outline-none text-white' name="" id="" cols="30" rows="4"></textarea>
                    <button className="w-full p-3 hover:bg-green-800 bg-green-600 text-white font-bold">
                        Add User
                    </button>
                </form>
            </div>
        </>
    )
}

export default page
