import { FcGoogle } from "react-icons/fc";
import { FaSquareFacebook } from "react-icons/fa6";


const handleSubmit = (e) => {
    e.preventDefault()
} 

export const SignIn = () => {
    return(
        <section className="w-full h-screen bg-bgSignIn bg-cover bg-center flex justify-center items-center bg-blend-color bg-[#000000d3]">
            <div className="bg-[#ffffff49] p-10 rounded">
            <h1 className="font-bold text-3xl mb-10 text-center text-white">Rest<span className="text-black">App</span></h1>
                <form 
                    className="flex flex-col gap-4" 
                    onSubmit={handleSubmit}
                >

                    <div className="flex flex-col gap-2 w-80">
                        <label 
                            htmlFor="email" 
                            className="font-bold text-gray-900">
                            Email or phone number
                        </label>

                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            placeholder="Enter your E-mail"
                            className="border border-[#ffffff49] p-2 rounded outline-none text-px bg-transparent text-white"
                        />
                    </div>

                    <div className="flex flex-col gap-2 w-80">
                        <div className="flex justify-between items-center">
                            <label 
                                htmlFor="password" 
                                className="font-bold text-gray-900">
                                Password 
                            </label>

                            <a 
                                href="#" 
                                className="text-white text-sm hover:font-bold">
                                Forgot your password?
                            </a>
                        </div>
                        
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            placeholder="Enter your password"
                            className="border border-[#ffffff49] p-2 rounded outline-none text-px bg-transparent text-[#fff]"
                        />
                    </div>

                    <div className=" flex items-center gap-4 ">
                        <button className="rounded py-2 bg-gray-900 opacity-80 text-white w-full hover:opacity-100">Sign In</button>
                        <div className="w-full">
                            <div className="w-full">
                                <ul className="flex items-center justify-evenly text-4xl">
                                    <li className=""><FcGoogle /></li>
                                    <li className="text-gray-900"><FaSquareFacebook /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </form>

                <div className='mt-4 text-center'>
                    <a href="/createCount" className="text-white hover:font-bold">Create a count</a>
                </div>
            </div>
        </section>
    )
}