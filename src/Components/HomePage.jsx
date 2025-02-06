import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-600 via-teal-800 to-gray-900 text-white flex flex-col items-center">

      <Header />

      {/* Main Content */}
      <main className="flex-1 flex flex-col justify-center items-center text-center px-4 py-16">
        <h2 className="text-6xl font-extrabold text-white mb-6 animate__animated animate__fadeIn">Welcome to Our Complaint System</h2>
        <p className="text-lg mb-10 max-w-xl mx-auto text-gray-300 animate__animated animate__fadeIn animate__delay-1s">
          We value your feedback. Register your complaint easily and get fast responses.
        </p>
        
        <Link 
          to="/reg"
          className="bg-teal-500 hover:bg-teal-400 text-white font-bold py-3 px-8 rounded-full shadow-xl transition duration-300 transform hover:scale-105 hover:shadow-2xl"
        >
          Register Complaint
        </Link>
      </main>

      {/* Feature Section */}
      <section className="py-16 w-full bg-gradient-to-l from-teal-400 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 text-center">
          <div className="bg-gray-700 p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-bold mb-4 text-teal-300">Easy to Use</h3>
            <p className="text-gray-200">A user-friendly platform that makes submitting complaints a breeze.</p>
          </div>
          <div className="bg-gray-700 p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-bold mb-4 text-teal-300">Quick Response</h3>
            <p className="text-gray-200">We ensure that every complaint receives a prompt and appropriate response.</p>
          </div>
          <div className="bg-gray-700 p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-bold mb-4 text-teal-300">24/7 Support</h3>
            <p className="text-gray-200">Our support team is available around the clock to assist you.</p>
          </div>
          <div className="bg-gray-700 p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-bold mb-4 text-teal-300">Secure & Private</h3>
            <p className="text-gray-200">Your data is protected with top-notch security measures.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 w-full bg-gradient-to-r from-teal-500 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-teal-100 mb-8">What Our Users Say</h2>
          <div className="flex justify-center gap-8">
            <div className="bg-gray-700 p-8 rounded-lg shadow-lg max-w-sm transform hover:scale-105 transition duration-300">
              <p className="text-lg text-gray-200 mb-4">"I registered my complaint and got a resolution within hours. The process was so smooth and easy!"</p>
              <p className="font-bold text-teal-300">Sarah M.</p>
            </div>
            <div className="bg-gray-700 p-8 rounded-lg shadow-lg max-w-sm transform hover:scale-105 transition duration-300">
              <p className="text-lg text-gray-200 mb-4">"The support team is amazing. They were always ready to help whenever I needed assistance."</p>
              <p className="font-bold text-teal-300">John D.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full bg-teal-700 py-6 text-center text-gray-200">
        <p className="text-sm">© 2024 Online Complaint System. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
