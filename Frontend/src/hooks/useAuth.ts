import { getUser } from "@/API/api";
import { useQuery } from "@tanstack/react-query";


interface User {
    _id: string;
    email: string;
    fullName: {
        firstName: string;
        lastName: string;
    };
}


const AUTH = "auth"

const useAuth = (opts = {}) => {
    const { data: user, ...rest } = useQuery<User>({
        queryKey: [AUTH],
        queryFn: getUser,
        staleTime: Infinity,
        ...opts
    });
    return {
        user,
        ...rest
    }
}

export default useAuth