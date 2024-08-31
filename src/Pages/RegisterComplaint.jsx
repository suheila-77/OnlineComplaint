import React, { useState } from 'react';
import axios from 'axios';
import {toast, Toaster} from 'react-hot-toast'

const RegisterComplaint = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');


  const handleRegsiterComplaint = (event) => {
    event.preventDefault()
    axios.post("http://localhost:5000/complaint", {

      "Title": title,
      "Description": description,
     


    }).then(() => {
      toast.success("complaint has been saved registered successfully")
    

    }).catch((error) => console.log(error)
    )
  }
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-teal-500">Register Complaint</h2>

        <input type="text" placeholder="Title" value={title} onChange={(event) => setTitle(event.target.value)}
         className="border p-3 mb-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"/>

        <textarea placeholder="Description" value={description}onChange={(event) => setDescription(event.target.value)}
          className="border p-3 mb-6 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 h-32"></textarea>

        <button onClick={handleRegsiterComplaint} className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-lg w-full transition duration-300">
          Submit
        </button>
      </div>
      <Toaster/>
    </div>
  );
};

export default RegisterComplaint;
