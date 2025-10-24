
"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { usePathname, useRouter } from "next/navigation";
import useServices from "@/app/useServices";
import { useAuthenticateData } from "../authentication/authContext/authProvider";
import { Menu, X } from "lucide-react";

const Header = () => {
  const router = useRouter();
  const { navbarData } = useServices();
  const pathName = usePathname();
  const hideHeaderRoutes = ["/auth/login", "/auth/register"];
  const shouldHideHeader = hideHeaderRoutes.includes(pathName);
  const { isLoggedIn, logout } = useAuthenticateData();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className="relative z-50 w-11/12 mx-auto flex justify-between items-center py-3">
  
      {!shouldHideHeader && (
        <button
          className="sm:hidden flex items-center"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={28} />
        </button>
      )}

      {!shouldHideHeader && (
        <h1
          className="sm:text-3xl max-sm:text-xl font-bold cursor-pointer"
          onClick={() => router.push("/")}
        >
          Foodlivery
        </h1>
      )}

      
      {!shouldHideHeader && (
        <div className="hidden sm:flex gap-6 font-bold text-xl">
          {navbarData?.map((data) => (
            <Link key={data?.uId} href={data?.url}>
              {data?.title}
            </Link>
          ))}
        </div>
      )}

      
      {!shouldHideHeader && (
        <div className="mt-2">
          <Button
            className="cursor-pointer"
            onClick={
              isLoggedIn ? () => logout() : () => router.push("/auth/login")
            }
          >
            {isLoggedIn ? "Log out" : "Login"}
          </Button>
        </div>
      )}

      
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 z-40 transition-opacity"></div>
      )}

      <div
        ref={menuRef}
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">Navigate</h2>
          <X
            size={26}
            className="cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>

        <nav className="flex flex-col gap-4 p-4 font-semibold text-lg">
          {navbarData?.map((data) => (
            <Link
              key={data?.uId}
              href={data?.url}
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-600 transition-colors"
            >
              {data?.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
