import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const location  =useLocation()
  const navigate = useNavigate()
  const from= location.state?.from?.pathname || "/"
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

      await axios
      .post("http://localhost:5001/user/signup", userInfo)
      .then((res)=>{
          console.log(res.data);
          if(res.data){
            toast.success("Signup Successfully");
            navigate(from,{replace:true});
          }
          localStorage.setItem("Users", JSON.stringify(res.data.user));

      })
      .catch((err)=>{
        if(err.response){
            console.log(err);
            toast.error("Error :"+ err.response.data.message);
        }
      });   
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-base-200">
      <div className="w-[500px] bg-base-100 p-6 rounded-lg shadow-lg relative">

        {/* CLOSE BUTTON */}
        <Link
          to="/"
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          ✕
        </Link>

        <h3 className="font-bold text-2xl mb-4">Signup</h3>

        {/* SIGNUP FORM */}
        <form onSubmit={handleSubmit(onSubmit)}>

          {/* Name */}
          <div className="mt-3">
            <label>Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-md"
              {...register("fullname", { required: true })}
            />
            {errors.fullname && (
              <span className="text-sm text-red-500">Name is required</span>
            )}
          </div>

          {/* Email */}
          <div className="mt-3">
            <label>Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-md"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-sm text-red-500">Email is required</span>
            )}
          </div>

          {/* Password */}
          <div className="mt-3">
            <label>Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-md"
              {...register("password", { required: true, minLength: 6 })}
            />
            {errors.password && (
              <span className="text-sm text-red-500">
                Minimum 6 characters
              </span>
            )}
          </div>

          {/* BUTTONS */}
          <div className="flex justify-between items-center mt-6">
            <button
              type="submit"
              className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700"
            >
              Signup
            </button>

            <span className="text-sm">
              Have an account?
              <button
                type="button"
                className="underline text-blue-500 ml-1"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Login
              </button>
            </span>
          </div>
        </form>
      </div>

      {/* LOGIN MODAL OUTSIDE FORM */}
      <Login />
    </div>
  );
}

export default Signup;
