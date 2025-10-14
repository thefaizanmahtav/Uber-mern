import { Link } from "react-router-dom"

function RideAcceptDialog() {


    return (

        <div className="overflow-hidden">

            {/* ride accept dialog */}

            <div className="absolute z-50 top-0 bottom-0 right-0 inset-0 w-full h-screen">

                <img
                    className="absolute top-0 w-full h-full object-fill"
                    src="https://as2.ftcdn.net/v2/jpg/02/88/82/15/1000_F_288821575_TM4gJOMpOFgNH1QUIDGzaDQzMZSU92LS.jpg"
                    alt="map"
                />
            </div>

            <div
                className="absolute z-50 top-0 bottom-0 right-0 left-0 flex w-full h-full p-8">


                <div className="flex flex-col w-full overflow-hidden transition-all duration-1000 ease-out animate-in slide-in-from-bottom lg:pb-22">

                    {/* Close svg */}

                    <div className="flex w-full justify-end">

                        <div className="flex justify-end items-end bg-white w-fit rounded-full p-1.5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" />
                            </svg>
                        </div>
                    </div>

                    {/*inner dialog content */}

                    <div className="flex w-full h-full items-end md:justify-center">

                        <div className="flex justify-center items-center w-full bg-white h-md rounded-2xl p-4 md:w-[60vh] lg:w-[65vh] lg:h-[55vh]">

                            {/* wrapper col */}

                            <div className="flex flex-col items-center overflow-hidden">

                                {/* Confirm button */}

                                <Link
                                    to={"/captains/dashboard/online/pickup-rider"}
                                    className="flex items-center bg-black rounded-full w-fit h-fit text-white py-2.5 px-3 gap-1.5 lg:py-3.5 lg:px-4">

                                    {/* user svg */}

                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                                    </div>

                                    <span>Uber Go</span>

                                </Link>

                                {/* Price */}

                                <div className="text-black text-4xl lg:text-5xl font-semibold mt-3.5">
                                    ₹140.49
                                </div>

                                {/* tax */}

                                <div className="text-black text-sm lg:text-[15px] mt-2">
                                    *includes 5% tax
                                </div>

                                {/* payment method */}

                                <div className="flex items-center text-black text-sm lg:text-[15px] mt-2 gap-1">

                                    {/* star svg */}

                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="black" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" /></svg>
                                    </div>

                                    <span className="">4.6 Cash payment</span>


                                </div>

                                {/* border middle */}

                                <span className="flex items-center border-b-2 border-gray-200 mt-4 px-100"></span>


                                {/* wrapper pick and drop locations */}

                                <div className="relative text-[15px] lg:text-[18px] w-md px-6 text-black font-semibold space-y-1.5 my-2 mt-4">


                                    {/* pick and drop locations */}

                                    {/* duration top */}

                                    <div className="flex items-start pl-9">
                                        4 mins (1.4 km) away
                                    </div>

                                    {/* pickup location */}

                                    <div className="flex items-center gap-4">

                                        {/* left icon */}

                                        <span className="pl-1">

                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="black" data-testid="pickup-icon"><title>Radio button selected</title><path fill-rule="evenodd" clip-rule="evenodd" d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm0-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" fill="black"></path>
                                            </svg>

                                        </span>

                                        <div className="flex items-start ">
                                            379, Nai bazar purwa tulsipur balrampur, uttar pradesh - 271210
                                        </div>

                                    </div>

                                    {/* duration bottom */}

                                    <div className="flex items-start pl-9">
                                        7 mins (2.4 km) away
                                    </div>

                                    {/* Dropoff location */}

                                    <div className="flex items-center gap-4">

                                        {/* left icon */}
                                        <span className="pl-[5px]">

                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" data-testid="drop-icon"><title>Dropoff</title><path fill-rule="evenodd" clip-rule="evenodd" d="M22 2H2v20h20V2Zm-7 7H9v6h6V9Z" fill="black"></path>
                                            </svg>

                                        </span>

                                        <div className="flex items-start text-black/80">
                                            379, purani bazar tulsipur balrampur, uttar pradesh - 271208
                                        </div>

                                    </div>

                                    {/* vertical border */}

                                    <div className="absolute h-[2px] w-12 lg:w-14 bg-black/90 rotate-90 top-22 lg:top-26 bottom-0 left-2.5 lg:left-2 right-0"></div>
                                </div>


                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default RideAcceptDialog
