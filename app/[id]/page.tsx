

import TaskId from "@/components/TaskId/TaskId"

const toDo = {
    id: '1',
    title: 'Belajar Next.js dan Prisma',
    description: 'Mendalami cara membuat aplikasi full-stack dengan Next.js 14 dan Prisma ORM untuk database management. Termasuk belajar server actions dan app router.',
    completedAt: null, // null jika belum selesai
    createdAt: new Date('2024-03-15T10:30:00'),
    updatedAt: new Date('2024-03-16T14:20:00')
};

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params


    return (
        <div className="max-w-6xl mt-8 mx-auto px-10">
            <TaskId toDo={toDo} />
        </div>
    )
}

export default page