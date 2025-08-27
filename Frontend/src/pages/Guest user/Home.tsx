import LoginSignup from "./LoginSignup"
import Navbar from "./Navbar"
import PicupAndDestination from "./PicupAndDestination"
import SuggestionsCard from "./SuggestionsCard"
import UberAppDownloadingOpts from "./UberAppDownloadingOpts"


function Home() {

    return (
        <div className="overflow-x-hidden">
            <Navbar />
            <PicupAndDestination />
            <SuggestionsCard />
            <LoginSignup />
            <UberAppDownloadingOpts />
        </div>
    )

}

export default Home