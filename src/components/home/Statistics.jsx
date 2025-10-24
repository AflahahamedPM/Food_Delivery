"use client";
import React from "react";
import { motion } from "framer-motion";

const Statistics = ({ stat, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
    className="bg-white border border-slate-200 p-10 rounded-xl hover:shadow-lg transition-shadow duration-300"
  >
    <p className="text-5xl font-serif text-slate-900 mb-3">{stat?.value}</p>
    <p className="text-slate-600 font-light tracking-wide">{stat?.label}</p>
    {stat?.trend && (
      <p className="text-sm text-emerald-600 mt-2 font-light">{stat?.trend}</p>
    )}
    <div className="mt-4 w-12 h-1 bg-slate-900" />
  </motion.div>
);

export default Statistics;
