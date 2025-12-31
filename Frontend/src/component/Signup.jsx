import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form"

function Signup() {
  const {
      register,
      handleSubmit,
      
      formState: { errors },
    } = useForm()
  
    const onSubmit = (data) => console.log(data)

  return (
    <div className="flex min-h-screen items-center justify-center bg-base-200">
      <div className="w-[500px] bg-base-100 p-6 rounded-lg shadow-lg relative">
        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
        {/* Close */}
        <Link
          to="/"
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          ✕
        </Link>
      
        <h3 className="font-bold text-2xl mb-4">Signup</h3>

        {/* Name */}
        <div className="mt-3 space-y-1">
          <span>Name</span>
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full px-3 py-2 border rounded-md outline-none"
            {...register("name", { required: true })}
          />
          <br/>
          {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
        </div>

        {/* Email */}
        <div className="mt-3 space-y-1">
          <span>Email</span>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 border rounded-md outline-none"
            {...register("email", { required: true })}
          />
          <br/>
          {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
        </div>

        {/* Password */}
        <div className="mt-3 space-y-1">
          <span>Password</span>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-3 py-2 border rounded-md outline-none"
            {...register("password", { required: true })}
          />
          <br/>
          {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
        </div>

        {/* Button */}
        <div className="flex justify-between items-center mt-6">
          <button className="bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 duration-200">
            Signup
          </button>
          <p>
            Have an account?
            <button className="underline text-blue-500"
             onClick={()=> document.getElementById("my_modal_3").showModal()}>
              Login
            </button>
            <Login />
          </p>
        </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
