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
import type { JSX } from "react";

type UserProfileProps = {
  threeLine?: JSX.Element;
};


function UserProfile(props:UserProfileProps) {

 console.log("props",props)

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
            {/* user icon */}

            <div className="relative z-50">

                <Menubar className="border-none">
                    <MenubarMenu >
                        <MenubarTrigger className="group flex cursor-pointer text-white gap-3 lg:bg-black text-md outline-none px-3 py-2 lg:hover:bg-gray-700  rounded-full transition-colors">

                            <span className="hidden lg:flex">{firstName}</span>

                            {props.threeLine}

                            <MenubarShortcut className="flex items-center">
                                <div className="max-lg:hidden lg:mt-0.5 lg:transition-transform lg:duration-100 lg:group-aria-expanded:rotate-180 lg:rotate-360">
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
        </>
    )
}

export default UserProfile
