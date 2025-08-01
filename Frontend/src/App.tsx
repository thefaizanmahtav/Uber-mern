import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import UserSignup from "./pages/UserSignup"
import CaptainSignup from "./pages/CaptainSignup"
import Login from "./pages/Login"
import Dashboard from "./pages/User/Dashboard"
import UberAccount from "./pages/User/UberAccount"
import ProtectedRoute from "./pages/Routes/ProtectedRoute"


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

      {/* Other public routes */}

      <Route path="/login" element={<Login />} />
      <Route path="/user-signup" element={<UserSignup />} />
      <Route path="/captain-signup" element={<CaptainSignup />} />

    </Routes >




  )
}

export default App