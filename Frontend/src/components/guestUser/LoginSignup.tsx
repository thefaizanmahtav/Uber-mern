import { Link } from "react-router-dom"
import signupRounde from "../../images/Signup-roundededge.svg"


function LoginSignup() {

    return (
        <div className=" overflow-x-hidden max-w-full md:px-10 pb-10  xl:pb-[60px] xl:px-[148px] px-6">

            {/* login signup  */}

            <div className="flex max-lg:flex-col lg:justify-between ">

                <div className="space-y-10 mb-10">

                    <h1 className="md:w-full text-[30px] my-4 xl:items-center h-fit xl:w-lg md:text-[38px] font-bold">Log in to see your account details</h1>
                    <p className="text-lg xl:w-md text-black/80">View past trips, tailored suggestions, support resources, and more.</p>

                    {/* login signup button */}

                    <div className="flex items-center">
                        <Link
                            to={""}
                            className="bg-black w-fit py-3.5 px-8 text-center font-semibold text-white text-lg rounded-lg">
                            Log in to your account
                        </Link>

                        <div className="group py-3.5 px-8">

                            <Link
                                className="text-black/90 text-lg"
                                to={""}>
                                Create an account
                            </Link>

                            <div className="h-[1.5px] w-37 bg-gray-300 relative overflow-hidden">
                                <div className="absolute left-0 top-0 h-full w-full bg-black scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100"></div>
                            </div>
                        </div>

                    </div>

                </div>

                {/* imgs */}

                <div className=" flex items-center lg:h-[400px] lg:w-[600px] w-full rounded-xl">
                    <img
                        src={signupRounde}
                        alt="uber img"
                        className="w-full h-full rounded-xl object-cover "
                    />


                </div>

            </div>

            {/* card 1 */}

            <div className="flex pt-25 max-lg:flex-col">

                <div className="xl:flex xl:flex-row-reverse xl:items-center xl:gap-20">

                    <div className="space-y-10 mb-10">

                        <h1 className="md:w-full text-[30px] my-4 xl:items-center h-fit xl:w-lg md:text-[38px] font-bold">Drive when you want, make what you need</h1>
                        <p className="text-lg xl:w-md text-black/80">Make money on your schedule with deliveries or rides—or both. You can use your own car or choose a rental through Uber.</p>

                        {/* login signup button */}

                        <div className="flex items-center">
                            <Link
                                to={""}
                                className="bg-black w-fit py-3.5 px-8 text-center font-semibold text-white text-lg rounded-lg">
                                Get started
                            </Link>

                            <div className="group py-3.5 px-8">

                                <Link
                                    className="text-black/90 text-lg"
                                    to={""}>
                                    Already have an account? Sign in
                                </Link>

                                <div className="h-[1.5px] w-66 bg-gray-300 relative overflow-hidden">
                                    <div className="absolute left-0 top-0 h-full w-full bg-black scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100"></div>
                                </div>
                            </div>

                        </div>

                    </div>

                    {/* imgs */}

                    <div className=" flex items-center lg:h-[600px] lg:w-[610px] w-full rounded-xl">
                        <img
                            src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=1152/height=1152/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy85NjRkZDNkMS05NGU3LTQ4MWUtYjI4Yy0wOGQ1OTM1M2I5ZTAucG5n"
                            alt="uber img"
                            className="w-full h-full rounded-xl object-cover "
                        />


                    </div>
                </div>


            </div>

            {/* card 2 */}

            <div className="flex pt-25 max-lg:flex-col">

                <div className="xl:flex xl:items-center xl:gap-20">

                    <div className="space-y-10 mb-10">

                        <h1 className="md:w-full text-[30px] my-4 xl:items-center h-fit xl:w-lg md:text-[38px] font-bold">The Uber you know, reimagined for business</h1>
                        <p className="text-lg xl:w-md text-black/80">Uber for Business is a platform for managing global rides and meals, and local deliveries, for companies of any size.</p>

                        {/* login signup button */}

                        <div className="flex items-center">
                            <Link
                                to={""}
                                className="bg-black w-fit py-3.5 px-8 text-center font-semibold text-white text-lg rounded-lg">
                                Get started
                            </Link>

                            <div className="group py-3.5 px-8">

                                <Link
                                    className="text-black/90 text-lg"
                                    to={""}>
                                    Check out our solutions
                                </Link>

                                <div className="h-[1.5px] w-48 bg-gray-300 relative overflow-hidden">
                                    <div className="absolute left-0 top-0 h-full w-full bg-black scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100"></div>
                                </div>
                            </div>

                        </div>

                    </div>

                    {/* imgs */}

                    <div className=" flex items-center lg:h-[600px] lg:w-[610px] w-full rounded-xl">
                        <img
                            src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=1152/height=1152/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy83NmJhZjFlYS0zODVhLTQwOGMtODQ2Yi01OTIxMTA4NjE5NmMucG5n"
                            alt="uber img"
                            className="w-full h-full rounded-xl object-cover "
                        />


                    </div>
                </div>


            </div>

            {/* card 3 */}

            <div className="flex pt-25 max-lg:flex-col">

                <div className="flex flex-col-reverse xl:flex-row-reverse xl:items-center xl:gap-20">

                    <div className="space-y-10 mb-10">

                        <h1 className="md:w-full text-[30px] my-4 xl:items-center h-fit xl:w-lg md:text-[38px] font-bold">Drive when you want, make what you need</h1>
                        <p className="text-lg xl:w-md text-black/80">Make money on your schedule with deliveries or rides—or both. You can use your own car or choose a rental through Uber.</p>

                        {/* login signup button */}

                        <div className="flex items-center">
                            <Link
                                to={""}
                                className="bg-black w-fit py-3.5 px-8 text-center font-semibold text-white text-lg rounded-lg">
                                Get started
                            </Link>

                        </div>

                    </div>

                    {/* imgs */}

                    <div className=" flex items-center lg:h-[600px] lg:w-[610px] w-full rounded-xl">
                        <img
                            src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=1152/height=1152/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8xODM0ZTZmZC0zM2UzLTRjOTUtYWQ3YS1mNDg0YThjODEyZDcuanBn"
                            alt="uber img"
                            className="w-full h-full rounded-xl object-cover "
                        />


                    </div>

                </div>


            </div>



        </div>
    )
}

export default LoginSignup
