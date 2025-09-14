import Create from '@/components/Create/Create'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar />
            <div className='flex flex-1 items-center justify-center'>
                <Create />
            </div>
        </div>
    )
}

export default page