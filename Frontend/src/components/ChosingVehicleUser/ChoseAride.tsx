
import { Button } from "@/components/ui/button";
import { useEffect, useState, type JSX } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

function ChoseAride() {

    type Ride = {
        name: string;
        time: string;
        eta: string;
        desc: string;
        img: string;
        price: number;
        cap?: number
        svg?: JSX.Element
    }

    const ride: Ride[] = [
        {
            name: "Bike",
            time: "1 min away",
            eta: "3:25 PM",
            desc: "Affordable, motorcycle rides",
            img: "https://d1a3f4spazzrp4.cloudfront.net/car-types/haloProductImages/v1.1/Uber_Moto_India1.png",
            price: 78,
            cap: 1,
            svg: (<svg width="14" height="14" viewBox="0 0 24 24" fill="none"><title>Person</title><path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0ZM3 20c0-3.3 2.7-6 6-6h6c3.3 0 6 2.7 6 6v3H3v-3Z" fill="currentColor"></path></svg>)
        },
        {
            name: "Auto",
            time: "1 min away",
            eta: "3:25 PM",
            desc: "Affordable, motorcycle rides",
            img: "https://d1a3f4spazzrp4.cloudfront.net/car-types/haloProductImages/v1.1/TukTuk_Green_v1.png",
            price: 90,
            cap: 3,
            svg: (<svg width="14" height="14" viewBox="0 0 24 24" fill="none"><title>Person</title><path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0ZM3 20c0-3.3 2.7-6 6-6h6c3.3 0 6 2.7 6 6v3H3v-3Z" fill="currentColor"></path></svg>)
        },
        {
            name: "Uber Go",
            time: "1 min away",
            eta: "3:25 PM",
            desc: "Affordable, motorcycle rides",
            img: "https://d1a3f4spazzrp4.cloudfront.net/car-types/haloProductImages/Hatchback.png",
            price: 178

        },
        {
            name: "Premier",
            time: "6 min away",
            eta: "3:25 PM",
            desc: "Comfortable sedans, top-quality drivers",
            img: "https://d1a3f4spazzrp4.cloudfront.net/car-types/haloProductImages/v1.1/ukcomfort.png",
            price: 239
        },


    ]

    const rideEconomy: Ride[] = [
        {
            name: "UberXL",
            time: "1 min away",
            eta: "3:25 PM",
            desc: "Comfortable SUVs",
            img: "https://d1a3f4spazzrp4.cloudfront.net/car-types/haloProductImages/UberXL_Premium.png",
            price: 321

        },
        {
            name: "Go Sedan",
            time: "1 min away",
            eta: "3:25 PM",
            desc: "Affordable, motorcycle rides",
            img: "https://d1a3f4spazzrp4.cloudfront.net/car-types/haloProductImages/v1.1/UberX_v1.png",
            price: 654
        },
    ]

    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1024);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const [selectedRide, setSelectedRide] = useState<string | null>(ride[0].name);

    const [offset, setOffset] = useState(window.innerHeight * 0.37); // start at 38%


    const [isDragging, setIsDragging] = useState(false);

    const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
        setIsDragging(true);

        let newOffset = offset - e.deltaY;

        const minOffset = 0; // fully expanded
        const maxOffset = window.innerHeight * 0.37; // initial closed position

        if (newOffset < minOffset) newOffset = minOffset;
        if (newOffset > maxOffset) newOffset = maxOffset;

        setOffset(newOffset);

        // reset dragging after short delay for smooth transition
        setTimeout(() => setIsDragging(false), 50);
    };

    const navigate = useNavigate()

    return (
        <div className="max-lg:relative top-0 w-full xl:w-[610px] lg:w-xl max-lg:h-screen overflow-hidden ">

            {/* map */}

            <div className="lg:hidden absolute inset-0 w-full h-84">

                <Link
                    to={"/users/dashboard/ride"}
                    className="absolute p-3 left-2.5 top-1 bg-white rounded-full">

                    <svg width="28" height="30" viewBox="0 0 24 24" fill="none">
                        <title>Arrow left</title>
                        <path
                            d="M22 13.5H6.3l5.5 7.5H8.3l-6.5-9 6.5-9h3.5l-5.5 7.5H22v3Z"
                            fill="currentColor"
                        />
                    </svg>

                </Link>

                <img
                    className="w-full h-full object-cover"
                    src="https://as2.ftcdn.net/v2/jpg/02/88/82/15/1000_F_288821575_TM4gJOMpOFgNH1QUIDGzaDQzMZSU92LS.jpg"
                    alt="map"
                />
            </div>



            {/* Vehicle Container */}

            <div
                onWheel={handleWheel}
                style={{
                    transform: isMobile ? `translateY(${offset}px)` : "none",
                    transition: isDragging ? "none" : "transform 0s",
                }}


                className="max-lg:absolute lg:relative left-0 right-0 bottom-0 w-full xl:w-[610px] lg:w-xl h-[100vh] bg-gray-400 lg:bg-white rounded-t-2xl pb-28 lg:pb-60"
            >
                <div className="overflow-y-auto h-full">

                    {/* Sticky Header */}
                    <div className="lg:hidden sticky top-0 z-50 flex flex-col justify-center items-center text-xl font-semibold w-full bg-white p-4 rounded-t-2xl border-b-3 border-gray-300 ">
                        <span
                            className="absolute top-1.5 rounded-full h-[5px] w-14 bg-gray-200">
                        </span>
                        choose a ride
                    </div>

                    <div className="max-lg:hidden flex flex-col w-full bg-white space-y-4 p-4 lg:pb-0">
                        <span className="text-4xl font-bold">Choose a ride</span>
                        <span className="text-[25px] font-bold">Rides we think you'll like</span>
                    </div>


                    {/*Vihecle Selection */}

                    <div className="py-4 bg-white">

                        {ride.map(({ name, time, eta, desc, img, svg, cap, price }) => (


                            <div key={name}
                                onClick={() => setSelectedRide(name)}
                                className={`mx-4 my-2 bg-white rounded-2xl cursor-pointer transition border
            ${selectedRide === name
                                        ? "border-black ring-2 ring-black"
                                        : "border-white"
                                    }`}
                                tabIndex={0}
                            >

                                <div className="flex bg-white rounded-2xl gap-6">

                                    <div className="h-26 w-28 lg:h-36 lg:w-36">

                                        <img
                                            className="h-full w-full object-cover"
                                            src={img} alt="moto" />
                                    </div>

                                    <div className="flex w-full justify-between lg:items-center mr-4">

                                        <div className="py-2">
                                            <h1 className="flex gap-2 items-center text-xl font-semibold lg:text-2xl lg:font-bold">
                                                {name}
                                                <span>
                                                    {svg}
                                                </span>
                                                <span className="text-lg font-normal">
                                                    {cap}
                                                </span>
                                            </h1>

                                            <p className="flex items-center gap-2 text-[16px] text-gray-600">{time}<span>•</span> <span>{eta}</span> </p>

                                            <div className="text-[16px] text-gray-600">
                                                {desc}
                                            </div>

                                        </div>

                                        <div className="text-xl font-semibold my-2 lg:text-2xl lg:font-bold">
                                            <p>₹{price}</p>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                    <h1 className="bg-white px-4 text-[26px] font-bold">Economy</h1>

                    {/*Vihecle Selection */}

                    <div className="py-4 bg-white">

                        {rideEconomy.map(({ name, time, eta, desc, img, svg, cap, price }) => (

                            <div key={name}
                                onClick={() => setSelectedRide(name)}
                                className={`mx-4 my-2 bg-white rounded-2xl cursor-pointer transition lg:duration-1000 border
            ${selectedRide === name
                                        ? "border-black ring-2 ring-black"
                                        : "border-white"
                                    }`}
                                tabIndex={0}
                            >

                                <div className="flex bg-white rounded-2xl gap-6">

                                    <div className="h-26 w-28 lg:h-36 lg:w-36">

                                        <img
                                            className="h-full w-full object-cover"
                                            src={img} alt="moto" />
                                    </div>

                                    <div className="flex w-full justify-between lg:items-center mr-4">

                                        <div className="py-2">
                                            <h1 className="flex gap-2 items-center text-xl font-semibold lg:text-2xl lg:font-bold">
                                                {name}
                                                <span>
                                                    {svg}
                                                </span>
                                                <span className="text-lg font-normal">
                                                    {cap}
                                                </span>
                                            </h1>

                                            <p className="flex items-center gap-2 text-[16px] text-gray-600">{time}<span>•</span> <span>{eta}</span> </p>

                                            <div className="text-[16px] text-gray-600">
                                                {desc}
                                            </div>

                                        </div>

                                        <div className="text-xl font-semibold my-2 lg:text-2xl lg:font-bold">
                                            <p>₹{price}</p>
                                        </div>
                                    </div>

                                </div>

                            </div>


                        ))}

                    </div>

                </div>

            </div>
            {/* payment button */}

            <div className="fixed bottom-0 lg:bottom-6 lg:rounded-xl lg:shadow-md lg:shadow-gray-300  z-50 flex flex-col bg-white w-full lg:w-[550px] lg:h-24 pb-5 lg:py-5 px-4 border-t-[1px] lg:border-t-0 border-gray-300">


                <div className="lg:flex justify-between items-center">

                    {/* Payment Method */}

                    <div className="flex items-center gap-3 my-4 cursor-pointer">

                        <div>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="css-dwgQzU"><title>Credit card</title><path fill-rule="evenodd" clip-rule="evenodd" d="M1 4h22v4H1V4Zm0 7h22v9H1v-9Z" fill="currentColor"></path></svg>
                        </div>

                        <div className="flex justify-between w-full items-center">

                            <div className="text-[15px] font-bold ">
                                Add Payment Method
                            </div>

                            <div className="lg:rotate-90 lg:pb-3 ">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="css-cGLBlV" color="contentPrimary"><title>Chevron right small</title><path d="m16.9 12-4.6 6H8.5l4.6-6-4.6-6h3.8l4.6 6Z" fill="currentColor"></path></svg>
                            </div>

                        </div>

                    </div>

                    {/* Button */}

                    <div>
                        <Button onClick={() => navigate('/users/dashboard/confirm')} className="w-full p-7 lg:p-0 lg:px-14 lg:py-7 rounded-xl bg-black text-white cursor-pointer text-lg">
                            Request {selectedRide}
                        </Button>
                    </div>

                </div>

            </div>

        </div >
    )
}

export default ChoseAride
