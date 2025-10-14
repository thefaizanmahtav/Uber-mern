import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function DropingOffSaddm() {

    const [active, setActive] = useState(true);

    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1024);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const [offset, setOffset] = useState(window.innerHeight * 0.92); // start at 92%


    const [isDragging, setIsDragging] = useState(false);

    const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
        setIsDragging(true);

        let newOffset = offset - e.deltaY;

        const minOffset = 550; // expanded
        const maxOffset = window.innerHeight * 0.92; // initial closed position

        if (newOffset < minOffset) newOffset = minOffset;
        if (newOffset > maxOffset) newOffset = maxOffset;

        setOffset(newOffset);

        // reset dragging after short delay for smooth transition
        setTimeout(() => setIsDragging(false), 50);
    };


    return (
        <div className="overflow-hidden">

            <div className="max-lg:hidden">
                <Navbar />
            </div>

            <div className="relative top-0 py-1 lg:top-18 md:px-10 xl:px-[65px] px-4.5 h-screen max-lg:bg-gray-200">

                <div className="lg:flex flex-row-reverse">

                    {/* map */}

                    <div className="lg:flex flex-col lg:w-full">

                        <div className="lg:relative absolute inset-0 w-full h-[92vh] lg:h-[72vh]">

                            <img
                                className="absolute top-0 w-full h-full object-fill"
                                src="https://as2.ftcdn.net/v2/jpg/02/88/82/15/1000_F_288821575_TM4gJOMpOFgNH1QUIDGzaDQzMZSU92LS.jpg"
                                alt="map"
                            />
                        </div>

                    </div>

                    {/* dropoff location */}

                    <div className="absolute flex top-0 bottom-0 right-0 left-0 lg:left-100 xl:left-115 md:w-md lg:w-lg h-fit items-center bg-black/95 m-2.5 rounded-xl gap-6 py-2.5 px-6">


                        {/* Location icon */}
                        <div className="">
                            <svg
                                width="18" height="18" viewBox="0 0 24 24" fill="none"><title>Location marker</title><path d="M18.7 3.8C15 .1 9 .1 5.3 3.8c-3.7 3.7-3.7 9.8 0 13.5L12 24l6.7-6.8c3.7-3.6 3.7-9.7 0-13.4ZM12 12.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Z" fill="white"></path>
                            </svg>
                        </div>

                        <div className="text-white text-2xl font-semibold">
                            89, Nai Bazar purwa tulsipur balrampur uttar pradesh 271208
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
                            Droping off Saddam
                        </div>

                        {/* header contenst */}

                        <div className="px-6 py-3.5">

                            {/* contact saddam */}

                            <div className="flex justify-between items-center cursor-pointer">


                                {/* messgage svg */}
                                <div className="bg-gray-200 p-4 rounded-full">

                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="black" stroke="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-message-square-more-icon lucide-message-square-more"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" /><path d="M12 11h.01" /><path d="M16 11h.01" /><path d="M8 11h.01" /></svg>

                                </div>

                                {/* title */}

                                <div className="text-2xl font-semibold">
                                    Saddam
                                </div>

                                {/* user svg */}

                                <div className="bg-gray-200 p-4 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="black" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                                </div>
                            </div>

                            {/* Collect cash button  */}

                            <Link
                                to={"/captains/dashboard/online/droping-saddam/payment"}
                                className="flex justify-center items-center w-full bg-black rounded-md py-3.5 mt-4 overflow-hidden font-semibold text-white text-lg cursor-pointer">
                                Collect Cash
                            </Link>


                        </div>


                    </div>

                    {/* Vehicle Container larger screen */}

                    <div className="max-lg:hidden lg:w-[480px] lg:h-fit lg:border-2 lg:border-gray-200 lg:p-4 lg:rounded-xl lg:shadow mr-10">

                        {/* Sticky Header */}

                        <div className="flex flex-col justify-center items-center text-xl font-semibold w-full bg-white rounded-t-2xl pb-2.5">

                            <h1 className="text-[25px] font-semibold">
                                Deoping off saddam
                            </h1>
                        </div>

                        {/* Border bottom */}

                        <div className="-mx-4 border-b-2 border-gray-200/80"></div>

                        {/*  */}

                        {/* contact saddam */}

                        <div className="flex justify-between items-center cursor-pointer py-2">


                            {/* messgage svg */}
                            <div className="bg-gray-200 p-4 rounded-full">

                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="black" stroke="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-message-square-more-icon lucide-message-square-more"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" /><path d="M12 11h.01" /><path d="M16 11h.01" /><path d="M8 11h.01" /></svg>

                            </div>

                            {/* title */}

                            <div className="text-2xl font-semibold">
                                Saddam
                            </div>

                            {/* user svg */}

                            <div className="bg-gray-200 p-4 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="black" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                            </div>
                        </div>

                        {/* Border top */}

                        <div className="-mx-4 border-b-2 border-gray-200/80"></div>

                        {/* Collect cash button  */}

                        <Link
                            to={"/captains/dashboard/online/droping-saddam/payment"}
                            className="flex justify-center items-center w-full bg-black rounded-md py-3.5 mt-4 overflow-hidden font-semibold text-white text-lg cursor-pointer">
                            Collect Cash
                        </Link>

                    </div>
                </div>


            </div>

        </div>
    )
};

export default DropingOffSaddm
