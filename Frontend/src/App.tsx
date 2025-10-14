import { Route, Routes } from "react-router-dom"
import Home from "./pages/Guest user/Home"
import UserSignup from "./pages/UserSignup"
import CaptainSignup from "./pages/CaptainSignup"
import Login from "./pages/Login"
import Dashboard from "./pages/User/Dashboard"
import UberAccount from "./pages/User/UberAccount"
import UberAccountCaptain from "./pages/Captain/UberAccountCaptain"
import ProtectedRoute from "./pages/Routes/ProtectedRoute"
import Ride from "./pages/User/Ride"
import PickAride from "./components/ChosingVehicleUser/PickAride"
import Product from "./components/ChosingVehicleUser/Product"
import ConfirmRide from "./components/ChosingVehicleUser/ConfirmRide"
import FinishRide from "./components/ChosingVehicleUser/FinishRide"
import ProtectedRouteCaptain from "./pages/Routes/ProtectedRouteCaptain"
import DashboardCaptain from "./pages/Captain/DashboardCaptain"
import DriverOnline from "./components/captain/DriverOnline"
import VerifyOtp from "./components/captain/VerifyOtp"
import PickingUpSaddam from "./components/captain/PickingUpSaddam"
import DropingOffSaddm from "./components/captain/DropingOffSaddm"
import Payment from "./components/captain/Payment"


function App() {
  return (


    <Routes>
      <Route path="/" element={<Home />} />  {/* Public route */}

      <Route
        path="/users/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/users/dashboard/uber-account"
        element={
          <ProtectedRoute>
            <UberAccount />
          </ProtectedRoute>
        }
      />

      <Route
        path="/users/dashboard/ride"
        element={
          <ProtectedRoute>
            <Ride />
          </ProtectedRoute>
        }
      />

      <Route
        path="/users/dashboard/pick"
        element={
          <ProtectedRoute>
            <PickAride />
          </ProtectedRoute>
        }
      />

      <Route
        path="/users/dashboard/product"
        element={
          <ProtectedRoute>
            <Product />
          </ProtectedRoute>
        }
      />

      <Route
        path="/users/dashboard/confirm"
        element={
          <ProtectedRoute>
            <ConfirmRide />
          </ProtectedRoute>
        }
      />
      <Route
        path="/users/dashboard/confirm/finishride"
        element={
          <ProtectedRoute>
            <FinishRide />
          </ProtectedRoute>
        }
      />


      {/* captain protected routes */}

      <Route
        path="/captains/dashboard"
        element={
          <ProtectedRouteCaptain>
            <DashboardCaptain />
          </ProtectedRouteCaptain>
        }
      />

      <Route
        path="/captains/dashboard/online"
        element={
          <ProtectedRouteCaptain>
            <DriverOnline />
          </ProtectedRouteCaptain>
        }
      />

      <Route
        path="/captains/dashboard/online/pickup-rider"
        element={
          <ProtectedRouteCaptain>
            <PickingUpSaddam />
          </ProtectedRouteCaptain>
        }
      />

      <Route
        path="/captains/dashboard/online/droping-saddam"
        element={
          <ProtectedRouteCaptain>
            <DropingOffSaddm />
          </ProtectedRouteCaptain>
        }
      />

      <Route
        path="/captains/dashboard/online/droping-saddam/payment"
        element={
          <ProtectedRouteCaptain>
            <Payment />
          </ProtectedRouteCaptain>
        }
      />

      <Route
        path="/captains/dashboard/pickup-rider/veriefy-OTP"
        element={
          <ProtectedRouteCaptain>
            <VerifyOtp />
          </ProtectedRouteCaptain>
        }
      />

      <Route
        path="/captains/dashboard/uber-account"
        element={
          <ProtectedRouteCaptain>
            <UberAccountCaptain />
          </ProtectedRouteCaptain>
        }
      />
      



      {/* Other public routes */}

      <Route path="/login" element={<Login />} />
      <Route path="/user-signup" element={<UserSignup />} />
      <Route path="/captain-signup" element={<CaptainSignup />} />

    </Routes >




  )
}

export default App