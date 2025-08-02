import { getCaptain } from "@/API/apiCaptain";
import { useQuery } from "@tanstack/react-query"

interface Captain {
    _id: string;
    email: string;
    fullName: {
        firstName: string;
        lastName: string;
    };
    vehicle: {
        color: string,
        plate: string,
        capacity: number,
        vehicleType: string
    }
}

const CAPTAIN_AUTH = "captain_auth"

const useAuthCaptain = (opts = {}) => {

    const { data: captain, ...rest } = useQuery<Captain>({
        queryKey: [CAPTAIN_AUTH],
        queryFn: getCaptain,
        staleTime: Infinity,
        ...opts
    })
    return {
        captain,
        ...rest
    }
}

export default useAuthCaptain