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
                            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_1104,w_1104/v1684855112/assets/96/4dd3d1-94e7-481e-b28c-08d59353b9e0/original/earner-illustra.png"
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
                            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_1104,w_1104/v1684887108/assets/76/baf1ea-385a-408c-846b-59211086196c/original/u4b-square.png"
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
                            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_1104,w_1104/v1696243819/assets/18/34e6fd-33e3-4c95-ad7a-f484a8c812d7/original/fleet-management.jpg"
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
