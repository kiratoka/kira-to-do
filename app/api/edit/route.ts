import { logger } from "@/lib/logger"
import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function PATCH(req: Request) {
    try {
        const body = await req.json()
        const { title, description, id } = body

        const updateTask = await prisma.todo.update({
            where: { id },
            data: { title, description }
        })
        const sendUpdateTask = JSON.stringify(updateTask)
        return new NextResponse(sendUpdateTask, { status: 200 })
    } catch (err: unknown) {
        if (err instanceof Error) {
            logger.error({ err }, "Error saat update to do di API")
        } else {
            logger.error({ err }, "Error yang tidak diketahui saat update to do di API")
        }
        
        return new Response(JSON.stringify({
            message: "Gagal update to do di API"
        }), { status: 500 })
    }
}