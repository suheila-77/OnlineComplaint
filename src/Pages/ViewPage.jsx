import React, { useState, useEffect } from 'react';
import SideNav from '../Components/SideNav';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';

const ViewPage = () => {
  const [complaints, setComplaints] = useState([]);

  const getAllComplaints = () => {
    axios
      .get('http://localhost:5000/complaint/management')
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

  const deleteComplaint = (id) => {
    axios
      .delete(`http://localhost:5000/complaint/delete/${id}`)
      .then(() => {
        toast.success('Complaint has been deleted successfully');
        getAllComplaints();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <SideNav />
      <div className="ml-[21%] flex-1 p-10">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 ">Complaints Management</h2>
        {complaints.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complaints.map((data) => (
              <div
                
                className="bg-teal-500 w-[500px] rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-3xl font-semibold text-white mb-4">{data.Title}</h3>
                <p className="mb-6  text-2xl text-white">{data.Description}</p>
                <div className="flex justify-between items-center">
                  
                  <button
                    onClick={() => deleteComplaint(data._id)}
                    className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600 transition-colors duration-300"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center h-64">
            <p className="text-gray-600 text-lg font-medium">No complaints available.</p>
          </div>
        )}
      </div>
      <Toaster />
    </div>
  );
};

export default ViewPage;
