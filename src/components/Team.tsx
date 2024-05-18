import { CiFacebook, CiInstagram, CiLinkedin } from 'react-icons/ci'
import { dataTeam } from '../data/data'

export const Team = () => {
    return(
        <section className="flex flex-col items-center gap-5 justify-center h-full w-full bg-[#00000048] bg-blend-color bg-banner bg-cover bg-no-repeat bg-center p-20">
            <h1 className="text-5xl text-white font-bold">Our Team</h1>
            <p className="w-[800px] text-center text-[#ffffffb7]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            <div className='flex justify-between w-full'>
                {dataTeam.map(data => (
                    <article key={data.id} className="border border-white/10 p-2 backdrop-blur-md w-[21rem] pb-5 text-white/80 rounded-md overflow-hidden hover:scale-110 hover:backdrop-blur-sm">
                    <div className='h-72 overflow-hidden w-full'>
                        <img
                            className='object-cover h-full w-full rounded-md'
                            src={data.avatar}
                            alt="imgTeam1"
                        />
                    </div>

                    <div className='p-5 text-center '>
                        <h2 className='text-2xl font-medium'>{data.name}</h2>
                        <p className='border-b pb-5 border-white'>{data.role}</p>
                    </div>

                    <div className='flex justify-center gap-3'>
                        <a href=""><CiFacebook size={24}/></a>

                        <a href=""><CiLinkedin size={24}/></a>

                        <a href=""><CiInstagram size={24}/></a>
                    </div>
                </article>
                ))}
            </div>
        </section>
    )
}