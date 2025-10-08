import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function DriverOffline() {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1024);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const [offset, setOffset] = useState(window.innerHeight * 0.60); // start at 38%


    const [isDragging, setIsDragging] = useState(false);

    const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
        setIsDragging(true);

        let newOffset = offset - e.deltaY;

        const minOffset = 0; // fully expanded
        const maxOffset = window.innerHeight * 0.60; // initial closed position

        if (newOffset < minOffset) newOffset = minOffset;
        if (newOffset > maxOffset) newOffset = maxOffset;

        setOffset(newOffset);

        // reset dragging after short delay for smooth transition
        setTimeout(() => setIsDragging(false), 50);
    };

    return (


        <div className="overflow-hidden">

            <div className="">
                <Navbar />
            </div>

            <div className="relative top-0 py-1 lg:top-25 md:px-10 xl:px-[65px] px-4.5 h-screen max-lg:bg-gray-200">

                <div className="lg:flex flex-row-reverse">


                    {/* map */}

                    <div className="lg:flex flex-col lg:w-full">

                        <div className="lg:relative absolute inset-0 w-full h-[60vh] lg:h-[72vh]">

                            <img
                                className="absolute top-0 w-full h-full object-fill"
                                src="https://as2.ftcdn.net/v2/jpg/02/88/82/15/1000_F_288821575_TM4gJOMpOFgNH1QUIDGzaDQzMZSU92LS.jpg"
                                alt="map"
                            />
                        </div>



                        {/* Go button */}

                        <div className="lg:hidden flex w-full justify-center items-end h-[60vh] pb-6">

                            <div className="absolute flex justify-center p-1.5 bg-blue-700 w-fit rounded-full cursor-pointer">
                                <Link
                                    to={"/captains/dashboard/online"}
                                    className="rounded-full border-2 p-4  border-blue-400/80 text-2xl text-white font-medium">
                                    GO
                                </Link >
                            </div>

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
                            You're offline
                        </div>

                        {/* header contenst */}

                        <div className="flex items-center justify-center w-full text-blue-600 text-lg mt-2">
                            Waybill
                        </div>

                    </div>

                    {/* Vehicle Container larger screen */}

                    <div className="max-lg:hidden lg:w-[480px] lg:h-fit lg:border-2 lg:border-gray-200 lg:p-4 lg:rounded-xl lg:shadow mr-10">

                        {/* Sticky Header */}

                        <div className="flex flex-col justify-center items-center text-xl font-semibold w-full bg-white rounded-t-2xl pb-2.5">

                            <h1 className="text-[25px] font-semibold">
                                You're offline
                            </h1>
                        </div>

                        {/* Border bottom */}

                        <div className="-mx-4 border-b-2 border-gray-200/80"></div>

                        {/* Driver Details */}

                        <div className="flex items-center justify-center w-full text-blue-600 text-lg my-8">
                            Waybill
                        </div>

                        {/* Border top */}

                        <div className="-mx-4 border-b-2 border-gray-200/80"></div>


                        {/* Go button */}

                        <div className="flex w-full justify-center items-end pb-8 pt-18">

                            <div className=" flex justify-center p-1.5 bg-blue-700 w-fit rounded-full cursor-pointer">
                                <Link
                                    to={''}
                                    className="rounded-full border-2 p-4  border-blue-400/80 text-2xl text-white font-medium">
                                    GO
                                </Link >
                            </div>

                        </div>

                    </div>
                </div>


            </div>

        </div>
    )
};

export default DriverOffline
