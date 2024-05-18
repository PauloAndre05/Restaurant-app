import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa6"
import { Link } from "react-router-dom"

export const Footer = () => {
  return(
    <footer className="h-[400px] bg-bgSignIn  bg-bottom bg-no-repeat bg-cover">
      <div className="h-full bg-black/70 backdrop-blur-[.2rem] flex justify-between p-20">
        <div className="flex flex-col gap-1">
          <h1 className="text-white font-semibold text-lg mb-3">Aceeso Rápido</h1>
          <Link to="#" className="text-white/80">Home</Link>
          <Link to="#" className="text-white/80">About</Link>
          <Link to="#" className="text-white/80">Contacts</Link>
          <Link to="#" className="text-white/80">Menu</Link>
          <Link to="#" className="text-white/80">Team</Link>
          <Link to="#" className="text-white/80">Gallery</Link>
          <Link to="#" className="text-white/80">Blog</Link>
          <Link to="#" className="text-white/80">Reservation</Link>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-white font-semibold text-lg mb-3">Contactos</h1>
          <p className="text-white/80">+ 244 944 617 903</p>
          <p className="text-white/80">+ 244 951 604 642</p>
          <p className="text-white/80">restapp.co@gmail.com</p>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <h1 className="text-white font-semibold text-lg mb-3">Social Media</h1>
          <div className="flex gap-4 flex-col">
            <FaFacebook
              size={25}
              color="#fff"
            />
            <FaInstagram
              size={25}
              color="#fff"
            />
            <FaTiktok
              size={25}
              color="#fff"
            />
          </div>
        </div>
      </div>
        <p className="bg-green-700 text-center text-white">Todos os direitos reservados </p>
    </footer>
  )
}