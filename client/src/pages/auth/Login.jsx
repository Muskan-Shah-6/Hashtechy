import React from 'react'
import Navheader from './Navheader'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors }, } = useForm();

    const onSumbit = (data) => {
        console.log("Form submitted :", data)
        navigate('/categories')
    }
    return (
        <>
            <Navheader />
            <section className='min-h-screen bg-gray-100 flex items-center rounded-md justify-center'>
                <form onSubmit={handleSubmit(onSumbit)} className='bg-[#3F3F3F] text-white rounded-xl shadow-lg p-8 w-full max-w-sm'>
                    <h2 className="text-center text-2xl font-semibold mb-6 font-poppin">Login</h2>
                    {/* Email address with validation */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm mb-1 font-poppin">Email</label>
                        <input type="email" className="w-full bg-transparent border-b border-gray-400  py-1" id='email' {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                message: "Invalid Email",
                            },
                        })}
                        />
                        {errors.email && (
                            <p className='text-xs text-[#B08A26] mt-1'>{errors.email.message}</p>
                        )}
                    </div>
                    {/* Password with validation*/}
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm mb-1 font-poppin">Password</label>
                        <input type="password" className="w-full bg-transparent border-b border-gray-400  py-1" id='password'
                            {...register("password", {
                                required: "Password is required",
                                minLenght: {
                                    value: 6,
                                    message: "Password must be at least 6 charaacters"
                                }
                            })} />
                        {errors.password && (
                            <p className="text-xs text-[#B08A26] mt-1">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    {/* Submit button */}
                    <button to='' className="w-full bg-[#55B4C9] text-white font-semibold py-2  hover:bg-[#558893] transition text-poppin">Go</button>
                </form>
            </section>
        </>
    )
}

export default Login
