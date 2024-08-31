import React from 'react';

const About = () => {
  return (
    <div className=" mt-10 bg-gray-100 text-gray-800 min-h-screen">
    
      <section className="bg-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold mb-4">About Us</h1>
          <p className="text-lg mb-8">
            Learn more about our mission, vision, and the team behind the Online Complaint System.
          </p>
        </div>
      </section>

     
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our mission is to provide a simple and effective platform for users to voice their concerns, ensuring that every complaint is heard and addressed with the utmost care and professionalism. We believe in transparency, accountability, and the power of feedback to drive positive change.
          </p>
        </div>
      </section>

     
      <section className="py-16 bg-teal-600 mb-20 text-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6">Our History</h2>
          <p className="text-lg text-white mb-8">
            Established in 2024, the Online Complaint System was created out of a need for a reliable, user-friendly platform where individuals could report issues and concerns in a structured manner. Over the years, we have grown and evolved, continuously improving our services to meet the needs of our users.
          </p>
        </div>
      </section>


      {/* Footer Section */}
      <footer className="bg-teal-700 text-white py-8 text-center">
        <p>&copy; 2024 Online Complaint System. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default About;
