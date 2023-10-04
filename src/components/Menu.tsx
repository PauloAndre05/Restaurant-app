export const Menu = () => {
    return(
        <section className="mt-[5rem]">
            <div className="flex flex-col items-center gap-5">
                <h1 className="text-5xl text-green-700 font-bold" >Our Menu</h1>
                <p className="w-[900px] text-center text-[#000000b0]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>


            <div className="flex flex-col items-center mt-[3rem] p-3">
                <div className="flex">
                    <article className="w-60 flex flex-col items-center">
                        <h2 className="border-b border-[#000000] pb-3 text-2xl uppercase font-medium">Starters</h2>
                        <i>Icone</i>
                    </article>

                    <article className="w-60 flex flex-col items-center">
                        <h2 className="border-b border-[#000000] pb-3 text-2xl uppercase font-medium">Main Dishes</h2>
                        <i>Icone</i>
                    </article>

                    <article className="w-60 flex flex-col items-center">
                        <h2 className="border-b border-[#000000] pb-3 text-2xl uppercase font-medium">Deserts</h2>
                        <i>Icone</i>
                    </article>

                    <article className="w-60 flex flex-col items-center">
                        <h2 className="border-b border-[#000000] pb-3 text-2xl uppercase font-medium">Drinks</h2>
                        <i>Icone</i>
                    </article>

                </div>


                <div className="border border-red-600">
                </div>
            </div>
        </section>
    )
}