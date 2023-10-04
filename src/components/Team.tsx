import imgTeam1 from'./../assets/team1.jpg'
import imgTeam2 from './../assets/team2.jpg'
import imgTeam3 from './../assets/team3.jpg'

export const Team = () => {
    return(
        <section className="flex flex-col items-center gap-5 justify-center h-full w-full bg-[#00000048] bg-blend-color bg-banner bg-cover bg-no-repeat bg-center bg-fixed p-10">
            <h1 className="text-5xl text-white font-bold">Our Team</h1>
            <p className="w-[800px] text-center text-[#ffffffb7]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            <div className='flex gap-8'>
                <article className="bg-white w-[22rem] pb-5 hover:bg-[#5fdf5a] ">
                    <div className='h-72 overflow-hidden'>
                        <img 
                            className='object-cover h-full'
                            src={imgTeam1} 
                            alt="imgTeam1" 
                        />
                    </div>
                    
                    <div className='p-5 text-center '>
                        <h2 className='text-2xl font-medium'>Paulo Samuel</h2>
                        <p className='text-[#000000a1] border-b pb-5 border-[#000000e7]'>Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Aenean commodo ligula.</p>
                    </div>

                    <div className='flex justify-center gap-3'>
                        <a href="">f</a>

                        <a href="">in</a>

                        <a href="">t</a>
                    </div>
                </article>

                <article className="bg-white w-[22rem] pb-5 hover:bg-[#5fdf5a]">
                    <div className='h-72 overflow-hidden'>
                        <img 
                            className='object-cover h-full'
                            src={imgTeam2} 
                            alt="imgTeam1" 
                        />
                    </div>
                    
                    <div className='p-5 text-center'>
                        <h2 className='text-2xl font-medium'>Galenio</h2>
                        <p className='text-[#000000a1] border-b pb-5 border-[#000000e7]'>Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Aenean commodo ligula.</p>
                    </div>

                    <div className='flex justify-center gap-3'>
                        <a href="">f</a>

                        <a href="">in</a>

                        <a href="">t</a>
                    </div>
                </article>
                
                <article className="bg-white w-[22rem] pb-5 hover:bg-[#5fdf5a]">
                    <div className='h-72 overflow-hidden'>
                        <img 
                            className='object-cover h-full'
                            src={imgTeam3} 
                            alt="imgTeam1" 
                        />
                    </div>
                    
                    <div className='p-5 text-center'>
                        <h2 className='text-2xl font-medium'>Tonilson</h2>
                        <p className='text-[#000000a1] border-b pb-5 border-[#000000e7]'>Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Aenean commodo ligula.</p>
                    </div>

                    <div className='flex justify-center gap-3'>
                        <a href="">f</a>

                        <a href="">in</a>

                        <a href="">t</a>
                    </div>
                </article>
            </div>
        </section>
    )
}