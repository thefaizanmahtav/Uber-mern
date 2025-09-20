import { useNavigate } from "react-router-dom";
import MapForm from "./MapForm";
import NavbarPickAride from "./NavbarPickAride";

function PickAride() {

    const navigate = useNavigate()

    return (

        <div className="overflow-hidden">

            <NavbarPickAride />

            <div className="relative top-16 py-1 lg:top-25 md:px-10 xl:px-[65px] px-4.5 h-screen">

                {/* wrapper pickup button and map */}

                <div className="lg:flex lg:pb-10 gap-10">

                    {/* pickup button */}

                    <div className="lg:w-[500px] lg:h-fit lg:border-2 lg:border-gray-200 lg:p-4 lg:rounded-xl lg:shadow">

                        <h1 className="max-lg:hidden lg:text-[22px] font-semibold lg:pb-4">Get a ride</h1>

                        <div className="flex flex-col w-full space-y-3 pb-4">

                            <MapForm autoFocusPickup navBtn={() => (navigate("/users/dashboard/product"))} />

                        </div>
                    </div>



                    {/* map */}

                    <div className="max-lg:hidden w-full lg:h-[85vh] block rounded-lg lg:rounded-none overflow-hidden">
                        <img
                            src="https://www.groovypost.com/wp-content/uploads/2020/07/Google-Photos-map-search-map-view-zoom-out.png"
                            alt="Google map view demo"
                            className="h-[440px] w-full lg:h-full object-fill"
                        />
                    </div>

                </div>

            </div>

        </div>

    )
}

export default PickAride
