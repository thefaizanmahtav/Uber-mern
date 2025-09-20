import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";

type ActiveField = "pickup" | "destination" | null;

type MapFormProps = {
    navBtn?: () => void;
    activeField?: ActiveField;
    setActiveField?: (val: ActiveField) => void;
    autoFocusPickup?: boolean;
};

function MapForm({
    navBtn,
    activeField,
    setActiveField,
    autoFocusPickup = false
}: MapFormProps) {

    const [internalActiveField, setInternalActiveField] = useState<ActiveField>(null);
    const isControlled = activeField !== undefined;
    const value = isControlled ? activeField : internalActiveField;
    const setValue = isControlled ? setActiveField! : setInternalActiveField;

    const { register, handleSubmit, formState: { errors } } = useForm();

    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const pickupInputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        // auto focus pickup input on page load
        if (autoFocusPickup && pickupInputRef.current) {
            pickupInputRef.current.focus();
            setValue("pickup");; // open dropdown too
        }
    }, [autoFocusPickup, setValue]);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target as Node)
            ) {
                setValue(null);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);

    }, [setValue]);

    return (
        <>

            <form>

                <div className="flex flex-col space-y-4 relative w-full">

                    {/* Pickup Input */}

                    <div className="relative">
                        <input
                            ref={pickupInputRef}
                            id="pickup"
                            type="text"
                            onFocus={() => setValue("pickup")}
                            className="peer pl-14 pr-16 p-[12px] w-full bg-gray-100 rounded-lg text-lg outline-none focus:ring-2 focus:bg-white focus:ring-black"
                            placeholder="Pickup location"
                        />

                        {/* left icon */}
                        <div className="absolute left-0 top-0 bottom-0 bg-gray-100 peer-focus:ring-black peer-focus:bg-white flex justify-center items-center p-[18px] rounded-l-lg">

                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" data-testid="pickup-icon"><title>Radio button selected</title><path fill-rule="evenodd" clip-rule="evenodd" d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm0-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" fill="currentColor"></path>
                            </svg>

                        </div>

                        {/* Pickup Dropdown */}

                        {value === "pickup" && (
                            <div
                                ref={dropdownRef}
                                className="-mx-8 lg:-mx-0 absolute top-35 lg:top-14 left-0 right-0 z-20 transition-all duration-300 ease-in-out origin-top scale-y-100 opacity-100"
                            >
                                <div className="flex flex-col w-full h-[72vh] lg:max-w-[510px] bg-white font-medium lg:shadow-lg lg:shadow-gray-400 lg:rounded-lg
                                                overflow-y-scroll">

                                    {/* Address */}

                                    <div className="flex items-center p-4 hover:bg-gray-100 w-full border-b border-gray-100">
                                        {/* Location icon */}
                                        <div className="px-4">
                                            <div className="bg-gray-200 p-2.5 rounded-full">
                                                <svg
                                                    width="18" height="18" viewBox="0 0 24 24" fill="none"><title>Location marker</title><path d="M18.7 3.8C15 .1 9 .1 5.3 3.8c-3.7 3.7-3.7 9.8 0 13.5L12 24l6.7-6.8c3.7-3.6 3.7-9.7 0-13.4ZM12 12.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Z" fill="currentColor"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        {/* address */}
                                        <div className="flex flex-col ">
                                            <h3 className="text-lg font-semibold text-black/90">
                                                289/262, Arya Nagar
                                            </h3>
                                            <p className="text-sm text-black/50">
                                                Charbagh, Lucknow, Uttar Pradesh
                                            </p>
                                        </div>

                                    </div>
                                    <div className="flex items-center p-4 hover:bg-gray-100 w-full border-b border-gray-100">
                                        {/* Location icon */}
                                        <div className="px-4">
                                            <div className="bg-gray-200 p-2.5 rounded-full">
                                                <svg
                                                    width="18" height="18" viewBox="0 0 24 24" fill="none"><title>Location marker</title><path d="M18.7 3.8C15 .1 9 .1 5.3 3.8c-3.7 3.7-3.7 9.8 0 13.5L12 24l6.7-6.8c3.7-3.6 3.7-9.7 0-13.4ZM12 12.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Z" fill="currentColor"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        {/* address */}
                                        <div className="flex flex-col ">
                                            <h3 className="text-lg font-semibold text-black/90">
                                                289/262, Arya Nagar
                                            </h3>
                                            <p className="text-sm text-black/50">
                                                Charbagh, Lucknow, Uttar Pradesh
                                            </p>
                                        </div>

                                    </div>
                                    <div className="flex items-center p-4 hover:bg-gray-100 w-full border-b border-gray-100">
                                        {/* Location icon */}
                                        <div className="px-4">
                                            <div className="bg-gray-200 p-2.5 rounded-full">
                                                <svg
                                                    width="18" height="18" viewBox="0 0 24 24" fill="none"><title>Location marker</title><path d="M18.7 3.8C15 .1 9 .1 5.3 3.8c-3.7 3.7-3.7 9.8 0 13.5L12 24l6.7-6.8c3.7-3.6 3.7-9.7 0-13.4ZM12 12.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Z" fill="currentColor"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        {/* address */}
                                        <div className="flex flex-col ">
                                            <h3 className="text-lg font-semibold text-black/90">
                                                289/262, Arya Nagar
                                            </h3>
                                            <p className="text-sm text-black/50">
                                                Charbagh, Lucknow, Uttar Pradesh
                                            </p>
                                        </div>

                                    </div>
                                    <div className="flex items-center p-4 hover:bg-gray-100 w-full border-b border-gray-100">
                                        {/* Location icon */}
                                        <div className="px-4">
                                            <div className="bg-gray-200 p-2.5 rounded-full">
                                                <svg
                                                    width="18" height="18" viewBox="0 0 24 24" fill="none"><title>Location marker</title><path d="M18.7 3.8C15 .1 9 .1 5.3 3.8c-3.7 3.7-3.7 9.8 0 13.5L12 24l6.7-6.8c3.7-3.6 3.7-9.7 0-13.4ZM12 12.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Z" fill="currentColor"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        {/* address */}
                                        <div className="flex flex-col ">
                                            <h3 className="text-lg font-semibold text-black/90">
                                                289/262, Arya Nagar
                                            </h3>
                                            <p className="text-sm text-black/50">
                                                Charbagh, Lucknow, Uttar Pradesh
                                            </p>
                                        </div>

                                    </div>

                                    <div className="flex items-center p-4 hover:bg-gray-100 w-full border-b border-gray-100">
                                        {/* Location icon */}
                                        <div className="px-4">
                                            <div className="bg-gray-200 p-2.5 rounded-full">
                                                <svg
                                                    width="18" height="18" viewBox="0 0 24 24" fill="none"><title>Location marker</title><path d="M18.7 3.8C15 .1 9 .1 5.3 3.8c-3.7 3.7-3.7 9.8 0 13.5L12 24l6.7-6.8c3.7-3.6 3.7-9.7 0-13.4ZM12 12.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Z" fill="currentColor"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        {/* address */}
                                        <div className="flex flex-col ">
                                            <h3 className="text-lg font-semibold text-black/90">
                                                289/262, Arya Nagar
                                            </h3>
                                            <p className="text-sm text-black/50">
                                                Charbagh, Lucknow, Uttar Pradesh
                                            </p>
                                        </div>

                                    </div>

                                    <div className="flex items-center p-4 hover:bg-gray-100 w-full border-b border-gray-100">
                                        {/* Location icon */}
                                        <div className="px-4">
                                            <div className="bg-gray-200 p-2.5 rounded-full">
                                                <svg
                                                    width="18" height="18" viewBox="0 0 24 24" fill="none"><title>Location marker</title><path d="M18.7 3.8C15 .1 9 .1 5.3 3.8c-3.7 3.7-3.7 9.8 0 13.5L12 24l6.7-6.8c3.7-3.6 3.7-9.7 0-13.4ZM12 12.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Z" fill="currentColor"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        {/* address */}
                                        <div className="flex flex-col ">
                                            <h3 className="text-lg font-semibold text-black/90">
                                                289/262, Arya Nagar
                                            </h3>
                                            <p className="text-sm text-black/50">
                                                Charbagh, Lucknow, Uttar Pradesh
                                            </p>
                                        </div>

                                    </div>

                                    <div className="flex items-center p-4 hover:bg-gray-100 w-full border-b border-gray-100">
                                        {/* Location icon */}
                                        <div className="px-4">
                                            <div className="bg-gray-200 p-2.5 rounded-full">
                                                <svg
                                                    width="18" height="18" viewBox="0 0 24 24" fill="none"><title>Location marker</title><path d="M18.7 3.8C15 .1 9 .1 5.3 3.8c-3.7 3.7-3.7 9.8 0 13.5L12 24l6.7-6.8c3.7-3.6 3.7-9.7 0-13.4ZM12 12.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Z" fill="currentColor"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        {/* address */}
                                        <div className="flex flex-col ">
                                            <h3 className="text-lg font-semibold text-black/90">
                                                289/262, Arya Nagar
                                            </h3>
                                            <p className="text-sm text-black/50">
                                                Charbagh, Lucknow, Uttar Pradesh
                                            </p>
                                        </div>

                                    </div>

                                    <div className="flex items-center p-4 hover:bg-gray-100 w-full border-b border-gray-100">
                                        {/* Location icon */}
                                        <div className="px-4">
                                            <div className="bg-gray-200 p-2.5 rounded-full">
                                                <svg
                                                    width="18" height="18" viewBox="0 0 24 24" fill="none"><title>Location marker</title><path d="M18.7 3.8C15 .1 9 .1 5.3 3.8c-3.7 3.7-3.7 9.8 0 13.5L12 24l6.7-6.8c3.7-3.6 3.7-9.7 0-13.4ZM12 12.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Z" fill="currentColor"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        {/* address */}
                                        <div className="flex flex-col ">
                                            <h3 className="text-lg font-semibold text-black/90">
                                                289/262, Arya Nagar
                                            </h3>
                                            <p className="text-sm text-black/50">
                                                Charbagh, Lucknow, Uttar Pradesh
                                            </p>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        )}
                    </div>


                    {/* Destination Input */}
                    <div className="relative">
                        <input
                            id="destination"
                            type="text"
                            onFocus={() => setValue("destination")}
                            className="peer pl-14 pr-16 p-[12px] w-full bg-gray-100 rounded-lg text-lg outline-none focus:ring-2 focus:bg-white focus:ring-black"
                            placeholder="Dropoff location"
                        />

                        {/* left icon */}
                        <div className="absolute left-0 top-0 bottom-0 bg-gray-100 flex peer-focus:bg-white justify-center items-center p-[18px] rounded-l-lg">

                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" data-testid="drop-icon"><title>Dropoff</title><path fill-rule="evenodd" clip-rule="evenodd" d="M22 2H2v20h20V2Zm-7 7H9v6h6V9Z" fill="currentColor"></path>
                            </svg>

                        </div>


                        {/* Destination Dropdown */}

                        {value === "destination" && (
                            <div
                                ref={dropdownRef}
                                className="-mx-8 lg:-mx-0 absolute top-18 lg:top-14 left-0 right-0 z-20 transition-all duration-300 ease-in-out origin-top scale-y-100 opacity-100"
                            >
                                <div className="flex flex-col w-full h-[64vh] lg:max-w-[510px] bg-white font-medium lg:shadow-lg lg:shadow-gray-400 lg:rounded-lg
                                                overflow-y-scroll">

                                    {/* Address */}

                                    <div className="flex items-center p-4 hover:bg-gray-100 w-full border-b border-gray-100">
                                        {/* Location icon */}
                                        <div className="px-4">
                                            <div className="bg-gray-200 p-2.5 rounded-full">
                                                <svg
                                                    width="18" height="18" viewBox="0 0 24 24" fill="none"><title>Location marker</title><path d="M18.7 3.8C15 .1 9 .1 5.3 3.8c-3.7 3.7-3.7 9.8 0 13.5L12 24l6.7-6.8c3.7-3.6 3.7-9.7 0-13.4ZM12 12.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Z" fill="currentColor"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        {/* address */}
                                        <div className="flex flex-col ">
                                            <h3 className="text-lg font-semibold text-black/90">
                                                289/262, Arya Nagar
                                            </h3>
                                            <p className="text-sm text-black/50">
                                                Charbagh, Lucknow, Uttar Pradesh
                                            </p>
                                        </div>

                                    </div>
                                    <div className="flex items-center p-4 hover:bg-gray-100 w-full border-b border-gray-100">
                                        {/* Location icon */}
                                        <div className="px-4">
                                            <div className="bg-gray-200 p-2.5 rounded-full">
                                                <svg
                                                    width="18" height="18" viewBox="0 0 24 24" fill="none"><title>Location marker</title><path d="M18.7 3.8C15 .1 9 .1 5.3 3.8c-3.7 3.7-3.7 9.8 0 13.5L12 24l6.7-6.8c3.7-3.6 3.7-9.7 0-13.4ZM12 12.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Z" fill="currentColor"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        {/* address */}
                                        <div className="flex flex-col ">
                                            <h3 className="text-lg font-semibold text-black/90">
                                                289/262, Arya Nagar
                                            </h3>
                                            <p className="text-sm text-black/50">
                                                Charbagh, Lucknow, Uttar Pradesh
                                            </p>
                                        </div>

                                    </div>
                                    <div className="flex items-center p-4 hover:bg-gray-100 w-full border-b border-gray-100">
                                        {/* Location icon */}
                                        <div className="px-4">
                                            <div className="bg-gray-200 p-2.5 rounded-full">
                                                <svg
                                                    width="18" height="18" viewBox="0 0 24 24" fill="none"><title>Location marker</title><path d="M18.7 3.8C15 .1 9 .1 5.3 3.8c-3.7 3.7-3.7 9.8 0 13.5L12 24l6.7-6.8c3.7-3.6 3.7-9.7 0-13.4ZM12 12.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Z" fill="currentColor"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        {/* address */}
                                        <div className="flex flex-col ">
                                            <h3 className="text-lg font-semibold text-black/90">
                                                289/262, Arya Nagar
                                            </h3>
                                            <p className="text-sm text-black/50">
                                                Charbagh, Lucknow, Uttar Pradesh
                                            </p>
                                        </div>

                                    </div>

                                    <div className="flex items-center p-4 hover:bg-gray-100 w-full border-b border-gray-100">
                                        {/* Location icon */}
                                        <div className="px-4">
                                            <div className="bg-gray-200 p-2.5 rounded-full">
                                                <svg
                                                    width="18" height="18" viewBox="0 0 24 24" fill="none"><title>Location marker</title><path d="M18.7 3.8C15 .1 9 .1 5.3 3.8c-3.7 3.7-3.7 9.8 0 13.5L12 24l6.7-6.8c3.7-3.6 3.7-9.7 0-13.4ZM12 12.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Z" fill="currentColor"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        {/* address */}
                                        <div className="flex flex-col ">
                                            <h3 className="text-lg font-semibold text-black/90">
                                                289/262, Arya Nagar
                                            </h3>
                                            <p className="text-sm text-black/50">
                                                Charbagh, Lucknow, Uttar Pradesh
                                            </p>
                                        </div>

                                    </div>

                                    <div className="flex items-center p-4 hover:bg-gray-100 w-full border-b border-gray-100">
                                        {/* Location icon */}
                                        <div className="px-4">
                                            <div className="bg-gray-200 p-2.5 rounded-full">
                                                <svg
                                                    width="18" height="18" viewBox="0 0 24 24" fill="none"><title>Location marker</title><path d="M18.7 3.8C15 .1 9 .1 5.3 3.8c-3.7 3.7-3.7 9.8 0 13.5L12 24l6.7-6.8c3.7-3.6 3.7-9.7 0-13.4ZM12 12.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Z" fill="currentColor"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        {/* address */}
                                        <div className="flex flex-col ">
                                            <h3 className="text-lg font-semibold text-black/90">
                                                289/262, Arya Nagar
                                            </h3>
                                            <p className="text-sm text-black/50">
                                                Charbagh, Lucknow, Uttar Pradesh
                                            </p>
                                        </div>

                                    </div>

                                    <div className="flex items-center p-4 hover:bg-gray-100 w-full border-b border-gray-100">
                                        {/* Location icon */}
                                        <div className="px-4">
                                            <div className="bg-gray-200 p-2.5 rounded-full">
                                                <svg
                                                    width="18" height="18" viewBox="0 0 24 24" fill="none"><title>Location marker</title><path d="M18.7 3.8C15 .1 9 .1 5.3 3.8c-3.7 3.7-3.7 9.8 0 13.5L12 24l6.7-6.8c3.7-3.6 3.7-9.7 0-13.4ZM12 12.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Z" fill="currentColor"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        {/* address */}
                                        <div className="flex flex-col ">
                                            <h3 className="text-lg font-semibold text-black/90">
                                                289/262, Arya Nagar
                                            </h3>
                                            <p className="text-sm text-black/50">
                                                Charbagh, Lucknow, Uttar Pradesh
                                            </p>
                                        </div>

                                    </div>

                                    <div className="flex items-center p-4 hover:bg-gray-100 w-full border-b border-gray-100">
                                        {/* Location icon */}
                                        <div className="px-4">
                                            <div className="bg-gray-200 p-2.5 rounded-full">
                                                <svg
                                                    width="18" height="18" viewBox="0 0 24 24" fill="none"><title>Location marker</title><path d="M18.7 3.8C15 .1 9 .1 5.3 3.8c-3.7 3.7-3.7 9.8 0 13.5L12 24l6.7-6.8c3.7-3.6 3.7-9.7 0-13.4ZM12 12.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Z" fill="currentColor"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        {/* address */}
                                        <div className="flex flex-col ">
                                            <h3 className="text-lg font-semibold text-black/90">
                                                289/262, Arya Nagar
                                            </h3>
                                            <p className="text-sm text-black/50">
                                                Charbagh, Lucknow, Uttar Pradesh
                                            </p>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        )}
                    </div>

                </div>



            </form>

            <Button
                onClick={navBtn}
                className="max-lg:hidden lg:w-full lg:px-7 lg:py-7 lg:bg-gray-100 text-gray-400 lg:text-lg lg:cursor-no-drop"
            >
                Search
            </Button>

        </>
    )
}

export default MapForm