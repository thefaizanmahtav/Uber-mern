import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import {
    Menubar,
    MenubarContent,
    MenubarMenu,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"

import uberLogo from "../../images/Uber-Black_logo.png"
import { Link, useNavigate } from "react-router-dom"
import { useMutation } from "@tanstack/react-query"
import queryClient from "@/config/queryClinte"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { ActivitySquareIcon, HelpCircle, User, Wallet2Icon } from "lucide-react"
import { Button } from "@/components/ui/button"
import useAuthCaptain from "@/hooks/useAuthCaptain"
import { logoutcaptain } from "@/API/apiCaptain"

function Navbar() {

    type Items = {
        label: string,
        to: string
    }

    const naveItems: Items[] = [
        { label: "Ride", to: "/ride" },
        { label: "Driver", to: "/driver" },
    ]

    const navigate = useNavigate()

    const { captain } = useAuthCaptain()

    const firstName = captain?.fullName?.firstName
    const lastName = captain?.fullName?.firstName

    const vehiclePlate = captain?.vehicle.plate


    const {
        mutate: logout,
        isPending
    } = useMutation({
        mutationFn: logoutcaptain,
        onSuccess: () => {
            queryClient.removeQueries({ queryKey: ["auth"] }),
                navigate('/', { replace: true })
        }
    })

    if (isPending) {
        return <p className="flex justify-center text-2xl">Loading...</p>
    }



    return (
        <nav className="fixed z-20 top-0 p-3 max-lg:py-1.5 w-full flex justify-between items-center lg:bg-white">

            {/* right nav items */}

            <div className="flex items-center justify-center">
                <div className="text-white text-xl flex justify-center max-lg:mb-10">
                    <img className="h-10 lg:h-12 flex lg:pl-18" src={uberLogo} alt="Uber Logo" />
                </div >

                <div className="hidden lg:flex lg:justify-center">

                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>

                                <ul className="flex ml-6 items-center">

                                    {naveItems.map(({ label, to }) => (
                                        <li key={to}>
                                            <NavigationMenuLink asChild>
                                                <Link to={to} className="text-black text-[16px] py-2 px-3 hover:bg-gray-100 hover:rounded-full">
                                                    {label}
                                                </Link>
                                            </NavigationMenuLink>
                                        </li>

                                    ))}
                                </ul>
                            </NavigationMenuItem>


                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="text-black text-[16px]">About</NavigationMenuTrigger>
                                <NavigationMenuContent className="bg-white rounded p-2 shadow text-black">
                                    <ul className="grid w-48">
                                        <li>
                                            <NavigationMenuLink>
                                                <Link
                                                    to='/about'
                                                    className={cn("block hover:bg-gray-100")}

                                                >
                                                    About
                                                </Link>
                                            </NavigationMenuLink>
                                        </li>
                                        <li>
                                            <NavigationMenuLink>
                                                <Link
                                                    to='/about'
                                                    className={cn("block  hover:bg-gray-100")}

                                                >
                                                    About2
                                                </Link>
                                            </NavigationMenuLink>
                                        </li>
                                        <li>
                                            <NavigationMenuLink>
                                                <Link
                                                    to='/about'
                                                    className={cn("block  hover:bg-gray-100")}

                                                >
                                                    About3
                                                </Link>
                                            </NavigationMenuLink>
                                        </li>

                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>

                        <NavigationMenuViewport />
                    </NavigationMenu>
                </div>
            </div >

            {/* middle nav items */}

            <div className="lg:hidden flex flex-col items-center space-y-1">

                <div className="flex items-center justify-center bg-black text-white text-lg font-semibold py-1.5 px-4.5  rounded-full">
                    ₹ 140.5
                </div>

                <div className="text-black bg-white font-semibold px-2 py-0.5 ">
                    TODAY
                </div>

            </div>



            {/* lg size left nav items */}

            <div className="lg:hidden group cursor-pointer bg-white p-3 rounded-full mb-8">
                <Link
                    to={"/captains/dashboard/uber-account"}
                    className="">
                    <svg
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Menu</title>
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M23 4H1v3h22V4Zm0 7H1v3h22v-3ZM1 18h22v3H1v-3Z"
                            fill="black"
                        />
                    </svg>
                </Link>
            </div>

            {/* lg size left nav items */}

            <div className="flex max-lg:hidden">
                <NavigationMenu>

                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <ul className="flex lg:pr-18 items-center">
                                <li>
                                    <NavigationMenuLink asChild>
                                        <Link
                                            to="/ride"
                                            className="hidden lg:inline-block lg:text-black lg:text-[16px] lg:py-2 lg:px-3 lg:hover:bg-gray-100 lg:hover:rounded-full"
                                        >
                                            EN
                                        </Link>
                                    </NavigationMenuLink>
                                </li>


                                <li>
                                    <NavigationMenuItem>
                                        <NavigationMenuLink asChild>
                                            <Link to="/ride" className="hidden md:inline-block lg:text-black lg:text-[16px] lg:px-4 lg:ml-1 lg:hover:bg-gray-100 lg:hover:rounded-full transition-all">
                                                help
                                            </Link>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>

                                </li>

                                <div className="relative z-50">
                                    <Menubar className="border-none">
                                        <MenubarMenu >
                                            <MenubarTrigger className="group flex text-white gap-3 bg-black text-md outline-none px-3 py-2 hover:bg-gray-700  rounded-full transition-colors">
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
                                                <div className="w-full h-[87vh] md:h-124 p-4 flex flex-col justify-between">

                                                    <div>

                                                        <div className="flex justify-between">

                                                            <div className="flex flex-col">

                                                                <div className="flex font-bold text-3xl">
                                                                    {firstName}{" "} {lastName}
                                                                </div>

                                                                <div className="font-semibold text-black/70 mt-1">
                                                                    <h1>Blue Hero Maestro Edge</h1>
                                                                    <h2>{vehiclePlate}</h2>
                                                                </div>
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
                                                            to="/captains/dashboard/uber-account"
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

                            </ul>
                        </NavigationMenuItem>
                    </NavigationMenuList >
                </NavigationMenu >
            </div>

        </nav >
    )
}

export default Navbar
