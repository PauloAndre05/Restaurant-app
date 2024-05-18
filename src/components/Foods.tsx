import image from "../assets/tablesetting2.jpg";

export const Foods = () => {
    return(
        <section className='w-full flex items-center justify-between bg-black/70 mt-[5rem] px-20 py-10'>
            <div className="w-96 flex flex-col gap-3">
                <h1 className="text-4xl font-bold text-[#AE8135]">Descubra o melhor prato do dia</h1>
                <p className="text-[#fff] w-[700px] ">
                    Escolha a sua preferência e encomende já
                </p>
                <button className="border border-white/30 rounded-sm self-start py-1 px-4 mt-3 text-sm text-white">Encomendar</button>
            </div>
            <div className="">
                <img
                    src={image}
                    alt="Prato do dia"
                    className="w-[35rem] h-[20rem] rounded-full"
                />
            </div>
        </section>
    )
}