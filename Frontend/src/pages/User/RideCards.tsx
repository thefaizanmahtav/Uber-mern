import { Link } from "react-router-dom"

function RideCards() {

    type Cards = {
        title: string,
        disclaimer: string
        image: string
    }

    const cards: Cards[] = [
        {
            title: "Courier",
            disclaimer: "Uber makes same-day item delivery easier than ever.",
            image: "https://cn-geo1.uber.com/static/mobile-content/Courier.png"
        },
        {
            title: "Intercity",
            disclaimer: "Get convenient, affordable outstation cabs anytime at your door.",
            image: "https://mobile-content.uber.com/launch-experience/intercity.png"
        },
        {
            title: "Moto",
            disclaimer: "Get affordable motorbike rides in minutes at your doorstep.",
            image: "https://d1a3f4spazzrp4.cloudfront.net/car-types/haloProductImages/v1.1/Uber_Moto_India1.png"
        },

    ]

    const Hiddencards: Cards[] = [
        {
            title: "Rentals",
            disclaimer: "Request a trip for a block of time and make multiple stops.",
            image: "https://mobile-content.uber.com/launch-experience/Hourly2021.png"
        },
        {
            title: "Reserve",
            disclaimer: "Reserve your ride in advance so you can relax on the day of your trip.",
            image: "https://mobile-content.uber.com/uber_reserve/reserve_clock.png"
        },
        {
            title: "Ride",
            disclaimer: "Go anywhere with Uber. Request a ride, hop in, and go.",
            image: "https://mobile-content.uber.com/launch-experience/ride.png"
        },

    ]


    return (
        <div className="flex py-10 flex-col md:p-[60px] xl:px-[148px] md:px-10 px-6">

            <div className="flex w-full">
                <h1 className="md:w-full text-[30px] mb-5  md:text-[35px] font-bold">
                    Ways to ride and more
                </h1>
            </div>

            {/* card */}

            <div className="grid spain grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full h-fit gap-4">

                {cards.map(({ title, disclaimer, image }) => (

                    <div key={title} className="flex justify-between w-full md:w-fit bg-gray-100 rounded-xl p-4">

                        <div className="flex flex-col h-fit">

                            <div className="text-[18px] font-semibold">
                                {title}
                            </div>
                            <p className="my-2 text-sm pr-2 text-black/80">
                                {disclaimer}
                            </p>

                            <div className="flex mt-5 justify-center items-center bg-white w-fit py-2 px-4 rounded-full hover:bg-gray-100">
                                <Link to={''}>
                                    Details
                                </Link>
                            </div>

                        </div>

                        <div className="md:block object-cover h-[132px] w-[132px] md:w-[180px]">

                            <img className="w-full h-full object-cover" src={image} alt="uber img" />
                        </div>

                    </div>
                ))}


                {/* Hiddencards  */}

                {Hiddencards.map(({ title, disclaimer, image }) => (

                    <div key={title} className="hidden md:flex md:justify-between md:w-fit bg-gray-100 rounded-xl p-4">

                        <div className="flex flex-col h-fit">

                            <div className="text-[18px] font-semibold">
                                {title}
                            </div>
                            <p className="my-2 text-sm pr-2 text-black/80">
                               {disclaimer}
                            </p>

                            <div className="flex mt-5 justify-center items-center bg-white w-fit py-2 px-4 rounded-full hover:bg-gray-100">
                                <Link to={''}>
                                    Details
                                </Link>
                            </div>

                        </div>

                        <div className="h-[132px] w-[132px] md:w-[200px]">
                            <img className="w-full h-full " src={image} alt="uber img" />
                        </div>

                    </div>
                ))}

            </div>



        </div>
    )
}

export default RideCards
