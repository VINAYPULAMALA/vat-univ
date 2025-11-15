import React from "react";
import { ArrowRight, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
import image1 from '../../assests/image1.png';

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const contactApplyNow = () => {
    navigate("/enquiry");
  };
  return (
    <section className="relative bg-gradient-to-r from-orange-600 to-orange-500 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div
        className="relative min-h-[600px] flex items-center"
        // style={{
        //   backgroundImage:
        //     "url(https://www.tboacademy.com/blog/wp-content/uploads/2024/01/Flinder-Street-Railway-Station.jpg)",
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        // }}
      >
        <div className="absolute inset-0"></div>
        <div className="relative max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Shape Your Future at VAT University
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100">
              Discover world-class education in the heart of regional Australia.
              Join our vibrant community of learners and innovators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={contactApplyNow}
                className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-50 transition-all duration-300 flex items-center justify-center group"
              >
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300 flex items-center justify-center">
                <Play className="mr-2 w-5 h-5" />
                Watch Our Story
              </button>
            </div>
          </div>

          <div>
            <img src={image1} alt="image"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
