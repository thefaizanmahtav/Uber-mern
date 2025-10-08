import { MenubarShortcut } from "@/components/ui/menubar"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import clsx from "clsx";
import useAuthCaptain from "@/hooks/useAuthCaptain"

function UberAccountCaptain() {

    const [activeTab, setActiveTab] = useState("home");

    const { captain } = useAuthCaptain()

    const firstName = captain?.fullName.firstName
    const lastName = captain?.fullName.lastName
    const email = captain?.email

    const vehicleCapacity = captain?.vehicle.capacity
    const vehicleColor = captain?.vehicle.color
    const vehiclePlate = captain?.vehicle.plate
    const vehicleType = captain?.vehicle.vehicleType


    useEffect(() => {
        setActiveTab("home")
    }, [])

    return (
        <div className="overflow-hidden">


            <div className="lg:h-18 text-white text-xl flex items-center lg:bg-black">
                <Link
                    to="/captains/dashboard"
                    className=" flex font-semibold py-2 pl-5 text-black lg:text-white "
                >
                    Uber Account
                </Link>
            </div >


            {/* menu bar */}

            <div className="lg:flex"> {/* Wrapeer */}

                <div className={clsx(
                    "flex justify-center h-fit  lg:flex-col lg:w-44",
                    ["info", "vehicle", "security", "privacy"].includes(activeTab) && "lg:w-78"
                )}>

                    {
                        ["home", "info", "vehicle", "security", "privacy"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => {
                                    setActiveTab(tab);

                                }}
                                className={clsx(
                                    "flex text-[14px] lg:text-[16px] font-semibold py-2  px-8 md:py-4 md:px-8 transition-all duration-500 lg:duration-0 border-b-[7px] lg:border-l-[6px] lg:border-b-0 outline-none max-lg:hover:bg-gray-100 overflow-hidden",
                                    activeTab === tab
                                        ? "text-black border-black lg:bg-gray-200/75"
                                        : "text-gray-600 border-gray-200"
                                )}


                            >
                                {tab === "home"
                                    ? "Home"
                                    : tab === "vehicle"
                                        ? "Vehicle Info"
                                        : tab === "info"
                                            ? "Personal Info"
                                            : tab === "security"
                                                ? "Security"
                                                : "Privacy & Data"}

                            </button>
                        ))
                    }

                </div>

                <div className="flex items-center lg:justify-start">


                    {/* menu bar items Home */}

                    {activeTab === "home" && (

                        <div className=" w-full flex justify-center bg-white
                                animate-in fade-in slide-in-from-left
                                lg:slide-in-from-right
                                duration-300 ease-out border-none mt-2">

                            {/* menu bar content */}

                            <div className="w-full lg:justify-start  lg:mt-10 lg:w-fit p-4 lg:p-0">

                                <div>

                                    <div className="flex justify-center items-center flex-col">



                                        <Avatar className="flex justify-center items-center h-22 w-22">
                                            <AvatarImage src="https://avatars.githubusercontent.com/u/165957728?s=400&u=04a7eb72cf091603f9d8d6ae301809699fd75443&v=4" />
                                            <AvatarFallback className="flex justify-center items-center rounded-full bg-gray-300 h-22 w-22">CN</AvatarFallback>
                                        </Avatar>

                                        <div className="text-3xl font-semibold">
                                            {firstName}
                                        </div>

                                        <div className="flex justify-center  text-lg mt-1 text-gray-500">
                                            {email}
                                        </div>

                                    </div>

                                    <div className="flex justify-center mt-7 gap-3">

                                        <div className="p-4 h-24 w-46 lg:w-54 shadow-md bg-gray-100 rounded-2xl space-y-2"
                                            onClick={() => setActiveTab("info")}
                                        >
                                            <MenubarShortcut className="flex justify-center">
                                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><title>Person</title>
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 6.5c0 3-2.5 5.5-5.5 5.5S6.5 9.5 6.5 6.5 9 1 12 1s5.5 2.5 5.5 5.5Zm-3 0C14.5 5.1 13.4 4 12 4S9.5 5.1 9.5 6.5 10.6 9 12 9s2.5-1.1 2.5-2.5ZM3 20c0-3.3 2.7-6 6-6h6c3.3 0 6 2.7 6 6v3h-3v-3c0-1.7-1.4-3-3-3H9c-1.6 0-3 1.3-3 3v3H3v-3Z" fill="currentColor">
                                                    </path>
                                                </svg>
                                            </MenubarShortcut>
                                            <span className="flex justify-center text-bold text-md font-semibold">Personal info</span>
                                        </div>

                                        <div className="p-4 h-24 w-46 lg:w-54 shadow-md bg-gray-100 rounded-2xl space-y-2"
                                            onClick={() => setActiveTab("security")}
                                        >
                                            <MenubarShortcut className="flex justify-center">
                                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><title>Shield check</title>
                                                    <path d="M12 1C6.68 1 2 3.04 2 3.04v11.9c0 4.84 5.57 7.15 10 9.06 4.4-1.89 10-4.2 10-9.06V3.04S17.5 1 12 1Zm7 13.94c0 2.39-3.09 4.07-7 5.79-4.03-1.77-7-3.39-7-5.79V5.15C6.65 4.64 9.26 4 12 4c2.83 0 5.39.63 7 1.14v9.8Z" fill="currentColor"></path>,<path d="m9.06 9.94-2.12 2.12L11 16.12l6.56-6.56-2.12-2.12L11 11.88 9.06 9.94Z" fill="currentColor">
                                                    </path>
                                                </svg>
                                            </MenubarShortcut>
                                            <span className="flex justify-center text-bold text-md font-semibold">Security</span>
                                        </div>

                                        <div className="p-4 h-24 w-46 lg:w-54 shadow-md bg-gray-100 rounded-2xl space-y-2"
                                            onClick={() => setActiveTab("privacy")}
                                        >
                                            <MenubarShortcut className="flex justify-center">
                                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><title>Lock privacy</title>
                                                    <path d="M20.05 12.332V7.5a7.5 7.5 0 0 0-15 0v4.77L4 13.064V24h17V13.064l-.95-.732ZM8.05 7.5a4.5 4.5 0 0 1 9 0v2.7L12.55 7l-4.5 3.162V7.5Zm2.18 13.985 1.06-3.201a2.104 2.104 0 0 1-.9-1.71 2.081 2.081 0 0 1 .615-1.477 2.11 2.11 0 0 1 2.97 0 2.083 2.083 0 0 1 .615 1.477 2.036 2.036 0 0 1-.9 1.71l1 3.2h-4.46Z" fill="currentColor">
                                                    </path>
                                                </svg>
                                            </MenubarShortcut>
                                            <span className="flex justify-center text-bold text-md font-semibold">Privacy & Data</span>
                                        </div>


                                    </div>

                                </div>

                            </div>

                        </div>
                    )}

                    {/* menu bar items Information */}


                    {activeTab === "info" && (

                        <div className="w-full flex justify-center bg-white
                                animate-in fade-in slide-in-from-right
                                duration-300 ease-out border-none mt-2 lg:mt-0">

                            <div className="w-full lg:w-3xl p-6 pl-8 mt-2">

                                <h1 className="text-4xl font-semibold ">Personal info</h1>

                                <div className="flex justify-center py-6 flex-col">

                                    <Avatar className="flex justify-center items-center  h-26 w-26">
                                        <AvatarImage src="https://avatars.githubusercontent.com/u/165957728?s=400&u=04a7eb72cf091603f9d8d6ae301809699fd75443&v=4" />
                                        <AvatarFallback className="flex justify-center items-center rounded-full bg-gray-300 h-22 w-22">CN</AvatarFallback>
                                    </Avatar>

                                </div>

                                {/* captain Name */}

                                <div className="flex justify-between lg:w-full items-center border-b-2 border-b-gray-100">

                                    <div className="flex flex-col justify-center ">
                                        <div className="text-lg font-semibold text-black/80 mt-3">Name</div>
                                        <p className="flex text-lg mb-3 text-black/60 my-1">{firstName}{" "}{lastName}</p>
                                    </div>
                                    <Link className="" to={""}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" color="#A6A6A6"><title>Chevron right small</title><path d="m16.9 12-4.6 6H8.5l4.6-6-4.6-6h3.8l4.6 6Z" fill="currentColor"></path>
                                        </svg>
                                    </Link>

                                </div>

                                {/* captain email */}

                                <div className="flex justify-between items-center border-b-2 border-b-gray-100">

                                    <div className="flex flex-col justify-center ">
                                        <div className="text-lg font-semibold text-black/80 mt-3">Email</div>
                                        <p className="flex items-center mb-3 text-lg text-black/60 my-1">{email}
                                            <div className="flex justify-center items-center rounded-full ml-1 h-4 w-4 bg-green-700 ">
                                                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" data-baseweb="icon" className="_css-cezCMg"><title>email is verified</title>
                                                    <path d="m9 20.1-8.1-8 2.2-2.2 5.9 6 11.9-12 2.2 2.2L9 20.1Z" fill="white"></path>
                                                </svg>
                                            </div>
                                        </p>
                                    </div>
                                    <Link className="" to={""}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" color="#A6A6A6"><title>Chevron right small</title><path d="m16.9 12-4.6 6H8.5l4.6-6-4.6-6h3.8l4.6 6Z" fill="currentColor"></path></svg>
                                    </Link>
                                </div>

                            </div>
                        </div>

                    )}

                    {/* menu bar items Vehecle */}


                    {activeTab === "vehicle" && (
                        <div className="w-full flex justify-center bg-white
                                animate-in fade-in slide-in-from-right
                                duration-300 ease-out border-none mt-2 lg:mt-0">

                            <div className="w-full lg:w-3xl p-6 pl-8 mt-2">

                                <h1 className="text-4xl font-semibold ">Vehicle info</h1>

                                <div className="flex justify-center py-6 flex-col">

                                    <Avatar className="flex justify-center items-center  h-26 w-26">
                                        <AvatarImage src="https://www.carandbike.com/_next/image?url=https://images.carandbike.com/bike-images/colors/hero/maestro-edge/hero-maestro-edge-techno-blue.png?v=1639636609&w=750&q=75" />
                                        <AvatarFallback className="flex justify-center items-center rounded-full bg-gray-300 h-22 w-22">CN</AvatarFallback>
                                    </Avatar>

                                </div>

                                {/* Vehicle model */}

                                <div className="flex justify-between lg:w-full items-center border-b-2 border-b-gray-100">

                                    <div className="flex flex-col justify-center ">
                                        <div className="text-lg font-semibold text-black/80 mt-3">Model</div>
                                        <p className="flex text-lg mb-3 text-black/60 my-1">demo</p>
                                    </div>
                                    <Link className="" to={""}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" color="#A6A6A6"><title>Chevron right small</title><path d="m16.9 12-4.6 6H8.5l4.6-6-4.6-6h3.8l4.6 6Z" fill="currentColor"></path>
                                        </svg>
                                    </Link>

                                </div>

                                {/* Vehicle type */}

                                <div className="flex justify-between items-center border-b-2 border-b-gray-100">

                                    <div className="flex flex-col justify-center ">
                                        <div className="text-lg font-semibold text-black/80 mt-3">Type</div>
                                        <p className="flex items-center mb-3 text-lg text-black/60 my-1">{vehicleType}</p>
                                    </div>
                                    <Link className="" to={""}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" color="#A6A6A6"><title>Chevron right small</title><path d="m16.9 12-4.6 6H8.5l4.6-6-4.6-6h3.8l4.6 6Z" fill="currentColor"></path></svg>
                                    </Link>
                                </div>

                                {/* Vehicle plate */}

                                <div className="flex justify-between items-center border-b-2 border-b-gray-100">

                                    <div className="flex flex-col justify-center ">
                                        <div className="text-lg font-semibold text-black/80 mt-3">Number</div>
                                        <p className="flex items-center mb-3 text-lg text-black/60 my-1">{vehiclePlate}</p>
                                    </div>
                                    <Link className="" to={""}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" color="#A6A6A6"><title>Chevron right small</title><path d="m16.9 12-4.6 6H8.5l4.6-6-4.6-6h3.8l4.6 6Z" fill="currentColor"></path></svg>
                                    </Link>
                                </div>

                                {/* Vehicle color */}

                                <div className="flex justify-between items-center border-b-2 border-b-gray-100">

                                    <div className="flex flex-col justify-center ">
                                        <div className="text-lg font-semibold text-black/80 mt-3">color</div>
                                        <p className="flex items-center mb-3 text-lg text-black/60 my-1">{vehicleColor}</p>
                                    </div>
                                    <Link className="" to={""}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" color="#A6A6A6"><title>Chevron right small</title><path d="m16.9 12-4.6 6H8.5l4.6-6-4.6-6h3.8l4.6 6Z" fill="currentColor"></path></svg>
                                    </Link>
                                </div>

                                {/* Vehicle capacity */}

                                <div className="flex justify-between items-center border-b-2 border-b-gray-100">

                                    <div className="flex flex-col justify-center ">
                                        <div className="text-lg font-semibold text-black/80 mt-3">Capacity</div>
                                        <p className="flex items-center mb-3 text-lg text-black/60 my-1">{vehicleCapacity}</p>
                                    </div>
                                    <Link className="" to={""}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" color="#A6A6A6"><title>Chevron right small</title><path d="m16.9 12-4.6 6H8.5l4.6-6-4.6-6h3.8l4.6 6Z" fill="currentColor"></path></svg>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    )}

                    {/* menu bar items Security */}


                    {activeTab === "security" && (
                        <h1 className="flex justify-center items-center text-5xl">Soon...</h1>
                    )}

                    {/* menu bar items Praivacy */}


                    {activeTab === "privacy" && (
                        <h1 className="flex justify-center items-center text-5xl">Soon...</h1>
                    )}

                </div>
            </div>
        </div>

    )
}

export default UberAccountCaptain
