import { useEffect, useState, type JSX } from "react";
import { Link } from "react-router-dom";
import Navbar_home from "./Navbard_home";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

function FinishRide() {

    type Cards = {
        title: string
        disclaimer?: string
        image: string
        svg: JSX.Element
    }

    const cards_first: Cards[] = [
        {
            title: "Request more rides",
            disclaimer: "For yourself or guest",
            image: "https://mobile-content.uber.com/launch-experience/ride.png",
            svg: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="css-cGLBlV" color="contentPrimary"><title>Chevron right small</title><path d="m16.9 12-4.6 6H8.5l4.6-6-4.6-6h3.8l4.6 6Z" fill="currentColor"></path></svg>
            )
        },
        {
            title: "Send and receive",
            disclaimer: "One or multiple items",
            image: "https://cn-geo1.uber.com/static/mobile-content/Courier.png",
            svg: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="css-cGLBlV" color="contentPrimary"><title>Chevron right small</title><path d="m16.9 12-4.6 6H8.5l4.6-6-4.6-6h3.8l4.6 6Z" fill="currentColor"></path></svg>
            )
        },
        {
            title: "Reserve a ride",
            disclaimer: "Up to 90 days ahead",
            image: "https://mobile-content.uber.com/uber_reserve/reserve_clock.png",
            svg: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="css-cGLBlV" color="contentPrimary"><title>Chevron right small</title><path d="m16.9 12-4.6 6H8.5l4.6-6-4.6-6h3.8l4.6 6Z" fill="currentColor"></path></svg>
            )
        },
    ]

    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1024);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const [offset, setOffset] = useState(window.innerHeight * 0.40); // start at 38%


    const [isDragging, setIsDragging] = useState(false);

    const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
        setIsDragging(true);

        let newOffset = offset - e.deltaY;

        const minOffset = 0; // fully expanded
        const maxOffset = window.innerHeight * 0.40; // initial closed position

        if (newOffset < minOffset) newOffset = minOffset;
        if (newOffset > maxOffset) newOffset = maxOffset;

        setOffset(newOffset);

        // reset dragging after short delay for smooth transition
        setTimeout(() => setIsDragging(false), 50);
    };

    return (


        <div className="overflow-hidden">

            <div className="max-lg:hidden">
                <Navbar_home />
            </div>

            <div className="relative top-0 py-1 lg:top-25 md:px-10 xl:px-[65px] px-4.5 h-screen max-lg:bg-gray-200">

                <div className="lg:flex flex-row-reverse">


                    {/* map */}

                    <div className="lg:flex flex-col lg:w-full">

                        <div className="lg:relative absolute inset-0 w-full h-88 lg:h-[72vh]">

                            {/* Back buttom and user icon  */}

                            <div className="lg:hidden flex justify-between items-center w-full absolute z-20 pr-2.5 pl-5 top-1">

                                {/* Back botton  */}

                                <Link
                                    to={"/users/dashboard/confirm"}
                                    className="">

                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                                        <title>Arrow left</title>
                                        <path
                                            d="M22 13.5H6.3l5.5 7.5H8.3l-6.5-9 6.5-9h3.5l-5.5 7.5H22v3Z"
                                            fill="currentColor"
                                        />
                                    </svg>

                                </Link>

                                {/* user account */}

                                <Link
                                    to={"/users/dashboard/uber-account"}
                                    className="bg-white p-3.5 rounded-full">
                                    <svg
                                        width="19"
                                        height="19"
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


                            <img
                                className="absolute top-0 w-full h-full object-fill"
                                src="https://as2.ftcdn.net/v2/jpg/02/88/82/15/1000_F_288821575_TM4gJOMpOFgNH1QUIDGzaDQzMZSU92LS.jpg"
                                alt="map"
                            />
                        </div>

                        {/* Cards */}

                        <div className="max-lg:hidden flex gap-4 overflow-scroll mt-4">

                            {cards_first.map(({ title, disclaimer, image, svg }) => (

                                <div key={title} className="flex items-center border-2 border-gray-200/80 rounded-xl px-2 py-3 w-full gap-3">

                                    <div className="w-26 bg-gray-100 rounded-xl">
                                        <img
                                            className="w-full h-full object-cover"
                                            src={image} alt="uber img" />
                                    </div>

                                    <div className="flex justify-between items-center w-full">

                                        <div className="flex flex-col">
                                            <h1 className="text-lg font-semibold">
                                                {title}
                                            </h1>
                                            <h2 className="text-sm font-semibold text-black/60">
                                                {disclaimer}
                                            </h2>
                                        </div>

                                        <div>
                                            {svg}
                                        </div>

                                    </div>


                                </div>
                            ))}
                        </div>

                    </div>



                    {/* Vehicle Container mobile screen */}

                    <div
                        onWheel={handleWheel}
                        style={{
                            transform: isMobile ? `translateY(${offset}px)` : "none",
                            transition: isDragging ? "none" : "transform 0s",
                        }}


                        className="lg:hidden lg:relative absolute z-30 left-0 right-0 bottom-0 w-full h-[100vh] bg-white rounded-t-2xl pb-28 lg:pb-60"
                    >

                        {/* Sticky Header */}

                        <div className="lg:hidden sticky top-0 z-50 flex flex-col justify-center items-center text-xl font-semibold w-full bg-white p-4 rounded-t-2xl border-b-3 border-gray-200/80 ">
                            <span
                                className="absolute top-1.5 rounded-full h-[5px] w-14 bg-gray-200">
                            </span>
                            Finish a ride
                        </div>

                        <div className="m-2 space-y-2">

                            {/* meetup location */}

                            <div className="relative border-2 border-gray-200/80 rounded-xl px-4 py-6">

                                <div className="flex flex-col w-full space-y-3 pb-4">

                                    {/* pickup location */}
                                    <div
                                        className="flex w-full items-center gap-7 p-[13px]"
                                    >
                                        {/* left icon */}
                                        <span className="pl-1">

                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" data-testid="pickup-icon"><title>Radio button selected</title><path fill-rule="evenodd" clip-rule="evenodd" d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm0-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" fill="currentColor"></path>
                                            </svg>

                                        </span>

                                        <span className="text-[21px] font-semibold">
                                            Meet at Kalyan Das Jewellary Point
                                        </span>

                                    </div>

                                    {/* dropoff location */}

                                    <div
                                        className="flex w-full items-center gap-8 p-[13px]"
                                    >
                                        {/* left icon */}
                                        <span className="pl-[5px]">

                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" data-testid="drop-icon"><title>Dropoff</title><path fill-rule="evenodd" clip-rule="evenodd" d="M22 2H2v20h20V2Zm-7 7H9v6h6V9Z" fill="currentColor"></path>
                                            </svg>

                                        </span>

                                        <div className="flex items-center w-full justify-between ">

                                            <span className="flex flex-col text-[21px] font-semibold text-black ">
                                                Sarfarajganj
                                                <span className="text-[16px] font-normal text-black/60">
                                                    Lucknow,Uttar Pradesh
                                                </span>
                                            </span>


                                            <span className="flex justify-center items-center px-4 py-2 bg-gray-100 rounded-full text-[16px] text-black/80 font-semibold">
                                                Change
                                            </span>
                                        </div>

                                    </div>

                                    {/* vertical border */}

                                    <div className="absolute h-[2px] w-16 bg-black/90 rotate-90 top-24 bottom-0 left-2.5 right-0 "></div>

                                    {/* Cash */}

                                    <div className="flex items-center gap-3">

                                        <div className="p-[13px]">
                                            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="css-dwgQzU"><title>Credit card</title><path fill-rule="evenodd" clip-rule="evenodd" d="M1 4h22v4H1V4Zm0 7h22v9H1v-9Z" fill="currentColor"></path></svg>
                                        </div>

                                        <span className="flex flex-col text-[21px] font-semibold text-black">
                                            ₹139.95
                                            <span className="text-[16px] font-normal text-black/60">
                                                Cash
                                            </span>
                                        </span>

                                    </div>
                                </div>

                            </div>


                            {/* Driver Details */}

                            <div className="relative border-2 border-gray-200/80 rounded-xl px-6 py-4">


                                <div className="flex w-full justify-between">

                                    {/* captain vehicle pic */}

                                    <div className="retative">

                                        <Avatar className="absolute left-7">
                                            <AvatarImage className="h-18 rounded-full" src="https://www.carandbike.com/_next/image?url=https://images.carandbike.com/bike-images/colors/hero/maestro-edge/hero-maestro-edge-techno-blue.png?v=1639636609&w=750&q=75" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>

                                        {/* top captain pic */}
                                        <Avatar className="relative">
                                            <AvatarImage className="h-18" src="https://avatars.githubusercontent.com/u/165957728?s=400&u=04a7eb72cf091603f9d8d6ae301809699fd75443&v=4" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                        {/* captain name */}

                                        <h1 className="text-[22px] font-semibold">
                                            Zeeshan
                                        </h1>

                                    </div>

                                    {/* vehicle detail */}

                                    <div className="flex flex-col text-right text-[21px] font-semibold">
                                        <h2 className="text-black">
                                            UP32HJ1298
                                        </h2>
                                        <h1 className="text-black/50">
                                            Blue Hero Maestro Edge
                                        </h1>
                                    </div>

                                </div>

                            </div>

                            {/* Make a payment button */}

                            <Link
                                to={'/users/dashboard/ride'}
                                className="flex justify-center items-center bg-gray-100 rounded-lg py-3 text-lg text-red-600 w-full hover:bg-gray-300 duration-500 font-semibold">
                                Make payment
                            </Link>
                        </div>

                    </div>

                    {/* Vehicle Container larger screen */}

                    <div className="max-lg:hidden lg:w-[480px] lg:h-fit lg:border-2 lg:border-gray-200 lg:p-4 lg:rounded-xl lg:shadow mr-10">

                        {/* Sticky Header */}

                        <div className="flex flex-col justify-center items-center text-xl font-semibold w-full bg-white rounded-t-2xl pb-2.5">

                            <h1 className="text-[25px] font-semibold">
                                Finish a ride
                            </h1>
                        </div>

                        {/* Border bottom */}

                        <div className="-mx-4 border-b-2 border-gray-200/80"></div>

                        {/* Driver Details */}

                        <div className="relative px-2 py-2 mt-1">


                            <div className="flex w-full justify-between">

                                {/* captain vehicle pic */}

                                <div className="retative">

                                    <Avatar className="absolute left-3">
                                        <AvatarImage className="h-18 rounded-full" src="https://www.carandbike.com/_next/image?url=https://images.carandbike.com/bike-images/colors/hero/maestro-edge/hero-maestro-edge-techno-blue.png?v=1639636609&w=750&q=75" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>

                                    {/* top captain pic */}
                                    <Avatar className="relative">
                                        <AvatarImage className="h-18" src="https://avatars.githubusercontent.com/u/165957728?s=400&u=04a7eb72cf091603f9d8d6ae301809699fd75443&v=4" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    {/* captain name */}

                                    <h1 className="text-[22px] font-semibold">
                                        Zeeshan
                                    </h1>

                                </div>

                                {/* vehicle detail */}

                                <div className="flex flex-col text-right text-[20px] font-semibold">
                                    <h2 className="text-black">
                                        UP32HJ1298
                                    </h2>
                                    <h1 className="text-[19px] text-black/50">
                                        Blue Hero Maestro Edge
                                    </h1>
                                </div>

                            </div>

                        </div>

                        {/* Border top */}

                        <div className="-mx-4 border-b-2 border-gray-200/80"></div>

                        <div className="m-2">

                            {/* meetup location */}

                            <div className="relative flex flex-col w-full space-y-8 mb-4 pb-4 mt-6">

                                {/* pickup location */}
                                <div
                                    className="flex w-full items-center gap-7 "
                                >
                                    {/* left icon */}
                                    <span className="pl-1">

                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" data-testid="pickup-icon"><title>Radio button selected</title><path fill-rule="evenodd" clip-rule="evenodd" d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm0-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" fill="currentColor"></path>
                                        </svg>

                                    </span>

                                    <span className="text-[20px] font-semibold">
                                        Meet at Kalyan Das Jewellary Point
                                    </span>

                                </div>

                                {/* dropoff location */}

                                <div
                                    className="flex w-full items-center gap-8 "
                                >
                                    {/* left icon */}
                                    <span className="pl-[5px]">

                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" data-testid="drop-icon"><title>Dropoff</title><path fill-rule="evenodd" clip-rule="evenodd" d="M22 2H2v20h20V2Zm-7 7H9v6h6V9Z" fill="currentColor"></path>
                                        </svg>

                                    </span>

                                    <div className="flex items-center w-full justify-between ">

                                        <span className="flex flex-col text-[20px] font-semibold text-black ">
                                            Sarfarajganj
                                            <span className="text-[15px] font-normal text-black/60">
                                                Lucknow,Uttar Pradesh
                                            </span>
                                        </span>


                                        <span className="flex justify-center items-center px-4 py-2 bg-gray-100 rounded-full text-[15px] text-black/80 font-semibold">
                                            Change
                                        </span>
                                    </div>

                                </div>

                                {/* vertical border */}

                                <div className="absolute h-[2px] w-18 bg-black/90 rotate-90 top-[74px] bottom-0 -left-5.5 right-0"></div>

                                {/* Cash */}

                                <div className="flex items-center gap-3">

                                    <div>
                                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="css-dwgQzU"><title>Credit card</title><path fill-rule="evenodd" clip-rule="evenodd" d="M1 4h22v4H1V4Zm0 7h22v9H1v-9Z" fill="currentColor"></path></svg>
                                    </div>

                                    <span className="flex flex-col text-[21px] font-semibold text-black">
                                        ₹139.95
                                        <span className="text-[16px] font-normal text-black/60">
                                            Cash
                                        </span>
                                    </span>

                                </div>
                            </div>

                            {/* Make a payment button */}

                            <Link
                                to={'/users/dashboard/ride'}
                                className="flex justify-center items-center bg-gray-100 rounded-lg py-3 text-lg text-red-600 w-full hover:bg-gray-300 duration-500 font-semibold">
                                Make payment
                            </Link>
                        </div>

                    </div>
                </div>


            </div>

        </div>
    )
};

export default FinishRide
