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
        vehicle?: {
            color: string,
            plate: string,
            capacity: number,
            vehicleType: string
        }
    }
}

export const LoginUserAndCaptain = async (data: LoginData): Promise<LoginResponse> => {
    try {
        const res = await API.post("/users/login", data);
        return res.data;
    } catch (userErr) {
        try {
            const res = await API.post("/captain/login", data);
            return res.data;
        } catch (captainErr) {
            throw new Error("Invalid credentials for both user and captain");
        }
    }
};


interface registerData {
    fullName: {
        firstName: string,
        lastName: string
    },
    email: string,
    password: string,

}


export const userRegister = (data: registerData) => API.post("users/register", data)


interface User {
    _id: string;
    email: string;
    fullName: {
        firstName: string;
        lastName: string;
    };
}


export const getUser = (): Promise<User> => API.get("/users/profile")

export const logoutUser = () => API.post("/users/logout")