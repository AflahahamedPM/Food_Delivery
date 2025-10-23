import React, { useEffect, useState } from "react";
import useAlert from "./useAlert";

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { publishNotification } = useAlert();

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
    isLogin();
    publishNotification("Successfully logged in", "success");
  };

  return {
    isLoggedIn,
    isLogin,
    logout,
  };
};

export default useAuth;
