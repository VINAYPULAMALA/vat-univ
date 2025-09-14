import React from 'react';
import { BookOpen,GraduationCap,Sparkles, Users, Award, Briefcase } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const Programs: React.FC = () => {
  const programs = [
    {
      icon: BookOpen,
      title: "Undergraduate Degrees",
      description: "Bachelor's programs across arts, sciences, business, and technology",
      image: "https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      icon: Award,
      title: "Postgraduate Studies",
      description: "Master's and PhD programs for advanced learning and research",
      image: "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      icon: Briefcase,
      title: "Professional Development",
      description: "Industry-focused courses and continuing education programs",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      icon: Users,
      title: "Online Learning",
      description: "Flexible study options with comprehensive online support",
      image: "https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    }
  ];

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
            <p className="text-xl text-gray-600 mb-4 font-medium">
              <GraduationCap className="inline-block w-6 h-6 text-orange-500 mr-2 -mt-1" />
              Shape Your Future with Our 
              <span className="relative px-2 mx-1 bg-gradient-to-r from-amber-100 to-orange-100">
                Industry-Leading
                <div className="absolute inset-0 bg-white/50 mix-blend-overlay animate-pulse"></div>
              </span> 
              Programs
            </p>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-orange-400 to-amber-300 rounded-full opacity-30 group-hover:opacity-70 transition-opacity duration-300"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  {programs.map((program, index) => {
    const Icon = program.icon;
    return (
      <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group h-full">
        {/* Keep existing card content */}
        <div 
          className="h-48 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${program.image})` }}
        >
          <div className="absolute inset-0 bg-orange-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Icon className="w-12 h-12 text-white" />
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">{program.title}</h3>
          <p className="text-gray-600 mb-4">{program.description}</p>
          <button className="text-orange-600 font-medium hover:text-orange-700 transition-colors">
            Learn More →
          </button>
        </div>
      </div>
    );
  })}
</div>
      </div>
    </section>
  );
};

export default Programs;