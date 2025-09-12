import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-cyan-200 py-4 px-10'>
            <Link href='/'>

                <h1 className='text-cyan-800 text-2xl font-bold '>Kira To Do</h1>
            </Link>
        </nav>
    )
}

export default Navbar