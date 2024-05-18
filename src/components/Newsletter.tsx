export const Newsletter = () => {
    return(
        <section className=" w-full h-[25rem] flex flex-col items-center gap-4 p-8">
            <h1 className="text-white text-4xl">Contacte-nos</h1>
            <div className="flex flex-col gap-2">
                <label
                    className="text-white text-[20px]"
                    htmlFor="email"
                >
                    Seu email
                </label>

                <div className="bg-white flex items-center justify-between gap-2 pl-3 pr-1 py-1 w-96 h-12 rounded">
                    <input
                        className="w-full outline-none h-full"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Digite o seu email"
                    />
                    <button className="bg-green-800 text-white h-full rounded px-6" >Send</button>
                </div>
            </div>
        </section>
    )
}