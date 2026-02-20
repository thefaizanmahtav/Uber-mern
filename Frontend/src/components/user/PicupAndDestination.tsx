import useAuthSuggestions from "@/hooks/useGetSuggestions";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


type FormValues = {
    pickup: string;
    destination: string;
};

function PicupAndDestination() {
    const [activeField, setActiveField] = useState<"pickup" | "destination" | null>(null);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<FormValues>();

    const [pickupQuery, setPickupQuery] = useState("");
    const [destinationQuery, setDestinationQuery] = useState("");

    const navigate = useNavigate();


    // API fetching
    const { suggestion: pickupSuggestion, isFetching: isPickupFetching } = useAuthSuggestions(pickupQuery);
    const { suggestion: destinationSuggestion, isFetching: isDestinationFetching } = useAuthSuggestions(destinationQuery);

    // 🔹 Handle form submission
    const onSubmit = (data: FormValues) => {
        console.log("Form Submitted:", data);
    };

    // handle typing for both fields
    const handleInput = (field: "pickup" | "destination", value: string) => {
        setValue(field, value);

        if (field === "pickup") setPickupQuery(value);
        if (field === "destination") setDestinationQuery(value);

        setActiveField(field);
    };

    // click suggestion handler
    const selectSuggestion = (field: "pickup" | "destination", text: string) => {
        setValue(field, text);

        if (field === "pickup") setPickupQuery(text);
        if (field === "destination") setDestinationQuery(text);

        setActiveField(null);
    };

    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const pickupRef = useRef<HTMLInputElement | null>(null);
    const destinationRef = useRef<HTMLInputElement | null>(null);

    // Inside your component

    const pickupList = Array.isArray(pickupSuggestion?.data)
        ? pickupSuggestion.data.filter(item => typeof item === "object" && item !== null)
        : [];

    const destinationList = Array.isArray(destinationSuggestion?.data)
        ? destinationSuggestion.data.filter(item => typeof item === "object" && item !== null)
        : [];

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

        <div className="relative top-15 xl:top-17 min-w-full md:px-10 py-10  xl:p-[60px] xl:px-[148px] px-6">

            <div className="xl:flex xl:justify-between">

                <div className="flex flex-col md:mb-8 h-fit">

                    <h1 className="md:w-full text-[38px] m-1 h-fit xl:w-lg md:text-[52px] font-bold">Get ready for your first trip</h1>

                    <p className="text-lg md:mb-2 md:w-full m-1 xl:w-lg h-fit w-fit xl:mb-4 font-stretch-110% text-black/80">
                        Discover the convenience of Uber. Request a ride now, or schedule one
                        for later directly from your browser.
                    </p>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="flex flex-col m-1 space-y-4 relative max-w-md">

                            {/* Pickup Input */}
                            <div className="relative">
                                <input
                                    id="pickup"
                                    type="text"
                                    {...register("pickup", { required: "Pickup location is required" })}
                                    onChange={(e) => handleInput("pickup", e.target.value)}
                                    value={pickupQuery}
                                    ref={pickupRef}
                                    onFocus={() => setActiveField("pickup")}
                                    placeholder=" "
                                    className="
                                    peer pl-14 pr-20 p-[12px] m-[1px] w-full bg-gray-100 rounded-lg text-lg 
                                    outline-none focus:ring-2 focus:bg-white focus:ring-black"
                                />

                                {/* Validation Error */}
                                {errors.pickup && (
                                    <p className="text-red-500 text-sm mt-1">{errors.pickup.message}</p>
                                )}

                                {/* left icon */}
                                <div className="absolute left-0 top-0 bottom-0 bg-gray-100 peer-focus:ring-black peer-focus:bg-white flex justify-center items-center p-[22px] m-[1px] rounded-l-lg">
                                    <div className="bg-black p-[5px] rounded-full w-[2px]"></div>
                                </div>

                                {/* right icon */}
                                <div className="absolute right-0 top-0 bottom-0 bg-gray-100 m-[1px] peer-focus:bg-white flex justify-center items-center p-[22px] rounded-r-lg cursor-pointer">
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
                                    peer-focus:-top-[10px] peer-focus:text-sm peer-focus:pb-2
                                    peer-focus:text-black/70 peer-focus:bg-white

                                 /* when input has value → stay up */

                                peer-[&:not(:placeholder-shown)]:-top-[10px]
                                 peer-[&:not(:placeholder-shown)]:text-sm"
                                >
                                    Pickup location
                                </label>

                                {/* Suggestion List Pickup */}

                                {activeField === "pickup" && (
                                    <div
                                        ref={dropdownRef}
                                        className="absolute left-0 right-0 z-20 transition-all duration-300 ease-in-out origin-top scale-y-100 opacity-100"
                                    >
                                        <div className="mt-[2px] min-h-20 flex max-w-md flex-col bg-white shadow-lg shadow-black/30 rounded-lg">


                                            {/* Suggestions */}
                                            {!isPickupFetching && (
                                                <ul className="bg-white rounded-lg w-full overflow-y-auto max-h-[55vh]">
                                                    {(Array.isArray(pickupList) ? pickupList : [])
                                                        .map((item, index) => {

                                                            // Handle both string and object safely
                                                            const key = typeof item === "string" ? index : (item as any).id;
                                                            const label = typeof item === "string" ? item : (item as any).description ?? "Unknown";

                                                            return (
                                                                <li
                                                                    key={key}
                                                                    onMouseDown={() => selectSuggestion("pickup", label)}
                                                                    className="p-2 text-[17px] text-black hover:bg-gray-100 cursor-pointer"
                                                                >
                                                                    {/* Location marker icon */}

                                                                    <div className="flex items-center justify-start gap-2.5 w-full">

                                                                        <div className="flex bg-gray-200 p-2.5 rounded-full ml-2 my-2">
                                                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><title>Location marker</title><path d="M18.7 3.8C15 .1 9 .1 5.3 3.8c-3.7 3.7-3.7 9.8 0 13.5L12 24l6.7-6.8c3.7-3.6 3.7-9.7 0-13.4ZM12 12.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Z" fill="currentColor"></path></svg>
                                                                        </div>
                                                                        <div className="ml-2">
                                                                            {label}
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            );
                                                        })}
                                                </ul>
                                            )}

                                            {/* Loading */}

                                            {isPickupFetching && (
                                                <div className="flex justify-center items-center h-18">
                                                    <p className="text-gray-500 text-[16px]">Loading...</p>
                                                </div>
                                            )}

                                            {/* If no suggestions found */}

                                            {!isPickupFetching && pickupList.length === 0 && (
                                                <div className="flex justify-center items-center h-18">
                                                    <p className="text-gray-500 text-md font-semibold">No results</p>
                                                </div>
                                            )}


                                        </div>
                                    </div>
                                )}

                            </div>

                            {/* Destination Input */}

                            <div className="relative">
                                <input
                                    id="destination"
                                    type="text"
                                    {...register("destination", { required: "Destination location is required" })}
                                    onChange={(e) => handleInput("destination", e.target.value)}
                                    value={destinationQuery}
                                    ref={destinationRef}
                                    onFocus={() => setActiveField("destination")}
                                    placeholder=" "
                                    className="
                                    peer pl-14 pr-20 p-[12px] m-[1px] w-full bg-gray-100 rounded-lg text-lg 
                                    outline-none focus:ring-2 focus:bg-white focus:ring-black"
                                />

                                {/* left icon */}
                                <div className="absolute left-0 top-0 bottom-0 bg-gray-100 m-[1px] flex peer-focus:bg-white justify-center items-center p-[22px] rounded-l-lg">
                                    <div className="bg-black/90 p-[5px] h-[3px] w-[3px]"></div>
                                </div>

                                {/* floating label */}

                                <label
                                    htmlFor="destination"
                                    className="absolute left-14 top-3 text-gray-500 text-lg transition-all duration-200 
                                   peer-placeholder-shown:top-3 peer-placeholder-shown:text-lg 
                                    peer-focus:-top-[10px] peer-focus:text-sm peer-focus:pb-2
                                    peer-focus:text-black/70 peer-focus:bg-white

                                 /* when input has value → stay up */

                                peer-[&:not(:placeholder-shown)]:-top-[10px]
                                 peer-[&:not(:placeholder-shown)]:text-sm"
                                >
                                    Dropoff location
                                </label>

                                {/* Suggestion List Destination */}

                                {activeField === "destination" && (
                                    <div
                                        ref={dropdownRef}
                                        className="absolute left-0 right-0 z-20 transition-all duration-300 ease-in-out origin-top scale-y-100 opacity-100"
                                    >
                                        <div className="mt-[2px] min-h-20 flex max-w-md flex-col bg-white shadow-lg shadow-black/30 rounded-lg">

                                            {/* Suggestions */}
                                            {!isDestinationFetching && (
                                                <ul className="bg-white py-2 rounded-lg w-full overflow-y-auto max-h-[55vh]">
                                                    {(Array.isArray(destinationList) ? destinationList : [])
                                                        .map((item, index) => {

                                                            // Handle both string and object safely
                                                            const key = typeof item === "string" ? index : (item as any).id;
                                                            const label = typeof item === "string" ? item : (item as any).description ?? "Unknown";

                                                            return (
                                                                <li
                                                                    key={key}
                                                                    onMouseDown={() => selectSuggestion("destination", label)}
                                                                    className="p-2 text-[17px] text-black hover:bg-gray-100 cursor-pointer"
                                                                >
                                                                    {/* Location marker icon */}

                                                                    <div className="flex items-center justify-start gap-2.5 w-full">

                                                                        <div className="flex bg-gray-200 p-2.5 rounded-full ml-2 my-2">
                                                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><title>Location marker</title><path d="M18.7 3.8C15 .1 9 .1 5.3 3.8c-3.7 3.7-3.7 9.8 0 13.5L12 24l6.7-6.8c3.7-3.6 3.7-9.7 0-13.4ZM12 12.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Z" fill="currentColor"></path></svg>
                                                                        </div>
                                                                        <div className="ml-2">
                                                                            {label}
                                                                        </div>
                                                                    </div>

                                                                </li>
                                                            );
                                                        })}
                                                </ul>
                                            )}

                                            {/* Loading */}

                                            {isDestinationFetching && (
                                                <div className="flex justify-center items-center h-18">
                                                    <p className="text-gray-500 text-[16px]">Loading...</p>
                                                </div>
                                            )}

                                            {/* If no suggestions found */}

                                            {!isDestinationFetching && destinationList.length === 0 && (
                                                <div className="flex justify-center items-center h-18">
                                                    <p className="text-gray-500 text-md font-semibold">No results</p>
                                                </div>
                                            )}

                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* vertical border */}

                            <div className=" absolute h-[1px] w-13 bg-black/90 rotate-90 top-[62px] bottom-0 left-0 right-8 m-[1px] "></div>

                            <button
                                type="button"
                                onClick={() => {
                                    navigate("/users/dashboard/product", {
                                        state: {
                                            pickup: pickupQuery,
                                            destination: destinationQuery,
                                        },
                                    });
                                }}
                                className="bg-black py-4 px-9 w-fit text-white text-md rounded-lg"
                            >
                                See Prices
                            </button>
                        </div>
                    </form>

                </div>

                <div className="row-span-3 col-end-12">

                    <div className="hidden md:w-full  xl:mb-0  md:h-full md:block rounded-lg xl:h-[610px] xl:w-[610px] overflow-hidden">
                        <img
                            src="https://www.groovypost.com/wp-content/uploads/2020/07/Google-Photos-map-search-map-view-zoom-out.png"
                            alt="Google map view demo"
                            className="h-full w-full object-cover transition-all duration-2000 ease-in-out animate-in slide-in-from-bottom-10 "
                        />

                    </div>

                </div>

            </div>

        </div>

    );
}

export default PicupAndDestination;