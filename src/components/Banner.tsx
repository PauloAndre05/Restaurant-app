import { Header } from "./Header";

export function Banner() {
    return (
            <section className="flex flex-col h-screen w-full bg-[#00000048] bg-blend-color bg-banner bg-cover bg-no-repeat bg-center">
                <Header />  
                <div className="flex flex-col justify-center items-center gap-7 h-full mx-auto text-center"> 
                    <h1 className="text-[4em] font-bold shadow-sm text-[#fffffffb]">MasterChefe Rooney</h1>
                    <p className="text-[#e0e0e0] text-xl w-2/4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates itaque aliquam expedita iure totam vero impedit inventore ducimus.</p>
                    <button className="bg-gray-900 text-white px-8 py-2 rounded uppercase font-semibold text-[1.4rem]">Book My Table</button>
                </div>
            </section>
    )
}