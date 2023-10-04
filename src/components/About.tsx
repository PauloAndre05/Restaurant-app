import imgAbout from './../assets/jantarImage.jpg'

export const About = () => {
    return(
        <section className="flex gap-[6rem] justify-center items-center w-ful mt-16">
            <div className="flex flex-col gap-3">
                <h1 className="text-5xl text-green-700 font-bold">About Us</h1>
                <h2 className="font-bold text-2xl">IT STARTED, QUITE SIMPLY, LIKE THIS...</h2>
                <div className='w-[600px] text-[#00000096] flex flex-col gap-3 text-justify text-'>
                    <p >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia, nostrud exercitation ullamco.
                    </p>

                    <p>
                        Aenean commodo ligula eget dolor aenean massa. Cum sociis nat penatibu set magnis dis parturient montes, nascetur ridiculus mus. quam felisorat, ultricies nec, Aenean commodo ligula eget dolor penatibu set magnis is parturient montes, nascetur ridiculus mus. quam felisorat, ultricies nec, pellentesque eu, pretium quis, sem. quat massa quis enim. Donec vitae sapien ut libero venenatis fauci Nullam quis ante. Etiam sit amet rci eget eros.
                    </p> 

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm incididunt ut labore et   dolore magna aliqua. Ut enim ad minim venia, nostrud exercitation ullamco.
                    </p>
                </div>
            </div>

            <div className="">
                <div className='w-[400px] h-[400px] overflow-hidden rounded-[50%] border-5 border-green-700'>
                    <img 
                        src={imgAbout} 
                        alt="img about" 
                        className='object-cover'
                    />
                    
                </div>
            </div>
        </section>
    )
}