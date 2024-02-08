import React from 'react'
import { FaUser } from 'react-icons/fa'

const Transactions = () => {
    return (
        <>
            <div className="bg-[#192237] w-full p-3 rounded-lg">

                <h1 className="text-gray-400 text-2xl">
                    Latest Transaction
                </h1>
                <table className='text-white w-full text-left'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Date</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: 5 }).map((_, index) => {
                            return (
                                <>
                                    <tr key={index} className='my-2'>
                                        <td className='flex gap-2 items-center' ><FaUser />  Ali</td>
                                        <td >Active</td>
                                        <td >21-10-23</td>
                                        <td >$1200</td>
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

export default Transactions
