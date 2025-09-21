import { Route, Routes } from "react-router-dom"
import Home from "./pages/Guest user/Home"
import UserSignup from "./pages/UserSignup"
import CaptainSignup from "./pages/CaptainSignup"
import Login from "./pages/Login"
import Dashboard from "./pages/User/Dashboard"
import UberAccount from "./pages/User/UberAccount"
import ProtectedRoute from "./pages/Routes/ProtectedRoute"
import Ride from "./pages/User/Ride"
import PickAride from "./components/ChosingVehicleUser/PickAride"
import Product from "./components/ChosingVehicleUser/Product"
import ConfirmRide from "./components/ChosingVehicleUser/ConfirmRide"
import FinishRide from "./components/ChosingVehicleUser/FinishRide"


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
            <FinishRide/>
          </ProtectedRoute>
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