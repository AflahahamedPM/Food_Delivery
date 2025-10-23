"use client";
import React, { useState } from "react";
import { loginImage } from "../Image";
import Image from "next/image";
import { Input } from "../ui/input";
import { Label } from "@radix-ui/react-label";
import { Eye, EyeOff } from "lucide-react";
import useServices from "@/app/auth/[slug]/useServices";
import { Button } from "../ui/button";
import Link from "next/link";

const LoginOrRegister = ({ path }) => {
  const {
    showPassword,
    handleShowPassword,
    handleLogin,
    loginDetails,
    setLoginDetails,
    registerDetails,
    setRegisterDetails,
    handleRegister,
  } = useServices();

  const handleInputChange = (value, fieldName) => {
    setData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const showData = path === "login" ? loginDetails : registerDetails;
  const setData = path === "login" ? setLoginDetails : setRegisterDetails;

  return (
    <div className="flex gap-12 min-h-screen items-center sm:w-8/12 max-sm:w-10/12 mx-auto">
      <div className="max-sm:hidden relative w-[500px] h-[500px] mt-6">
        <Image
          src={loginImage}
          alt="Login illustration"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="sm:w-92 ">
        <p className="text-3xl mb-10">
          {path === "login" ? `Login` : `Register`} to Foodlivery
        </p>
        {path !== "login" && (
          <>
            <Label className="font-bold">Full Name</Label>
            <Input
              className="my-2 h-10 flex-1 focus-visible:ring-0 focus-visible:ring-offset-0"
              placeholder="John Doe"
              value={showData?.fullName}
              onChange={(e) => handleInputChange(e.target.value, "fullName")}
              required
            />
          </>
        )}

        <Label className="font-bold">Email</Label>
        <Input
          className="my-2 h-10 flex-1 focus-visible:ring-0 focus-visible:ring-offset-0"
          placeholder="Example@gmail.com"
          value={showData?.email}
          onChange={(e) => handleInputChange(e.target.value, "email")}
          required
        />

        <Label className="font-bold">Password</Label>
        <div className="flex items-center border rounded-md px-2 mt-2">
          <Input
            type={showPassword ? "text" : "password"}
            className="h-10 flex-1 border-none focus-visible:ring-0 focus-visible:ring-offset-0"
            value={showData?.password}
            onChange={(e) => handleInputChange(e.target.value, "password")}
            required
          />
          <button
            type="button"
            onClick={handleShowPassword}
            className="text-gray-500 hover:text-black"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        <Button
          onClick={path === "login" ? handleLogin : handleRegister}
          className="w-full my-5 cursor-pointer"
        >
          {path === "login" ? "Login" : "Register"}
        </Button>
        {path === "login" ? (
          <p>
            Don't have an account?{" "}
            <span className="font-bold ">
              <Link href={"/auth/register"}>Register</Link>
            </span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span className="font-bold ">
              <Link href={"/auth/login"}>Login</Link>
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default LoginOrRegister;
