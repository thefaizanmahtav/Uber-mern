import API from "@/config/apiClient";


interface registerData {

    email: string,
    fullName: {
        firstName: string,
        lastName: string
    },
    vehicle: {
        color: string,
        plate: string,
        capacity: number,
        vehicleType: string
    }

}

export const resgisterCaptain = (data: registerData) => API.post("/captains/register", data)

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

export const getCaptain = (): Promise<Captain> => API.get("/captains/profile").then(res => res.data.captain);

export const logoutcaptain = () => API.post("/captains/logout")