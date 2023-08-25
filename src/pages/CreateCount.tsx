const handleSubmit = (e) => {
    e.preventDefault()
} 

export const CreateCount = () => {
    return(
        <section className="w-full p-10 bg-bgSignIn bg-cover bg-center flex justify-center items-center bg-blend-color bg-[#000000d3]">
            <div className="bg-[#ffffff49] px-10 py-5 rounded">
                <h1 className="font-bold text-3xl mb-4 text-center text-white">Rest<span className="text-black">App</span></h1>
                <h2 className="mb-2 font-bold text-white text-center">Create a count</h2>
                <form 
                    className="flex flex-col gap-4 "
                    onSubmit={handleSubmit}
                >
                    
                    <div className="flex flex-col gap-2 w-80">
                        <label 
                            htmlFor="name" 
                            className="font-bold text-gray-900">
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

                    <div className="flex flex-col gap-2 w-80">
                        <label 
                            htmlFor="number" 
                            className="font-bold text-gray-900">
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
                                className="font-bold text-gray-900">
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
                            <label className="font-bold text-gray-900">Sexo</label>
                            <div className=" flex gap-5">
                                <div className="flex gap-2">
                                    <label 
                                        htmlFor="M" 
                                        className="font-bold text-gray-900">
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
                                        className="font-bold text-gray-900">
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
                        <label 
                            htmlFor="password" 
                            className="font-bold text-gray-900">
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

                    <div className="flex flex-col gap-2 w-80">
                        <label 
                            htmlFor="confirmPassword" 
                            className="font-bold text-gray-900">
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
                        <button className="rounded py-2 bg-gray-900 opacity-80 text-white w-full hover:opacity-100">Create a count</button>
                    </div>
                </form>
                <div className='mt-3 border inline-block rounded'>
                    <a 
                        href="/authSignIn" 
                        className="text-white hover:font-bold p-2 ">
                        Back
                    </a>
                </div>
            </div>
        </section>
    )
}