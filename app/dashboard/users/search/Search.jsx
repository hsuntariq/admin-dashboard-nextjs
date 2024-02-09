"use client"
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

const Search = () => {
    // get the pathname
    const pathname = usePathname();
    // get the usesearchParams hook
    const searchParams = useSearchParams();
    // get the replace from next navigation
    const { replace } = useRouter()

    const handleChange = (e) => {
        const params = new URLSearchParams(searchParams);
        if (e.target.value !== '') {
            // convert the searched object into a string
            params.set('q', e.target.value);
        } else {
            params.delete('q')
        }
        // replace the url
        replace(`${pathname}?${params}`)

    }

    return (
        <>
            <form action="" className='flex justify-end'>
                <input type="search" onChange={handleChange} className='px-5 py-1 outline-none rounded-md ms-auto bg-[#2E374A] border-0 text-gray-200' name="search" id="" placeholder="Search" />
            </form >
        </>
    )
}

export default Search