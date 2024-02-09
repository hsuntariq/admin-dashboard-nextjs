import { fetchData } from '@/app/lib/utils/data'
import React from 'react'
import Search from './search/Search'

const page = async ({ searchParams }) => {
    const query = searchParams.q
    const users = await fetchData(query)
    return (
        <>
            <div className="container bg-[#192237] w-[95%] my-5 p-4 mx-auto">
                <div className="flex items-center justify-between">
                    <Search />
                    <button className="bg-purple-600 font-bold p-2 rounded-md hover:bg-purple-900 text-white">
                        Add New
                    </button>
                </div>
                <table className='w-full font-medium text-white my-4 text-left'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Created At</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map((user, index) => {
                            return (
                                <>
                                    <tr key={user?.id}>
                                        <td className='my-4 relative p-3 capitalize' >{user?.username}</td>
                                        <td className='my-4 relative p-3'>{user?.email}</td>
                                        <td className='my-4 relative p-3'>{user?.createdAt}</td>
                                        <td className='my-4 relative p-3'>{user?.isAdmin ? 'Admin' : 'User'}</td>
                                        <td className='my-4 relative p-3'>{user?.active ? 'Active' : 'Inactive'}</td>
                                        <td className='flex gap-3 items-center'>
                                            <button className="text-white px-5 py-1 rounded-md  bg-teal-700 text-sm">
                                                View
                                            </button>
                                            <button className="text-white px-5 py-1 rounded-md  bg-red-700 text-sm 700">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                </>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default page
