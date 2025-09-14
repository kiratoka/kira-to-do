

import TaskId from "@/components/TaskId/TaskId"
import { prisma } from "@/lib/prisma";



const page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params

    const taskId = await prisma.todo.findUnique({
        where: {
            id
        }
    })

    return (
        <div className="max-w-6xl mt-8 mx-auto px-10">
            {
                taskId ?
                    <TaskId task={taskId} />
                    :
                    <p className="flex justify-center items-center h-screen">Data tidak ditemukan 🙄</p>
            }
        </div>
    )
}

export default page