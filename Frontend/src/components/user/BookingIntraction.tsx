import { Link } from "react-router-dom"


function BookingIntraction() {

    return (
        <div className="flex py-10 flex-col md:p-[60px] xl:px-[148px] md:px-10 px-6">

            <h2 className="text-[29px] md:text-[38px] pb-10 font-bold">
                Book your trip on your phone or computer
            </h2>

            <div className="relative">


                {/* cards  1 */}

                <div className="md:flex pb-8 md:pb-16 gap-30">

                    <div className="flex pl-8 md:pl-0 pb-3 md:pb-0 md:justify-start">

                        <div className="w-[490px] h-[230px] md:w-[400px]  md:h-[220px] ">

                            <img
                                className="w-full h-full object-cover"
                                src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=540/height=305/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy9hYzU4NGY5Mi00YmY4LTQ2NmMtOGQyZi1mNTQ5NTU2ZTBhZWQucG5n" alt="uber image"
                            />

                        </div>
                    </div>

                    <div className="pl-10">
                        <h3 className="text-xl pb-2 font-semibold">
                            1. Add your trip details
                        </h3>
                        <p className="text-[19px] text-black/70 ">
                            Enter your pickup spot and destination, and check prices for your trip.
                        </p>
                    </div>
                </div>

                {/* cards  2 */}

                <div className="md:flex pb-8 md:pb-16 gap-30">

                    <div className="flex pl-8 md:pl-0 pb-3 md:pb-0 md:justify-start">
                        <div className="w-[490px] md:w-[400px] h-[260px] md:h-[220px] ">

                            <img
                                className="w-full h-full object-cover"
                                src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=540/height=305/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8wYjQ4MTk5Zi03N2MxLTQwNzgtOGYwNi0xZTRkOTk2ZTRjNTEucG5n" alt="uber image"
                            />

                        </div>
                    </div>

                    <div className="pl-10">
                        <h3 className="text-xl pb-2 font-semibold">
                            2. Pay easily
                        </h3>
                        <p className="text-[19px] text-black/70 ">
                            Add your preferred payment method, then choose among the ride options available in your location.
                        </p>
                    </div>
                </div>

                {/* cards  3 */}

                <div className="md:flex gap-30">

                    <div className="flex pl-8 md:pl-0 pb-3 md:pb-0 md:justify-start">

                        <div className="w-[490px] md:w-[400px] h-[260px] md:h-[220px] ">

                            <img
                                className="w-full h-full object-cover"
                                src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=540/height=305/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy9jYmNjYTZkNS1mZDc5LTRmNjMtYWJkNC1jNzZmNGVhNDJkZTMucG5n" alt="uber image"
                            />

                        </div>
                    </div>

                    <div className="pl-10">
                        <h3 className="text-xl pb-2 font-semibold">
                            3. Meet your driver
                        </h3>
                        <p className="text-[18px] pb-8 text-black/70">
                            Uber will match you with a driver nearby, and you’ll get updates on your phone or computer about when to meet them.
                        </p>


                        <div className="group flex pl-8 md:pl-0 flex-col w-fit">

                            <Link
                                className="text-black/90 text-md pb-1"
                                to={"/ride"}>
                                Book your Ride
                            </Link>

                            <div className="h-[1.5px] w-30 bg-gray-300 relative overflow-hidden">
                                <div className="absolute left-0 top-0 h-full w-full bg-black scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100"></div>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="absolute  top-[398px] -left-99 md:top-[283px] md:left-44 w-fit h-fit flex justify-center items-center rotate-90">

                    <div className="bg-black p-[5px] h-[3px] w-[3px]"></div>

                    <div className="h-[0.5px] w-[385px] md:w-[270px] mx-[1.5px] bg-black "></div>

                    <div className="bg-black p-[5px] h-[3px] w-[3px]"></div>

                    <div className="h-[0.5px] w-[385px] md:w-[270px] mx-[1.5px] bg-black "></div>

                    <div className="bg-black p-[5px] h-[3px] w-[3px]"></div>

                </div>
            </div>

        </div>

    )
}

export default BookingIntraction