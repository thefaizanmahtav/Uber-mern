import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"

function Payment() {

    const [active, setActive] = useState(true);

    // navigate to OTP page

    const navigate = useNavigate()

    const NavToDashoard = (e: any) => {
        e.preventDefault();
        setActive(false)

        setTimeout(() => {
            const path = "/captains/dashboard/online"
            navigate(path)
        }, 500)

    }


    return (
        <div className="overflow-hidden">

            {/* nav bar  */}

            <div className="flex items-center justify-between w-full px-4.5 py-4 h-full">

                {/* Back botton  */}

                <Link
                    to={"/captains/dashboard/online/droping-saddam"}>

                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <title>Arrow left</title>
                        <path
                            d="M22 13.5H6.3l5.5 7.5H8.3l-6.5-9 6.5-9h3.5l-5.5 7.5H22v3Z"
                            fill="currentColor"
                        />
                    </svg>

                </Link>

            </div>

            {/* price collection */}

            <div className="flex flex-col justify-center items-center px-5 w-full">

                {/* payment Card  */}

                <div className="flex flex-col justify-center items-center bg-[#00877cbd] h-[70vh] lg:w-lg w-full rounded-xl p-4 shadow-2xl shadow-gray-200">

                    <div className="flex flex-col justify-center items-center gap-3.5 h-full">


                        {/* title  */}

                        <h1 className="text-white text-4xl font-semibold">
                            Saddam will Pay
                        </h1>

                        {/* amount */}

                        <h1 className="text-white text-5xl font-semibold">₹140</h1>


                    </div>

                    {/* border */}

                    <div className="border-b-2 border-gray-100/40 w-full p-1"></div>

                    <div className="flex items-center justify-between w-full pt-4">

                        <div className="flex items-center gap-2.5">

                            {/* lock svg */}

                            <div className="bg-pink-400 p-1 rounded-full border-2 border-white">

                                <svg xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none" stroke="white"
                                    stroke-width="3"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="lucide lucide-lock-keyhole-icon lucide-lock-keyhole">
                                    <circle cx="12" cy="16" r="1" />
                                    <rect x="3" y="10" width="18" height="12" rx="2" />
                                    <path d="M7 10V7a5 5 0 0 1 10 0v3" />
                                </svg>
                            </div>


                            {/* taq svg */}

                            <div className="bg-yellow-500 p-1 rounded-full border-2 border-white">

                                <svg xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="white"
                                    stroke-width="3"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className=" lucide lucide-tag-icon lucide-tag">
                                    <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
                                    <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
                                </svg>
                            </div>

                        </div>

                        {/* more options */}

                        <div className="flex items-center">

                            <h1 className="text-lg font-semibold text-gray-100">
                                See more
                            </h1>

                            {/* arrow left svg */}

                            <div className="mt-1">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" color="#f3f4f6"><title>Chevron right small</title><path d="m16.9 12-4.6 6H8.5l4.6-6-4.6-6h3.8l4.6 6Z" fill="currentColor"></path></svg>

                            </div>

                        </div>

                    </div>


                </div>


                <div className="flex justify-center items-center w-full">



                    {/* complete uber ride */}

                    <div onClick={NavToDashoard}
                        className="flex items-center w-full lg:w-lg bg-red-700 rounded-md py-4 px-2 mt-24 overflow-hidden cursor-pointer">

                        <div className={`flex items-center w-full transition-all duration-500 ease-in ${active ? "translate-x-0" : "translate-x-full"} `}>


                            {/* svg left arrow  */}

                            <div className="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                            </div>

                            <div
                                className="flex flex-col justify-center items-center w-full font-semibold text-white">
                                COMPLETE UBER GO
                            </div>
                        </div>

                    </div>

                </div>

            </div>


        </div>
    )
}

export default Payment
