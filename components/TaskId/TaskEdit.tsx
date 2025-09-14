"use client"

import { logger } from "@/lib/logger"
import { Todo } from "@/types"
import { CheckCircle } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"


import { SubmitHandler, useForm } from "react-hook-form"


const TaskEdit = ({ task, handleEdit }: { task: Todo, handleEdit: () => void }) => {

    const router = useRouter()
    const [isUpdated, setIsUpdated] = useState(false)
    const { register, handleSubmit } = useForm<Todo>({ defaultValues: task })

    const handleNavigation = () => {
        setIsUpdated(false)
        handleEdit()
        router.refresh()
    }

    const handleSubmitButton: SubmitHandler<Todo> = async (data: Todo) => {
        try {
            const res = await fetch("/api/edit", {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)  
            })

            if (!res.ok) {
                throw new Error("Gagal menyimpan todo")
            } else {
                setIsUpdated(true)
            }

        } catch (err: unknown) {
            if (err instanceof Error) {

                logger.error({ err }, "Error saat akan mengirim data")
            } else {
                logger.error({ err }, "Error yang tidak diketahui saat akan mengirim data")
            }
        }


    }
    return (
        <div className="bg-white rounded-xl p-10 shadow-xl mt-8">

            <form onSubmit={handleSubmit(handleSubmitButton)}>
                {/* Input Judul To Do */}
                <div>
                    <h1 className="font-semibold text-gray-700">Judul To Do</h1>
                    <input
                        className="mt-2 border border-cyan-200 bg-cyan-50/50 h-12 w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent focus:ring-cyan-300"
                        type="text"
                        defaultValue={task.title}
                        {...register("title")}
                    />
                </div>
                {/* Input Judul To Do End */}

                {/* Input Deskripsi */}
                <div className="mt-5">
                    <div>
                        <h1 className="font-semibold text-gray-700">Deskipsi</h1>
                        <textarea
                            className="mt-2 border border-cyan-200 bg-cyan-50/50 w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent focus:ring-cyan-300 resize-none"
                            rows={6}
                            defaultValue={task.description}
                            {...register("description")}
                        />
                    </div>
                </div>
                {/* Input Deskripsi End */}
                <input className="p-4 mt-9 cursor-pointer bg-cyan-500 hover:bg-cyan-600 text-xl font-bold text-white rounded-xl w-full transition ease-in-out duration-200" type="submit" value="Simpan" />
            </form>

            {
                isUpdated ? <div className="flex justify-center items-center w-full h-screen z-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                    {/* CARD UPDATE SUCCESS */}
                    <div className="flex rounded-lg justify-center items-center flex-col bg-green-500 w-full h-1/2 max-w-3xl mx-auto shadow-2xl">
                        <div className="flex flex-col justify-center items-center text-white text-3xl font-bold mb-16">
                            <h1 className="mb-8">Task telah diupdate </h1>
                            <CheckCircle size={60} />
                        </div>
                        <button onClick={handleNavigation} className="bg-white cursor-pointer py-2 px-4 rounded-lg ">
                            <h1 className="text-green-700">Oke</h1>
                        </button>
                    </div>
                    {/* CARD UPDATE SUCCESS END */}
                </div>
                    : null
            }

        </div>
    )
}

export default TaskEdit