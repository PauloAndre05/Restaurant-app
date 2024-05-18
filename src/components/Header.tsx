import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const linsk = [
    {
        id: 1,
        to: "#",
        name: 'Home'
    },

    {
        id: 2,
        to: "#",
        name: "About"
    },

    {
        id: 3,
        to: "#",
        name: "Contacts"
    },

    {
        id: 4,
        to: "#",
        name: "Menu"
    },

    {
        id: 5,
        to: "#",
        name: "Team"
    },

    {
        id: 6,
        to: "#",
        name: "Galery"
    },

    {
        id: 7,
        to: "#",
        name: "Blog"
    },

    {
        id: 8,
        to: "#",
        name: "Reservation"
    },

]

export function Header() {
    const [selectedId, setSelectedId] = useState(1)
    const [isScrolled, setIsScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.pageYOffset
			const scrollThreshold = 100

			if (scrollTop > scrollThreshold) setIsScrolled(true)
			else setIsScrolled(false)
		}

		window.addEventListener("scroll", handleScroll)
		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

    function handleSelectedId(id:number) {
        setSelectedId(id)
    }

    return  (
        <header
            className={`fixed border-b-[1px] border-[#fff8] w-full py-4 px-20 text-center  flex justify-between items-center shadow-sm backdrop-filter z-10
            ${isScrolled ? "bg-black/70 transition-all duration-[2s] backdrop-blur-sm" : "transition duration-[2s]"}`}
        >
            <h1 className="font-bold text-4xl text-white">Rest<span className="text-[#AE8135]">App</span></h1>

            <nav>
                <ul className="flex gap-6 items-center text-white">
                    {linsk.map((item) => (
                        <li
                            key={item.id}
                            onClick={() => handleSelectedId(item.id)}
                            className={`${selectedId === item.id ? 'text-[#AE8135] font-bold' : ''}`}
                        >
                        <Link to={item.to}>{item.name}</Link>
                    </li>
                    ))}
                </ul>
            </nav>

            <Link
                to='/authSignIn'
                className='pl-3 border-l text-[#ffe1ad]'
            >
                Sign In
            </Link>
        </header>
    )
}