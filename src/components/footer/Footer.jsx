"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Footer = () => {
  const pathName = usePathname();
  const hideFooterRoutes = ["/auth/login", "/auth/register"];
  const shouldHideFooter = hideFooterRoutes.includes(pathName);
  const router = useRouter();

  return (
    <>
      {!shouldHideFooter && (
        <footer className="bg-gray-50 pl-6 sm:pl-12 py-10 mt-10 w-full overflow-x-hidden">
          <div className="text-center mb-10">
            <p className="text-xl sm:text-2xl font-semibold italic text-gray-700 max-w-2xl mx-auto">
              “Good food delivered fast, happiness delivered faster.”
            </p>
          </div>

          <div className="flex flex-wrap justify-center sm:justify-between gap-10 text-gray-800">
            <div className="flex flex-col gap-2 items-center sm:items-start min-w-[180px]">
              <p className="font-bold text-2xl sm:text-3xl text-gray-900">
                Foodlivery
              </p>
              <p className="text-sm font-light">© 2025 Foodlivery Limited</p>
            </div>

            <div className="flex flex-col gap-1 items-center sm:items-start min-w-[150px]">
              <h1 className="font-bold text-xl sm:text-2xl mb-2">Company</h1>
              <h6 className="text-lg hover:text-gray-600 cursor-pointer">
                About Us
              </h6>
              <h6 className="text-lg hover:text-gray-600 cursor-pointer">
                Team
              </h6>
            </div>

            <div className="flex flex-col gap-1 items-center sm:items-start min-w-[150px]">
              <h1 className="font-bold text-xl sm:text-2xl mb-2">
                Quick Links
              </h1>
              <h6
                className="text-lg hover:text-gray-600 cursor-pointer"
                onClick={() => router.push("/restaurents")}
              >
                Restaurent
              </h6>
              <h6
                className="text-lg hover:text-gray-600 cursor-pointer"
                onClick={() => router.push("/cart")}
              >
                Cart
              </h6>
            </div>

            <div className="flex flex-col gap-1 items-center sm:items-start min-w-[180px] text-center sm:text-left">
              <h1 className="font-bold text-xl sm:text-2xl mb-2">
                Get In Touch
              </h1>
              <h6 className="text-lg hover:text-gray-600 cursor-pointer">
                Mavoor Road, Kozhikode, Kerala, 673001
              </h6>
              <h6 className="text-lg hover:text-gray-600 cursor-pointer">
                aflahahamed777@gmail.com
              </h6>
              <h6 className="text-lg hover:text-gray-600 cursor-pointer">
                8089735806
              </h6>
            </div>

            <div className="flex flex-col gap-1 items-center sm:items-start min-w-[150px]">
              <h1 className="font-bold text-xl sm:text-2xl mb-2">
                Available in:
              </h1>
              <h6 className="text-lg hover:text-gray-600 cursor-pointer">
                Kerala
              </h6>
              <h6 className="text-lg hover:text-gray-600 cursor-pointer">
                Bangalore
              </h6>
              <h6 className="text-lg hover:text-gray-600 cursor-pointer">
                Gurgaon
              </h6>
              <h6 className="text-lg hover:text-gray-600 cursor-pointer">
                Delhi
              </h6>
            </div>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
