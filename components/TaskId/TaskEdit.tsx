import { Todo } from "@/types"

import { SubmitHandler, useForm } from "react-hook-form"


const TaskEdit = ({ toDo }: { toDo: Todo }) => {
    const { register, handleSubmit } = useForm<Todo>({ defaultValues: toDo })

    const handleSubmitButton: SubmitHandler<Todo> = (data: Todo) => {
        data.updatedAt = new Date()
        console.log(data);

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
                        defaultValue={toDo.title}
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
                            defaultValue={toDo.description}
                            {...register("description")}
                        />
                    </div>
                </div>
                {/* Input Deskripsi End */}
                <input className="p-4 mt-9 cursor-pointer bg-cyan-500 hover:bg-cyan-600 text-xl font-bold text-white rounded-xl w-full transition ease-in-out duration-200" type="submit" value="Simpan" />
            </form>

        </div>
    )
}

export default TaskEdit