import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const HomePage = () => {
  return (

      
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center">

<Header />
     
      

      {/* Main Content */}
      <main className="flex-1 flex flex-col justify-center items-center text-center px-4 py-16">
        <h2 className="text-5xl font-extrabold mb-4">Welcome to Our Complaint System</h2>
        <p className="text-lg mb-8">We value your feedback. Register your complaint easily and get fast responses.</p>
        
        <Link 
          to="/register"
          className="bg-teal-500 hover:bg-teal-400 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300"
        >
          Register Complaint
        </Link>
      </main>

      {/* Feature Section */}
      <section className="bg-gray-800 py-16 w-full">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="bg-gray-700 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Easy to Use</h3>
            <p className="text-gray-400">A user-friendly platform that makes submitting complaints a breeze.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Quick Response</h3>
            <p className="text-gray-400">We ensure that every complaint receives a prompt and appropriate response.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
            <p className="text-gray-400">Our support team is available around the clock to assist you.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Secure & Private</h3>
            <p className="text-gray-400">Your data is protected with top-notch security measures.</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full bg-teal-700 py-4 text-center text-gray-200">
        <p>&copy; 2024 Online Complaint System. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
