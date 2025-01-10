"use client";
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Link from "next/link";

interface LoginFormInputs {
  email: string;
  password: string;
}

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/access/login",
        data
      );
      console.log("Login successful:", response.data);
      // Handle successful login (e.g., redirect to dashboard)
    } catch (error) {
      console.error("Login failed:", error);
      // Handle login failure (e.g., show error message)
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 space-y-6 w-1/2 m-auto p-10 bg-white rounded-md shadow-md">
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <label
              htmlFor="email-address"
              className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              {...register("email", { required: "Email is required" })}
              type="email"
              autoComplete="email"
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="sr-only">
              Password
            </label>
            <input
              id="password"
              {...register("password", { required: "Password is required" })}
              type="password"
              autoComplete="current-password"
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label
              htmlFor="remember-me"
              className="ml-2 block text-sm text-gray-900">
              Remember me
            </label>
          </div>

          <div className="text-sm">
            <a
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500">
              Forgot your password?
            </a>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Sign in
          </button>
        </div>
        <div className="text-center mt-4">
          <Link href="/signup">
            <div className="font-medium text-indigo-600 hover:text-indigo-500">
              Don&apos;t have an account? Sign up
            </div>
          </Link>
        </div>
      </form>
    </div>
  );
}
