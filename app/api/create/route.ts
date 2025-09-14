import { logger } from "@/lib/logger"
import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
    try {

        const body = await req.json()
        const { title, description } = body

        const newTask = await prisma.todo.create({
            data: { 
                title: title.trim(), 
                description: description?.trim() || '' 
             }
        })

        return NextResponse.json(newTask)
    } catch (err: unknown) {
        if (err instanceof Error) {
            logger.error("Error:" + err)
        } else {
            logger.error("Error yang tidak diketahui:" + err)
        }
        return NextResponse.json({ err: "Gagal membuat data todo" }, { status: 500 })
    }
}