
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom"


function VerifyOtp() {

    const { register, handleSubmit, formState: { errors } } = useForm();



    return (
        <div className="overflow-hidden">

            {/* nav bar  */}

            <div className="flex items-center justify-between w-full px-4.5 py-4 border-b-2 border-gray-200 shadow-md shadow-gray-200/75 h-full">

                {/* Back botton  */}

                <Link
                    to={"/captains/dashboard/online/pickup-rider"}>

                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <title>Arrow left</title>
                        <path
                            d="M22 13.5H6.3l5.5 7.5H8.3l-6.5-9 6.5-9h3.5l-5.5 7.5H22v3Z"
                            fill="currentColor"
                        />
                    </svg>

                </Link>

                <div className="cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="black" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-question-mark-icon lucide-circle-question-mark"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" /></svg>
                </div>

            </div>

            {/* OTP INPUT  */}

            <div className="flex flex-col justify-center items-center w-full mt-4 space-y-4 pb-10">

                {/* kaypad svg */}

                <div className="flex justify-center items-center w-full">

                    <svg xmlns="http://www.w3.org/2000/svg"
                        fill="#0076a1"
                        width="28"
                        height="28"
                        viewBox="0 0 512 512">
                        <title>ionicons-v5-g</title>
                        <path d="M256,400a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" />
                        <path d="M256,272a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" />
                        <path d="M256,144a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" />
                        <path d="M384,272a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" />
                        <path d="M384,144a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" />
                        <path d="M128,272a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" />
                        <path d="M128,144a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" />
                    </svg>

                </div>

                {/* form */}

                <form onSubmit={() => { "" }}>

                    <div className="flex flex-col items-center space-y-6">

                        <label htmlFor="saddam's"
                            className="text-3xl font-bold"
                        >
                            Enter Saddam's PIN
                        </label>

                        <input
                            id="saddam's"
                            type="text"
                            className="peer px-[13px] py-3 w-[25vh] bg-gray-100 text-lg outline-none ring-2 focus:bg-white ring-blue-300"
                        />

                    </div>

                </form>


                <Link
                    to={"/captains/dashboard/online/droping-saddam"}
                    className="text-sm underline text-black/90 mt-10"
                >
                    Rider Can't find PIN
                </Link>


            </div>

        </div>
    )
}

export default VerifyOtp
