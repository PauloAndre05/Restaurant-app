import { FcGoogle } from "react-icons/fc";
import { FaSquareFacebook } from "react-icons/fa6";
import { FormEvent, useState } from "react";


export const SignIn = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const isInnputEmpty = email.length == 0 || password.length == 0

    function handleSubmit(event: FormEvent) {
        event.preventDefault()
        setEmail("")
        setPassword("")
    }

    function handleNewContent(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target
        if(name == "email"){
            setEmail(value)
        } else setPassword(value)
    }

    return(
        <section className="w-full h-screen bg-bgSignIn bg-cover bg-center flex flex-col gap-5 justify-center items-center bg-blend-color bg-[#000000bd] ">
            <div className="p-10 rounded border border-white/20 backdrop-blur-sm">
            <h1 className="font-bold text-3xl mb-10 text-center text-white">Rest<span className="text-[#AE8135]">App</span></h1>
                <form
                    className="flex flex-col gap-4"
                    onSubmit={handleSubmit}
                >

                    <div className="flex flex-col gap-2 w-80">
                        <label
                            htmlFor="email"
                            className="font-semibold text-[#AE8135]">
                            Email or phone number
                        </label>

                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleNewContent}
                            placeholder="Enter your E-mail"
                            className="border border-[#ffffff49] p-2 rounded outline-none text-px bg-transparent text-white"
                        />
                    </div>

                    <div className="flex flex-col gap-2 w-80">
                        <div className="flex justify-between items-center">
                            <label
                                htmlFor="password"
                                className="font-semibold text-[#AE8135]">
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
                            value={password}
                            onChange={handleNewContent}
                            placeholder="Enter your password"
                            className="border border-[#ffffff49] p-2 rounded outline-none text-px bg-transparent text-[#fff]"
                        />
                    </div>

                    <div className=" flex items-center gap-4 ">
                        <button
                            disabled={isInnputEmpty}
                            type="submit"
                            className={`rounded py-2 bg-gradient-to-r from-[#ae823580] to-transparent ${isInnputEmpty ? 'opacity-80 cursor-not-allowed' : 'hover:opacity-100 '} text-white w-full `}
                        >
                            Sign In
                        </button>
                        <div className="w-full">
                            <div className="w-full">
                                <ul className="flex items-center justify-evenly text-4xl">
                                    <li className=""><FcGoogle /></li>
                                    <li className="text-[#AE8135]"><FaSquareFacebook /></li>
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