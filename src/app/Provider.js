"use client";
import { AuthProvider } from "@/components/authentication/authContext/authProvider";
import Header from "@/components/header/Header";
import useAuth from "@/Hooks/useAuth";
import { SnackbarProvider } from "notistack";
import React from "react";
import { Loader2 } from "lucide-react";
import Footer from "@/components/footer/Footer";

const Provider = ({ children }) => {
  const value = useAuth();
  if (value.isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="animate-spin text-black" size={50} />
      </div>
    );
  }

  return (
    <AuthProvider value={value}>
      <SnackbarProvider maxSnack={3}>
        <Header />
        {children}
        <Footer />
      </SnackbarProvider>
    </AuthProvider>
  );
};

export default Provider;
