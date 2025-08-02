import Home from "@/pages/Home"
import { Outlet } from "react-router-dom"


function Layout() {

    return (
        <>
            <Home />
            <Outlet />
        </>
    )
}

export default Layout
