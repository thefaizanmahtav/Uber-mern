import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import uberLogo from '../images/Uber-White-Logo.wine.svg'
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Link, useNavigate } from "react-router-dom"
import { useMutation } from "@tanstack/react-query"
import { userRegister } from "@/API/api"



function UserSignup() {

    const navigate = useNavigate()

    type formData = {
        fullName: {
            firstName: string,
            lastName: string,
        },
        email: string
        password: string
    }

    const { register, handleSubmit, formState: { errors } } = useForm<formData>()

    const {
        mutate: UserRegister,
        isPending,
        isError
    } = useMutation({
        mutationFn: userRegister,
        onSuccess: () => {
            navigate("/login", { replace: true })
        },
        onError: (err: any) => {
            console.log("User Register :", err)
        }

    })

    const onSubmit = (data: formData) => {
        UserRegister(data)
    }


    return (
        <>

            <div className="p-3 lg:px-18 w-screen flex justify-between items-center bg-black">
                <div className="flex items-center justify-center">

                    <Link className="text-white text-xl flex justify-center" to="/home">
                        <img className="h-13 pl-4 flex" src={uberLogo} alt="Uber Logo" />
                    </Link>

                </div>
            </div>


            <div className="flex justify-center md:pt-20 items-center">

                <Card className="w-full md:max-w-md   max-h-screen border-none shadow-none">
                    <CardHeader className="text-2xl font-semibold">
                        <CardTitle>What's your email?</CardTitle>
                    </CardHeader>

                    {isError && (
                        <p className="text-red-500 text-sm items-center text-center mt-1">Email is already in use by another user or captain</p>
                    )}

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <CardContent >
                            <div className="flex flex-col gap-1">

                                <label className="text-xl font-semibold" htmlFor="firstName">First Name</label>
                                <input
                                    className="w-full p-4 bg-gray-200 mb-2 rounded-xl hover:border-black-xl"
                                    id="firstName"
                                    placeholder="first name"
                                    {...register("fullName.firstName", { required: "First name is required" })}

                                />
                                {errors.fullName?.firstName && (
                                    <p className="text-red-500 text-sm mt-1">{errors.fullName.firstName.message}</p>
                                )}

                                <label className="text-xl font-semibold" htmlFor="lastName">Last Name</label>
                                <input
                                    className="w-full p-4 bg-gray-200 mb-2 rounded-xl hover:border-black-xl"
                                    id="lastName"
                                    placeholder="last name"
                                    {...register("fullName.lastName")}

                                />

                                <label className="text-xl font-semibold" htmlFor="email">Email</label>
                                <input
                                    className="w-full p-4 bg-gray-200 mb-2 rounded-xl hover:border-black-xl"
                                    id="email"
                                    type="email"
                                    placeholder="example@gmail.com"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: "Please enter a valid email address",
                                        },
                                    })}

                                />

                                {errors.email && (
                                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                                )}

                                <label className="text-xl font-semibold" htmlFor="password">Password</label>
                                <input
                                    className="w-full p-4 bg-gray-200 mb-2 rounded-xl hover:border-black-xl"
                                    id="password"
                                    type="password"
                                    placeholder="***********"
                                    {...register("password", { required: "password is required" })}

                                />

                                {errors.password && (
                                    <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                                )}

                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-center p-5 flex-col gap-3">
                            <Button
                                disabled={isPending}
                                type="submit"
                                className="w-full text-xl text-white bg-black py-6">
                                {isPending ? "Creating..." : "Create account"}
                            </Button>

                            <p className="text-md text-gray-600">
                                Already have an account?{" "}
                                <Link to="/login" className="text-black hover:underline hover:text-gray-700">
                                    Login
                                </Link>
                            </p>

                        </CardFooter>
                    </form>

                </Card>
            </div>

        </>
    )
}

export default UserSignup
