import React, { useState } from 'react'
import { Calendar, Circle, CircleCheck, Clock } from "lucide-react"
const TaskCard = () => {
    const [isCompleted, setIsCompleted] = useState(false)

    const handleCompleted = () => {
        setIsCompleted(!isCompleted)
    }


    return (
        <div className="bg-white rounded-xl p-10 shadow-xl mt-8">
            <div>
                {/* Title */}
                <h1 className={`text-2xl font-bold flex items-center gap-4 ${isCompleted ? "line-through text-gray-500" : ""} `}>

                    {isCompleted ?

                        <span onClick={handleCompleted} className="cursor-pointer text-green-500"><CircleCheck /></span>
                        :
                        <span onClick={handleCompleted} className="cursor-pointer"><Circle /></span>
                    }



                    Belajar Next.js dan Typescript</h1>
                {/* Title End */}

                {/* Description */}
                <div className="mt-10">
                    <h1 className="text-xl text-gray-800 font-semibold">Deskripsi</h1>
                    <div className="mt-2 p-6 leading-relaxed whitespace-pre-wrap border border-gray-200 rounded-lg text-gray-700">
                        <p>Mendalami cara membuat aplikasi full-stack dengan Next.js 14 dan Prisma ORM untuk database management. Termasuk belajar server actions dan app router.</p>
                    </div>
                </div>
                {/* Description End */}

                {/* Metadata */}
                <div className="grid grid-cols-2 gap-4 mt-10">
                    {/* Dibuat */}
                    <div className="flex items-center gap-2 bg-cyan-100/40 text-cyan-700 p-4 rounded-lg">
                        <Calendar />
                        <div>
                            <h1>Dibuat</h1>
                            <p>11 September 2025</p>
                        </div>
                    </div>
                    {/* Dibuat End */}
                    {/* Terakhir diubah */}
                    <div className="flex items-center gap-2 bg-cyan-100/40 text-cyan-700 p-4 rounded-lg">
                        <Clock />
                        <div>
                            <h1>Terakhir diubah</h1>
                            <p>11 September 2025</p>
                        </div>
                    </div>
                    {/* Terakhir diubah End */}

                </div>
                {/* Metadata End */}

                <div className="mt-10 grid grid-cols-2 gap-4">
                    <button className="bg-green-500 hover:bg-green-600 transition-all duration-200 text-white p-4 rounded-xl cursor-pointer">
                        <h1 className="font-bold">Tandai selesai</h1>
                    </button>
                    <button className="bg-cyan-500 hover:bg-cyan-600 transition-all duration-200 text-white p-4 rounded-xl cursor-pointer">
                        <h1 className="font-bold">Edit</h1>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TaskCard