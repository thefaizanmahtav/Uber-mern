import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


function PicupAndDestination() {
    const [activeField, setActiveField] = useState<"pickup" | "destination" | null>(null);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const pickupRef = useRef<HTMLInputElement | null>(null);
    const destinationRef = useRef<HTMLInputElement | null>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target as Node) &&
                pickupRef.current &&
                !pickupRef.current.contains(e.target as Node) &&
                destinationRef.current &&
                !destinationRef.current.contains(e.target as Node)
            ) {
                setActiveField(null);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);

    }, []);

    return (

        <div className="overflow-hidden">

            <div className="relative top-10 xl:top-18 min-w-screen md:px-10 py-10  xl:p-[60px] xl:px-[148px] px-6">

                <div className="lg:flex lg:justify-between">

                    <div className="flex flex-col md:mb-8 h-fit">

                        <h1 className="md:w-full text-[38px] my-4 h-fit xl:w-lg md:text-[52px] font-bold">Go anywhere with Uber</h1>

                        <form>

                            <div className="flex flex-col m-1 space-y-4 relative max-w-md">

                                {/* Pickup Input */}
                                <div className="relative">
                                    <input
                                        id="pickup"
                                        type="text"
                                        ref={pickupRef}
                                        onFocus={() => setActiveField("pickup")}
                                        className="peer pl-14 pr-16 p-[13px] w-full bg-gray-100 rounded-lg text-lg outline-none focus:ring-2 focus:bg-white focus:ring-black"
                                        placeholder=" "
                                    />

                                    {/* left icon */}
                                    <div className="absolute left-0 top-0 bottom-0 bg-gray-100 peer-focus:ring-black peer-focus:bg-white flex justify-center items-center p-[22px] rounded-l-lg">
                                        <div className="bg-black p-[5px] rounded-full w-[2px]"></div>
                                    </div>

                                    {/* right icon */}
                                    <div className="absolute right-0 top-0 bottom-0 bg-gray-100 peer-focus:bg-white flex justify-center items-center p-[22px] rounded-r-lg cursor-pointer">
                                        <svg
                                            width="1em"
                                            height="1em"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            className="h-7 w-7"
                                        >
                                            <path
                                                d="M10.5 13.5.5 11 21 3l-8 20.5-2.5-10Z"
                                                fill="currentColor"
                                            ></path>
                                        </svg>
                                    </div>

                                    {/* floating label */}
                                    <label
                                        htmlFor="pickup"
                                        className="absolute left-14 top-3 text-gray-500 text-lg transition-all duration-200 
                          peer-placeholder-shown:top-3 peer-placeholder-shown:text-lg 
                          peer-focus:-top-[14px] peer-focus:text-sm peer-focus:p-1 
                          peer-focus:text-black/70 peer-focus:bg-white"
                                    >
                                        Pickup location
                                    </label>

                                    {/* Pickup Dropdown */}

                                    {activeField === "pickup" && (
                                        <div
                                            ref={dropdownRef}
                                            className="absolute left-0 right-0 z-20 transition-all duration-300 ease-in-out origin-top scale-y-100 opacity-100"
                                        >
                                            <div className="p-2 h-20 flex max-w-md justify-center items-center bg-white shadow-lg shadow-black/30 rounded-lg">

                                                <Link to={"/test"} className="text-black/50 font-medium">
                                                    No result
                                                </Link>

                                            </div>
                                        </div>
                                    )}
                                </div>


                                {/* Destination Input */}
                                <div className="relative">
                                    <input
                                        id="destination"
                                        type="text"
                                        ref={destinationRef}
                                        onFocus={() => setActiveField("destination")}
                                        className="peer pl-14 pr-16 p-[13px] w-full bg-gray-100 rounded-lg text-lg outline-none focus:ring-2 focus:bg-white focus:ring-black"
                                        placeholder=" "
                                    />

                                    {/* left icon */}
                                    <div className="absolute left-0 top-0 bottom-0 bg-gray-100 flex peer-focus:bg-white justify-center items-center p-[22px] rounded-l-lg">
                                        <div className="bg-black/90 p-[5px] h-[3px] w-[3px]"></div>
                                    </div>



                                    {/* floating label */}

                                    <label
                                        htmlFor="destination"
                                        className="absolute left-14 top-3 text-gray-500 text-lg transition-all duration-200 
                          peer-placeholder-shown:top-3 peer-placeholder-shown:text-lg 
                          peer-focus:-top-[14px] peer-focus:text-sm peer-focus:p-1 
                          peer-focus:text-black/70 peer-focus:bg-white"
                                    >
                                        Dropoff location
                                    </label>

                                    {/* Destination Dropdown */}

                                    {activeField === "destination" && (
                                        <div
                                            ref={dropdownRef}
                                            className="absolute left-0 right-0  z-20 transition-all duration-300 ease-in-out origin-top scale-y-100 opacity-100"
                                        >
                                            <div className="p-2 h-20 max-w-md m-1 flex justify-center items-center bg-white shadow-lg shadow-black/30 rounded-lg">

                                                <Link to={"/test"} className="text-black/50 font-medium">
                                                    No result
                                                </Link>

                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* vertical border */}

                                <div className=" absolute h-[1px] w-13 bg-black/90 rotate-90 top-[62px] bottom-0 left-0 right-6 "></div>

                                <Button className="bg-black p-7 px-9 w-fit text-white text-md rounded-lg">
                                    See Prices
                                </Button>
                            </div>
                        </form>

                    </div>




                    <div className="hidden my-5 lg:mb-0 lg:block rounded-lg lg:h-[370px] lg:w-[650px] overflow-hidden">
                        <img
                            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_1104,w_1104/v1689609697/assets/b8/c39de0-6e13-485b-ba45-66511170c62a/original/SS_Commuter.jpg"
                            alt="Google map view demo"
                            className="h-full w-full object-cover"
                        />

                    </div>



                </div>

            </div>
        </div>

    );
}

export default PicupAndDestination;
