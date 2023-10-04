export const Foods = () => {
    return(
        <section className='w-full h-screen bg-bgSignIn bg-cover bg-center flex flex-col justify-center gap-7 items-center bg-blend-color bg-[#0000009f] mt-[5rem] bg-fixed'>
            <h1 className="text-4xl font-bold text-green-700">Todays Special</h1>
            <p className="text-[#fff] w-[700px] text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus tenetur accusamus eos odit tempora, soluta ratione temporibus dolorum amet animi porro labore debitis sed modi blanditiis maiores eligendi officia atque!</p>
            <div className="flex justify-center gap-8">
                
                <article className="">
                    <div className="w-60 h-52 rounded bg-cover bg-no-repeat bg-center border bg-cofeImage"> </div>
                </article>

                <article>
                    <div className="w-60 h-52 rounded bg-cover bg-no-repeat bg-center border bg-burguerImage    "> </div>
                </article>

                <article>
                    <div className="w-60 h-52 rounded bg-cover bg-no-repeat bg-center border bg-jantarImage "> </div>
                </article>
                
            </div>
        </section>
    )
}