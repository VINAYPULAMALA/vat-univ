import React from 'react';

const WelcomeSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img
              src="https://www.orange.edu.au/wp-content/uploads/2021/11/OC-What-we-offer-268x268.png"
              alt="Orange College Campus"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">
              WELCOME TO ORANGE COLLEGE: WHERE INNOVATION MEETS EDUCATION
            </h2>
            <p className="text-gray-600 text-lg">
              At Orange College, we're not just preparing students for tomorrow's careers—we're creating the leaders, innovators, and changemakers who will shape the future. Our vibrant campus represents a revolutionary approach to higher education, where cutting-edge technology meets human connection.
            </p>
            <p className="text-gray-600 text-lg">
              Step into a world where artificial intelligence powers personalized learning paths, where virtual reality transports students to ancient civilizations or molecular structures, and where industry partnerships create direct pathways from classroom to career.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;