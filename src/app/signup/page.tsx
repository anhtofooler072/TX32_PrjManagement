"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z, ZodSchema } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

interface FormData {
  username: string;
  email: string;
  password: string;
  confirm_password: string;
  date_of_birth: Date; // Changed to Date type
}
const schema: ZodSchema<FormData> = z
  .object({
    username: z.string().trim().nonempty("Username is required"),
    email: z
      .string()
      .email("Invalid email format")
      .nonempty("Email is required"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .nonempty("Password is required"),
    confirm_password: z.string().nonempty("Confirm password is required"),
    date_of_birth: z
      .date()
      .refine(
        (date) => date <= new Date(),
        "Date of Birth must be in the past"
      ), // Changed to z.date()
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords must match",
    path: ["confirm_password"],
  });

const SignUpPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/access/register",
        data
      );
      console.log("Registration successful:", response.data);
      // Handle successful registration (e.g., show success message)
    } catch (error) {
      console.error("Registration failed:", error);

      // Handle registration errors (e.g., display error messages)
    }
  };

  return (
    <div className="flex justify-center items-center p-20 bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700">
              Username:
            </label>
            <input
              type="text"
              id="username"
              {...register("username")} // Register the input with react-hook-form
              className={`w-full px-3 py-2 border rounded ${
                errors.username ? "border-red-500" : ""
              }`}
            />
            {errors.username && (
              <span className="text-red-500">{errors.username.message}</span>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700">
              Email:
            </label>
            <input
              id="email"
              {...register("email")}
              className={`w-full px-3 py-2 border rounded ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700">
              Password:
            </label>
            <input
              type="password"
              {...register("password")}
              className={`w-full px-3 py-2 border rounded ${
                errors.password ? "border-red-500" : ""
              }`}
            />
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="confirm_password"
              className="block text-gray-700">
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirm_password"
              {...register("confirm_password")}
              className={`w-full px-3 py-2 border rounded ${
                errors.confirm_password ? "border-red-500" : ""
              }`}
            />
            {errors.confirm_password && (
              <span className="text-red-500">
                {errors.confirm_password.message}
              </span>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="date_of_birth"
              className="block text-gray-700">
              Date of Birth:
            </label>
            <input
              type="date"
              id="date_of_birth"
              {...register("date_of_birth", { valueAsDate: true })}
              className={`w-full px-3 py-2 border rounded ${
                errors.date_of_birth ? "border-red-500" : ""
              }`}
            />
            {errors.date_of_birth && (
              <span className="text-red-500">
                {errors.date_of_birth.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
