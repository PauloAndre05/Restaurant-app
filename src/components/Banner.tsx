import { Header } from "./Header";

export function Banner() {
    return (
            <section className="flex flex-col h-[37rem] bg-[#00000048] bg-blend-color bg-banner bg-cover bg-no-repeat bg-center">
                <Header />
                <div className="mt-36 ml-20 flex flex-col p-5 w-[32rem] backdrop-blur-[5px] border border-white/10 rounded-md overflow-hidden gap-4">
                    <h1 className="text-5xl font-bold shadow-sm text-[#fffffffb]">MasterChefe Rooney</h1>
                    <h2 className="text-[#fffffffb] text-lg font-semibold">Saboriuos foods here</h2>
                    <p className=" text-gray-300 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates itaque aliquam expedita iure totam vero impedit inventore ducimus.</p>
                    <button className="self-start bg-[#AE8135]/80 border border-[#AE8135]/80 rounded px-8 py-1 text-white transition-colors duration-700 hover:bg-transparent hover:backdrop-blur-3xl hover:border-[#fff]/10">Reserve</button>
                </div>
            </section>
    )
}