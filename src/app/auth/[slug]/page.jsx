"use client";
import LoginOrRegister from "@/components/authentication/LoginOrRegister";
import { useParams } from "next/navigation";
import React from "react";

const page = () => {
  const { slug } = useParams();

  return <LoginOrRegister path={slug} />;
};

export default page;
