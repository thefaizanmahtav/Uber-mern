import type { JSX } from "react";
import { Link } from "react-router-dom"

function Footer() {

    type Params = {
        lable: string,
        to: string
    }

    type Icons = {
        icon: JSX.Element;
        to: string
    }

    const icons: Icons[] = [

        // facebook

        {
            icon: (
                <svg width="19px" height="19px" viewBox="0 0 22 22" fill="none"><title>facebook</title><path d="M21.79 1H2.21C1.54 1 1 1.54 1 2.21v19.57c0 .68.54 1.22 1.21 1.22h10.54v-8.51H9.9v-3.33h2.86V8.71c0-2.84 1.74-4.39 4.27-4.39.85 0 1.71.04 2.56.13v2.97h-1.75c-1.38 0-1.65.65-1.65 1.62v2.12h3.3l-.43 3.33h-2.89V23h5.61c.67 0 1.21-.54 1.21-1.21V2.21C23 1.54 22.46 1 21.79 1Z" fill="white"></path></svg>
            ),
            to: ""
        },

        // twitter

        {
            icon: (
                <svg width="19px" height="19px" viewBox="0 0 24 24" fill="none"><title>twitter</title><path d="M14.094 10.317 22.28 1H20.34l-7.11 8.088L7.557 1H1.01l8.583 12.231L1.01 23H2.95l7.503-8.543L16.446 23h6.546M3.649 2.432h2.978L20.34 21.639h-2.98" fill="white"></path></svg>
            ),
            to: ""
        },

        // youtube

        {
            icon: (
                <svg width="19px" height="19px" viewBox="0 0 24 24" fill="none"><title>youtube</title><path d="M23 12s0-3.85-.46-5.58c-.25-.95-1-1.7-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46c-.95.25-1.69 1.01-1.94 1.96C1 8.15 1 12 1 12s.04 3.85.5 5.58c.25.95 1 1.7 1.95 1.96 1.71.46 8.59.46 8.59.46s6.88 0 8.6-.46c.95-.25 1.69-1.01 1.94-1.96.46-1.73.42-5.58.42-5.58Zm-13 3.27V8.73L15.5 12 10 15.27Z" fill="white"></path></svg>
            ),
            to: ""
        },

        // linkedin

        {
            icon: (
                <svg width="19px" height="19px" viewBox="0 0 24 24" fill="none"><title>linkedin</title><path d="M21.37 1H2.62C1.73 1 1 1.71 1 2.58v18.83c0 .88.73 1.59 1.62 1.59h18.75c.9 0 1.63-.71 1.63-1.59V2.58C23 1.71 22.27 1 21.37 1ZM7.53 19.75H4.26V9.25h3.27v10.5ZM5.89 7.81C4.85 7.81 4 6.96 4 5.92s.84-1.89 1.89-1.89c1.04 0 1.89.85 1.89 1.89.01 1.04-.84 1.89-1.89 1.89Zm13.86 11.94h-3.26v-5.1c0-1.22-.02-2.78-1.7-2.78-1.7 0-1.96 1.33-1.96 2.7v5.19H9.57V9.26h3.13v1.43h.04c.44-.83 1.5-1.7 3.09-1.7 3.3 0 3.91 2.17 3.91 5v5.76h.01Z" fill="white"></path></svg>
            ),
            to: ""
        },

        // instagram

        {
            icon: (
                <svg width="19px" height="19px" viewBox="0 0 24 24" fill="none"><title>instagram</title><g fill="white"><path d="M21.15 2.85C19.05.74 16.23 1 12 1 8.04 1 5 .69 2.85 2.85.74 4.95 1 7.77 1 12c0 3.95-.31 7 1.85 9.15C4.95 23.26 7.77 23 12 23c3.96 0 7 .31 9.15-1.85C23.25 19.05 23 16.23 23 12c0-4.31.24-7.07-1.85-9.15Zm-1.4 16.9c-1.37 1.37-3.18 1.27-7.75 1.27-4.29 0-6.34.15-7.75-1.27-1.44-1.44-1.27-3.51-1.27-7.75 0-4.23-.15-6.33 1.27-7.75C5.66 2.84 7.6 2.98 12 2.98c4.23 0 6.33-.15 7.75 1.27 1.38 1.38 1.27 3.22 1.27 7.75 0 4.24.15 6.34-1.27 7.75Z"></path><path d="M12 6.35a5.65 5.65 0 1 0 .001 11.301A5.65 5.65 0 0 0 12 6.35Zm0 9.32c-2.02 0-3.67-1.64-3.67-3.67 0-2.03 1.64-3.67 3.67-3.67 2.03 0 3.67 1.64 3.67 3.67 0 2.02-1.65 3.67-3.67 3.67ZM17.87 4.81c-.73 0-1.32.59-1.32 1.32 0 .73.59 1.32 1.32 1.32.73 0 1.32-.59 1.32-1.32 0-.73-.59-1.32-1.32-1.32Z"></path></g></svg>
            ),
            to: ""
        },

    ];


    const companyLink: Params[] = [
        { lable: "About", to: "" },
        { lable: "Our offerings", to: "" },
        { lable: "Newsroom", to: "" },
        { lable: "Investors", to: "" },
        { lable: "Blog", to: "" },
        { lable: "Careers", to: "" },
    ]

    const ProductsLink: Params[] = [
        { lable: "Ride", to: "" },
        { lable: "Driver", to: "" },
        { lable: "Eat", to: "" },
        { lable: "Uber for Business", to: "" },
        { lable: "Uber Freight", to: "" },
        { lable: "Gift cards", to: "" },
        { lable: "Uber Health", to: "" },
    ]

    const GlobalCitizenshipLink: Params[] = [
        { lable: "Safety", to: "" },
        { lable: "Sustainability", to: "" }
    ]

    const TravelLink: Params[] = [
        { lable: "Reserve", to: "" },
        { lable: "Airports", to: "" },
        { lable: "Cities", to: "" }
    ]





    return (
        <footer className="flex py-10 flex-col md:p-[60px] bg-black xl:px-[148px] md:px-10 px-6">

            {/* home page link */}
            <div className="my-8">
                <Link
                    className="text-white font-semibold text-2xl"
                    to={''}>
                    Uber
                </Link>
            </div>


            <div className="mb-12">
                <Link
                    className="text-white text-lg hover:border-b-1"
                    to={''}>
                    Visit Help Center
                </Link>
            </div>

            {/* wrapper company, prodects wrapper, Global citizenship & Travel lg size*/}

            <div className="lg:flex lg:gap-15">

                {/* wrapper company & prodects md size */}

                <div className="md:flex justify-between gap-10">

                    {/* company */}

                    <div className="w-fit md:w-[300px]">

                        <h1 className="text-white lg:w-full text-xl font-semibold mb-5">
                            Company
                        </h1>

                        <div className="flex flex-col gap-4 mb-18">

                            {companyLink.map(({ lable, to }) => (
                                <Link
                                    key={lable}
                                    className="text-white text-[15px]"
                                    to={to}>
                                    {lable}
                                </Link>
                            ))}
                        </div>
                    </div>


                    {/* Products */}

                    <div className="w-fit md:w-[300px]">

                        <h1 className="text-white text-xl font-semibold mb-5">
                            Products
                        </h1>

                        <div className="flex flex-col gap-4 mb-18">

                            {ProductsLink.map(({ lable, to }) => (
                                <Link
                                    key={lable}
                                    className="text-white text-[15px]"
                                    to={to}>
                                    {lable}
                                </Link>
                            ))}
                        </div>
                    </div>

                </div>

                {/* wrapper Global citizenship & Travel md size */}

                <div className="md:flex justify-between gap-10">

                    {/* Global citizenship */}

                    <div className="w-fit md:w-[300px]">

                        <h1 className="text-white text-xl font-semibold mb-5">
                            Global citizenship
                        </h1>

                        <div className="flex flex-col gap-4 mb-18">

                            {GlobalCitizenshipLink.map(({ lable, to }) => (
                                <Link
                                    key={lable}
                                    className="text-white text-[15px]"
                                    to={to}>
                                    {lable}
                                </Link>
                            ))}
                        </div>
                    </div>


                    {/* Travel */}

                    <div className="w-fit md:w-[300px]">

                        <h1 className="text-white text-xl font-semibold mb-5">
                            Travel
                        </h1>

                        <div className="flex flex-col gap-4 mb-20">

                            {TravelLink.map(({ lable, to }) => (
                                <Link
                                    key={lable}
                                    className="text-white text-[15px]"
                                    to={to}>
                                    {lable}
                                </Link>
                            ))}
                        </div>
                    </div>

                </div>
            </div>


            {/* wrapper Icons & language item */}

            <div className="lg:flex lg:items-center">

                {/* Icons */}

                <div className="flex items-center w-full gap-10 mb-20 ">

                    {icons.map(({ icon, to }) => (
                        <div className="p-2 bg-black rounded-xl hover:bg-white/10">
                            <Link
                                key={to}
                                className="flex items-center justify-center h-10 w-10"
                                to={to}>
                                {icon}
                            </Link>
                        </div>
                    ))}
                </div>

                {/* languange item */}

                <div className="flex w-fit max-md:flex-col lg:gap-5 mb-10 lg:mb-20">

                    <div className="flex items-center gap-2 group cursor-pointer rounded-xl px-4 py-2 transition-colors hover:bg-white/10">
                        <svg
                            width="19" height="19" viewBox="0 0 24 24" fill="none"><title>Globe</title><path d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1Zm8 11c0 .7-.1 1.4-.3 2-.6-1.5-1.6-3.1-3-4.7l1.8-1.8c1 1.3 1.5 2.8 1.5 4.5ZM6.5 6.5c1.3 0 3.6.8 6 2.9l-3.2 3.2C7.1 9.8 6.5 7.5 6.5 6.5Zm8.1 5c2.3 2.7 2.9 5 2.9 6-1.3 0-3.6-.8-6-2.9l3.1-3.1Zm1.9-6.1-1.9 1.9c-1.6-1.4-3.2-2.4-4.7-3 .7-.2 1.3-.3 2-.3 1.8 0 3.3.5 4.6 1.4ZM4 12c0-.7.1-1.4.3-2 .6 1.5 1.6 3.1 3 4.7l-1.8 1.8C4.5 15.2 4 13.7 4 12Zm3.5 6.6 1.9-1.9c1.6 1.4 3.2 2.4 4.7 3-.7.2-1.3.3-2 .3-1.8 0-3.3-.5-4.6-1.4Z" fill="white"></path>
                        </svg>
                        <span className="text-[15px] text-white font-semibold">English</span>
                    </div>

                    {/* location item */}

                    <div className="flex items-center gap-2 group cursor-pointer rounded-xl px-4 py-2 transition-colors hover:bg-white/10">
                        <svg
                            width="19" height="19" viewBox="0 0 24 24" fill="none"><title>Location marker</title><path d="M18.7 3.8C15 .1 9 .1 5.3 3.8c-3.7 3.7-3.7 9.8 0 13.5L12 24l6.7-6.8c3.7-3.6 3.7-9.7 0-13.4ZM12 12.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Z" fill="white"></path>
                        </svg>
                        <span className="text-[15px] text-white font-semibold">Lucknow</span>
                    </div>

                </div>

            </div>

            {/*app downloading link */}

            <div className="flex items-center w-fit h-fit gap-2 mb-3">

                <div className="w-[150px] h-[100px]">
                    <Link
                        to={""}
                        className="w-full h-full object-cover"
                    >
                        <img src="https://d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.8/d1a3f4spazzrp4.cloudfront.net/illustrations/app-store-google-4d63c31a3e.svg" alt="playstore img" />
                    </Link>
                </div>

                <div className="w-[150px] h-[100px]">
                    <Link
                        to={""}
                        className="w-full h-full object-cover"
                    >
                        <img src="https://d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.8/d1a3f4spazzrp4.cloudfront.net/illustrations/app-store-apple-f1f919205b.svg" alt="playstore img" />
                    </Link>
                </div>
            </div>


            {/* wrapper copyright & terms */}

            <div className="md:flex md:h-fit md:justify-between">


                {/* copy right  */}

                <div className="flex gap-1 mb-24 md:mb-5">

                    <span className="text-white/80 text-sm">&copy;</span>

                    <p className="text-white/80 text-sm">
                        2025 Thefaizanmahtav Technologies Inc.
                    </p>

                </div>

                {/* terms */}

                <div className="flex gap-20 mb-6 md:mb-5">

                    <Link
                        to={''}
                        className="text-white/80 text-sm"
                    >
                        Privacy
                    </Link>

                    <Link
                        to={''}
                        className="text-white/80 text-sm"
                    >
                        Accessibility
                    </Link>

                    <Link
                        to={''}
                        className="text-white/80 text-sm"
                    >
                        Terms
                    </Link>

                </div>
            </div>


        </footer >
    )
}

export default Footer
