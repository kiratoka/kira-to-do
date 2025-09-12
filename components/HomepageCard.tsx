import Link from "next/link"


const HomepageCard = () => {
    return (
        <div className="bg-cyan-200 rounded-lg p-4 shadow-xl cursor-pointer my-7">
            <div className="flex justify-between items-center">
                {/* Bagian kiri */}


                <Link href="/">
                    <h1 className="text-2xl font-bold text-cyan-800">Belajar Coding</h1>
                    <p className="text-cyan-700 mt-1">Belajar coding agar bisa mendapatkan pekerjaan</p>
                </Link>

                {/* Bagian kanan */}

                <div>
                    <h1>10/09/2025</h1>
                    <div className="flex gap-2">
                        <Link href="/edit">
                            <button className="text-cyan-800 font-bold hover:underline cursor-pointer ">Edit</button>
                        </Link>
                        <div>
                            <button className="text-red-600 hover:underline cursor-pointer">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomepageCard