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
    MenubarItem,
    MenubarMenu,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"

import uberLogo from "../images/Uber-White-Logo.wine.svg"
import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"
import useAuth from "@/hooks/useAuth"
// import useAuthCaptain from "@/hooks/useAuthCaptain"

type Items = {
    label: string,
    to: string
}

const naveItems: Items[] = [
    { label: "Ride", to: "/ride" },
    { label: "Driver", to: "/driver" },
]

const signupLinks: Items[] = [
    { label: "Ride", to: "/user-signup" },
    { label: "Driver", to: "/captain-signup" },
]


function Home() {
    const { user } = useAuth()
    console.log("user A:", user)

    // const { captain } = useAuthCaptain()
    // console.log("Captain:", captain)

    return (
        <>
            <nav className="p-3 w-screen flex justify-between items-center bg-black">

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
                                                    <Link to={to} className="text-white text-[16px] py-2 px-3 hover:bg-gray-700 hover:rounded-full">
                                                        {label}
                                                    </Link>
                                                </NavigationMenuLink>
                                            </li>

                                        ))}
                                    </ul>
                                </NavigationMenuItem>


                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="text-white text-[16px]">About</NavigationMenuTrigger>
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
                                                className="hidden lg:inline-block lg:text-white lg:text-[16px] lg:py-2 lg:px-3 lg:hover:bg-gray-700 lg:hover:rounded-full"
                                            >
                                                EN
                                            </Link>
                                        </NavigationMenuLink>
                                    </li>


                                    <li>
                                        <NavigationMenuItem>
                                            <NavigationMenuLink asChild>
                                                <Link to="/ride" className="hidden md:inline-block lg:text-white lg:text-[16px] lg:px-4 lg:ml-1 lg:hover:bg-gray-700 lg:hover:rounded-full transition-all">
                                                    help
                                                </Link>
                                            </NavigationMenuLink>
                                        </NavigationMenuItem>

                                    </li>

                                    <NavigationMenuItem>
                                        <NavigationMenuLink asChild>
                                            <Link to="/login" className="hidden md:inline-block lg:text-white lg:text-[16px] lg:px-4 lg:ml-1 lg:hover:bg-gray-700 lg:hover:rounded-full transition-all">
                                                Log in
                                            </Link>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>


                                    <div className="relative z-50 ">
                                        <Menubar>
                                            <MenubarMenu>
                                                <MenubarTrigger className="text-black text-[16px] px-4 py-2 bg-white rounded-full hover:bg-gray-200 transition-colors">
                                                    Sign up
                                                </MenubarTrigger>

                                                <MenubarContent
                                                    align="end"
                                                    sideOffset={4}
                                                    className={cn(
                                                        "w-screen md:w-64 bg-white shadow-xl rounded-md",
                                                        "animate-in fade-in zoom-in-95",
                                                        "duration-100 ease-out",
                                                        "border border-gray-200 mt-2 lg:mt-3"

                                                    )}
                                                >
                                                    {signupLinks.map(({ label, to }) => (
                                                        <MenubarItem asChild key={to}>
                                                            <Link
                                                                to={to}
                                                                className="hover:text-gray-500 rounded-md px-4 py-3"
                                                            >
                                                                <span className="text-2xl font-medium">{label}</span>
                                                                <MenubarShortcut className="text-2xl">⌘T</MenubarShortcut>
                                                            </Link>
                                                        </MenubarItem>
                                                    ))}


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

export default Home