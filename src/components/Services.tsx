export const Services = () => {
    return(
        <section>
            <div className="flex justify-center">
                <h1 className="text-4xl font-normal pb-3 my-10">Our Services</h1>
            </div>

            <div className="flex p-10">
                <div className="flex gap-10">
                    <div className="w-[500px] h-[400px] rounded bg-imageService bg-cover bg-no-repeat bg-center"></div>
                    <div className="flex flex-col gap-10 w-[500px]">
                        <h1 className="font-bold text-2xl">Entrega ao domicílio</h1>
                        <p className="text-gray-600 text-justify text-[18px]">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus placeat at vero impedit distinctio, perferendis itaque sit illo dolorem incidunt enim rerum, obcaecati voluptatibus unde, ad quaerat voluptatem et laudantium!
                        </p>
                        <button className="bg-gray-900 text-white rounded p-2">Encomendar</button>
                </div>
            </div>  
            </div>  
        </section>        
    )
}