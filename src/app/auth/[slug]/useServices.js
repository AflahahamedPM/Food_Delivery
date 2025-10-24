import { useAuthenticateData } from "@/components/authentication/authContext/authProvider";
import useAlert from "@/Hooks/useAlert";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const useServices = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  const [registerDetails, setRegisterDetails] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const { publishNotification } = useAlert();
  const router = useRouter();
  const { isLogin } = useAuthenticateData();

  const handleShowPassword = () => {
    setShowPassword(true);
    setTimeout(() => {
      setShowPassword(false);
    }, 1000);
  };

  const handleLogin = async () => {
    if (!loginDetails?.email || !loginDetails?.password) {
      publishNotification("Pleas fill all the required fields", "error");
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (loginDetails?.email && !emailPattern.test(loginDetails?.email)) {
      publishNotification("Please enter a valid email", "error");
      return;
    }

    const existingDatas =
      JSON.parse(localStorage.getItem("registeredUsers")) || [];

    const userExists = existingDatas?.find(
      (data) => data?.email === loginDetails?.email
    );

    if (!userExists) {
      publishNotification("Wrong email, user not found", "error");
      return;
    }

    const isPasswordCorrect = userExists?.password === loginDetails?.password;
    if (!isPasswordCorrect) {
      publishNotification("Incorrect password", "error");
      return;
    }

    publishNotification("Successfully logged in", "success");
    await localStorage.setItem(
      "loggedInUserDetails",
      JSON.stringify(userExists)
    );
    await isLogin();
    router.push("/");
  };

  const handleRegister = () => {
    if (
      !registerDetails?.email ||
      !registerDetails?.password ||
      !registerDetails?.fullName
    ) {
      publishNotification("Please fill all the required fields", "error");
      return;
    }

    const name = registerDetails?.fullName || "";

    const letterCount = name.replace(/[^a-zA-Z]/g, "").length;

    if (letterCount < 3) {
      publishNotification("Name should contain at least 3 alphabets", "error");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (registerDetails?.email && !emailPattern.test(registerDetails?.email)) {
      publishNotification("Please enter a valid email", "error");
      return;
    }

    const existingDatas =
      JSON.parse(localStorage.getItem("registeredUsers")) || [];

    if (existingDatas?.some((data) => data?.email === registerDetails?.email)) {
      publishNotification(
        "Email Already Exists, try to login or use another email",
        "error"
      );
      return;
    }

    const updatedUsers = [...existingDatas, registerDetails];

    localStorage.setItem("registeredUsers", JSON.stringify(updatedUsers));

    const allCartDatas = JSON.parse(localStorage.getItem("allCartDatas")) || [];

    const updatedCartDatas = [
      ...allCartDatas,
      { email: registerDetails?.email, cart: [] },
    ];
    localStorage.setItem("allCartDatas", JSON.stringify(updatedCartDatas));

    publishNotification("Registration successful!", "success");
    router.push("/auth/login");
  };

  return {
    showPassword,
    handleShowPassword,
    handleLogin,
    loginDetails,
    setLoginDetails,
    registerDetails,
    setRegisterDetails,
    handleRegister,
  };
};

export default useServices;
