"use client"
import React, { useState } from 'react'
import { Calendar, Circle, CircleCheck, Clock } from "lucide-react"
import { Todo } from '@/types'
import { formatDateToIndonesian } from '@/lib/utils'
import { logger } from '@/lib/logger'
import { useRouter } from 'next/navigation'


const TaskCard = ({ task }: { task: Todo }) => {
    const router = useRouter()
    const [isCompleted, setIsCompleted] = useState(false)

    const handleCompleted = () => {
        setIsCompleted(!isCompleted)
    }


    const handleDelete = async () => {
        try {
            const res = await fetch(("/api/delete"), {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(task.id)
            })
            if (!res.ok) {
                throw new Error("Kesalahan saat mengirim data ke API")
            } else {
                logger.info("Data berhasil dihapus")
                router.push("/")

            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                logger.error({ error }, "Error yang diketahui")
            } else {
                logger.error({ error }, "Error yang tidak diketahui")
            }
        }
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



                    {task.title}</h1>
                {/* Title End */}

                {/* Description */}
                <div className="mt-10">
                    <h1 className="text-xl text-gray-800 font-semibold">Deskripsi</h1>
                    <div className="mt-2 p-6 leading-relaxed whitespace-pre-wrap border border-gray-200 rounded-lg text-gray-700">
                        <p>{task.description}</p>
                    </div>
                </div>
                {/* Description End */}

                {/* Metadata */}
                <div className="grid grid-cols-2 gap-4 mt-10">
                    {/* Dibuat */}
                    <div className="flex items-center gap-3 bg-cyan-100/40 text-cyan-700 p-4 rounded-lg">
                        <Calendar />
                        <div>
                            <h1>Dibuat</h1>
                            <p>{formatDateToIndonesian(task.createdAt)}</p>
                        </div>
                    </div>
                    {/* Dibuat End */}
                    {/* Terakhir diubah */}
                    <div className="flex items-center gap-3 bg-cyan-100/40 text-cyan-700 p-4 rounded-lg">
                        <Clock />
                        <div>
                            <h1>Terakhir diubah</h1>
                            <p>{formatDateToIndonesian(task.updatedAt)}</p>
                        </div>
                    </div>
                    {/* Terakhir diubah End */}

                </div>
                {/* Metadata End */}

                <div className="mt-10 grid grid-cols-2 gap-4">
                    <button className="bg-green-500 hover:bg-green-600 transition-all duration-200 text-white p-4 rounded-xl cursor-pointer">
                        <h1 className="font-bold">Tandai selesai</h1>
                    </button>
                    <button onClick={handleDelete} className="bg-red-500 hover:bg-red-600 transition-all duration-200 text-white p-4 rounded-xl cursor-pointer">
                        <h1 className="font-bold">Hapus</h1>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TaskCard