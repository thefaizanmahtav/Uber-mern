import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import type { JSX } from "react";

function Home() {

    type Cards = {
        title: string,
        image: string
        svg: JSX.Element
    }

    const cards: Cards[] = [
        {
            title: "Ride",
            image: "https://mobile-content.uber.com/launch-experience/ride.png",
            svg: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="css-cGLBlV" color="contentPrimary"><title>Chevron right small</title><path d="m16.9 12-4.6 6H8.5l4.6-6-4.6-6h3.8l4.6 6Z" fill="currentColor"></path></svg>
            )
        },
        {
            title: "rentals",
            image: "https://mobile-content.uber.com/launch-experience/Hourly2021.png",
            svg: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="css-cGLBlV" color="contentPrimary"><title>Chevron right small</title><path d="m16.9 12-4.6 6H8.5l4.6-6-4.6-6h3.8l4.6 6Z" fill="currentColor"></path></svg>
            )
        },
        {
            title: "reserve",
            image: "https://mobile-content.uber.com/uber_reserve/reserve_clock.png",
            svg: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="css-cGLBlV" color="contentPrimary"><title>Chevron right small</title><path d="m16.9 12-4.6 6H8.5l4.6-6-4.6-6h3.8l4.6 6Z" fill="currentColor"></path></svg>
            )
        },

    ]


    return (

        <div className="overflow-y-hidden">

            <div className="relative top-16 py-1 lg:top-25 md:px-10 xl:px-[65px] px-4.5 h-screen">

                {/* wrapper pickup button and map */}

                <div className="lg:flex lg:pb-10 gap-10">

                    {/* pickup button */}

                    <div className="lg:w-[500px] lg:h-fit lg:border-2 lg:border-gray-200 lg:p-4 lg:rounded-xl lg:shadow">

                        <h1 className="max-lg:hidden lg:text-[22px] font-semibold lg:pb-4">Get a ride</h1>

                        <div className="flex flex-col w-full space-y-3 pb-4">

                            {/* pickup location */}
                            <Link
                                className="flex w-full items-center gap-3 p-[13px] bg-gray-100 rounded-lg hover:bg-gray-200/75"
                                to={"/users/dashboard/pick"}
                            >
                                {/* left icon */}
                                <span className="pl-1">

                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" data-testid="pickup-icon"><title>Radio button selected</title><path fill-rule="evenodd" clip-rule="evenodd" d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm0-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" fill="currentColor"></path>
                                    </svg>

                                </span>

                                <span className="text-lg text-gray-500">
                                    Pickup location
                                </span>

                            </Link>

                            {/* dropoff location */}

                            <Link
                                className="flex w-full items-center gap-3 p-[13px] bg-gray-100 rounded-lg hover:bg-gray-200/75"
                                to={"/users/dashboard/pick"}
                            >
                                {/* left icon */}
                                <span className="pl-1">

                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" data-testid="drop-icon"><title>Dropoff</title><path fill-rule="evenodd" clip-rule="evenodd" d="M22 2H2v20h20V2Zm-7 7H9v6h6V9Z" fill="currentColor"></path>
                                    </svg>

                                </span>

                                <div className="lg:flex lg:items-center justify-between lg:w-full">

                                    <span className="text-lg text-gray-500">
                                        Dropoff location
                                    </span>

                                    <span className="max-lg:hidden lg:p-1 lg:bg-black lg:rounded-full">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" color="backgroundPrimary"><title>Add a stop</title><path d="M23 10.5h-9.5V1h-3v9.5H1v3h9.5V23h3v-9.5H23v-3Z" fill="white"></path>
                                        </svg>
                                    </span>

                                </div>


                            </Link>

                            <Button className="max-lg:hidden lg:w-full lg:px-7 lg:py-7 lg:bg-gray-100 text-gray-400 lg:text-lg lg:cursor-no-drop">
                                Search
                            </Button>

                        </div>
                    </div>



                    {/* map */}

                    <div className="w-full lg:h-[85vh] block rounded-lg lg:rounded-none overflow-hidden">
                        <img
                            src="https://www.groovypost.com/wp-content/uploads/2020/07/Google-Photos-map-search-map-view-zoom-out.png"
                            alt="Google map view demo"
                            className="h-[440px] w-full lg:h-full object-fill"
                        />
                    </div>

                </div>


                {/* Suggestion */}

                <div className="lg:hidden flex pt-10 mb-15 flex-col  ">

                    <div className="flex w-full">
                        <h1 className="md:w-full text-[22px] mb-5 font-semibold">
                            Suggestions
                        </h1>
                    </div>

                    {/* card */}

                    <div className="flex w-full gap-4">

                        {cards.map(({ title, image }) => (

                            <Link to={""} className="flex flex-col w-full items-center justify-center">

                                <div key={title} className="flex px-4 py-5 justify-center w-full bg-gray-100 rounded-xl ">

                                    <div className="h-[50px] w-[50px]">
                                        <img className="w-full h-full object-cover" src={image} alt="uber img" />
                                    </div>

                                </div>

                                <div className="text-[15px] mt-1 font-semibold">
                                    {title}
                                </div>

                            </Link>

                        ))}
                    </div>
                </div>



            </div>
        </div>

    )
}

export default Home
