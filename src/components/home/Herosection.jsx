"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import Statistics from "./Statistics";
import { fullStar } from "../Image";
import Image from "next/image";

const Herosection = () => {
  const statsData = [
    { label: "Restaurants", value: "500+" },
    { label: "Dishes Delivered", value: "10,000+" },
    { label: "Happy Customers", value: "8,000+" },
  ];
  return (
    <div className="relative  h-auto w-screen overflow-hidden bg-linear-to-b from-slate-50 to-white">
      
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #1e293b 1px, transparent 0)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-serif text-slate-900 leading-[1.1]"
            >
              Fresh Food Delivered to Your Doorstep
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-slate-600 leading-relaxed font-light"
            >
              Experience the finest cuisines from top restaurants. Fast
              delivery, fresh ingredients, exceptional taste.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-3 pt-6 border-t border-slate-200"
            >
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-xl">
                    <Image src={fullStar} width={20} height={20} alt="starImage"/>
                  </span>
                ))}
              </div>
              <span className="text-2xl font-serif text-slate-900">5.0</span>
              <span className="text-slate-500 font-light">
                from 80+ reviews
              </span>
            </motion.div>
          </motion.div>

          <div className="max-lg:hidden relative h-[600px]">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-96 bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100"
            >
              <div className="absolute inset-0 bg-linear-to-br from-slate-50 to-white" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                <div className="w-32 h-32 mb-6 rounded-full bg-slate-100 flex items-center justify-center">
                  <div className="text-7xl">🍜</div>
                </div>
                <p className="text-2xl font-serif text-slate-900 mb-2">
                  Delicious Food
                </p>
                <p className="text-sm text-slate-500 text-center font-light">
                  Crafted with excellence
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50, y: -50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                type: "spring",
                stiffness: 100,
              }}
              className="absolute top-0 left-0 w-48 h-52 bg-white rounded-xl shadow-lg overflow-hidden border border-slate-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="absolute inset-0 bg-linear-to-br from-emerald-50 to-white" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                <div className="w-20 h-20 mb-4 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <div className="text-5xl">🥗</div>
                </div>
                <p className="text-base font-serif text-slate-900">
                  Healthy Options
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50, y: -50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                type: "spring",
                stiffness: 100,
              }}
              className="absolute top-0 right-0 w-44 h-48 bg-white rounded-xl shadow-lg overflow-hidden border border-slate-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="absolute inset-0 bg-linear-to-br from-amber-50 to-white" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                <div className="w-16 h-16 mb-3 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <div className="text-4xl">🍕</div>
                </div>
                <p className="text-sm font-serif text-slate-900 text-center">
                  Fast Delivery
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50, y: 50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.7,
                type: "spring",
                stiffness: 100,
              }}
              className="absolute bottom-0 right-0 w-52 h-56 bg-white rounded-xl shadow-lg overflow-hidden border border-slate-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="absolute inset-0 bg-linear-to-br from-rose-50 to-white" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                <div className="w-20 h-20 mb-4 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <div className="text-5xl">🍰</div>
                </div>
                <p className="text-base font-serif text-slate-900">
                  Sweet Treats
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-slate-200 rounded-full -z-10"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="absolute -top-8 -right-8 w-40 h-40 border-2 border-slate-200 rounded-full -z-10"
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="grid md:grid-cols-3 gap-8 lg:mt-32 mt-8"
        >
          {statsData?.map((stat, index) => (
            <Statistics key={stat?.label} stat={stat} index={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Herosection;