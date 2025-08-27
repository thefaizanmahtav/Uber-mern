import PicupAndDestination from "./PicupAndDestination"
import BookingIntraction from "./BookingIntraction"
import RideCards from "./RideCards"
import Footer from "../Footer/Footer"
import Navbar from "./Navbar"
import UserNavbar from "./UserNavbar"


function Dashboard() {



    return (
        <div className="overflow-x-hidden">
            <Navbar />
            <UserNavbar />
            <PicupAndDestination />
            <BookingIntraction />
            <RideCards />
            <Footer />

        </div>
    )

}

export default Dashboard