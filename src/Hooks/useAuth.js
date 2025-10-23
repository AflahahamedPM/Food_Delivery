"use client"
import React, { useEffect, useState } from "react";
import useAlert from "./useAlert";
import { useRouter } from "next/navigation";

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { publishNotification } = useAlert();
  const router = useRouter()

  const isLogin = () => {
    const user = localStorage.getItem("loggedInUserDetails");
    
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    isLogin();
  }, []);

  const logout = async () => {
    await localStorage.removeItem("loggedInUserDetails");
    publishNotification("Successfully logged out", "success");
    isLogin();
    router.push("/")
  };

  return {
    isLoggedIn,
    isLogin,
    logout,
  };
};

export default useAuth;
