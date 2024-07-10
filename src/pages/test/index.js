import { FaUserCircle } from "react-icons/fa";
import { CiLink } from "react-icons/ci";
import { MdOutlinePlace } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";

export default function TestPage() {
    return (
        <div className="flex flex-col items-center min-h-screen bg-white text-black">
            <header className="h-12 bg-yellow-400 w-full"></header>
            <main className="grow flex flex-col p-24 gap-10 w-full">
                <div className="flex flex-col px-12 py-6 gap-12 border rounded shadow-md min-w-[50vw]">
                    <header className="flex justify-between border-b-2 py-5">
                        <div className="flex items-center gap-3">
                            <FaUserCircle className="size-7 fill-zinc-400"/>
                            <div className="flex flex-col">
                                <div>
                                    개원두
                                </div>
                                <div>
                                    Date: 2024.07.10
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-1">
                            <CiLink className="size-7 fill-zinc-600"/>
                            <MdOutlinePlace className="size-7 fill-zinc-600"/>
                        </div>
                    </header>
                    <section className="flex flex-col gap-y-[2rem] w-full">
                        <h1 className="text-2xl font-bold">게시글 제목입니다.</h1>
                        <div className="border bg-gray-200 w-full h-[20rem]">2</div>
                        <div>Laboris laboris sint commodo in id officia fugiat. Id magna proident amet commodo qui. Cillum cupidatat duis magna dolore eu reprehenderit labore ad eu reprehenderit. Qui eiusmod Lorem aliquip dolore exercitation laborum deserunt eu et nulla excepteur eu. Dolor ullamco reprehenderit irure aliqua nulla adipisicing non magna eu proident irure minim duis aliquip. Dolor labore eiusmod eiusmod ad sint id nisi. Culpa aute irure ea ipsum excepteur culpa cupidatat aute ut in ea nulla elit nulla.</div>
                        <aside className="flex justify-center items-center py-8">
                            <div className="border bg-gray-200 w-[40rem] h-[20rem]">광고</div>
                        </aside>
                        <div className="flex gap-5 justify-center">
                            <div className="flex flex-col items-center">
                                <AiOutlineLike className="size-7 fill-yellow-400"/>
                                <p>1000</p>
                           </div>
                            <div className="flex flex-col items-center">
                                <AiOutlineDislike className="size-7 fill-zinc-500"/>
                                <p>999</p>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="flex justify-center gap-4">
                    <button className="border rounded-md bg-slate-200 font-bold py-2 px-4 duration-[170ms] active:scale-90">A</button>
                    <button className="border rounded-md bg-slate-200 font-bold py-2 px-4 duration-150 active:scale-90">B</button>
                </div>
            </main>
            <footer className="w-full h-24 bg-slate-200"></footer>
        </div>
    )
}