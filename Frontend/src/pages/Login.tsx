import { Link, useNavigate } from "react-router-dom"
import uberLogo from "../images/Uber-White-Logo.wine.svg"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useForm, type SubmitHandler } from "react-hook-form"
import { useMutation } from "@tanstack/react-query"
import { LoginUserAndCaptain } from "@/API/api"



function Login() {

    type loginForm = {
        email: string,
        password: string
    }

    const { register, handleSubmit, formState: { errors } } = useForm<loginForm>()

    const navigate = useNavigate()

    const { mutate: login, isError, isPending } = useMutation({
        mutationFn: (data: any) => LoginUserAndCaptain(data),

        onSuccess: (data) => {
            // Navigate based on role
            const redirect = data.role === "user" ? "/users/dashboard" : "/captains/dashboard"
            navigate(redirect, { replace: true });
        },
        onError: (err: any) => {
            console.log("Login failed:", err.message || err);
        }
    });


    const onSubmit: SubmitHandler<loginForm> = (data) => {
        login(data);
    };


    return (
        <>

            <div className="p-3 lg:px-18 w-screen flex justify-between items-center bg-black">
                <div className="flex items-center justify-center">

                    <Link className="text-white text-xl flex justify-center" to={"/"}>
                        <img className="h-13 pl-4 flex" src={uberLogo} alt="Uber Logo" />
                    </Link>

                </div>
            </div>

            <div className="flex justify-center md:pt-20 items-center">

                <Card className="w-full md:max-w-md pt-25 md:pt-0 max-h-screen border-none shadow-none">
                    <CardHeader className="text-2xl font-semibold">
                        <CardTitle>Sign in to your account</CardTitle>
                    </CardHeader>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <CardContent >
                            <div className="flex flex-col gap-1">

                                {isError &&
                                    <p className="text-red-500 text-sm mt-1 text-center">Invalid email or password</p>
                                }

                                <label className="text-xl font-semibold" htmlFor="email">Email</label>
                                <input
                                    className="w-full p-4 bg-gray-200 mb-2 rounded-xl hover:border-black-xl hover:border-solid"
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

                                <div className="flex justify-end">
                                    <Link className="text-black hover:text-gray-600 hover:underline" to="/forget-password">
                                        Forget your password?
                                    </Link>
                                </div>

                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-center p-5 flex-col gap-3">
                            <Button
                                type="submit"
                                disabled={isPending}
                                className="w-full text-xl text-white bg-black py-6 hover:bg-gray-700">
                                {isPending ? "Loading..." : "Continue"}
                            </Button>

                            <p className="text-md text-gray-600">
                                Don’t have an account?{" "}
                                <Link to="/user-signup" className="text-black hover:underline hover:text-gray-700">
                                    Sign up
                                </Link>
                            </p>

                        </CardFooter>
                    </form>

                </Card>
            </div>

        </>
    )
}

export default Login
