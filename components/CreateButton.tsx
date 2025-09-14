import { Plus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const CreateButton = () => {
    return (
        <div>
            <div className='flex flex-row-reverse'>
                <Link href="/create">
                    <button className='flex items-center bg-cyan-500 text-white rounded-lg px-3.5 py-1 cursor-pointer hover:bg-cyan-600 hover:scale-110 ease-in-out duration-200'>
                        <Plus />
                        <h1>Create</h1>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default CreateButton