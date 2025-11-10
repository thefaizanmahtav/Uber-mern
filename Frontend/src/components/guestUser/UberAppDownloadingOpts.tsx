import { Link } from "react-router-dom"
import riderLogo from "../../images/Rider-App-Icon_iOS.svg"
import driverLogo from "../../images/Driver-App-Icon_iOS.svg"


function UberAppDownloadingOpts() {

    return (
        <div className="max-w-full overflow-x-hidden md:px-10 p-10 xl:p-15 bg-gray-100 xl:pb-[60px] xl:px-[148px] px-6">

            <div className="mb-8 w-fit">
                <h1 className="md:w-full text-[30px]  xl:items-center h-fit xl:w-lg md:text-[38px] font-bold">It’s easier in the apps</h1>
            </div>

            {/* link 1 */}

            <div className="xl:flex xl:gap-10 space-y-11 xl:space-y-0">


                <div className="group flex justify-between w-full h-[125px] xl:h-[220px] bg-white px-4 xl:px-7 tems-center">
                    <Link
                        className="flex w-fit items-center gap-2 xl:gap-4 text-[27px] font-semibold xl:font-bold"
                        to={""}
                    >
                        <div className="w-fit">
                            <img className="xl:hidden h-24 w-24 object-cover" src={riderLogo} alt="uber img" />

                            <img className="max-xl:hidden xl:h-42 xl:w-42 object-cover" src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=2304/height=2304/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy9hNTk5ODZhZC0wZDlmLTQzOTYtODUzOS0zODliY2U5N2Y1NzkucG5n" alt="uber img" />
                        </div>
                        <div className="xl:flex xl:flex-col">
                            Download the Uber app
                            <span className="max-xl:hidden text-xl font-normal">Scan to download</span>
                        </div>

                    </Link>
                    <span className="flex w-fit justify-center items-center pt-2 transition-all duration-800 group-hover:translate-x-3">
                        <svg
                            aria-hidden="true" fill="currentColor" focusable="false" height="18" width="18" viewBox="0 0 36 36" data-testid="icon-arrow"><path clip-rule="evenodd" d="M18.2354 2H24.2711L36 18L24.2711 34H18.2354L28.1237 20.56H0V15.44H28.1237L18.2354 2Z" fill="currentColor" fill-rule="evenodd"></path>
                        </svg>
                    </span>
                </div>


                {/* link 2 */}

               <div className="group flex justify-between w-full h-[125px] xl:h-[220px] bg-white px-4 xl:px-7 tems-center">
                    <Link
                        className="flex w-fit items-center gap-2 xl:gap-4 text-[27px] font-semibold xl:font-bold"
                        to={""}
                    >
                        <div className="w-fit">
                            <img className="xl:hidden h-24 w-24 object-cover" src={driverLogo} alt="uber img" />

                            <img className="max-xl:hidden xl:h-42 xl:w-42 object-cover" src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=2304/height=2304/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy9jODQ2NmEyNy1kMzBjLTUxNGEtOTZmMi1lMDlmMThmYWY4MDYucG5n" alt="uber img" />
                        </div>
                        <div className="xl:flex xl:flex-col">
                            Download the Driver app
                            <span className="max-xl:hidden text-xl font-normal">Scan to download</span>
                        </div>

                    </Link>
                    <span className="flex w-fit justify-center items-center pt-2 transition-all duration-800 group-hover:translate-x-3">
                        <svg
                            aria-hidden="true" fill="currentColor" focusable="false" height="18" width="18" viewBox="0 0 36 36" data-testid="icon-arrow"><path clip-rule="evenodd" d="M18.2354 2H24.2711L36 18L24.2711 34H18.2354L28.1237 20.56H0V15.44H28.1237L18.2354 2Z" fill="currentColor" fill-rule="evenodd"></path>
                        </svg>
                    </span>
                </div>

            </div>

        </div>
    )
}

export default UberAppDownloadingOpts
