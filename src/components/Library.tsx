import React from 'react';
import { BookOpen, Clock, Users, Wifi, Coffee, Search } from 'lucide-react';

const Library: React.FC = () => {
  const services = [
    {
      icon: BookOpen,
      title: "Digital Collections",
      description: "Access to over 500,000 digital books, journals, and research papers"
    },
    {
      icon: Search,
      title: "Research Support",
      description: "Expert librarians available for research assistance and guidance"
    },
    {
      icon: Users,
      title: "Study Spaces",
      description: "Quiet study areas, group rooms, and collaborative learning spaces"
    },
    {
      icon: Wifi,
      title: "Technology Hub",
      description: "High-speed internet, computer labs, and printing services"
    },
    {
      icon: Coffee,
      title: "Café & Lounge",
      description: "Relaxing spaces with refreshments for study breaks"
    },
    {
      icon: Clock,
      title: "Extended Hours",
      description: "Open 24/7 during exam periods with secure access"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">University Library</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your gateway to knowledge with modern facilities and comprehensive resources
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Modern Learning Environment
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Our state-of-the-art library combines traditional resources with cutting-edge technology 
              to create the perfect learning environment. With over 1 million books, extensive digital 
              collections, and flexible study spaces, we support every aspect of your academic journey.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="text-2xl font-bold text-orange-600">1M+</div>
                <div className="text-sm text-gray-600">Books & Resources</div>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="text-2xl font-bold text-orange-600">500+</div>
                <div className="text-sm text-gray-600">Study Seats</div>
              </div>
            </div>
            <button className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
              Virtual Tour
            </button>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="University Library"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                    <Icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Library;