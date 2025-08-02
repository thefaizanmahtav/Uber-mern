import { Link, useNavigate } from "react-router-dom"
import uberLogo from "../images/Uber-White-Logo.wine.svg"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Controller, useForm } from "react-hook-form"
import { useMutation } from "@tanstack/react-query"
import { resgisterCaptain } from "@/API/apiCaptain"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"

function CaptainSignup() {

    const navigate = useNavigate()

    type formData = {

        fullName: {
            firstName: string,
            lastName: string
        },
        email: string,
        password: string,
        vehicle: {
            color: string,
            plate: string,
            capacity: number,
            vehicleType: string
        }
    }

    const { register, handleSubmit, formState: { errors }, control } = useForm<formData>()

    const {
        mutate: CaptainRegister,
        isPending,
        isError
    } = useMutation({
        mutationFn: resgisterCaptain,
        onSuccess: () => {
            navigate('/login', { replace: true })
        },
        onError: (err: any) => {
            console.log("Register captain :", err)
        }
    })


    const onSubmit = (data: formData) => {
        CaptainRegister(data)
    }

    return (
        <>
            <div className="min-h-screen overflow-x-hidden">

                <div className="p-3 lg:px-18 w-screen flex justify-between items-center bg-black ">
                    <div className="flex items-center justify-center">

                        <Link className="text-white text-xl flex justify-center" to="/">
                            <img className="h-13 pl-4 flex" src={uberLogo} alt="Uber Logo" />
                        </Link>

                    </div>
                </div>


                <div className="flex justify-center md:mt-8 items-center">

                    <Card className=" w-full max-w-4xl border-none shadow-none mx-auto px-4">
                        <CardHeader className="text-2xl font-semibold">
                            <CardTitle>What's your email, Captain?</CardTitle>
                        </CardHeader>

                        {isError && (
                            <p className="text-red-500 text-sm items-center text-center mt-1">Email is already in use by another user or captain</p>
                        )}

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <CardContent >


                                <div className="grid md:grid-cols-2 gap-4">

                                    <div className="flex flex-col gap-1">


                                        <label className="text-xl font-semibold gap-1" htmlFor="firstName">First Name</label>
                                        <input
                                            className="w-full p-3 bg-gray-200 md:mb-2 rounded-xl hover:border-black-xl"
                                            id="firstName"
                                            placeholder="First name"
                                            {...register("fullName.firstName", { required: "First name is required" })}

                                        />
                                        {errors.fullName?.firstName && (
                                            <p className="text-red-500 text-sm mt-1">{errors.fullName.firstName.message}</p>
                                        )}

                                    </div>

                                    <div className="flex flex-col gap-1">

                                        <label className="text-xl font-semibold gap-1" htmlFor="firstName">Last Name</label>

                                        <input
                                            className="w-full p-3 bg-gray-200 mb-2 rounded-xl hover:border-black-xl"
                                            id="lastName"
                                            placeholder="Last name"
                                            {...register("fullName.lastName")}

                                        />
                                    </div>

                                </div>



                                <div className="flex flex-col gap-1">

                                    <label className="text-xl font-semibold" htmlFor="email">Email</label>
                                    <input
                                        className="w-full p-3 bg-gray-200 mb-2 rounded-xl hover:border-black-xl"
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

                                </div>

                                {errors.email && (
                                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                                )}

                                <div className="grid md:grid-cols-2 md:gap-4">

                                    <div className="flex flex-col gap-1">
                                        <label className="text-xl font-semibold" htmlFor="color">Color</label>
                                        <input
                                            className="w-full p-3 bg-gray-200 mb-2 rounded-xl hover:border-black-xl"
                                            id="color"
                                            placeholder="Vehicle color"
                                            {...register("vehicle.color", {
                                                required: "Color is required",
                                            })}

                                        />

                                        {errors.vehicle?.color && (
                                            <p className="text-red-500 text-sm mt-1">{errors.vehicle.color.message}</p>
                                        )}
                                    </div>

                                    <div className="flex flex-col gap-1">


                                        <label className="text-xl font-semibold" htmlFor="plate">Plate</label>
                                        <input
                                            className="w-full p-3 bg-gray-200 mb-2 rounded-xl hover:border-black-xl"
                                            id="plate"
                                            placeholder="Vehicle number plate"
                                            {...register("vehicle.plate", {
                                                required: "plate is required",
                                            })}

                                        />

                                        {errors.vehicle?.plate && (
                                            <p className="text-red-500 text-sm mt-1">{errors.vehicle.plate.message}</p>
                                        )}

                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 md:gap-4">

                                    <div className="flex flex-col gap-1">


                                        <label className="text-xl font-semibold" htmlFor="capacity">Capacity</label>
                                        <input
                                            className="w-full p-3 bg-gray-200 mb-2 rounded-xl hover:border-black-xl"
                                            id="capacity"
                                            placeholder="Vehicle capacity"
                                            {...register("vehicle.capacity", {
                                                required: "Capacity is required",
                                            })}

                                        />

                                        {errors.vehicle?.capacity && (
                                            <p className="text-red-500 text-sm mt-1">{errors.vehicle.capacity.message}</p>
                                        )}

                                    </div>

                                    <div className="flex flex-col gap-1">


                                        <label className="text-xl font-semibold" htmlFor="vehicleType">Vehicle Type</label>


                                        <Controller
                                            name="vehicle.vehicleType"
                                            control={control}
                                            rules={{ required: "Vehicle type is required" }}
                                            render={({ field }) => (

                                                <Select onValueChange={field.onChange} value={field.value}>

                                                    <SelectTrigger  className="w-full p-6 text-md  bg-gray-200 rounded-xl border border-gray-300  focus:outline-none focus:ring-1 focus:border-black transition-all">
                                                        <SelectValue placeholder="Select a vehicle" />
                                                    </SelectTrigger>

                                                    <SelectContent className="bg-white rounded-lg shadow-lg border border-gray-200">
                                                        <SelectItem
                                                            className="px-4 py-2 text-base text-gray-700 hover:bg-gray-100 cursor-pointer transition-colors"
                                                            value="bike"
                                                        >
                                                            Bike
                                                        </SelectItem>
                                                        <SelectItem
                                                            className="px-4 py-2 text-base text-gray-700 hover:bg-gray-100 cursor-pointer transition-colors"
                                                            value="car"
                                                        >
                                                            Car
                                                        </SelectItem>
                                                        <SelectItem
                                                            className="px-4 py-2 text-base text-gray-700 hover:bg-gray-100 cursor-pointer transition-colors"
                                                            value="autoRickshaw"
                                                        >
                                                            Auto Rickshaw
                                                        </SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            )}
                                        />


                                        {errors.vehicle?.vehicleType && (
                                            <p className="text-red-500 text-sm mt-1">{errors.vehicle.vehicleType.message}</p>
                                        )}

                                    </div>

                                </div>


                                <label className="text-xl font-semibold" htmlFor="password">Password</label>
                                <input
                                    className="w-full p-3 bg-gray-200 mb-2 rounded-xl hover:border-black-xl"
                                    id="password"
                                    type="password"
                                    placeholder="***********"
                                    {...register("password", { required: "password is required" })}

                                />

                                {errors.password && (
                                    <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                                )}



                            </CardContent>
                            <CardFooter className="flex justify-center p-5 flex-col gap-3">
                                <Button
                                    disabled={isPending}
                                    type="submit"
                                    className="w-full text-xl text-white bg-black py-6">
                                    {isPending ? "Creating..." : "Create account"}
                                </Button>

                                <p className="text-md text-gray-600">
                                    Already have an account, Captain?{" "}
                                    <Link to="/login" className="text-black hover:underline hover:text-gray-700">
                                        Login
                                    </Link>
                                </p>

                            </CardFooter>
                        </form>

                    </Card>
                </div>
            </div >

        </>
    )
}

export default CaptainSignup