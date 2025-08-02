import { Navigate } from "react-router-dom";
import useAuth from "@/hooks/useAuth"; 
import type { ReactNode } from "react";

interface ProtectedRouteProps {
    children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const { user, isLoading } = useAuth();

    if (isLoading) return <p>Loading...</p>;

    return user ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
