import useAuth from "@/hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

function AppContainer() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg">Loading...</p>
      </div>
    );
  }

  return user ? (
    <Outlet />
  ) : (
    <Navigate
      to="/"
      replace
      state={{ redirectUrl: window.location.pathname }}
    />
  );
}

export default AppContainer;
