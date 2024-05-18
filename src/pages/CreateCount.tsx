/* const handleSubmit = (e) => {
    e.preventDefault()
}  */

export const CreateCount = () => {
    return(
        <section className="w-full h-screen bg-banner2 bg-cover bg-center flex justify-center items-center bg-blend-color bg-[#000000bd]">
            <div className="overflow-y-auto max-h-screen w-full flex justify-center py-20 scroll-hidden ">
                <div className="border border-white/20 px-10 py-5 rounded backdrop-blur-sm h-full">
                    <h1 className="font-bold text-3xl mb-4 text-center text-white">Rest<span className="text-[#AE8135]">App</span></h1>
                    <h2 className="mb-2 font-semibold text-white text-center">Create a count</h2>
                    <form
                        className="flex flex-col gap-4 "
                        /* onSubmit={handleSubmit} */
                    >
                        <div className="flex flex-col gap-2 w-96">
                            <label
                                htmlFor="name"
                                className="font-semibold text-[#AE8135]">
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Type here"
                                className="border border-[#ffffff49] p-2 rounded outline-none text-px bg-transparent text-white"
                            />
                        </div>
                        <div className="flex flex-col gap-2 w-96">
                            <label
                                htmlFor="number"
                                className="font-semibold text-[#AE8135]">
                                Phone number
                            </label>
                            <input
                                type="number"
                                name="number"
                                id="number"
                                placeholder="Your phone number"
                                className="border border-[#ffffff49] p-2 rounded outline-none text-px bg-transparent text-white"
                            />
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex flex-col gap-2 ">
                                <label
                                    htmlFor="date"
                                    className="font-semibold text-[#AE8135]">
                                    Birthday
                                </label>
                                <input
                                    type="date"
                                    name="date"
                                    id="date"
                                    placeholder="Your phone number"
                                    className="border border-[#ffffff49] p-2 rounded outline-none text-px bg-transparent text-white"
                                />
                            </div>
                            <div className="flex flex-col gap-7">
                                <label className="font-semibold text-[#AE8135]">Sexo</label>
                                <div className=" flex gap-5">
                                    <div className="flex gap-2">
                                        <label
                                            htmlFor="M"
                                            className="font-semibold text-[#AE8135]">
                                            M
                                        </label>
                                        <input
                                            type="radio"
                                            name="sex"
                                            id="M"
                                            className="w-5 bg-transparent border border-[#ffffff49]"
                                        />
                                    </div>
                                    <div className="flex gap-2">
                                        <label
                                            htmlFor="F"
                                            className="font-semibold text-[#AE8135]">
                                            F
                                        </label>
                                        <input
                                            type="radio"
                                            name="sex"
                                            id="F"
                                            className="w-5 bg-transparent border border-[#ffffff49]"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 w-96">
                            <label
                                htmlFor="email"
                                className="font-semibold text-[#AE8135]">
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
                        <div className="flex flex-col gap-2 w-96">
                            <label
                                htmlFor="password"
                                className="font-semibold text-[#AE8135]">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Password"
                                className="border border-[#ffffff49] p-2 rounded outline-none text-px bg-transparent text-[#fff]"
                            />
                        </div>
                        <div className="flex flex-col gap-2 w-96">
                            <label
                                htmlFor="confirmPassword"
                                className="font-semibold text-[#AE8135]">
                                    Confirm your password </label>
                            <input
                                type="password"
                                name="confirmPassword"
                                id="confirmPassword"
                                placeholder="Confirm password"
                                className="border border-[#ffffff49] p-2 rounded outline-none text-px bg-transparent text-[#fff]"
                            />
                        </div>
                        <div className=" flex items-center gap-4 ">
                            <button className="rounded py-2 bg-gradient-to-r from-[#ae823580] to-transparent opacity-80 text-white w-full hover:opacity-100">Create a count</button>
                        </div>
                    </form>
                    <div className='mt-3 flex justify-center '>
                        <a
                            href="/authSignIn"
                            className="text-white hover:font-semibold p-2 ">
                            Back to login
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}