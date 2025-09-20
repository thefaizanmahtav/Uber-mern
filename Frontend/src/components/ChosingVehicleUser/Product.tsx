import ChoseAride from "./ChoseAride";
import MapForm from "./MapForm";
import NavbarPickAride from "./NavbarPickAride";

function Product() {

    return (

        <div className="overflow-hidden">

            <div className="max-lg:hidden">
                <NavbarPickAride />
            </div>



            <div className="lg:relative lg:top-25 lg:px-5 xl:px-[65px] h-screen">

                {/* wrapper pickup button and map */}

                <div className="lg:flex lg:pb-10 lg:gap-2 justify-between">

                    {/* pickup from */}

                    <div className="max-xl:hidden lg:w-[360px] lg:h-fit lg:border-2 lg:border-gray-200 lg:p-4 lg:rounded-xl lg:shadow">

                        <h1 className="max-lg:hidden lg:text-[22px] font-semibold lg:pb-4">Get a ride</h1>

                        <div className="relative flex flex-col lg:col-span-1 w-full space-y-3 pb-4">
                            <MapForm />
                        </div>
                    </div>

                    <div className="lg:ml-8 items-center flex justify-start">
                        <ChoseAride />
                    </div>


                    {/* map */}

                    <div className="max-lg:hidden w-xl xl:w-md lg:h-[85vh] block rounded-lg lg:rounded-none overflow-hidden">
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

export default Product
