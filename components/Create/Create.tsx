"use client";
import { logger } from "@/lib/logger";
import { Todo } from "@/types";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const Create = () => {
    const { register, handleSubmit, reset } = useForm<Todo>();
    const router = useRouter()
    const handleSubmitButton = async (data: Todo) => {
        try {
            const res = await fetch("/api/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!res.ok) {
                throw new Error("Gagal menyimpan todo");
            } else {
                router.push("/")
            }

            const newTodo = await res.json();
            logger.info("Todo berhasil dibuat:", newTodo);

            reset(); // kosongin form
        } catch (error: unknown) {
            if (error instanceof Error) {
                logger.error({ error }, "Gagal saat akan mengirim data");
            }
            else {
                logger.error({ error }, "Error yang tidak diketahui")
            }
        }
    };

    return (
        <div className="w-full">
            <div className="bg-white rounded-xl p-10 shadow-xl max-w-6xl mx-auto">
                <h1 className="text-center text-2xl font-bold">Buat Tugas Baru</h1>
                <form onSubmit={handleSubmit(handleSubmitButton)}>
                    {/* Input Judul To Do */}
                    <div>
                        <h1 className="font-semibold text-gray-700">Judul To Do</h1>
                        <input
                            className="mt-2 border border-cyan-200 bg-cyan-50/50 h-12 w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent focus:ring-cyan-300"
                            type="text"
                            {...register("title", { required: true })}
                        />
                    </div>

                    {/* Input Deskripsi */}
                    <div className="mt-5">
                        <h1 className="font-semibold text-gray-700">Deskripsi</h1>
                        <textarea
                            className="mt-2 border border-cyan-200 bg-cyan-50/50 w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent focus:ring-cyan-300 resize-none"
                            rows={6}
                            {...register("description", { required: true })}
                        />
                    </div>

                    {/* Submit Button */}
                    <input
                        className="p-4 mt-9 cursor-pointer bg-cyan-500 hover:bg-cyan-600 text-xl font-bold text-white rounded-xl w-full transition ease-in-out duration-200"
                        type="submit"
                        value="Buat"
                    />
                </form>
            </div>
        </div>
    );
};

export default Create;
