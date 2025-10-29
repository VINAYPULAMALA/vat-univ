import React from "react";
import {
  BookOpen,
  GraduationCap,
  Sparkles,
  Users,
  Award,
  Briefcase,
} from "lucide-react";
import { Carousel } from "./Silder"; // your carousel component
import Childern_4 from "../../assests/Childern_4.png";
import Childern_3 from "../../assests/Childern_3.png";
import Childern_5 from "../../assests/Childern_5.png";
import Childern_6 from "../../assests/Childern_6.png";
import Graduate from "../../assests/Graduate.png";
import Hospitality from "../../assests/Hospitality.png";
import Carpentry from "../../assests/Carpentry_3.png";
const Programs: React.FC = () => {
  const programs = [
    {
      icon: BookOpen,
      title: "CHC30121 – Certificate III in Early Childhood",
      description:
        "Bachelor's programs across arts, sciences, business, and technology",
      image: Childern_4,
    },
    {
      icon: Award,
      title: "CHC50121 – Diploma of Early Childhood Education and Care",
      description:
        "Master's and PhD programs for advanced learning and research",
      image: Childern_3,
    },
    {
      icon: Briefcase,
      title: "SIT30821 – Certificate III in Commercial Cookery",
      description: "Industry-focused courses and continuing education programs",
      image: Childern_5,
    },
    {
      icon: Users,
      title: "SIT40521 – Certificate IV in Kitchen Management",
      description: "Flexible study options with comprehensive online support",
      image: Childern_6,
    },
    {
      icon: Users,
      title: "SIT50422 – Diploma of Hospitality Management",
      description: "Flexible study options with comprehensive online support",
      image: Hospitality,
    },
    {
      icon: Users,
      title: "CPC30220 – Certificate III in Carpentry",
      description: "Flexible study options with comprehensive online support",
      image: Carpentry,
    },
    {
      icon: Users,
      title: "BSB80120 - Graduate Diploma of Management",
      description: "Flexible study options with comprehensive online support",
      image: Graduate,
    },
    
  ];

  const carouselItems = programs.map((program, index) => {
    const Icon = program.icon;
    return (
      <div
        key={index}
        className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group h-full"
      >
        <div
          className="h-48 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${program.image})` }}
        >
          <div className="absolute inset-0 bg-purple-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Icon className="w-12 h-12 text-white" />
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            {program.title}
          </h3>
          <p className="text-gray-600 mb-4">{program.description}</p>
          <button className="text-purple-600 font-medium hover:text-purple-700 transition-colors">
            Learn More →
          </button>
        </div>
      </div>
    );
  });

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative group">
          <div className="flex justify-center items-center gap-4 mb-6">
            <Sparkles className="w-8 h-8 text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:-rotate-12" />
            <h2 className="text-5xl font-bold bg-gradient-to-r from-orange-400 via-amber-400 to-orange-600 bg-clip-text text-transparent relative inline-block">
              Transformative Learning Paths
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400/80 to-amber-200/80 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            </h2>
            <Sparkles className="w-8 h-8 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:rotate-12" />
          </div>

          <div className="max-w-2xl mx-auto relative">
            <div className="text-xl text-gray-600 mb-4 font-medium">
              <GraduationCap className="inline-block w-6 h-6 text-orange-500 mr-2 -mt-1" />
              Shape Your Future with Our
              <span className="relative px-2 mx-1 bg-gradient-to-r from-amber-100 to-orange-100">
                Industry-Leading
                <div className="absolute inset-0 bg-white/50 mix-blend-overlay animate-pulse"></div>
              </span>
              Programs
            </div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-orange-400 to-amber-300 rounded-full opacity-30 group-hover:opacity-70 transition-opacity duration-300"></div>
          </div>
        </div>

       <Carousel items={carouselItems} slidesToShow={4} slidesToScroll={4} />

      </div>
    </section>
  );
};

export default Programs;
