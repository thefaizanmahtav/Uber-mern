import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";
import useAuthCaptain from "@/hooks/useAuthCaptain";

interface ProtectedRouteProps {
    children: ReactNode;
}

const ProtectedRouteCaptain = ({ children }: ProtectedRouteProps) => {
    const { captain, isLoading } = useAuthCaptain();

    if (isLoading) return <p>Loading...</p>;

    return captain ? children : <Navigate to="/" replace />;
};

export default ProtectedRouteCaptain;
