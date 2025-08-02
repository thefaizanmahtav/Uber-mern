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
import { cn } from "@/lib/utils"
import { Link, useNavigate } from "react-router-dom"
import useAuth from "@/hooks/useAuth"
import { ActivitySquareIcon, ChevronUp, HelpCircle, User, Wallet2Icon } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { useMutation } from "@tanstack/react-query"
import { logoutUser } from "@/API/api"


type Items = {
    label: string,
    to: string
}

const naveItems: Items[] = [
    { label: "Ride", to: "/ride" },
    { label: "Driver", to: "/driver" },
]


function Dashboard() {

    const navigate = useNavigate()

    const { user } = useAuth()

    const firstName = user?.fullName?.firstName
    const lastName = user?.fullName?.lastName

    console.log("Dashnoard", firstName);

    const {
        mutate: logout,
        isPending
    } = useMutation({
        mutationFn: logoutUser,
        onSuccess: () => {
            navigate('/', { replace: true })
        }
    })

    if (isPending) {
        return <p className="flex justify-center text-2xl">Loading...</p>
    }

    return (
        <>
            <nav className="p-3 w-screen flex justify-between items-center bg-white">

                <div className="flex items-center justify-center">
                    <div className="text-white text-xl flex justify-center">
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

                <div className="flex">
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



                                    <div className="relative z-50 ">
                                        <Menubar className="border-none">
                                            <MenubarMenu >
                                                <MenubarTrigger className="group flex text-white gap-3 bg-black text-md outline-none px-3 py-2 hover:bg-gray-700  rounded-full transition-colors">
                                                    {firstName}
                                                    <MenubarShortcut>
                                                        <ChevronUp className="mt-1 transition-transform duration-100 group-aria-expanded:rotate-270 rotate-90"></ChevronUp>
                                                    </MenubarShortcut>
                                                </MenubarTrigger>

                                                <MenubarContent
                                                    align="end"
                                                    sideOffset={4}
                                                    className={cn(
                                                        "w-screen md:w-100 bg-white shadow-md md:shadow-2xl md:inset-1 md:shadow-gray-500/50 rounded-xl",
                                                        "animate-in fade-in slide-in-from-right md:slide-in-from-top-5 md:zoom-in-95",
                                                        "duration-300 ease-out",
                                                        "border border-gray-200 mt-2 lg:mt-3"

                                                    )}
                                                >
                                                    <div className="w-full h-[90vh] md:h-120 p-4 flex flex-col justify-between">

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

                                                                <div className="p-4 h-24 w-46 shadow-md bg-gray-100 rounded-2xl space-y-1">
                                                                    <MenubarShortcut className="flex justify-center"><HelpCircle className="mt-1 h-6 w-6"></HelpCircle> </MenubarShortcut>
                                                                    <span className="flex justify-center text-bold text-lg font-semibold">Help</span>
                                                                </div>

                                                                <div className="p-4 h-24 w-46 shadow-md bg-gray-100 rounded-2xl space-y-1">
                                                                    <MenubarShortcut className="flex justify-center"><Wallet2Icon className="mt-1 h-6 w-6"></Wallet2Icon> </MenubarShortcut>
                                                                    <span className="flex justify-center text-bold text-lg font-semibold">Wallet</span>
                                                                </div>

                                                                <div className="p-4 h-24 w-46 shadow-md bg-gray-100 rounded-2xl space-y-1">
                                                                    <MenubarShortcut className="flex justify-center"><ActivitySquareIcon className="mt-1 h-6 w-6"></ActivitySquareIcon> </MenubarShortcut>
                                                                    <span className="flex justify-center text-bold text-lg font-semibold">Activity</span>
                                                                </div>


                                                            </div>

                                                            <div className="flex p-4 gap-7 mt-3 ml-2">
                                                                <span><User className="h-6 w-6 "></User></span>
                                                                <Link className="text-lg font-semibold" to="/users/dashboard/uber-account">
                                                                    Manage Account
                                                                </Link>

                                                            </div>
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
        </>
    )

}

export default Dashboard