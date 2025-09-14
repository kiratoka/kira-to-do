"use client"
import { logger } from "@/lib/logger";
import { formatDateToIndonesian } from "@/lib/utils";
import { Todo } from "@/types"

import Link from "next/link"
import { useRouter } from "next/navigation";



const HomepageCard = ({ task }: { task: Todo }) => {

    const router = useRouter()


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

    const handleNavEdit = (e:React.MouseEvent) => {
        e.stopPropagation(); // stop biar gak trigger parent
        e.preventDefault();
        router.push(`/${task.id}?isedit=true`)
    }

    const formattedCreatedAt = formatDateToIndonesian(task.createdAt);

    return (
        <Link href={`/${task.id}`}>
            <div className="bg-white hover:bg-gray-200 hover:scale-105 ease-in-out duration-300 rounded-lg p-6 shadow-2xl cursor-pointer my-7">
                <div className="flex justify-between items-center">
                    {/* Bagian kiri */}
                    <div>
                        <h1 className="text-2xl font-bold text-cyan-800">{task.title}</h1>
                        <p className="text-cyan-700 mt-1">{task.description}</p>
                    </div>

                    {/* Bagian kanan */}

                    <div>
                        <h1>{formattedCreatedAt}</h1>
                        <div className="flex justify-end gap-2">
                            <div>
                                <button onClick={handleNavEdit} className="text-cyan-800 font-bold hover:underline cursor-pointer ">Edit</button>
                            </div>
                            <div>
                                <button onClick={handleDelete} className="text-red-600 hover:underline cursor-pointer">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>

    )
}

export default HomepageCard