import imgAbout from './../assets/jantarImage.jpg'

export const About = () => {
    return(
        <section className="p-20">
            <h1 className="text-4xl text-green-700 font-bold text-center">About Us</h1>
            <div className=' flex justify-between items-center mt-20'>
                <div className="flex flex-col gap-5">
                    <h2 className="font-bold text-1xl">IT STARTED, QUITE SIMPLY, LIKE THIS...</h2>
                    <div className='w-[600px] text-[#00000096] flex flex-col gap-3 max-h-80 backdrop-blur-sm bg-transparent  border-red-600 overflow-y-auto p-2 rounded-lg shadow-current shadow-xl'>
                        <p >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia, nostrud exercitation ullamco.<br/> <br/>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm incididunt ut labore et   dolore magna aliqua. Ut enim ad minim venia, nostrud exercitation ullamco.<br/> <br/>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm incididunt ut labore et   dolore magna aliqua. Ut enim ad minim venia, nostrud exercitation ullamco.<br/> <br/>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm incididunt ut labore et   dolore magna aliqua. Ut enim ad minim venia, nostrud exercitation ullamco.<br/> <br/>
                            Aenean commodo ligula eget dolor aenean massa. Cum sociis nat penatibu set magnis dis parturient montes, nascetur ridiculus mus. quam felisorat, ultricies nec, Aenean commodo ligula eget dolor penatibu set magnis is parturient montes, nascetur ridiculus mus. quam felisorat, ultricies nec, pellentesque eu, pretium quis, sem. quat massa quis enim. Donec vitae sapien ut libero venenatis fauci Nullam quis ante. Etiam sit amet rci eget eros.
                        </p>
                    </div>
                </div>
                <div className='w-[500px] h-[300px] overflow-hidden rounded-full border-5 border-green-700'>
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