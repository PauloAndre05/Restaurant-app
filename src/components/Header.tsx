import { Link } from 'react-router-dom';

export function Header() {
    return  (
        <header className="w-full py-4 px-24 text-center bg-gray-900 flex justify-between items-center shadow-sm">
            <h1 className="font-bold text-3xl text-white">Rest<span className="text-red-900">App</span></h1> 

            <nav>
                <ul className="flex gap-3 items-center uppercase text-white">
                    <li className="hover:text-red-800">
                        <Link to='/home'>Home</Link>
                    </li>
                    <li className="hover:text-red-800">
                        <Link to='/about'>About</Link>
                    </li>
                    <li className="hover:text-red-800">
                        <Link to='/contacts'>Contacts</Link>
                    </li>

                    <li className='bg-green-800 py-1 px-3 rounded'>
                        <Link to='/authSignIn'>Login</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}