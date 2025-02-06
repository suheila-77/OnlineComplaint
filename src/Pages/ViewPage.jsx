import React, { useState, useEffect } from "react";
import SideNav from "../Components/SideNav";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

const ViewPage = () => {
  const [complaints, setComplaints] = useState([]);

  // Fetch complaints
  const getAllComplaints = () => {
    axios
      .get("http://localhost:5000/complaint/management")
      .then((response) => {
        setComplaints(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllComplaints();
  }, []);

  // Delete complaint
  const deleteComplaint = (id) => {
    axios
      .delete(`http://localhost:5000/complaint/delete/${id}`)
      .then(() => {
        toast.success("Complaint deleted successfully");
        getAllComplaints();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <SideNav />
      <div className="ml-[21%] flex-1 p-10">
        <h2 className="text-4xl font-extrabold mb-8 text-gray-800 text-center">
          📝 Complaints Management
        </h2>

        {complaints.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complaints.map((data, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  {data.email}
                </h3>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  {data.Title}
                </h3>
                <p className="text-gray-500 mb-4">{data.Description}</p>
                <div className="flex justify-end">
                  <button
                    onClick={() => deleteComplaint(data._id)}
                    className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600 transition-all duration-300"
                  >
                    Delete
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center h-64">
            <p className="text-gray-600 text-lg font-medium">
              No complaints available.
            </p>
          </div>
        )}
      </div>
      <Toaster />
    </div>
  );
};

export default ViewPage;
