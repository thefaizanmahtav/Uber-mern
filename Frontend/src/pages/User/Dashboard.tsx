import PicupAndDestination from "../../components/user/PicupAndDestination"
import BookingIntraction from "../../components/user/BookingIntraction"
import RideCards from "../../components/user/RideCards"
import Footer from "../Footer/Footer"
import Navbar from "../../components/user/Navbar"
import UserNavbar from "../../components/user/UserNavbar"


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