import useAuth from "@/hooks/useAuth"
import { Link } from "react-router-dom"


function UserNavbar() {

    const { user } = useAuth()

    const firstName = user?.fullName?.firstName

    return (
        <div className="relative xl:top-17 hidden xl:px-42 xl:w-screen xl:h-14 xl:flex justify-between xl:items-center xl:bg-black">

            <div className="flex justify-center items-center">
                <h1 className="text-white/95 text-[18px] font-semibold mr-6">Welcome back,{firstName}</h1>

                <svg width="12px" height="12px" viewBox="0 0 24 24" fill="none" className="ml-4"><title>Calendar</title><path fill-rule="evenodd" clip-rule="evenodd" d="M23 8V4h-3V1h-3v3H7V1H4v3H1v4h22Zm0 15H1V10h22v13ZM8 14H5v3h3v-3Z" fill="white"></path>
                </svg>

                <span className="text-white/50 ml-4">
                    You have no upcoming trips
                </span>
            </div>

            <div className="flex justify-center items-center">


                <span className="mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-bookmark-icon lucide-bookmark"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" /></svg>

                </span>

                <Link
                    className="text-white font-semibold pr-8"
                    to={"/activity"}>
                    Activity
                </Link>



                <span className="mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-tag-icon lucide-tag rotate-90"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" /></svg>

                </span>

                <Link
                    className="text-white font-semibold pr-8"
                    to={"/activity"}>
                    Promotions
                </Link>


                <span className="mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user-round-icon lucide-user-round"><circle cx="12" cy="8" r="5" /><path d="M20 21a8 8 0 0 0-16 0" /></svg>

                </span>

                <Link
                    className="text-white font-semibold pr-8"
                    to="/users/dashboard/uber-account"
                >
                    Account
                </Link>

            </div>

        </div>
    )
}

export default UserNavbar
