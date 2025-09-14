import { logger } from "@/lib/logger"
import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function DELETE(req: Request) {
    try {
        const id = await req.json()

        const deleteTask = await prisma.todo.delete({
            where: {
                id
            }
        })

        const sendDeleteTask = JSON.stringify(deleteTask)

        return new NextResponse(sendDeleteTask, { status: 200 })
    } catch (error: unknown) {
        if (error instanceof Error) logger.error({ error }, "Error yang diketahui saat akan menghapus data di API")
        else logger.error({ error }, "Error yang tidak diketahui di API")

        return new Response(JSON.stringify(error), { status: 500 })
    }
}