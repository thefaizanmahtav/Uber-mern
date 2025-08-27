import { Link } from "react-router-dom"


function UberAppDownloadingOpts() {

    return (
        <div className="min-w-screen md:px-10 p-5 bg-gray-200 xl:pb-[60px] xl:px-[148px] px-6">

            <div className="">
                <h1 className="md:w-full text-[30px] my-4 xl:items-center h-fit xl:w-lg md:text-[38px] font-bold">It’s easier in the apps</h1>
            </div>


            <Link
                className="bg-white w-full h-full py-3.5 px-7"
                to={""}
            >
                <img src={''} alt="uber img" />

            </Link>


        </div>
    )
}

export default UberAppDownloadingOpts
