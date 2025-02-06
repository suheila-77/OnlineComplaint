import React from "react";
import SideNav from "../Components/SideNav";
import { motion } from "framer-motion";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <SideNav />
      <div className="ml-[21%] flex flex-col items-center pt-20">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-10">
          📊 Dashboard Overview
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Total Complaints", count: "10+", color: "from-teal-400 to-green-500" },
            { title: "Resolved Complaints", count: "20+", color: "from-purple-400 to-indigo-500" },
            { title: "Pending Complaints", count: "30+", color: "from-pink-400 to-red-500" },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 100 }}
              className={`bg-gradient-to-r ${item.color} w-[320px] h-[220px] rounded-2xl shadow-lg text-center flex flex-col justify-center items-center transform transition-all duration-300`}
            >
              <h1 className="text-white text-xl font-bold mb-2">{item.title}</h1>
              <p className="text-white text-3xl font-extrabold">{item.count}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
