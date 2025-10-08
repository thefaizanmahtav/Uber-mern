import API from "@/config/apiClient";

interface LoginData {
  email: string;
  password: string;
}

declare interface LoginResponse {
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
  role: string
}



export const LoginUserAndCaptain = async (data: LoginData): Promise<LoginResponse> => {
  const res = await API.post("/users/login", data);  
  return res.data
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


export const getUser = (): Promise<User> => API.get("/users/profile").then(res => res.data)

export const logoutUser = () => API.post("/users/logout")