import { Link } from 'react-router-dom';

export function Header() {
    return  (
        <header className="w-full py-4 px-24 text-center bg-[#ffffff0c] flex justify-evenly items-center shadow-sm">
            <h1 className="font-bold text-5xl text-white">Rest<span className="text-yellow-500">App</span></h1> 

            <nav>
                <ul className="flex gap-6 items-center uppercase text-white">
                    <li className="hover:text-green-700">
                        <Link to='/home'>Home</Link>
                    </li>
                    <li className="hover:text-green-700">
                        <Link to='/about'>About</Link>
                    </li>
                    <li className="hover:text-green-700">
                        <Link to='/contacts'>Contacts</Link>
                    </li>
                    <li className="hover:text-green-700">
                        <Link to='/contacts'>Menu</Link>
                    </li>
                    <li className="hover:text-green-700">
                        <Link to='/contacts'>Team</Link>
                    </li>
                    <li className="hover:text-green-700">
                        <Link to='/contacts'>Gallery</Link>
                    </li>
                    <li className="hover:text-green-700">
                        <Link to='/contacts'>Blog</Link>
                    </li>
                    <li className="hover:text-green-700">
                        <Link to='/contacts'>Reservation</Link>
                    </li>
                    
                </ul>
            </nav>

            <div className='bg-green-800 py-1 px-3 rounded text-white'>
                <Link to='/authSignIn'>Sign In</Link>
            </div>
        </header>
    )
}