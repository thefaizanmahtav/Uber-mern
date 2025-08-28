import Footer from "../Footer/Footer"
import LoginSignup from "../../components/guestUser/LoginSignup"
import Navbar from "../../components/guestUser/Navbar"
import PicupAndDestination from "../../components/guestUser/PicupAndDestination"
import SeepriceButton from "../../components/guestUser/SeepriceButton"
import SuggestionsCard from "../../components/guestUser/SuggestionsCard"
import UberAppDownloadingOpts from "../../components/guestUser/UberAppDownloadingOpts"


function Home() {

    return (
        <div className="overflow-x-hidden">
            <Navbar />
            <PicupAndDestination />
            <SuggestionsCard />
            <LoginSignup />
            <UberAppDownloadingOpts />
            <Footer />
            <SeepriceButton />
        </div>
    )

}

export default Home