import { useEffect, useState } from "react";
import uberLogo from "../../images/Uber-Black_logo.png"
import clsx from "clsx";
import { Link } from "react-router-dom";
import UserProfile from "./UserProfile";



function NavbarPickAride() {

    const [activeTab, setActiveTab] = useState("ride");

    useEffect(() => {
        activeTab
    })


    return (
        <>
            <div className="fixed top-0 z-888 p-4 pr-3 pl-6 lg:px-2.5 lg:p-0 w-full flex items-center bg-white">

                <div className="lg:flex w-full items-center justify-start lg:border-b-[5px] border-gray-100">

                    <div className="flex justify-between items-center w-full lg:px-14">

                        {/* right navbar */}

                        <div className="text-white text-xl w-full flex lg:gap-16">

                            <img
                                className="hidden lg:h-15 lg:flex"
                                src={uberLogo}
                                alt="Uber Logo"
                            />

                            <Link
                                to={"/users/dashboard/ride"}
                                className="lg:hidden"
                            >
                                <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><title>Arrow left</title><path d="M22 13.5H6.3l5.5 7.5H8.3l-6.5-9 6.5-9h3.5l-5.5 7.5H22v3Z" fill="black"></path></svg>
                            </Link>

                            <h1 className="lg:hidden flex justify-center items-center w-full text-[22px] text-black font-semibold">Plan your ride</h1>

                            <div className="hidden lg:flex">

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

                        <div className="lg:flex items-center gap-3">

                            {/* share trip */}

                            <div className="hidden lg:flex">

                                <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none"><title>Get share link for your selected trip itinerary</title><path fill-rule="evenodd" clip-rule="evenodd" d="M18.5 14c-1.2 0-2.3.5-3.1 1.3L10 12.6c0-.2.1-.4.1-.5 0-.1 0-.4-.1-.5l5.4-2.7c.8.8 1.9 1.3 3.1 1.3 2.5 0 4.5-2 4.5-4.5s-2-4.5-4.5-4.5-4.5 2-4.5 4.5c0 .2 0 .4.1.5L8.7 8.9c-.8-.8-1.9-1.3-3.1-1.3-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5c1.2 0 2.3-.5 3.1-1.3l5.4 2.7c0 .2-.1.4-.1.5 0 2.5 2 4.5 4.5 4.5s4.5-2 4.5-4.5-2-4.5-4.5-4.5Z" fill="currentColor"></path></svg>
                            </div>

                            {/* activity */}

                            <div className="hidden lg:flex justify-center items-center text-md font-medium cursor-pointer bg-gray-100 px-5 py-2.5 rounded-full gap-2">

                                <div>
                                    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none"><title>Receipt</title><path fill-rule="evenodd" clip-rule="evenodd" d="M3 23V1h18v22l-5.5-3-3.5 3-3.5-3L3 23ZM7 9h10V6H7v3Zm10 3H7v3h10v-3Z" fill="currentColor"></path></svg>
                                </div>
                                <div>
                                    Activity
                                </div>

                            </div>

                            {/* user icon */}

                            <UserProfile />



                        </div>
                    </div>

                </div>

            </div>
        </>

    )

}

export default NavbarPickAride
