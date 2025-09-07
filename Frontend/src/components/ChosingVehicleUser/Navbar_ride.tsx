import { useEffect, useState } from "react";
import uberLogo from "../../images/Uber-Black_logo.png"
import clsx from "clsx";
import { Menubar, MenubarContent, MenubarMenu, MenubarTrigger } from "@radix-ui/react-menubar";
import { MenubarShortcut } from "../ui/menubar";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { ActivitySquareIcon, HelpCircle, User, Wallet2Icon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useMutation } from "@tanstack/react-query";
import { logoutUser } from "@/API/api";
import queryClient from "@/config/queryClinte";
import useAuth from "@/hooks/useAuth";


function Navbar_ride() {
    const [activeTab, setActiveTab] = useState("ride");

    useEffect(() => {
        activeTab
    })

    const navigate = useNavigate()

    const { user } = useAuth()

    const firstName = user?.fullName?.firstName
    const lastName = user?.fullName?.lastName

    const {
        mutate: logout,
        isPending
    } = useMutation({
        mutationFn: logoutUser,
        onSuccess: () => {
            queryClient.removeQueries({ queryKey: ["auth"] }),
                navigate('/', { replace: true })
        }
    })

    if (isPending) {
        return <p className="flex justify-center text-2xl">Loading...</p>
    }

    return (
        <>
            <div className="hidden relative z-6666 lg:px-2.5 lg:w-full lg:flex items-center bg-white">

                <div className="flex w-full items-center justify-start border-b-[5px] border-gray-100">

                    <div className="flex justify-between items-center w-full lg:px-14">

                        {/* right navbar */}

                        <div className="text-white text-xl flex justify-center gap-16">

                            <img
                                className="h-8 lg:h-15 flex"
                                src={uberLogo}
                                alt="Uber Logo"
                            />

                            <div className="flex">

                                {
                                    ["ride"].map((tab) => (

                                        <button
                                            key={tab}
                                            onClick={() => {
                                                setActiveTab(tab);

                                            }}
                                            className={clsx(
                                                "flex text-[15px] lg:text-[16px] font-semibold text-black py-4 mt-2 px-6 -mb-[5px] transition-all duration-500 border-b-[5px] outline-none ",
                                                activeTab === tab
                                                    ? "border-black"
                                                    : "border-gray-100"
                                            )}


                                        >
                                            {tab === "ride"
                                                ? <span className="flex items-center gap-2">
                                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><title>Car front</title><path d="m20.9 9-1.5-4.6c-.3-.8-1-1.4-1.9-1.4H6.4c-.9 0-1.6.5-1.9 1.4L3 9H1v3h1v9h4v-2h12v2h4v-9h1V9h-2.1ZM5 14h4v2H5v-2Zm10 2v-2h4v2h-4ZM7.1 6h9.7l1.3 4H5.8l1.3-4Z" fill="currentColor"></path>
                                                    </svg>
                                                    <span>
                                                        Ride
                                                    </span>
                                                </span>
                                                : null}

                                        </button>
                                    ))
                                }

                            </div>

                        </div >

                        {/* left navbar */}

                        <div className="flex items-center gap-3">

                            {/* share trip */}

                            <div className="">
                                <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none"><title>Get share link for your selected trip itinerary</title><path fill-rule="evenodd" clip-rule="evenodd" d="M18.5 14c-1.2 0-2.3.5-3.1 1.3L10 12.6c0-.2.1-.4.1-.5 0-.1 0-.4-.1-.5l5.4-2.7c.8.8 1.9 1.3 3.1 1.3 2.5 0 4.5-2 4.5-4.5s-2-4.5-4.5-4.5-4.5 2-4.5 4.5c0 .2 0 .4.1.5L8.7 8.9c-.8-.8-1.9-1.3-3.1-1.3-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5c1.2 0 2.3-.5 3.1-1.3l5.4 2.7c0 .2-.1.4-.1.5 0 2.5 2 4.5 4.5 4.5s4.5-2 4.5-4.5-2-4.5-4.5-4.5Z" fill="currentColor"></path></svg>
                            </div>

                            {/* activity */}

                            <div className="flex justify-center items-center text-md font-medium cursor-pointer bg-gray-100 px-5 py-2.5 rounded-full gap-2">

                                <div>
                                    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none"><title>Receipt</title><path fill-rule="evenodd" clip-rule="evenodd" d="M3 23V1h18v22l-5.5-3-3.5 3-3.5-3L3 23ZM7 9h10V6H7v3Zm10 3H7v3h10v-3Z" fill="currentColor"></path></svg>
                                </div>
                                <div>
                                    Activity
                                </div>

                            </div>

                            {/* user icon */}

                            <div className="relative z-50 ">

                                <Menubar className="border-none">
                                    <MenubarMenu >
                                        <MenubarTrigger className="group flex cursor-pointer text-white gap-3 bg-black text-md outline-none px-3 py-2 hover:bg-gray-700  rounded-full transition-colors">
                                            {firstName}
                                            <MenubarShortcut>
                                                <div className="mt-1 transition-transform duration-100 group-aria-expanded:rotate-180 rotate-360">
                                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" color="white"><title>Chevron right small</title><path d="m16.9 12-4.6 6H8.5l4.6-6-4.6-6h3.8l4.6 6Z" fill="white"></path>
                                                    </svg>
                                                </div>
                                            </MenubarShortcut>
                                        </MenubarTrigger>

                                        <MenubarContent
                                            align="end"
                                            sideOffset={4}
                                            className={cn(
                                                "w-screen md:w-[420px] bg-white shadow-md md:shadow-2xl md:inset-1 md:shadow-gray-500/50 rounded-xl",
                                                "animate-in fade-in slide-in-from-right md:slide-in-from-top-5 md:zoom-in-95",
                                                "duration-300 ease-out",
                                                "border border-gray-200 mt-2 lg:mt-3"

                                            )}
                                        >
                                            <div className="w-full h-[90vh] md:h-124 p-4 flex flex-col justify-between">

                                                <div>

                                                    <div className="flex justify-between">

                                                        <div className="flex font-bold text-3xl">
                                                            {firstName}{" "} {lastName}
                                                        </div>

                                                        <div className="flex pt-1" >

                                                            <Avatar className="h-18 w-18">
                                                                <AvatarImage src="https://avatars.githubusercontent.com/u/165957728?s=400&u=04a7eb72cf091603f9d8d6ae301809699fd75443&v=4" />
                                                                <AvatarFallback>CN</AvatarFallback>
                                                            </Avatar>

                                                        </div>


                                                    </div>

                                                    <div className="flex justify-center mt-4 gap-3">

                                                        <div className="p-4 h-24 w-46 shadow-md bg-gray-100 hover:bg-gray-200 rounded-2xl space-y-1">
                                                            <MenubarShortcut className="flex justify-center"><HelpCircle className="mt-1 h-6 w-6"></HelpCircle></MenubarShortcut>
                                                            <span className="flex justify-center text-bold text-lg font-semibold">Help</span>
                                                        </div>

                                                        <div className="p-4 h-24 w-46 shadow-md bg-gray-100 hover:bg-gray-200 rounded-2xl space-y-1">
                                                            <MenubarShortcut className="flex justify-center"><Wallet2Icon className="mt-1 h-6 w-6"></Wallet2Icon> </MenubarShortcut>
                                                            <span className="flex justify-center text-bold text-lg font-semibold">Wallet</span>
                                                        </div>

                                                        <div className="p-4 h-24 w-46 shadow-md bg-gray-100 hover:bg-gray-200 rounded-2xl space-y-1">
                                                            <MenubarShortcut className="flex justify-center"><ActivitySquareIcon className="mt-1 h-6 w-6"></ActivitySquareIcon> </MenubarShortcut>
                                                            <span className="flex justify-center text-bold text-lg font-semibold">Activity</span>
                                                        </div>


                                                    </div>

                                                    <div className="mt-5 -mx-5 border-b-[6px] border-gray-300"></div>



                                                    <Link
                                                        to="/users/dashboard/uber-account"
                                                        className="flex items-center p-5 gap-7 -mx-5 hover:bg-gray-200 transition-colors"
                                                    >
                                                        <User className="h-6 w-6" />
                                                        <span className="text-lg font-semibold">Manage Account</span>
                                                    </Link>

                                                </div>

                                                <Button
                                                    onClick={() => logout()}
                                                    className="bg-gray-100 rounded-lg p-6.5 text-lg text-red-600 w-full hover:bg-gray-300 duration-500 ">
                                                    Sign out
                                                </Button>

                                            </div>

                                        </MenubarContent>
                                    </MenubarMenu>
                                </Menubar>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </>

    )

}

export default Navbar_ride
