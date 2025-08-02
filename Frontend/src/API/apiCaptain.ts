import API from "@/config/apiClient";

interface LoginData {
    email: string;
    password: string;
}

interface LoginResponse {
    token: string;
    user: {
        _id: string,
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
}

export const loginCaptain = (data: LoginData): Promise<LoginResponse> => API.post("/captains/login", data)


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

// export const getCaptain = (): Promise<Captain> => API.get("/captain/profile")


export const getCaptain = (): Promise<Captain> => API.get("/captains/profile");
