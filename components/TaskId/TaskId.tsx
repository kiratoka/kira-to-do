"use client"

import { ArrowLeft, Edit3 } from "lucide-react"
import TaskCard from "./TaskCard"
import TaskEdit from "./TaskEdit"
import { useEffect, useState } from "react"
import { Todo } from "@/types"
import Link from "next/link"
import { useSearchParams } from "next/navigation"


const TaskId = ({ task }: { task: Todo }) => {
    const searchParams = useSearchParams()
    const isQueryEdit = searchParams.get("isedit")

    const [isEdit, setIsEdit] = useState(false)
    const handleEdit = () => {
        setIsEdit(!isEdit)
    }
    console.log(isEdit);


    useEffect(() => {
        if (isQueryEdit) setIsEdit(true)
    }, [])


    return (
        <div>
            {/* Header */}
            <div className="flex justify-between items-center">

                {isEdit ?
                    <button onClick={handleEdit}>
                        <h1 className="text-2xl font-bold text-cyan-500 flex items-center gap-2 cursor-pointer hover:underline"><span><ArrowLeft fontSize={50} /></span>Kembali</h1>
                    </button>
                    :
                    <Link href={"/"}>
                        <h1 className="text-2xl font-bold text-cyan-500 flex items-center gap-2 cursor-pointer hover:underline"><span><ArrowLeft fontSize={50} /></span>Kembali ke List</h1>
                    </Link>

                }
                <button onClick={handleEdit}
                    className={`flex items-center gap-2 text-white px-4 py-2 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 cursor-pointer ${isEdit ? "bg-red-500 hover:bg-red-600" : "bg-cyan-500 hover:bg-cyan-600"}`}
                >
                    <Edit3 className="w-4 h-4" />
                    <span className="font-medium">{isEdit ? "Batalkan" : "Edit"}</span>
                </button>
            </div>
            {/* Header End */}
            {isEdit ?
                <TaskEdit handleEdit={handleEdit} task={task} />
                :
                <TaskCard task={task} />
            }


        </div>
    )
}

export default TaskId