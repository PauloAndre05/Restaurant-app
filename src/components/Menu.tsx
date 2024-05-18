import { useState } from "react"
import { InfoFoods } from "./InfoFood"

const article = [
    {
        id: 1,
        title: "Café da mannhã",
        icon: "icone"
    },

    {
        id: 2,
        title: "Almoço",
        icon: "icone"
    },

    {
        id: 3,
        title: "Jantar",
        icon: "icone"
    },

    {
        id: 4,
        title: "Bebidas",
        icon: "icone"
    }
]

export const Menu = () => {
    const [selectedId, setSelectedID] = useState(1)
    function handleSelectId(id: number) {
        setSelectedID(id)
    }
    return(
        <section className="mt-[5rem]">
            <div className="flex flex-col items-center gap-5">
                <h1 className="text-4xl text-[#AE8135] font-bold" >Our Menu</h1>
                <p className="w-[900px] text-center text-[#000000b0]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>

            <div className="flex flex-col items-center mt-[3rem] p-3 w-[72%] mx-auto ">
                <div className="flex  border  overflow-hidden w-full">
                    {article.map((item) => (
                        <article key={item.id} onClick={() => handleSelectId(item.id)} className={`${selectedId === item.id ? 'bg-black/70 text-white/80' : 'bg-transparent text-black'} w-full flex flex-col items-center cursor-pointer p-2 hover:text-white/80 hover:bg-black/70 transition duration-200`}
                        >
                        <h2 className="mb-3 text-xl uppercase font-medium">{item.title}</h2>
                        <i>{item.icon}</i>
                    </article>
                    ))}
                </div>
                <InfoFoods selectedId={selectedId} />
            </div>
        </section>
    )
}