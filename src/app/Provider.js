"use client";
import { AuthProvider } from "@/components/authentication/authContext/authProvider";
import FontWrapper from "@/components/fonts/FontWrapper";
import Header from "@/components/header/Header";
import useAuth from "@/Hooks/useAuth";
import { SnackbarProvider } from "notistack";
import React from "react";

const Provider = ({ children }) => {
  const value = useAuth();

  return (
    <>
      <AuthProvider value={value}>
        <SnackbarProvider maxSnack={3}>
            <Header />
            {children}
        </SnackbarProvider>
      </AuthProvider>
    </>
  );
};

export default Provider;
